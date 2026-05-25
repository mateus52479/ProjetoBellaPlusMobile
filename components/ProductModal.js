import React from "react";
import {Modal,View,Text,Image,TouchableOpacity,StyleSheet,ScrollView,} from "react-native";

export default function ProductModal({product,visible,onClose,}) {

  if (!product) return null;
  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView style={styles.container}>
        <Image
          source={product.image}style={styles.image}/>

        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.size}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.price}>{product.favorite ? "⭐ Favorito" : "☆ Não Favorito"}</Text>
      {product.comments.map((comment, index) => (<Text key={index}>
    • {comment}</Text>))}



        <TouchableOpacity style={styles.closeButton}onPress={onClose}>
          <Text style={styles.closeText}>Fechar</Text>
        </TouchableOpacity>

      </ScrollView>

    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },

  price: {
    fontSize: 20,
    marginTop: 10,
    color: "green",
  },

  closeButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
    alignItems: "center",
  },

  closeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});