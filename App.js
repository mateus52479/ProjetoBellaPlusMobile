import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Entypo from '@expo/vector-icons/Entypo';

import Login from './Screens/Login'
import Catalog from "./Screens/Catalog";
import ADM from "./Screens/adm";
import GerenciarProduto from "./Screens/GerenciarProduto";
import AddProdutos from "./Screens/AddProduto";
import Pagamento from "./Screens/Pagamento";
import Cadastrar from "./Screens/Cadastrar";


function TabNavigate(){
  const Tab = createBottomTabNavigator();
  return(
      <Tab.Navigator>
        <Tab.Screen name="Catalogo" component={Catalog} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
          <Entypo name="globe" size={20} color='#8b3151' />
          )
          }}/>

          <Tab.Screen name="Pagamento" component={Pagamento} 
          options={{
          headerShown: false,
          tabBarIcon: () => (
          
          <Entypo name="credit-card" size={20} color="#8b3151" />
          )
          }}/>
        
      </Tab.Navigator>
  )
}

export default function App(){
  
  const Stack = createStackNavigator();
  return(
      <NavigationContainer>
          <Stack.Navigator>
            
            <Stack.Screen name="Login" component={Login} options={{
          headerShown: false}}/>
            <Stack.Screen name="cadastrar" component={Cadastrar}  options={{
          headerShown: false}}/>
          <Stack.Screen name="ADM" component={ADM}options={{
          headerShown: false}}/>
          <Stack.Screen name="GerenciarProduto" component={GerenciarProduto} options={{
          headerShown: false}}/>
          <Stack.Screen name="AddProdutos" component={AddProdutos} options={{
          headerShown: false}}/>
            <Stack.Screen name="Catalog" component={TabNavigate} options={{
          headerShown: false}} />
          <Stack.Screen name="Pagamento" component={TabNavigate} options={{
          headerShown: false}} />
          
          
          </Stack.Navigator>
      </NavigationContainer>
  )
}