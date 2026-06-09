import {TextInput,Text,StyleSheet,Alert,ImageBackground,View,TouchableOpacity,Linking} from "react-native";

import { Button } from "react-native-paper";
import { useState } from "react";
import { auth } from "../firebaseConfig";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import Entypo from '@expo/vector-icons/Entypo';


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


  const CriarConta = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log('Usuário criado com sucesso!');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('ADM');
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  }

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
    <ImageBackground style={styles.fundo} source={require('../Images/roupa.png')} resizeMode='cover'>
  <View style={styles.overlay}>

    <Text style={styles.txt}>Bella plus Mulherão</Text>
    <TextInput style={styles.barra} placeholder='Usuario' value={email}onChangeText={setEmail}/>
    <TextInput style={styles.barra} placeholder='Senha' value={senha} onChangeText={setSenha} secureTextEntry={true}/>
    <Button style={styles.button} buttonColor="#f9b659" textColor="#5C3E06" mode='contained' onPress={CriarConta}>Cadastrar</Button>
    <Button style={styles.button} buttonColor="#f9b659" textColor="#5C3E06" mode='contained' onPress={EntrarConta}>Entrar</Button>
  
  
  <View style={styles.footer}>
  <TouchableOpacity  style={styles.instagramContainer} onPress={abrirInstagram}>
    <Entypo name="instagram-with-circle" size={24} color="#f9b659"/>
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
  },
  button: {
    margin: 10,
  },
  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#f9b659',
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
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
  color: '#f1af34',
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
}
});
