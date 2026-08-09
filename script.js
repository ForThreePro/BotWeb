let cart = [];
let selectedCountry = {diamantes:'cl', design:'pe', spam:'pe', bots:'pe'};
let stockDia = 'con';
let audio = new Audio('garfield.mp3'); // TU MUSICA
audio.loop = true;

// PRECIOS COMPLETOS
const precios = {
  diamantes: {
    cl: {simbolo:'$', nombre:'Chile', con:{110:875,341:2450,572:4200,1166:7000,2398:12600,6160:32200}, sin:{110:1225,341:3500,572:5250,1166:9100,2398:18200,6160:44100}},
    ar: {simbolo:'$', nombre:'Argentina', con:{110:1300,341:3380,572:5720,1166:9880,2398:18200,6160:46800}, sin:{110:1820,341:4680,572:7800,1166:13520,2398:27040,6160:65520}},
    mx: {simbolo:'$', nombre:'Mexico', con:{110:18.75,341:52.50,572:90,1166:150,2398:270,6160:690}, sin:{110:26.25,341:75,572:112.5,1166:195,2398:390,6160:945}},
    bo: {simbolo:'$', nombre:'Bolivia', con:{110:11.25,341:31.5,572:54,1166:90,2398:162,6160:414}, sin:{110:15.75,341:45,572:67.5,1166:117,2398:234,6160:567}},
    uy: {simbolo:'$', nombre:'Uruguay', con:{110:37.5,341:105,572:180,1166:300,2398:540,6160:1380}, sin:{110:52.5,341:150,572:225,1166:390,2398:780,6160:1890}},
    pe: {simbolo:'S/', nombre:'Peru', con:{110:2.50,341:7.00,572:12.00,1166:20.00,2398:36.00,6160:92.00}, sin:{110:3.50,341:10.00,572:15.00,1166:26.00,2398:52.00,6160:126.00}}
  },
  design: {
    pe:{simbolo:'S/', nombre:'Peru', logo:3, plantilla:4, caligrafico:3, jersey:5},
    cl:{simbolo:'$', nombre:'Chile', logo:1050, plantilla:1050, caligrafico:1050, jersey:1750},
    ar:{simbolo:'$', nombre:'Argentina', logo:1560, plantilla:1560, caligrafico:1560, jersey:2600},
    mx:{simbolo:'$', nombre:'Mexico', logo:22.5, plantilla:22.5, caligrafico:22.5, jersey:37.5},
    bo:{simbolo:'$', nombre:'Bolivia', logo:13.5, plantilla:13.5, caligrafico:13.5, jersey:22.5},
    uy:{simbolo:'$', nombre:'Uruguay', logo:22.5, plantilla:22.5, caligrafico:22.5, jersey:75},
    co:{simbolo:'$', nombre:'Colombia', logo:4500, plantilla:4500, caligrafico:4500, jersey:7500},
    us:{simbolo:'$', nombre:'USA', logo:2, plantilla:2, caligrafico:2, jersey:2}
  },
  spam: {
    pe:{simbolo:'S/', nombre:'Peru', '3dias':5.50, '5dias':7.50, '1semana':9.50},
    cl:{simbolo:'$', nombre:'Chile', '3dias':1750, '5dias':2450, '1semana':3150},
    ar:{simbolo:'$', nombre:'Argentina', '3dias':2600, '5dias':3640, '1semana':4680},
    mx:{simbolo:'$', nombre:'Mexico', '3dias':37.5, '5dias':52.5, '1semana':67.5},
    bo:{simbolo:'$', nombre:'Bolivia', '3dias':22.5, '5dias':31.5, '1semana':40.5},
    uy:{simbolo:'$', nombre:'Uruguay', '3dias':75, '5dias':105, '1semana':135},
    co:{simbolo:'$', nombre:'Colombia', '3dias':7500, '5dias':10500, '1semana':13500},
    us:{simbolo:'$', nombre:'USA', '3dias':2, '5dias':3, '1semana':4}
  },
  bots: {
    pe: {simbolo:'S/', nombre:'Peru', mensual:3, personalizado:20},
    cl: {simbolo:'$', nombre:'Chile', mensual:1050, personalizado:7000},
    ar: {simbolo:'$', nombre:'Argentina', mensual:1560, personalizado:10400},
    mx: {simbolo:'$', nombre:'Mexico', mensual:22.5, personalizado:150},
    uy: {simbolo:'$', nombre:'Uruguay', mensual:22.5, personalizado:0},
    bo: {simbolo:'$', nombre:'Bolivia', mensual:13.5, personalizado:90},
    co: {simbolo:'$', nombre:'Colombia', mensual:4500, personalizado:0},
    us: {simbolo:'$', nombre:'USA', mensual:2, personalizado:8}
  }
};

