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
          <Entypo name="globe" size={20} color='rgb(144, 143, 143)' />
          )
          }}/>

          <Tab.Screen name="Pagamento" component={Pagamento} 
          options={{
          headerShown: false,
          tabBarIcon: () => (
          <Entypo name="globe" size={20} color='rgb(144, 143, 143)' />
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
            <Stack.Screen name="ADM" component={ADM}/>
            <Stack.Screen name="GerenciarProduto" component={GerenciarProduto}/>
            <Stack.Screen name="AddProdutos" component={AddProdutos}/>
            <Stack.Screen name="Catalog" component={TabNavigate} options={{
          headerShown: false}} />
          <Stack.Screen name="Pagamento" component={TabNavigate} options={{
          headerShown: false}} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}