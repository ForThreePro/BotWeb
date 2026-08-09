let cart = [];
let selectedCountry = {diamantes: 'cl', design: 'pe', spam: 'pe', bots: 'pe'};
const WHATSAPP = "51920726588";

const precios = {
  diamantes: {
    cl: {simbolo:'$', con:{110:875,341:2450,572:4200,1166:7000,2398:12600,6160:32200}},
    ar: {simbolo:'$', con:{110:1300,341:3380,572:5720,1166:9880,2398:18200,6160:46800}},
    mx: {simbolo:'$', con:{110:18.75,341:52.50,572:90,1166:150,2398:270,6160:690}},
    bo: {simbolo:'$', con:{110:11.25,341:31.5,572:54,1166:90,2398:162,6160:414}},
    uy: {simbolo:'$', con:{110:37.5,341:105,572:180,1166:300,2398:540,6160:1380}},
    pe: {simbolo:'S/', con:{110:2.50,341:7.00,572:12.00,1166:20.00,2398:36.00,6160:92.00}}
  },
  design: {
    pe: {simbolo:'S/', logo:3, plantilla:4, caligrafico:3, jersey:5},
    cl: {simbolo:'$', logo:1050, plantilla:1050, caligrafico:1050, jersey:1750},
    ar: {simbolo:'$', logo:1560, plantilla:1560, caligrafico:1560, jersey:2600},
    mx: {simbolo:'$', logo:22.5, plantilla:22.5, caligrafico:22.5, jersey:37.5},
    uy: {simbolo:'$', logo:22.5, plantilla:22.5, caligrafico:22.5, jersey:75},
    bo: {simbolo:'$', logo:13.5, plantilla:13.5, caligrafico:13.5, jersey:22.5},
    co: {simbolo:'$', logo:4500, plantilla:4500, caligrafico:4500, jersey:7500},
    us: {simbolo:'$', logo:2, plantilla:2, caligrafico:2, jersey:2}
  },
  spam: {
    pe: {simbolo:'S/', '3dias':5.50, '5dias':7.50, '1semana':9.50},
    cl: {simbolo:'$', '3dias':1750, '5dias':2450, '1semana':3150},
    ar: {simbolo:'$', '3dias':2600, '5dias':3640, '1semana':4680},
    mx: {simbolo:'$', '3dias':37.5, '5dias':52.5, '1semana':67.5},
    uy: {simbolo:'$', '3dias':75, '5dias':105, '1semana':135},
    bo: {simbolo:'$', '3dias':22.5, '5dias':31.5, '1semana':40.5},
    co: {simbolo:'$', '3dias':7500, '5dias':10500, '1semana':13500},
    us: {simbolo:'$', '3dias':2, '5dias':3, '1semana':4}
  },
  bots: {
    pe: {simbolo:'S/', mensual:3, personalizado:20},
    cl: {simbolo:'$', mensual:1050, personalizado:7000},
    ar: {simbolo:'$', mensual:1560, personalizado:10400},
    mx: {simbolo:'$', mensual:22.5, personalizado:150},
    uy: {simbolo:'$', mensual:22.5, personalizado:90},
    bo: {simbolo:'$', mensual:13.5, personalizado:90},
    co: {simbolo:'$', mensual:4500, personalizado:0},
    us: {simbolo:'$', mensual:2, personalizado:8}
  }
};

function toggleMenu(){document.getElementById('side-menu').classList.toggle('active');document.querySelector('.overlay').classList.toggle('active');document.querySelector('.hamburger').classList.toggle('active');}
function toggleCart(){document.getElementById('cart').classList.toggle('active');document.querySelector('.overlay').classList.toggle('active');}

function addToCart(name, price){cart.push({name, price, qty:1, details:''}); updateCart(); showToast();}
function removeItem(index){cart.splice(index, 1); updateCart();}

function updateCart(){
  document.getElementById('cart-count').innerText = cart.length;
  document.getElementById('cart-items').innerHTML = cart.length === 0?
    "<p style='color:var(--text-muted)'>Carrito vacío</p>" :
    cart.map((i, index) => `
      <div class="cart-item">
        <div style="flex:1"><b>${i.name}</b>${i.details? `<div style="color:var(--text-muted)">${i.details}</div>` : ''}<div style="color:var(--green)">S/ ${i.price.toFixed(2)}</div></div>
        <button class="cart-delete" onclick="removeItem(${index})">🗑️</button>
      </div>
    `).join('');
  document.getElementById('cart-total').innerText = cart.reduce((a,b)=>a + b.price,0).toFixed(2);
}

