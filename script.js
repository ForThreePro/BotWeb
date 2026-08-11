const numero = "51920726588";
let carrito = [];

const precios = {
  "spam_3d": {PE:"S/5.50", CL:"$1750", AR:"$2600", MX:"$37.5", BO:"Bs22.5", UY:"$75", US:"$2", CO:"$7500"},
  "spam_5d": {PE:"S/7.50", CL:"$2450", AR:"$3640", MX:"$52.5", BO:"Bs31.5", UY:"$105", US:"$3", CO:"$10500"},
  "spam_7d": {PE:"S/9.50", CL:"$3150", AR:"$4680", MX:"$67.5", BO:"Bs40.5", UY:"$135", US:"$4", CO:"$13500"},
  "d110c": {PE:"S/2.50", CL:"$875", AR:"$1300", MX:"$18.75", BO:"Bs11.25", UY:"$37.5", US:"Consultar", CO:"Consultar"},
  "d341c": {PE:"S/7.00", CL:"$2450", AR:"$3380", MX:"$52.50", BO:"Bs31.5", UY:"$105", US:"Consultar", CO:"Consultar"},
  "d572c": {PE:"S/12.00", CL:"$4200", AR:"$5720", MX:"$90", BO:"Bs54", UY:"$180", US:"Consultar", CO:"Consultar"},
  "d1166c":{PE:"S/20.00", CL:"$7000", AR:"$9880", MX:"$150", BO:"Bs90", UY:"$300", US:"Consultar", CO:"Consultar"},
  "d2398c":{PE:"S/36.00", CL:"$12600", AR:"$18200", MX:"$270", BO:"Bs162", UY:"$540", US:"Consultar", CO:"Consultar"},
  "d6160c":{PE:"S/92.00", CL:"$32200", AR:"$46800", MX:"$690", BO:"Bs414", UY:"$1380", US:"Consultar", CO:"Consultar"},
  "d110s": {PE:"S/3.50", CL:"$1225", AR:"$1820", MX:"$26.25", BO:"Bs15.75", UY:"$52.5", US:"Consultar", CO:"Consultar"},
  "d341s": {PE:"S/10.00", CL:"$3500", AR:"$4680", MX:"$75", BO:"Bs45", UY:"$150", US:"Consultar", CO:"Consultar"},
  "d572s": {PE:"S/15.00", CL:"$5250", AR:"$7800", MX:"$112.5", BO:"Bs67.5", UY:"$225", US:"Consultar", CO:"Consultar"},
  "d1166s":{PE:"S/26.00", CL:"$9100", AR:"$13520", MX:"$195", BO:"Bs117", UY:"$390", US:"Consultar", CO:"Consultar"},
  "d2398s":{PE:"S/52.00", CL:"$18200", AR:"$27040", MX:"$390", BO:"Bs234", UY:"$780", US:"Consultar", CO:"Consultar"},
  "d6160s":{PE:"S/126.00", CL:"$44100", AR:"$65520", MX:"$945", BO:"Bs567", UY:"$1890", US:"Consultar", CO:"Consultar"},
  "logo": {PE:"S/3", CL:"$1050", AR:"$1560", MX:"$22.5", BO:"Bs13.5", UY:"$22.5", US:"$2", CO:"$4500"},
  "plantilla":{PE:"S/4", CL:"$1050", AR:"$1560", MX:"$22.5", BO:"Bs13.5", UY:"$22.5", US:"$2", CO:"$4500"},
  "caligra":{PE:"S/3", CL:"$1050", AR:"$1560", MX:"$22.5", BO:"Bs13.5", UY:"$22.5", US:"$2", CO:"$4500"},
  "jersey": {PE:"S/5", CL:"$1750", AR:"$2600", MX:"$37.5", BO:"Bs22.5", UY:"$75", US:"$2", CO:"$7500"},
  "decana": {PE:"S/15", CL:"$5000", AR:"$7000", MX:"$114", BO:"Bs55.5", UY:"$210", US:"Consultar", CO:"Consultar"},
  "seg_250": {PE:"S/1.50", CL:"$525", AR:"$520", MX:"$11.25", BO:"Bs6.75", UY:"$22.5", US:"Consultar", CO:"Consultar"},
  "seg_500": {PE:"S/2.50", CL:"$875", AR:"$1040", MX:"$18.75", BO:"Bs11.25",UY:"$37.5", US:"Consultar", CO:"Consultar"},
  "seg_1000": {PE:"S/5", CL:"$1750", AR:"$2080", MX:"$37.5", BO:"Bs22.5", UY:"$75", US:"Consultar", CO:"Consultar"},
  "seg_2000": {PE:"S/10", CL:"$3500", AR:"$4680", MX:"$75", BO:"Bs45", UY:"$150", US:"Consultar", CO:"Consultar"},
  "seg_5000": {PE:"S/20", CL:"$7000", AR:"$9360", MX:"$150", BO:"Bs90", UY:"$300", US:"Consultar", CO:"Consultar"},
}

