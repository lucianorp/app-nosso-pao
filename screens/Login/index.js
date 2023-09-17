import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuthInstance } from '../../firebase'; // Importe sua instância de autenticação Firebase corretamente
import Toast from 'react-native-toast-message';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [activeTab, setActiveTab] = useState('login'); // Controla a guia ativa

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Padarias")
  //     }
  //   })

  //   return unsubscribe
  // }, [])

  useEffect(() => {
    getAuthInstance(); // Inicialize o Firebase quando o componente for montado
  }, []);

  const handleLogin = () => {
    const authInstance = getAuth();
    signInWithEmailAndPassword(authInstance, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Logged in with:', user.email);
        navigation.replace("Padarias");
      })
      .catch(error => alert(error.message))
  };

  const handleSignUp = () => {
    const authInstance = getAuth(); // Obtenha a instância de autenticação correta
    createUserWithEmailAndPassword(authInstance, emailRegister, passwordRegister)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        setEmailRegister("");
        setPasswordRegister("");
        Toast.show({
          type: 'success',
          text1: 'Cadastro feito com sucesso',
          position: 'bottom',
        });
        setActiveTab('login');
      })
      .catch((error) => {
        // Trate erros aqui
        console.error(error);
      });
   // navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/logo-nosso-pao.png')} style={styles.logo} />

      {/* Guias de Login e Cadastro */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'login' && styles.activeTab]}
          onPress={() => setActiveTab('login')}
        >
          <Text style={styles.tabText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'cadastro' && styles.activeTab]}
          onPress={() => setActiveTab('cadastro')}
        >
          <Text style={styles.tabText}>Cadastro</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo da Guia Ativa */}
      {activeTab === 'login' && (
        <View style={styles.tabContent}>
          <Text style={styles.tabTitle}>Login</Text>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Link para a guia de Cadastro */}
          <TouchableOpacity onPress={() => setActiveTab('cadastro')}>
            <Text style={styles.linkText}>Não tem login? Cadastre-se</Text>
          </TouchableOpacity>

        </View>
      )}

      {activeTab === 'cadastro' && (
        <View style={styles.tabContent}>
          <Text style={styles.tabTitle}>Cadastro</Text>
          {/* Adicione aqui os campos para o usuário se cadastrar */}
          {/* Exemplo: */}
          {/* <TextInput
            placeholder="Nome"
            style={styles.input}
            // ...
          /> */}
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            value={emailRegister}
            onChangeText={(text) => setEmailRegister(text)}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            value={passwordRegister}
            onChangeText={(text) => setPasswordRegister(text)}
          />
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          {/* Link para a guia de Login */}
          <TouchableOpacity onPress={() => setActiveTab('login')}>
            <Text style={styles.linkText}>Já possui cadastro? Faça o Login!</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#FF4B3A', // Cor da guia ativa
  },
  tabText: {
    fontSize: 18,
  },
  tabContent: {
    width: '100%',
    alignItems: 'center',
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF4B3A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  linkText: {
    color: '#007BFF', // Cor do link
    textDecorationLine: 'underline', // Sublinhado para indicar que é um link
    marginTop: 10,
  },
});

export default LoginScreen;
