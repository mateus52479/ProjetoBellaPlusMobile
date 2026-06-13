import {View, Text, TextInput, Alert, StyleSheet} from 'react-native';
import { Button } from "react-native-paper";
import { database } from '../firebaseConfig';
import {useState} from 'react';

import { addDoc, collection } from 'firebase/firestore';

export default function ADM({navigation}) {

  return (

    <View style={styles.container}>
        <Text style={styles.txt}>Painel de Administrador</Text>

        <View style={styles.row}>

          <Button style={styles.button} buttonColor="#e58aaa" textColor="#8b3151" mode='contained' >Gerenciar Clientes</Button>
          <Button style={styles.button} buttonColor="#e58aaa" textColor="#8b3151" mode='contained'onPress={() => navigation.navigate('GerenciarProduto')} >Gerenciar Produtos</Button>
          <Button style={styles.button} buttonColor="#e58aaa" textColor="#8b3151" mode='contained' >Controle de Vendas</Button>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({

  txt: {
     fontSize: 36,  
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#8b3151',
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#290814',
  },

    button: {
    margin: 2,
  },
    row: {

    padding: 10,
    gap: 43,
    flexDirection: 'column',
    justifyContent: 'space-around',
    }
});
