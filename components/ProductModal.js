import React from "react";
import {Modal,View,Text,Image,TouchableOpacity,StyleSheet,ScrollView} from "react-native";


export default function ProductModal({product,visible,onClose}) {

if(!product) return null;

return (
<Modal visible={visible} animationType="slide">

<ScrollView style={styles.container}>

  <Image source={product.image}style={styles.image}/>
  <Text style={styles.name}> {product.name}</Text>
  <Text style={styles.size}>{product.size}</Text>
  <Text style={styles.price}>{product.price}</Text>
  <Text style={styles.favorite}>{product.favorite ? "⭐ Favorito" : "☆ Não Favorito"}</Text>

    <View style={styles.comments}>
      {product.comments.map((comment,index)=>(<Text key={index} style={styles.comment}>• {comment}</Text>))}
    </View>

    <TouchableOpacity style={styles.closeButton}onPress={onClose}>
    <Text style={styles.closeText}>Fechar</Text>
  </TouchableOpacity>

</ScrollView>
</Modal>
);
}

const styles=StyleSheet.create({


container:{
flex:1,
backgroundColor:"#fff7fa",
padding:20,
},

image:{
width:"100%",
height:430,
borderRadius:25,
},


name:{
fontSize:28,
fontWeight:"bold",
marginTop:20,
color:"#8b3151",
},


size:{
fontSize:18,
color:"#e58aaa",
marginTop:10,
},


price:{
fontSize:24,
fontWeight:"bold",
color:"#8b3151",
marginTop:10,
},


favorite:{
fontSize:18,
marginTop:15,
color:"#555",
},


comments:{
marginTop:15,
},


comment:{
fontSize:16,
color:"#555",
marginTop:5,
},


closeButton:{
backgroundColor:"#e58aaa",
padding:16,
borderRadius:30,
marginTop:40,
alignItems:"center",
},


closeText:{
color:"#fff",
fontSize:16,
fontWeight:"bold",
},


});