import { db, auth } from './firebase-init.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

window.analisar = async () => {
  const descricao = document.getElementById("descricao").value.trim();
  const resposta = document.getElementById("resposta");

  if (!descricao) {
    resposta.innerText = "Cole a descrição para analisar.";
    return;
  }

  resposta.innerText = "🔍 Analisando com IA...";

  try {
    // Aqui faz a chamada ao backend hospedado no Render
    const res = await fetch("https://shopee-pro-backend.onrender.com/auditar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: descricao })
    });

    const data = await res.json();

    const resultado = data.feedback || "⚠️ Erro na resposta da IA.";

    const user = auth.currentUser;
    if (user) {
      await addDoc(collection(db, "analises"), {
        uid: user.uid,
        descricao,
        resultado,
        data: new Date().toISOString()
      });
    }

    resposta.innerText = resultado;
  } catch (error) {
    console.error("Erro ao analisar:", error);
    resposta.innerText = "Erro ao conectar com o servidor de IA.";
  }
};
