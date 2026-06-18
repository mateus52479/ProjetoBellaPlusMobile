import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Entypo from '@expo/vector-icons/Entypo';

import Login from './Screens/Login'
import Catalog from "./Screens/Catalog";
import Favorites from "./Screens/Favorites";
import Cart from "./Screens/Cart";
import ADM from "./Screens/adm";
import GerenciarProduto from "./Screens/GerenciarProduto";
import AddProdutos from "./Screens/AddProduto";
import Pagamento from "./Screens/Pagamento";
import Cadastrar from "./Screens/Cadastrar";
import EditProduct from "./Screens/EditProduct";
import { ProductProvider } from "./context/ProductContext";

function TabNavigate() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Catalogo" component={Catalog}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Entypo name="globe" size={20} color='#8b3151' />
          )
        }} />

      <Tab.Screen name="Favoritos" component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Entypo name="heart" size={20} color='#8b3151' />
          )
        }} />

      <Tab.Screen name="Carrinho" component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Entypo name="shopping-cart" size={20} color="#8b3151" />
          )
        }} />
    </Tab.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator>



          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false
          }} />
          
          <Stack.Screen name="Cadastrar" component={Cadastrar} options={{
          title: "Cadastrar",
          headerTransparent: true,
          headerStyle: {
          backgroundColor: "transparent",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
          color: "#fff", },}}/>


          <Stack.Screen name="ADM" component={ADM} options={{
            headerShown: false
          }} />

          <Stack.Screen
            name="GerenciarProduto"
            component={GerenciarProduto} options={{
              title: 'Gerenciar Produto',
              headerStyle: {
                backgroundColor: '#290814',},headerTintColor: '#8b3151',}}/>

          <Stack.Screen name="AddProdutos" component={AddProdutos} options={{
            headerShown: false
          }} />
          <Stack.Screen name="EditProduct" component={EditProduct} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Catalog" component={TabNavigate} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Pagamento" component={Pagamento} options={{
            headerShown: false
          }} />

        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  )
}
