import React, { useState } from "react";
import {TextInput,Text,StyleSheet,Alert,ImageBackground,View,TouchableOpacity,Linking,} from "react-native";

import { Button } from "react-native-paper";
import Entypo from "@expo/vector-icons/Entypo";

import {auth,createUserWithEmailAndPassword,} from "../firebaseConfig";

const abrirInstagram = async () => {
  const url = "https://www.instagram.com/bellaplusmulherao/";

  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert("Não foi possível abrir o Instagram");
  }
};

export default function Cadastrar({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  const CriarConta = async () => {
    if (!email || !senha || !confirmarSenha) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("As senhas não coincidem");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email,senha);

      console.log("Usuário criado com sucesso!");
      console.log(userCredential.user);

      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <ImageBackground source={require("../Images/roupa.png")} style={styles.fundo} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Bella Plus Mulherão</Text>

        <TextInput style={styles.barra} placeholder="E-mail" placeholderTextColor="#666" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none"/>

        <View style={styles.inputSenha}>
          <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#666" value={senha} onChangeText={setSenha} secureTextEntry={!mostrarSenha}/>

          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Entypo
              name={mostrarSenha ? "eye-with-line" : "eye"}
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputSenha}>
          <TextInput style={styles.input} placeholder="Confirmar senha" placeholderTextColor="#666" value={confirmarSenha}  onChangeText={setConfirmarSenha} secureTextEntry={!mostrarConfirmacao}/>

          <TouchableOpacity
            onPress={() =>
              setMostrarConfirmacao(!mostrarConfirmacao)
            }
          >
            <Entypo
              name={mostrarConfirmacao ? "eye-with-line" : "eye"}
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <Button mode="contained" buttonColor="#f9b659" textColor="#5C3E06" style={styles.botao} onPress={CriarConta}>Cadastrar</Button>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.instagramContainer} onPress={abrirInstagram}>
            <Entypo
              name="instagram-with-circle"
              size={24}
              color="#f9b659"
            />
            <Text style={styles.instagramText}> @bellaplusmulherao </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#f9b659",
    textAlign: "center",
    marginBottom: 40,
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  barra: {
    width: 300,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    color: "#333",
  },

  inputSenha: {
    width: 300,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    color: "#333",
  },

  botao: {
    width: 300,
    marginTop: 10,
  },

  footer: {
    position: "absolute",
    bottom: 25,
  },

  instagramContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  instagramText: {
    marginLeft: 8,
    color: "#f9b659",
    fontWeight: "bold",
    fontSize: 16,
  },
});