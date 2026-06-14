import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton, Button } from "react-native-paper"; 

export default function ADM({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>PAINEL ADM</Text>

      <View style={styles.grid}>
        
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <IconButton icon="account-group" iconColor="#8b3151" size={40} pointerEvents="none" />
          <Text style={styles.cardTxt}>Gerenciar Clientes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card} 
          activeOpacity={0.7}
          onPress={() => navigation.navigate('GerenciarProduto')}
        >
          <IconButton icon="package-variant-closed" iconColor="#8b3151" size={40} pointerEvents="none" />
          <Text style={styles.cardTxt}>Gerenciar Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardLargo} activeOpacity={0.7}>
          <IconButton icon="cash-register" iconColor="#8b3151" size={40} pointerEvents="none" />
          <Text style={styles.cardTxt}>Controle de Vendas</Text>
        </TouchableOpacity>

      </View>

      <Button 
        icon="logout" 
        mode="contained" 
        buttonColor="#d32f2f"
        textColor="#ffffff"
        style={styles.botaoSairSimples}
        labelStyle={styles.textoBotaoSair}
        onPress={() => navigation.navigate('Login')}
      >
        Sair
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 46,  
    fontWeight: 'bold',
    color: '#e58aaa',
    textAlign: 'center',
    marginBottom: 50,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
    letterSpacing: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#290814',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 280,
    gap: 15,
  },
  card: {
    backgroundColor: '#e58aaa',
    width: 132,
    height: 140,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cardLargo: {
    backgroundColor: '#e58aaa',
    width: 280,
    height: 120,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cardTxt: {
    color: '#8b3151',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  botaoSairSimples: {
    marginTop: 40,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  textoBotaoSair: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});