const descripciones = {
  "spam_3d": "3 días de spam. 3 horas por día. Puro texto. Inicio al día siguiente.",
  "spam_5d": "5 días de spam. 3 horas por día. Puro texto. Inicio al día siguiente.",
  "spam_7d": "7 días de spam. 3 horas por día. Puro texto. Inicio al día siguiente.",
  "d110c": "110 Diamantes CON STOCK. Recarga rápida. Manda tu ID.",
  "d341c": "341 Diamantes CON STOCK. Recarga rápida. Manda tu ID.",
  "d572c": "572 Diamantes CON STOCK. Recarga rápida. Manda tu ID.",
  "d1166c":"1166 Diamantes CON STOCK. Recarga rápida. Manda tu ID.",
  "d2398c":"2398 Diamantes CON STOCK. Recarga rápida. Manda tu ID.",
  "d6160c":"6160 Diamantes CON STOCK. Recarga rápida. Manda tu ID.",
  "d110s": "110 Diamantes SIN STOCK. Puede demorar. Manda tu ID.",
  "d341s": "341 Diamantes SIN STOCK. Puede demorar. Manda tu ID.",
  "d572s": "572 Diamantes SIN STOCK. Puede demorar. Manda tu ID.",
  "d1166s":"1166 Diamantes SIN STOCK. Puede demorar. Manda tu ID.",
  "d2398s":"2398 Diamantes SIN STOCK. Puede demorar. Manda tu ID.",
  "d6160s":"6160 Diamantes SIN STOCK. Puede demorar. Manda tu ID.",
  "logo": "Logo o Tex Logo personalizado. Entrega en 2 días máx.",
  "plantilla":"Plantillas 2x1. Diseños para clanes. Entrega en 2 días.",
  "caligra":"Caligráficos 2x1. Nombres bonitos. Entrega en 2 días.",
  "jersey": "Diseño de Jersey para clan. Entrega en 2 días.",
  "decana": "Combo Decana Semanal: Vs diario + Reclutamiento + Edición VS.",
  "seg_250": "250 Seguidores Instagram. Entrega gradual y segura.",
  "seg_500": "500 Seguidores Instagram. Entrega gradual y segura.",
  "seg_1000": "1000 Seguidores Instagram. Entrega gradual y segura.",
  "seg_2000": "2000 Seguidores Instagram. Entrega gradual y segura.",
  "seg_5000": "5000 Seguidores Instagram. Entrega gradual y segura.",
}

const productosData = [
  {cat:"📢 SPAM 3H x DÍA", items:["spam_3d","spam_5d","spam_7d"]},
  {cat:"💎 DIAMANTES CON STOCK", clase:"stock", items:["d110c","d341c","d572c","d1166c","d2398c","d6160c"]},
  {cat:"💎 DIAMANTES SIN STOCK", clase:"no-stock", items:["d110s","d341s","d572s","d1166s","d2398s","d6160s"]},
  {cat:"🖌️ LUU DESIGN", items:["logo","plantilla","caligra","jersey"]},
  {cat:"🎀 COMBO DECANA LUU", items:["decana"]},
  {cat:"📈 SEGUIDORES INSTAGRAM", items:["seg_250","seg_500","seg_1000","seg_2000","seg_5000"]}
]

// MENU HAMBURGUESA
function toggleMenu(){
  document.getElementById("menuLateral").classList.toggle("active");
  document.getElementById("overlayMenu").classList.toggle("active");
}
function scrollToSeccion(id){
  document.getElementById(id).scrollIntoView({behavior: "smooth"});
  toggleMenu();
}

