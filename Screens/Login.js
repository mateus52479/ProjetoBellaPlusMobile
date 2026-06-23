import {TextInput,Text,StyleSheet,Alert,ImageBackground,View,TouchableOpacity,Linking, Image, useWindowDimensions} from "react-native";
import { BlurView } from 'expo-blur';
import { Button } from "react-native-paper";
import { useState } from "react";
import { auth } from "../firebaseConfig";

import {signInWithEmailAndPassword} from "firebase/auth";
import Entypo from '@expo/vector-icons/Entypo';

const imagemDesktop = require("../Images/roupa2.png");
const imagemMobile = require("../Images/roupa2Mobile.png");



const abrirInstagram = async () => {
  const url = 'https://www.instagram.com/bellaplusmulherao/';

  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert('Não foi possível abrir o Instagram');
  }
};

export default function Login({ navigation }) {
 
  const {width,height}=useWindowDimensions();

  const imagemFundo = width < 600
    ? imagemMobile
    : imagemDesktop;
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(true);


  const EntrarConta = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        if(email == "admin@gmail.com" && senha == "1234567"){
          navigation.navigate('ADM');
        }else{
          navigation.navigate('Catalog');
        }
        
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  }



  return (
 <ImageBackground source={imagemFundo} style={styles.fundo} resizeMode='cover'>


  <View style={styles.overlay}>

    <View style={styles.logoContainer}>
   <Image style={{
    width: width < 600 ? width * 1.05 : width * 1.05,
    height: width < 600 ? 180 : 220,
    resizeMode: 'contain'}} source={require('../Images/logo.png')} />
    </View>
    <TextInput style={styles.barra} placeholder='Usuario' value={email}onChangeText={setEmail} />

    <View style={styles.senha}>
      <TextInput  style={styles.input}  placeholder='Senha' value={senha} onChangeText={setSenha} secureTextEntry={mostrarSenha}/>
      <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
      <Entypo
        name={mostrarSenha ? "eye-with-line" : "eye"}
        size={24}
        color="#e58aaa"
      />
  </TouchableOpacity>
    </View>
    
    
    <Button style={styles.button} buttonColor="#e58aaa" textColor="#8b3151" mode='contained' onPress={EntrarConta}>Entrar</Button>
  
  


  <TouchableOpacity  onPress={() => navigation.navigate('Cadastrar')}>
    <Text style={styles.textoConta}>Não possui uma conta ainda?<Text style={styles.cadastro}> Cadastre-se</Text></Text>
  </TouchableOpacity>



  <View style={styles.footer}>
  <TouchableOpacity  style={styles.instagramContainer} onPress={abrirInstagram}>
    <Entypo name="instagram-with-circle" size={24} color="#e58aaa"/>
    <Text style={styles.instagramText}>@bellaplusmulherao</Text>
  </TouchableOpacity>
  </View>

  </View>
</ImageBackground>
  );
}

const styles = StyleSheet.create({

  barra: {
  width: '80%',
  maxWidth: 350,
  padding:12,
  borderRadius:12,
  marginVertical:8,
  backgroundColor:'rgba(255,255,255,0.73)',
  borderWidth:1,
  borderColor:'#FFFFFF',
  color:'#333',
  },
logoContainer:{
   justifyContent:'center',
  alignItems:'center',
  marginBottom:0,
  marginTop:-20,
},
blur:{
  flex:1,
},
  button: {
    margin: 10,
  },

  fundo: {
    flex:1,
  width:"100%",
  height:"100%",
  },


  footer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  instagramText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e58aaa',
  },

  instagramContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  overlay: {
  flex: 1,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 40,
  backgroundColor: 'rgba(0,0,0,0.35)',
  },

  textoConta: {
    color: '#FFFFFF',
  },

  cadastro:{
    fontWeight: 'bold',
    color: '#e58aaa',
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    color: '#333',
  },

  senha:{
    width:'80%',
  maxWidth:350,
  paddingHorizontal:12,
  borderRadius:12,
  marginVertical:8,
  backgroundColor:'rgba(255,255,255,0.73)',
  borderWidth:1,
  borderColor:'#FFFFFF',
  flexDirection:'row',
  alignItems:'center',
  }

});