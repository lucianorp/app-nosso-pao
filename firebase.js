import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxb5ISC5tiCPZUk3ZAdrRBhj8Ec5IlR5o",
  authDomain: "app-pao-nosso.firebaseapp.com",
  projectId: "app-pao-nosso",
  storageBucket: "app-pao-nosso.appspot.com",
  messagingSenderId: "186893708661",
  appId: "1:186893708661:web:d9467cb8bc8a81f721f73c",
};

let app;
let auth;

async function initializeFirebase() {
  try {
    if (!app) {
      app = initializeApp(firebaseConfig);
    }
    if (!auth) {
      auth = getAuth(app);
    }
  } catch (error) {
    console.error("Erro ao inicializar o Firebase:", error);
    throw error; // Rejeita o erro para que o chamador possa lidar com ele
  }
}

export async function getAuthInstance() {
  try {
    await initializeFirebase();
    return auth;
  } catch (error) {
    console.error("Erro ao obter a instância de autenticação:", error);
    throw error; // Rejeita o erro para que o chamador possa lidar com ele
  }
}