// CARGAR PRODUCTOS
function cargarProductos(){
  let html = "";
  productosData.forEach(cat=>{
    html += `<div class="card"><h2 class="${cat.clase||''}">${cat.cat}</h2>`;
    cat.items.forEach(id=>{
      let nombre = id.replace(/_/g,' ').toUpperCase();
      html += `<div class="producto">
        <div class="prod-info">
          <b>${nombre}</b> - <span class="precio" data-precio="${id}"></span>
          <div class="desc" id="desc-${id}" style="display:none;">${descripciones[id]}</div>
        </div>
        <div class="prod-btns">
          <button class="btn-ver" onclick="toggleDesc('${id}')">Ver</button>
          <button class="btn-add" onclick="agregarCarrito('${id}','${nombre}')">+ Añadir</button>
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  document.getElementById("productos").innerHTML = html;
  cambiarPrecios();
}

function toggleDesc(id){
  let desc = document.getElementById(`desc-${id}`);
  desc.style.display = desc.style.display === 'block'? 'none' : 'block';
}

function buscarProducto(){
  let filtro = document.getElementById("buscador").value.toLowerCase();
  document.querySelectorAll(".producto").forEach(p=>{
    let texto = p.innerText.toLowerCase();
    p.style.display = texto.includes(filtro)? 'flex' : 'none';
  })
}

// TEMA Y MÚSICA
function toggleTema(){
  document.body.classList.toggle("light");
  document.getElementById("btnTema").innerText = document.body.classList.contains("light")? '☀️' : '🌙';
}
function toggleMusica(){
  let audio = document.getElementById("musicaFondo");
  let btn = document.getElementById("btnMusica");
  if(audio.paused){
    audio.play();
    btn.innerText = "🔇 Pausar Música";
  } else {
    audio.pause();
    btn.innerText = "🔊 Activar Música";
  }
}

// PRECIOS Y CARRITO
function cambiarPrecios(){
  let pais = document.getElementById("pais").value;
  document.querySelectorAll("[data-precio]").forEach(el=>{
    let id = el.getAttribute("data-precio");
    el.innerText = precios[id][pais];
  })
  localStorage.setItem("paisGarfield", pais);
}

function agregarCarrito(id, nombre){
  let pais = document.getElementById("pais").value;
  let precio = precios[id][pais];
  if(id.includes('s') && id.startsWith('d')){
    let confirmar = confirm(`⚠️ ATENCIÓN: ${nombre} SIN STOCK\n\nTodo depende de tu idea de juego. Si ya hiciste una recarga, el sin stock no está habilitado.\n\n¿Deseas añadirlo al carrito igual?`);
    if(!confirmar) return;
  }
  carrito.push({nombre, precio, id});
  actualizarCarrito();
  alert(`${nombre} añadido al carrito ✅`);
}

function actualizarCarrito(){
  document.getElementById("totalItems").innerText = carrito.length;
  let html = "";
  carrito.forEach((item)=>{
    let tag = item.id.includes('s') && item.id.startsWith('d')? ' [SIN STOCK]' : ' [CON STOCK]';
    html += `<p>${item.nombre}${tag} - ${item.precio}</p>`;
  });
  document.getElementById("listaCarrito").innerHTML = html;
}

// WHATSAPP
function abrirPopUpID(){
  if(carrito.length === 0) return alert("Tu carrito está vacío");
  document.getElementById("popupID").style.display = "flex";
}
function cerrarPopUpID(){
  document.getElementById("popupID").style.display = "none";
}

function enviarWhatsApp(){
  let id = document.getElementById("idFinal").value;
  if(!id) return alert("Pon tu ID");
  let pais = document.getElementById("pais").value;
  let texto = `Hola Garfield Store 😼 Soy de ${pais}. Mi ID: ${id}\n\nMi pedido:\n`;
  carrito.forEach(item=>{
    let tag = item.id.includes('s') && item.id.startsWith('d')? ' [SIN STOCK]' : ' [CON STOCK]';
    texto += `- ${item.nombre}${tag}: ${item.precio}\n`
  });
  texto += `\nNOTA: Si ya hiciste recarga, SIN STOCK no está habilitado.`;
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`,"_blank");
  carrito = []; actualizarCarrito(); cerrarPopUpID();
}

// INICIO
window.onload = ()=>{
  let paisGuardado = localStorage.getItem("paisGarfield") || "PE";
  document.getElementById("pais").value = paisGuardado;
  cargarProductos();
  document.getElementById("musicaFondo").volume = 0.4;
}