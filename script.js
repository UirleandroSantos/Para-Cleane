// Mensagens para exibir nos corações
const messages = [
  "Tenha um bom dia, linda!",
  "Você é incrível!",
  "Hoje vai ser um ótimo dia!",
  "Foi muito bom te conhecer!",
  "Lembre-se de mim hoje",
  "Estarei pensando em você"
];

// Imagens de fundo
const backgrounds = [
  "url('./assets/imagem1.jpeg')",
  "url('./assets/imagem2.jpeg')",
  "url('./assets/imagem3.jpeg')",
  "url('./assets/imagem4.jpeg')",
  "url('./assets/imagem5.jpeg')",
];

let messageIndex = 0;
let backgroundIndex = 0;

document.getElementById("heartButton").addEventListener("click", function () {
  const heartContainer = document.getElementById("heartContainer");

  // Alterar a imagem de fundo
  document.body.style.backgroundImage = backgrounds[backgroundIndex];
  backgroundIndex = (backgroundIndex + 1) % backgrounds.length;

  // Criar o coração
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = `❤️ ${messages[messageIndex]}`;

  // Atualizar o índice da mensagem
  messageIndex = (messageIndex + 1) % messages.length;

  // Posicionar o coração de forma aleatória, garantindo que não saia da tela
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
});
