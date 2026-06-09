import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Entypo from '@expo/vector-icons/Entypo';

import Login from './Screens/Login'
import Home from './Screens/Home'
import Catalog from "./Screens/Catalog";
<<<<<<< Updated upstream
import ADM from "./Screens/ADM";
import AddProdutos from "./Screens/Addproduct";
=======
import ADM from "./Screens/adm";
import GerenciarProduto from "./Screens/GerenciarProduto";
import AddProdutos from "./Screens/AddProduto";

>>>>>>> Stashed changes

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
        
      </Tab.Navigator>
  )
}

export default function App(){
  
  const Stack = createStackNavigator();
  return(
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
<<<<<<< Updated upstream
=======
            <Stack.Screen name="ADM" component={ADM}/>
            <Stack.Screen name="GerenciarProduto" component={GerenciarProduto}/>
>>>>>>> Stashed changes
            <Stack.Screen name="AddProdutos" component={AddProdutos}/>
            <Stack.Screen name="Catalog" component={TabNavigate} options={{
          headerShown: false}} />
            <Stack.Screen name="ADM" component={ADM} options={{
          headerShown: false}} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}