import React, { useState } from "react";
import {View,FlatList,StyleSheet,} from "react-native";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

import { products } from "../data/products";

export default function Catalog() {

  // Guarda produto clicado
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (

    <View style={styles.container}>

      {/* LISTA DOS PRODUTOS */}
      <FlatList data={products} numColumns={2} keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <ProductCard
            product={item}

            // Quando clicar:
            onPress={setSelectedProduct}
          />

        )}
      />

      {/* MODAL */}
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
    backgroundColor: "#fff",
    paddingTop: 50,
  },

});