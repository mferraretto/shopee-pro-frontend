import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpeLLtMasPdbWcffrDZQ0a_G-CtBhkbVk",
  authDomain: "shopee-pro-v2.firebaseapp.com",
  projectId: "shopee-pro-v2",
  storageBucket: "shopee-pro-v2.appspot.com",
  messagingSenderId: "627773073455",
  appId: "1:627773073455:web:ba85fbd1f3a2661f267eda"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);