// Mensagens para exibir nos corações
const messages = [
  "Tenha um bom dia, linda! 🌞💖",
  "Saiba que você é incrível! 🌟💪",
  "Hoje vai ser um ótimo dia! ☀️✨",
  "Foi muito bom te conhecer! 😊💫",
  "Lembre-se de mim hoje 💭💖",
  "Estarei pensando em você 💭💕"
];

// Imagens de fundo
const backgrounds = [
  "url('./assets/imagem1.jpeg')",
  "url('./assets/imagem2.jpeg')",
  "url('./assets/imagem3.jpeg')",
  "url('./assets/imagem4.jpeg')",
  "url('./assets/imagem5.jpeg')",
];

let clickCount = 0;



// Evento de clicar no botão
document.getElementById("heartButton").addEventListener("click", function () {
  const heartContainer = document.getElementById("heartContainer");

  // Alterar a imagem de fundo
  document.body.style.backgroundImage = backgrounds[clickCount % backgrounds.length];

  // Exibir as mensagens
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = `❤️ ${messages[clickCount % messages.length]}`;

  // Posicionar o coração de forma aleatória
  const x = Math.random() * (window.innerWidth - 100); // Garantir que o coração não saia da tela horizontal
  const y = Math.random() * (window.innerHeight - 100); // Garantir que o coração não saia da tela vertical
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  // Adicionar ao contêiner
  heartContainer.appendChild(heart);

  // Remover após a animação
  setTimeout(() => {
    heart.remove();
  }, 2000);

  // Incrementar contador de cliques
  clickCount++;

  // Quando o número de cliques atingir 10, exibe a letra da música
  if (clickCount == 8) {
    // Esconde a tela inicial
    document.getElementById("initialScreen").style.display = "none";

    // Exibe a tela da música
    document.getElementById("musicScreen").style.display = "flex";

    // Iniciar a música
    document.getElementById("musicPlayer").play();
  }
});

// Função para voltar ao início
document.getElementById("backButton").addEventListener("click", function () {
  // Voltar para a tela inicial
  document.getElementById("musicScreen").style.display = "none";
  document.getElementById("initialScreen").style.display = "flex";

  // Resetar o contador de cliques
  clickCount = 0;

  // Pausar a música ao voltar
  document.getElementById("musicPlayer").pause();
  document.getElementById("musicPlayer").currentTime = 0; // Reseta o áudio para o início
});

// Atualizar a letra da música conforme o áudio
document.getElementById("musicPlayer").addEventListener("timeupdate", updateSongLyrics);
