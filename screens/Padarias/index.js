import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getAuth, signOut } from 'firebase/auth'; // Importe os módulos necessários
import { getAuthInstance } from '../../firebase'; // Importe sua instância de autenticação Firebase corretamente

function Padarias({ navigation }) {
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      // O usuário foi deslogado com sucesso, você pode redirecioná-lo para a tela de login, se desejar.
      navigation.replace('Login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Padarias</Text>
      {/* Aqui você pode adicionar o conteúdo dos produtos */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Padarias;
