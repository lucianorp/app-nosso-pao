// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxb5ISC5tiCPZUk3ZAdrRBhj8Ec5IlR5o",
  authDomain: "app-pao-nosso.firebaseapp.com",
  projectId: "app-pao-nosso",
  storageBucket: "app-pao-nosso.appspot.com",
  messagingSenderId: "186893708661",
  appId: "1:186893708661:web:d9467cb8bc8a81f721f73c",
  //measurementId: "G-TZG1JHYSPH"
};

// Initialize Firebase
// Inicialize o Firebase

//const app = initializeApp(firebaseConfig);

// Obtenha a instância de autenticação do Firebase
// const auth = getAuth(app);

// export { auth };


let app;
let auth;

async function initializeFirebase() {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    // Agora você pode usar 'auth' em qualquer parte do seu código com a garantia de que está inicializado.
  } catch (error) {
    console.error("Erro ao inicializar o Firebase:", error);
  }
}

export async function getAuthInstance() {
  if (!auth) {
    await initializeFirebase();
  }
  return auth;
}
