
import { StyleSheet, Text, View , TextInput, ImageBackground} from 'react-native';
import { Button } from 'react-native-paper';


export default function Login({navigation}) {
  return ( 
      <ImageBackground style={styles.fundo} source={require('../Images/roupa.png') } resizeMode='cover'>
        <Text style={styles.txt}> Bella plus Mulherão</Text>
        <TextInput style={styles.barra}  placeholder='Usuario' />
        <TextInput style={styles.barra} placeholder='Senha' secureTextEntry={true} />
        <Button style={styles.button} buttonColor='#ca8300ff' mode='contained' onPress={() => navigation.navigate('Catalog')}>Entrar</Button>
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
  button:{
    margin: 10,
  },
  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt:{
    fontStyle: 'italic'
  }
});
