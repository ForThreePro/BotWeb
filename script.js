// Carrito - Solo funciona si existe #cartBtn
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');

function updateCart() {
  if(!cartBtn) return;
  document.getElementById('cartCount').textContent = cart.length;
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  if(!cartItems) return;
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    cartItems.innerHTML += `<div class="cart-item"><span>${item.name}</span><span>S/${item.price} <button onclick="removeFromCart(${i})">X</button></span></div>`;
  });
  cartTotal.textContent = total.toFixed(2);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(name, price) { 
  cart.push({name, price}); 
  updateCart(); 
  alert(`${name} agregado al carrito 🛒`); 
}
function removeFromCart(i) { cart.splice(i,1); updateCart(); }
function toggleCart() { cartModal.classList.toggle('active'); }
function checkout() {
  if(cart.length === 0) { alert('Tu carrito está vacío'); return; }
  let msg = "Hola Garfield Store, quiero comprar:\n";
  cart.forEach(item => msg += `- ${item.name}: S/${item.price}\n`);
  msg += `Total: S/${cart.reduce((a,b)=>a+b.price,0).toFixed(2)}`;
  window.open(`https://wa.me/51XXXXXXXXX?text=${encodeURIComponent(msg)}`, '_blank');
}
if(cartBtn) cartBtn.addEventListener('click', toggleCart);
updateCart();

// Música
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let playing = true;
window.addEventListener('load', () => { 
  if(music){ 
    music.volume = 0.5; 
    music.play().catch(() => document.addEventListener('click', () => music.play(), {once: true})); 
  }
});
if(musicBtn) musicBtn.addEventListener('click', () => {
  playing ? (music.pause(), musicBtn.textContent = '🔇') : (music.play(), musicBtn.textContent = '🔊');
  playing = !playing;
});