// MUSICA CON LOCALSTORAGE - SOLUCION 2
function initMusic(){
  const btn = document.getElementById('play-btn');
  if(!btn) return;
  const isPlaying = localStorage.getItem('musicPlaying') === 'true';
  const currentTime = parseFloat(localStorage.getItem('musicTime')) || 0;
  audio.currentTime = currentTime;
  if(isPlaying) audio.play().catch(()=>{});
  btn.innerText = isPlaying? '⏸️' : '▶️';
  setInterval(()=>{ if(!audio.paused) localStorage.setItem('musicTime', audio.currentTime); }, 1000);
}
function toggleMusic(){
  const btn = document.getElementById('play-btn');
  if(!btn) return;
  if(audio.paused){
    audio.play().then(()=>{
      localStorage.setItem('musicPlaying', 'true');
      btn.innerText = '⏸️';
    }).catch(()=>{alert("Toca el botón ▶️ para activar la música")});
  }
  else {
    audio.pause();
    localStorage.setItem('musicPlaying', 'false');
    btn.innerText = '▶️';
  }
}

// MENU Y CARRITO
function toggleMenu(){
  document.getElementById('side-menu').classList.toggle('open');
  document.querySelector('.overlay').classList.toggle('open');
}
function toggleCart(){
  document.getElementById('cart').classList.toggle('open');
  document.querySelector('.overlay').classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', ()=>{
  const overlay = document.querySelector('.overlay');
  if(overlay) overlay.addEventListener('click', ()=>{
    document.getElementById('side-menu').classList.remove('open');
    document.getElementById('cart').classList.remove('open');
    overlay.classList.remove('open');
  });
});

function showToast(){const t=document.getElementById('toast'); if(t){t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2000);}}
function updateCart(){
  const c=document.getElementById('cart-items'); if(!c) return;
  c.innerHTML=''; let total=0;
  cart.forEach((item,i)=>{total+=item.price*item.qty; c.innerHTML+=`<div style="padding:10px; border-bottom:1px solid #333"><b>${item.name}</b><br>${item.details}<br>${item.moneda}${item.price} x${item.qty}</div>`;});
  document.getElementById('cart-count').innerText=cart.length;
}
function checkoutWhatsApp(){
  if(cart.length===0) return alert('Carrito vacío');
  let msg="Hola Lu! Quiero hacer este pedido:\n\n"; let total=0;
  cart.forEach(item=>{msg+=`*${item.name}*\nPaís: ${item.pais}\nPrecio: ${item.moneda}${item.price}\n${item.details}\n\n`; total+=item.price;});
  msg+=`Total: ${total}`; window.open(`https://wa.me/51XXXXXXXXX?text=${encodeURIComponent(msg)}`); // CAMBIA TU NUMERO
}

