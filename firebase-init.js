import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Configuração do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBYsFfLeXm52UH254582MDxBphVJLDSPLI",
  authDomain: "shopee-pro-d3f15.firebaseapp.com",
  projectId: "shopee-pro-d3f15",
  storageBucket: "shopee-pro-d3f15.firebasestorage.app",
  messagingSenderId: "779191463935",
  appId: "1:779191463935:web:239ed1459ed649b735c1ca"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, signInWithEmailAndPassword, onAuthStateChanged, signOut, db, collection, addDoc, getDocs, query, orderBy };