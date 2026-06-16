import { View, TextInput,StyleSheet, Text, Image} from "react-native";
import { Picker } from "@react-native-picker/picker";




export default function Pagamento(){
    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Pagamento</Text>
        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#c34e77"  />
        <TextInput style={styles.input} placeholder="Endereço" placeholderTextColor="#c34e77"/>
        <TextInput style={styles.input} placeholder="Produto" placeholderTextColor="#c34e77"/>
        

        <View style={styles.pickerContainer}>
            <Picker  style={styles.picker} dropdownIconColor="#c34e77"
                // selectedValue={formaPagamento}
                // onValueChange={(itemValue) => setFormaPagamento(itemValue)}
>
                <Picker.Item label="Pix" value="pix"  color="#c34e77"/>
                <Picker.Item label="Cartão" value="cartao" color="#c34e77" />
                <Picker.Item label="Dinheiro" value="dinheiro"  color="#c34e77"/>
                </Picker>
        </View>
        <Image
        source={require('../Images/qrcode-pix.png')}
        />
    </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eadde1',
    padding: 24,
  },
input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    borderColor:'#e58aaa'
    
    
  },
titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#e58aaa',
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
pickerContainer: {
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: 8,
  marginBottom: 12,
  overflow: 'hidden',
  
},
picker: {
  width: '100%',
  height: 50,
  color: '#c34e77'
  
},

})