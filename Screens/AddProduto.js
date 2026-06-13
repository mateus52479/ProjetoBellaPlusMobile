import {View, Text, TextInput, Alert, StyleSheet} from 'react-native';
import { Button } from "react-native-paper";
import { database } from '../firebaseConfig';
import {useState} from 'react';

import { addDoc, collection } from 'firebase/firestore';

export default function AddProdutos() {

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [descricao, setDescricao] = useState('');

    const CadastrarProdutos = async () => {
        try {
            await addDoc(collection(database, 'produtos'),{
                nome,
                valor: parseFloat(valor),
                imagem,
                tamanho,
                descricao
            }
        )

            alert('Produto Cadastrado com sucesso!')

        } catch (error) {
            console.log('erro ao cadastrar', error)
        }
    }
    return(
        <View style={styles.container}>

            <Text style={styles.txt}>Adicionar Produtos</Text>
            <TextInput style={styles.barra} placeholder="Nome" value={nome} onChangeText={setNome} placeholderTextColor={'#8b3151'}/>
            <TextInput style={styles.barra} placeholder="Tamanho" value={tamanho} onChangeText={setTamanho} placeholderTextColor={'#8b3151'}/>
            <TextInput style={styles.barra} placeholder="Valor" value={valor} onChangeText={setValor} placeholderTextColor={'#8b3151'}/>
            <TextInput style={styles.barra} placeholder="Descrição" value={descricao} onChangeText={setDescricao} placeholderTextColor={'#8b3151'}/>
            <TextInput style={styles.barra} placeholder="URL da imagem" value={imagem} onChangeText={setImagem} placeholderTextColor={'#8b3151'}/>

            <View style={styles.row}>
                <Button style={styles.button} buttonColor="#e58aaa" textColor="#8b3151" mode='contained' onPress={CadastrarProdutos} >Cadastrar Produto</Button>
            </View>

        </View>
    )
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
    backgroundColor: '#000000ff',
  },

    button: {
    margin: 2,
  },
    row: {
    padding: 10,
    gap: 43,
    flexDirection: 'column',
    justifyContent: 'space-around',
    },
    barra: {
    width: 280,
    padding: 12,
    borderRadius: 12,
    marginVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.73)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignSelf: 'center',
  },
});