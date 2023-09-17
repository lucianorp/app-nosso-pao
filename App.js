import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import Home from './screens/Home';
import Padarias from './screens/Padarias';
import Login from './screens/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Presentation">
        <Stack.Screen name="Presentation" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Padarias" component={Padarias} />
        {/* Adicione mais telas aqui conforme necessário */}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
     
     </>
  );
}

export default App;