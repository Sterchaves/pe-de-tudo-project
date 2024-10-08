
// PERGUNTAS FREQUENTES

// FAQ
const itensPerguntasERespostas = document.querySelectorAll(".category");

itensPerguntasERespostas.forEach(function(item) {
    const pergunta = item.querySelector(".pergunta"); // Seleciona a pergunta dentro da categoria
    const resposta = item.querySelector(".resposta"); // Seleciona a resposta correspondente

    pergunta.addEventListener("click", function() {
        // Remove a classe 'ativo' de todas as categorias
        itensPerguntasERespostas.forEach(function(otherItem) {
            otherItem.classList.remove("ativo"); // Remove a classe 'ativo' de todas as categorias
            const otherResposta = otherItem.querySelector(".resposta");
            if (otherResposta !== resposta) {
                otherResposta.style.display = "none"; // Fecha as outras respostas
            }
        });

        // Alterna a visibilidade da resposta atual
        if (resposta.style.display === "none" || resposta.style.display === "") {
            resposta.style.display = "block"; // Exibe a resposta clicada
            item.classList.add("ativo"); // Adiciona a classe 'ativo' ao item clicado
        } else {
            resposta.style.display = "none"; // Oculta a resposta se já estiver aberta
            item.classList.remove("ativo"); // Remove a classe 'ativo' se o item for fechado
        }
    });
});

// POP UP RESERVAR
  const reservarButtons = document.querySelectorAll('.reservar');
  function showPopup() {

  }

// CONTADOR DO CARRINHO
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0; // Recupera o valor do Local Storage ou inicia em 0
const cartCounter = document.getElementById('cart-counter');

cartCounter.textContent = cartCount;

function showPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('show');
  setTimeout(() => {
    popup.classList.remove('show');
  }, 1100); }

  reservarButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();  
      showPopup(); 
    });
  });


  function showPopupAndUpdateCart() {
  showPopup();
  cartCount++;
  cartCounter.textContent = cartCount;
  localStorage.setItem('cartCount', cartCount); // Armazena o novo valor no Local Storage
}

function removeFromCart() {
  if (cartCount > 0) {  
    cartCount--;
    cartCounter.textContent = cartCount;
    localStorage.setItem('cartCount', cartCount); 
  }
}

reservarButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); 
    showPopupAndUpdateCart(); 
  });
});

// Adiciona um evento de clique a todos os botões 'Retirar'
const retirarButtons = document.querySelectorAll('.retirar'); // Seletor dos botões 'Retirar'
retirarButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); 
    removeFromCart(); 
  });
});

