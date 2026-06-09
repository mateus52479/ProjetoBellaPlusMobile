import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import { database } from '../firebaseConfig';
import {useState} from 'react';

import { addDoc, collection } from 'firebase/firestore';

export default function ADM() {

  return (

    <View style={styles.container}>
        <Text style={styles.txt}>Painel de Administrador</Text>

        <View style={styles.row}>

            <Button style={styles.button} title="Gerenciar Clientes" color="#e0683a"/>
            <Button style={styles.button} title="Gerenciar Produtos" color="#e0683a" onPress={() => navigation.navigate('AddProdutos')}/>
            <Button style={styles.button} title="Controle de Vendas" color="#e0683a"/>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({

  txt: {
    fontSize: 33,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#e0683a',
    textAlign: 'center',
    marginBottom: 40,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000ff',
  },

    button: {
    margin: 10,
  },
    row: {

    padding: 10,
    gap: 43,
    flexDirection: 'column',
    justifyContent: 'space-around',
    }
});
