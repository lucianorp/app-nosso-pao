import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import Home from './screens/Home';
import Products from './screens/Products';
import Login from './screens/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Presentation">
        <Stack.Screen name="Presentation" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Products" component={Products} />
        {/* Adicione mais telas aqui conforme necessário */}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
     
     </>
  );
}

export default App;