import { View, TextInput,StyleSheet, Text} from "react-native";
import { Picker } from "@react-native-picker/picker";




export default function Pagamento(){
    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Pagamento</Text>
        <TextInput style={styles.input} placeholder="nome"/>
        <TextInput style={styles.input} placeholder="endereço"/>
        <TextInput style={styles.input} placeholder="produto"/>
        

        <View style={styles.pickerContainer}>
            <Picker  style={styles.picker} dropdownIconColor="#f9b659"
                // selectedValue={formaPagamento}
                // onValueChange={(itemValue) => setFormaPagamento(itemValue)}
>
                <Picker.Item label="Pix" value="pix" />
                <Picker.Item label="Cartão" value="cartao" />
                <Picker.Item label="Dinheiro" value="dinheiro" />
                </Picker>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d8d4d4ff',
    padding: 24,
  },
input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    
  },
titulo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#f9b659',
    marginBottom: 24,
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
},

})