function checkoutWhatsApp(){
  if(cart.length === 0) return alert('Tu carrito está vacío');
  let msg = "Hola Lu! Quiero hacer este pedido:%0A%0A";
  cart.forEach(i => {
    msg += `• ${i.name} = S/ ${i.price.toFixed(2)}%0A`;
    if(i.details) msg += ` ${i.details}%0A`;
  });
  msg += `%0ATotal: S/ ${document.getElementById('cart-total').innerText}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
}

function openModal(tipo){
  document.getElementById('modal-'+tipo).classList.add('active');
  document.querySelector('.overlay').classList.add('active');
  updatePrice(tipo);
  if(tipo === 'bots') toggleLinkField();
}
function closeModal(tipo){
  document.getElementById('modal-'+tipo).classList.remove('active');
  document.querySelector('.overlay').classList.remove('active');
}

function selectCountry(pais, btn, tipo){
  selectedCountry[tipo] = pais;
  btn.parentElement.querySelectorAll('.country-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  updatePrice(tipo);
}

function updatePrice(tipo){
  if(tipo === 'diamantes'){
    const cant = document.getElementById('cant-diamantes').value;
    const data = precios.diamantes[selectedCountry.diamantes];
    document.getElementById('precio-diamantes').innerText = data.simbolo + data.con[cant];
  }
  if(tipo === 'design'){
    const prod = document.getElementById('tipo-design').value;
    const data = precios.design[selectedCountry.design];
    document.getElementById('precio-design').innerText = data.simbolo + data[prod];
  }
  if(tipo === 'spam'){
    const dias = document.getElementById('dias-spam').value;
    const data = precios.spam[selectedCountry.spam];
    document.getElementById('precio-spam').innerText = data.simbolo + data[dias];
  }
  if(tipo === 'bots'){
    const bot = document.getElementById('tipo-bot').value;
    const data = precios.bots[selectedCountry.bots];
    document.getElementById('precio-bots').innerText = data.simbolo + data[bot];
  }
}

function toggleLinkField(){
  const tipo = document.getElementById('tipo-bot').value;
  document.getElementById('link-bot-group').style.display = tipo === 'mensual'? 'block' : 'none';
}

function addDiamantesToCart(){
  const cant = document.getElementById('cant-diamantes').value;
  const nick = document.getElementById('nick-ff').value;
  const id = document.getElementById('id-ff').value;
  if(!nick ||!id) return alert('Completa Nick e ID de Free Fire');
  const data = precios.diamantes[selectedCountry.diamantes];
  cart.push({name: `Diamantes ${cant}💎`, price: data.con[cant], qty: 1, details: `País: ${data.simbolo} | Nick: ${nick} | ID: ${id}`});
  updateCart(); showToast(); closeModal('diamantes');
  document.getElementById('nick-ff').value = ''; document.getElementById('id-ff').value = '';
}

function addDesignToCart(){
  const prod = document.getElementById('tipo-design').value;
  const nombres = {logo:'Tex Logo y Logos', plantilla:'Plantillas 2x1', caligrafico:'Caligráficos 2x1', jersey:'Jersey'};
  const data = precios.design[selectedCountry.design];
  cart.push({name: `Design - ${nombres[prod]}`, price: data[prod], qty: 1, details: `País: ${data.simbolo}`});
  updateCart(); showToast(); closeModal('design');
}

function addSpamToCart(){
  const dias = document.getElementById('dias-spam').value;
  const texto = document.getElementById('texto-spam').value;
  const link = document.getElementById('link-spam').value;
  if(!texto ||!link) return alert('Completa el texto y link para spam');
  const data = precios.spam[selectedCountry.spam];
  const nombres = {'3dias':'3 Días', '5dias':'5 Días', '1semana':'1 Semana'};
  cart.push({name: `Spam ${nombres[dias]}`, price: data[dias], qty: 1, details: `País: ${data.simbolo} | Texto: ${texto.substring(0,30)}... | Link: ${link}`});
  updateCart(); showToast(); closeModal('spam');
  document.getElementById('texto-spam').value = ''; document.getElementById('link-spam').value = '';
}

function addBotToCart(){
  const tipo = document.getElementById('tipo-bot').value;
  const link = document.getElementById('link-bot').value;
  const data = precios.bots[selectedCountry.bots];
  
  if(tipo === 'mensual' &&!link) return alert('Pon el link de WhatsApp del Bot');
  
  const nombres = {mensual:'Bot Mensual', personalizado:'Bot Personalizado'};
  let details = `País: ${data.simbolo}`;
  if(tipo === 'mensual') details += ` | Link: ${link}`;
  
  cart.push({name: nombres[tipo], price: data[tipo], qty: 1, details: details});
  updateCart(); showToast(); closeModal('bots');
  document.getElementById('link-bot').value = '';
}

function showToast(){
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}