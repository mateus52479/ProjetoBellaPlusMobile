import React from "react";
import {  View,  Text,  StyleSheet,  TouchableOpacity, Alert} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function Profile({ navigation }) {

  function logout() {
    Alert.alert(
      "Sair da conta",
      "Deseja realmente sair?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sair",
          onPress: () => {
            // colocar lógica do Firebase Auth aqui
            console.log("Usuário deslogado");
          }
        }
      ]
    );
  }

  const options = [
    {
      title: "Minhas compras",
      subtitle: "Veja seus pedidos e histórico",
      action: () => navigation.navigate("Purchases")
    },

    {
      title: "Alterar senha",
      subtitle: "Atualize sua senha de acesso",
      action: () => navigation.navigate("ChangePassword")
    },

    {
      title: "Editar perfil",
      subtitle: "Altere seus dados pessoais",
      action: () => navigation.navigate("EditProfile")
    },

    {
      title: "Meus endereços",
      subtitle: "Gerencie seus endereços de entrega",
      action: () => navigation.navigate("Addresses")
    },

    {
      title: "Configurações",
      subtitle: "Preferências do aplicativo",
      action: () => navigation.navigate("Settings")
    }
  ];


  return (

     <View style={styles.container}>
      <View style={styles.profileBox}>

        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>U</Text>
          </View>

    
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="camera" size={18} color="#fff" />
          </TouchableOpacity>

        </View>


        <Text style={styles.name}>Usuário</Text>

        <Text style={styles.email}>usuario@email.com</Text>

      </View>

    

      <View style={styles.menu}>

        {
          options.map((item,index)=>(

            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={item.action}
            >

              <View>
                <Text style={styles.cardTitle}>
                  {item.title}
                </Text>

                <Text style={styles.cardSubtitle}>
                  {item.subtitle}
                </Text>
              </View>

              <Text style={styles.arrow}>
                ›
              </Text>

            </TouchableOpacity>

          ))
        }


        <TouchableOpacity
          style={styles.logout}
          onPress={logout}
        >

          <Text style={styles.logoutText}>
            Sair da conta
          </Text>

        </TouchableOpacity>


      </View>


    </View>

  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#fff7fa",
    paddingTop:50,
    paddingHorizontal:15,
  },


  profileBox:{
    alignItems:"center",
    marginBottom:30,
  },


  avatar:{
    width:90,
    height:90,
    borderRadius:45,
    backgroundColor:"#8b3151",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:15,
  },


  avatarText:{
    color:"#fff",
    fontSize:38,
    fontWeight:"bold",
  },


  name:{
    fontSize:22,
    fontWeight:"bold",
    color:"#8b3151",
  },


  email:{
    fontSize:14,
    color:"#777",
    marginTop:5,
  },


  menu:{
    gap:12,
  },


  card:{
    backgroundColor:"#fff",
    borderRadius:15,
    padding:18,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",

    shadowColor:"#000",
    shadowOpacity:0.08,
    shadowRadius:5,
    elevation:2,
  },


  cardTitle:{
    fontSize:17,
    fontWeight:"bold",
    color:"#8b3151",
  },


  cardSubtitle:{
    marginTop:5,
    color:"#777",
    fontSize:13,
  },


  arrow:{
    fontSize:30,
    color:"#8b3151",
  },


  logout:{
    marginTop:20,
    backgroundColor:"#8b3151",
    padding:18,
    borderRadius:15,
    alignItems:"center",
  },


  logoutText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"bold",
  },
 container:{
    flex:1,
    backgroundColor:"#fff7fa",
    paddingTop:50,
    paddingHorizontal:15,
  },

  profileBox:{
    alignItems:"center",
    marginBottom:30,
  },

  avatarContainer:{
    position:"relative",
    marginBottom:15,
  },

  avatar:{
    width:90,
    height:90,
    borderRadius:45,
    backgroundColor:"#8b3151",
    justifyContent:"center",
    alignItems:"center",
  },

  avatarText:{
    color:"#fff",
    fontSize:38,
    fontWeight:"bold",
  },

  editIcon:{
    position:"absolute",
    bottom:0,
    right:0,
    backgroundColor:"#8b3151",
    width:30,
    height:30,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#fff",
  },

  name:{
    fontSize:22,
    fontWeight:"bold",
    color:"#8b3151",
  },

  email:{
    fontSize:14,
    color:"#777",
    marginTop:5,
  },


});