import {TextInput, Text, StyleSheet, Alert, ImageBackground, View } from "react-native";
import { Button } from "react-native-paper";
import { useState } from "react";
import {firebaseConfig, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "../firebaseConfig";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const CriarConta = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log('Usuário criado com sucesso!');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Catalog');
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
        navigation.navigate('Catalog');
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  }

  return (
    <ImageBackground style={styles.fundo} source={require('../Images/roupa.png')} resizeMode='cover'>
      <View>
              <Text style={styles.txt}> Bella plus Mulherão</Text>
      
      <TextInput 
      style={styles.barra} 
      placeholder='Usuario' 
      value={email} 
      onChangeText={setEmail}
      />
      
      <TextInput 
      style={styles.barra} 
      placeholder='Senha' 
      value={senha}
      onChangeText={setSenha}
      secureTextEntry={true} 
      />

      <Button style={styles.button} buttonColor='#5c3e06ff' mode='contained' onPress={CriarConta}>Cadastrar</Button>
      <Button style={styles.button} buttonColor='#5c3e06ff' mode='contained' onPress={EntrarConta}>Entrar</Button>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  barra: {
    borderColor: '#613b01ff',
    borderWidth: 1,
    padding: 5,
    color:'#291c03ff',
    borderRadius: 10,
    width: 170
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
    fontStyle: 'italic'
  }
});
