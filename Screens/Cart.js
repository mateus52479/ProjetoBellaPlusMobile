import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useProducts } from "../context/ProductContext";
import ProductModal from "../components/ProductModal";

export default function Cart({ navigation }) {
  const { cart } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  function finalizarCompra() {
    navigation.navigate("Pagamento");
  }

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Carrinho vazio</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={() => setSelectedProduct(item)}>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.nome}</Text>
                  <Text style={styles.itemPrice}>{item.preco}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.finalizarButton} onPress={finalizarCompra}>
            <Text style={styles.finalizarText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </>
      )}

      <ProductModal
        product={selectedProduct}
        visible={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7fa",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#8b3151",
    fontStyle: "italic",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8b3151",
  },
  itemPrice: {
    fontSize: 14,
    color: "#e58aaa",
    marginTop: 4,
  },
  finalizarButton: {
    backgroundColor: "#8b3151",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 20,
  },
  finalizarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
