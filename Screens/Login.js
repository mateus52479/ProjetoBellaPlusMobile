import {TextInput,Text,StyleSheet,Alert,ImageBackground,View,TouchableOpacity,Linking, Image} from "react-native";

import { Button } from "react-native-paper";
import { useState } from "react";
import { auth } from "../firebaseConfig";

import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import Entypo from '@expo/vector-icons/Entypo';
import Cadastrar from "./Cadastrar";


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
    <ImageBackground style={styles.fundo} source={require('../Images/roupa2.png')} resizeMode='cover'>
  <View style={styles.overlay}>

    <View style={styles.logoContainer}>
    <Image style={styles.img}  source={require('../Images/logo.png')} pointerEvents="none"/>
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
  
  


  <TouchableOpacity  onPress={() => navigation.navigate('cadastrar')}>
    <Text>Não possui uma conta ainda?<Text style={styles.cadastro}> Cadastre-se</Text></Text>
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
    width: 280,
   padding: 12,
   borderRadius: 12,
   marginVertical: 8,
   backgroundColor: 'rgba(255, 255, 255, 0.73)',
   borderWidth: 1,
   borderColor: '#FFFFFF',
   color: '#333',
   alignSelf: 'center',

   zIndex: 10,
  },
  button: {
    margin: 10,
  },
  fundo: {
    flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },
  
  logoContainer: {
    width: '100%',
  height: 160,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
},

img:{
 width: 650,
  height: 280,
  resizeMode: 'contain',
  pointerEvents: 'none',
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
  backgroundColor: 'rgba(0,0,0,0.35)',
},
cadastro:{
  fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#e58aaa',
    
},
input: {
  flex: 1,
  paddingVertical: 12,
  color: '#333',
},
senha:{
  width: 280,
  paddingHorizontal: 12,
  borderRadius: 12,
  marginVertical: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.73)',
  borderWidth: 1,
  borderColor: '#FFFFFF',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',

  zIndex: 10,
}
});
