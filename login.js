import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpeLLtMasPdbWcffrDZQ0a_G-CtBhkbVk",
  authDomain: "shopee-pro-v2.firebaseapp.com",
  projectId: "shopee-pro-v2",
  storageBucket: "shopee-pro-v2.appspot.com",
  messagingSenderId: "627773073455",
  appId: "1:627773073455:web:ba85fbd1f3a2661f267eda"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      window.location.href = "painel.html";
    })
    .catch((error) => {
      alert("Erro ao fazer login: " + error.message);
    });
});