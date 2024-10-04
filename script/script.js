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


