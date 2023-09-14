import React from 'react';
import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  const handleStart = () => {
    // Navegar para a próxima tela (produtos)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
         <Image source={require('../../assets/logo-nosso-pao.png')} style={styles.logo} />
      <Text style={styles.title}>Nosso Pão</Text>
      <Text style={styles.subtitle}>App de entrega de pão</Text>
      <TouchableOpacity onPress={handleStart} style={styles.button}>
        <Text style={styles.buttonText}>Vamos Começar?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4B3A',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color:'#FFF'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#FFF'
  },
  logo: {
    width: 100, // Defina a largura desejada para a imagem
    height: 100, // Defina a altura desejada para a imagem
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    
  },
  buttonText: {
    color: "#FF460A",
    fontSize: 18,
  },
});

export default HomeScreen;
