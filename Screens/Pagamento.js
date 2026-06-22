import React, { useState, useEffect, useMemo } from "react";
import {View,StyleSheet,Text,Alert,TouchableOpacity,ActivityIndicator,} from "react-native";
import { WebView } from "react-native-webview";
import { useProducts } from "../context/ProductContext";

const FUNCTIONS_URL = "https://us-central1-bella-plus-mulherao.cloudfunctions.net";

async function callFunction(name, data) {
  const response = await fetch(`${FUNCTIONS_URL}/${name}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (result.error) {
    throw new Error(result.error.message || "Erro desconhecido");
  }
  return result;
}

function parsePrice(preco) {
  if (!preco) return 0;
  if (typeof preco === "number") return preco;
  const cleaned = preco
    .replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".")
    .trim();
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatMoney(value) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

export default function Pagamento({ navigation }) {
  const { cart, clearCart } = useProducts();

  const [checkoutUrl, setCheckoutUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentResult, setPaymentResult] = useState(null);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + parsePrice(item.preco), 0);
  }, [cart]);

  const description = useMemo(() => {
    return cart.map((item) => item.nome || "Produto").join(", ");
  }, [cart]);

  useEffect(() => {
    if (cart.length === 0) {
      Alert.alert("Carrinho vazio", "Adicione produtos ao carrinho antes de pagar", [
        { text: "OK", onPress: () => navigation.navigate("Catalog") },
      ]);
      return;
    }
    createPreference();
  }, []);

  async function createPreference() {
    try {
      const result = await callFunction("createPreference", {
        amount: total,
        description: description || "Compra Bella Plus",
        payerInfo: { name: "Cliente", email: "cliente@email.com" },
      });
      setCheckoutUrl(result.initPoint);
    } catch (error) {
      Alert.alert("Erro", error.message || "Erro ao iniciar pagamento", [
        { text: "Voltar", onPress: () => navigation.goBack() },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleFinish() {
    clearCart();
    setPaymentResult(null);
    navigation.navigate("Catalog");
  }

  if (paymentResult) {
    const status = paymentResult.status;
    return (
      <View style={styles.resultContainer}>
        <Text style={[styles.resultIcon, status === "approved" ? styles.iconSuccess : styles.iconOther]}>
          {status === "approved" ? "\u2713" : "\u2717"}
        </Text>
        <Text style={styles.resultTitle}>
          {status === "approved"
            ? "Pagamento Aprovado!"
            : status === "pending"
            ? "Pagamento Pendente"
            : "Pagamento Recusado"}
        </Text>
        <Text style={styles.resultStatus}>{paymentResult.statusDetail}</Text>
        <Text style={styles.resultAmount}>{formatMoney(paymentResult.transactionAmount)}</Text>
        <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
          <Text style={styles.finishButtonText}>Voltar ao Catálogo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (checkoutUrl) {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.headerBack}>Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mercado Pago</Text>
          <View style={{ width: 60 }} />
        </View>
        <WebView
          source={{ uri: checkoutUrl }}
          style={{ flex: 1 }}
          onNavigationStateChange={(navState) => {
            const url = navState.url || "";
            if (url.includes("checkout-result.html")) {
              const params = url.includes("?")
                ? new URLSearchParams(url.split("?")[1])
                : new URLSearchParams("");
              const mpStatus = params.get("status") || "unknown";
              const paymentId = params.get("payment_id") || null;
              if (mpStatus === "approved") {
                setCheckoutUrl(null);
                setPaymentResult({
                  status: "approved",
                  statusDetail: "Pagamento aprovado",
                  transactionAmount: total,
                  paymentId,
                });
              } else if (mpStatus === "rejected" || mpStatus === "failure") {
                setCheckoutUrl(null);
                Alert.alert(
                  "Pagamento recusado",
                  "Tente novamente com outra forma de pagamento.",
                  [{ text: "OK", onPress: () => navigation.goBack() }]
                );
              } else {
                setCheckoutUrl(null);
                setPaymentResult({
                  status: "pending",
                  statusDetail: "Aguardando confirmação",
                  transactionAmount: total,
                  paymentId,
                });
              }
            }
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#8b3151" />
      <Text style={styles.loadingText}>Preparando pagamento...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eadde1" },
  loadingText: { marginTop: 16, fontSize: 16, color: "#8b3151" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#8b3151", paddingHorizontal: 16, paddingVertical: 12, paddingTop: 48 },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  headerBack: { fontSize: 16, color: "#fff", fontWeight: "bold" },
  resultContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eadde1", padding: 24 },
  resultIcon: { fontSize: 64, marginBottom: 16 },
  iconSuccess: { color: "#4CAF50" },
  iconOther: { color: "#f44336" },
  resultTitle: { fontSize: 24, fontWeight: "bold", color: "#8b3151", textAlign: "center", marginBottom: 8 },
  resultStatus: { fontSize: 16, color: "#666", marginBottom: 8, textAlign: "center" },
  resultAmount: { fontSize: 28, fontWeight: "bold", color: "#e58aaa", marginBottom: 32 },
  finishButton: { backgroundColor: "#8b3151", padding: 16, borderRadius: 30, width: "100%", alignItems: "center" },
  finishButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
