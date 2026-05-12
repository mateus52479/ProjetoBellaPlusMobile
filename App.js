import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Entypo from '@expo/vector-icons/Entypo';

import Login from './Screens/Login'
import Home from './Screens/Home'


function TabNavigate(){
  const Tab = createBottomTabNavigator();
  return(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
          <Entypo name="home" size={24} color='#743f6fff' />
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
            <Stack.Screen name="Home" component={TabNavigate} options={{
          headerShown: false}} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}