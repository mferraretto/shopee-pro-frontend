// firebase-init.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDpeLLtMasPdbWcffrDZQ0a_G-CtBhkbVk",
  authDomain: "shopee-pro-v2.firebaseapp.com",
  projectId: "shopee-pro-v2",
  storageBucket: "shopee-pro-v2.appspot.com",
  messagingSenderId: "627773073455",
  appId: "1:627773073455:web:ba85fbd1f3a2661f267eda"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exportações
export { app, auth, db };
