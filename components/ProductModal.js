import React from "react";
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useProducts } from "../context/ProductContext";

export default function ProductModal({ product, visible, onClose }) {

  if (!product) return null;

  const { isFavorite, addFavorite, removeFavorite, isInCart, addToCart, removeFromCart } = useProducts();

  const imageSource = product.imagem
    ? { uri: product.imagem }
    : product.image;

  const nome = product.nome || product.name;
  const tamanho = product.tamanho || product.size;
  const preco = product.price
    ? product.price
    : `R$ ${Number(product.valor).toFixed(2).replace(".", ",")}`;

  const descricao = product.descricao || null;
  const productId = product.id;
  const favorited = isFavorite(productId);
  const inCart = isInCart(productId);

  function toggleFavorite() {
    if (favorited) {
      removeFavorite(productId);
    } else {
      addFavorite(product);
    }
  }

  function toggleCart() {
    if (inCart) {
      removeFromCart(productId);
    } else {
      addToCart(product);
    }
  }

  return (
    <Modal visible={visible} animationType="slide">

      <ScrollView style={styles.container}>

        <Image source={imageSource} style={styles.image} />
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.size}>{tamanho}</Text>
        <Text style={styles.price}>{preco}</Text>

        {descricao && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descrição</Text>
            <Text style={styles.description}>{descricao}</Text>
          </View>
        )}

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.actionButton, favorited && styles.actionButtonActive]}
            onPress={toggleFavorite}
          >
            <Text style={styles.actionButtonText}>
              {favorited ? "Favoritado" : "Favoritar"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, inCart && styles.actionButtonActive]}
            onPress={toggleCart}
          >
            <Text style={styles.actionButtonText}>
              {inCart ? "No Carrinho" : "Carrinho"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>Sair</Text>
        </TouchableOpacity>

      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff7fa",
    padding: 20,
  },

  image: {
    width: "100%",
    height: 430,
    borderRadius: 25,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    color: "#8b3151",
  },

  size: {
    fontSize: 18,
    color: "#e58aaa",
    marginTop: 10,
  },

  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8b3151",
    marginTop: 10,
  },

  section: {
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8b3151",
    marginBottom: 6,
  },

  description: {
    fontSize: 16,
    color: "#555",
    fontStyle: "italic",
    lineHeight: 22,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    gap: 12,
  },

  actionButton: {
    flex: 1,
    backgroundColor: "#8b3151",
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  actionButtonActive: {
    backgroundColor: "#e58aaa",
  },

  actionButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },

  closeButton: {
    backgroundColor: "#e58aaa",
    padding: 16,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },

  closeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

});
