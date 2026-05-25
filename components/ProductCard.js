import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(product)}>
      <Image
        source={product.image}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 170,
    margin: 5,
    borderRadius: 10,
  },
});