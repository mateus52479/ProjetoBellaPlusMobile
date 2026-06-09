import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
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

            <Text style={styles.txt}>ADICIONAR PRODUTOS</Text>
            <TextInput
            style={styles.barra}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            />

            <TextInput
            style={styles.barra}
            placeholder="Tamanho"
            value={tamanho}
            onChangeText={setTamanho}
            />

            <TextInput
            style={styles.barra}
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            />

            <TextInput
            style={styles.barra}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
            />

            <TextInput
            style={styles.barra}
            placeholder="URL da imagem"
            value={imagem}
            onChangeText={setImagem}
            />

            <View style={styles.row}>

                
                <Button title="Cadastrar Produto"
                    color="#3e6925ff"
                    onPress={CadastrarProdutos}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

  txt: {
    fontSize: 25,
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
    },
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
});