// LOGICA PRODUCTOS
function selectCountry(pais, btn, tipo){
  document.querySelectorAll(`#tabs-${tipo}.country-tab`).forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  selectedCountry[tipo]=pais;
  updatePrice(tipo);
}
function selectStockDia(tipo, btn){
  stockDia=tipo;
  document.getElementById('btn-con-dia').classList.remove('active');
  document.getElementById('btn-sin-dia').classList.remove('active');
  btn.classList.add('active');
  updatePrice('diamantes');
}
function updatePrice(tipo){
  if(tipo==='diamantes' && document.getElementById('cant-diamantes')){
    const cant=document.getElementById('cant-diamantes').value;
    const data=precios.diamantes[selectedCountry.diamantes];
    const precio=stockDia==='con'?data.con[cant]:data.sin[cant];
    document.getElementById('precio-diamantes').innerText=data.simbolo+precio;
  }
  if(tipo==='design' && document.getElementById('tipo-design')){
    const prod=document.getElementById('tipo-design').value;
    const data=precios.design[selectedCountry.design];
    document.getElementById('precio-design').innerText=data.simbolo+data[prod];
  }
  if(tipo==='spam' && document.getElementById('dias-spam')){
    const dias=document.getElementById('dias-spam').value;
    const data=precios.spam[selectedCountry.spam];
    document.getElementById('precio-spam').innerText=data.simbolo+data[dias];
  }
  if(tipo==='bots' && document.getElementById('tipo-bot')){
    const bot=document.getElementById('tipo-bot').value;
    const data=precios.bots[selectedCountry.bots];
    document.getElementById('precio-bots').innerText=data.simbolo+data[bot];
  }
}
function addDiamantesToCart(){
  const cant=document.getElementById('cant-diamantes').value;
  const nick=document.getElementById('nick-ff').value;
  const id=document.getElementById('id-ff').value;
  if(!nick||!id)return alert('Completa Nick e ID');
  const data=precios.diamantes[selectedCountry.diamantes];
  const precio=stockDia==='con'?data.con[cant]:data.sin[cant];
  cart.push({name:`Diamantes ${cant}💎`,price:precio,qty:1,details:`Nick: ${nick} | ID: ${id} | ${stockDia==='con'?'Con Stock':'Sin Stock'}`,moneda:data.simbolo,pais:data.nombre});
  updateCart(); showToast();
}
function addDesignToCart(){
  const prod=document.getElementById('tipo-design').value;
  const data=precios.design[selectedCountry.design];
  cart.push({name:`Design: ${prod}`,price:data[prod],qty:1,details:`Tipo: ${prod}`,moneda:data.simbolo,pais:data.nombre});
  updateCart(); showToast();
}
function addSpamToCart(){
  const dias=document.getElementById('dias-spam').value;
  const texto=document.getElementById('texto-spam').value;
  const link=document.getElementById('link-spam').value;
  if(!texto||!link)return alert('Completa texto y link');
  const data=precios.spam[selectedCountry.spam];
  cart.push({name:`Spam ${dias}`,price:data[dias],qty:1,details:`Texto: ${texto.substring(0,20)}... | Link: ${link}`,moneda:data.simbolo,pais:data.nombre});
  updateCart(); showToast();
}
function addBotToCart(){
  const tipo=document.getElementById('tipo-bot').value;
  const link=document.getElementById('link-bot').value;
  const data=precios.bots[selectedCountry.bots];
  if(tipo==='mensual'&&!link)return alert('Pon el link del Bot');
  cart.push({name:`Bot ${tipo}`,price:data[tipo],qty:1,details:tipo==='mensual'?`Link: ${link}`:'',moneda:data.simbolo,pais:data.nombre});
  updateCart(); showToast();
}
function toggleLinkField(){
  const g=document.getElementById('link-bot-group');
  if(g) g.style.display=document.getElementById('tipo-bot').value==='mensual'?'block':'none';
}

document.addEventListener('DOMContentLoaded', ()=>{
  initMusic();
  const btn = document.getElementById('play-btn');
  if(btn) btn.addEventListener('click', toggleMusic);
  updatePrice('diamantes');
  updatePrice('design');
  updatePrice('spam');
  updatePrice('bots');
});