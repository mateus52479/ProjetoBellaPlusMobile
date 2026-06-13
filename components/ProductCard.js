import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => onPress(product)}>

      <Image source={product.image} style={styles.image}/>

      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>

    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({

  card:{
    flex:1,
    backgroundColor:"#fff",
    margin:8,
    borderRadius:18,
    padding:8,

    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:3
    },
    shadowOpacity:0.15,
    shadowRadius:5,
    elevation:5,
  },


  image:{
    width:"100%",
    height:180,
    borderRadius:15,
  },


  info:{
    padding:8,
  },


  name:{
    fontSize:16,
    fontWeight:"bold",
    color:"#8b3151",
  },


  price:{
    marginTop:5,
    fontSize:16,
    fontWeight:"bold",
    color:"#8b3151",
  },


});