let productoActual = {nombre: '', precio: 0, pais: ''};

function filtrar(c) {
  document.querySelectorAll('.producto').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.filter-btn').forEach(b => b.className = 'filter-btn px-5 py-2.5 rounded-xl text-sm font-bold text-gray-600');
  if(c === 'todos') {
    document.querySelectorAll('.producto').forEach(p => p.style.display = 'block');
    document.getElementById('btn-todos').className = 'filter-btn filter-active px-5 py-2.5 rounded-xl text-sm font-bold';
  } else {
    document.querySelectorAll('.' + c).forEach(p => p.style.display = 'block');
    document.getElementById('btn-' + c).className = 'filter-btn filter-active px-5 py-2.5 rounded-xl text-sm font-bold';
  }
}
function cerrarPopup() { document.getElementById('popup').style.display = 'none'; }

// DIAMANTES COMPLETOS
function abrirPopupDiamantes() {
  document.getElementById('popup-titulo').innerText = 'Recargas Free Fire 💎';
  document.getElementById('popup-contenido').innerHTML = `
    <p class="font-bold mb-2">1. Elige País:</p>
    <div class="grid grid-cols-3 gap-2 mb-4">
      <button onclick="selectPais('PERU')" class="variant-btn p-2 rounded-xl font-bold">🇵🇪 PERÚ</button>
      <button onclick="selectPais('CHILE')" class="variant-btn p-2 rounded-xl font-bold">🇨🇱 CHILE</button>
      <button onclick="selectPais('ARGENTINA')" class="variant-btn p-2 rounded-xl font-bold">🇦🇷 ARG</button>
      <button onclick="selectPais('MEXICO')" class="variant-btn p-2 rounded-xl font-bold">🇲🇽 MEX</button>
      <button onclick="selectPais('BOLIVIA')" class="variant-btn p-2 rounded-xl font-bold">🇧🇴 BOL</button>
      <button onclick="selectPais('URUGUAY')" class="variant-btn p-2 rounded-xl font-bold">🇺🇾 UY</button>
    </div>
    <div id="precios-diamantes"></div>
  `;
  document.getElementById('popup').style.display = 'flex';
}

function selectPais(pais) {
  document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('variant-active'));
  event.target.classList.add('variant-active');
  productoActual.pais = pais;
  let precios = {
    PERU: {con: [['110💎',2.50],['341💎',7.00],['572💎',12.00],['1166💎',20.00],['2398💎',36.00],['6160💎',92.00]], sin: [['110💎',3.50],['341💎',10.00],['572💎',15.00],['1166💎',26.00],['2398💎',52.00],['6160💎',126.00]]},
    CHILE: {con: [['110💎',875],['341💎',2450],['572💎',4200],['1166💎',7000],['2398💎',12600],['6160💎',32200]], sin: [['110💎',1225],['341💎',3500],['572💎',5250],['1166💎',9100],['2398💎',18200],['6160💎',44100]]},
    ARGENTINA: {con: [['110💎',1300],['341💎',3380],['572💎',5720],['1166💎',9880],['2398💎',18200],['6160💎',46800]], sin: [['110💎',1820],['341💎',4680],['572💎',7800],['1166💎',13520],['2398💎',27040],['6160💎',65520]]},
    MEXICO: {con: [['110💎',18.75],['341💎',52.50],['572💎',90],['1166💎',150],['2398💎',270],['6160💎',690]], sin: [['110💎',26.25],['341💎',75],['572💎',112.5],['1166💎',195],['2398💎',390],['6160💎',945]]},
    BOLIVIA: {con: [['110💎',11.25],['341💎',31.5],['572💎',54],['1166💎',90],['2398💎',162],['6160💎',414]], sin: [['110💎',15.75],['341💎',45],['572💎',67.5],['1166💎',117],['2398💎',234],['6160💎',567]]},
    URUGUAY: {con: [['110💎',37.5],['341💎',105],['572💎',180],['1166💎',300],['2398💎',540],['6160💎',1380]], sin: [['110💎',52.5],['341💎',150],['572💎',225],['1166💎',390],['2398💎',780],['6160💎',1890]]}
  };
  let moneda = pais === 'PERU'? 'S/' : '$';
  document.getElementById('precios-diamantes').innerHTML = `
    <p class="text-sm bg-blue-50 p-2 rounded-xl mb-3">Para saber tu stock mandarme su ID. Recargas en mañanas y noches.</p>
    <div class="stock-box border-green-500 rounded-xl p-3 mb-3"><p class="font-black text-green-600">CON STOCK - 1 SOLA VEZ</p><div class="grid grid-cols-3 gap-2 mt-2">${precios[pais].con.map(p => `<button onclick="setProducto('${p[0]} CON STOCK', ${p[1]})" class="btn-primary p-2 rounded-xl text-xs">${p[0]}<br>${moneda}${p[1]}</button>`).join('')}</div></div>
    <div class="stock-box border-red-500 rounded-xl p-3 mb-4"><p class="font-black text-red-600">SIN STOCK - CANTIDAD LIBRE</p><div class="grid grid-cols-3 gap-2 mt-2">${precios[pais].sin.map(p => `<button onclick="setProducto('${p[0]} SIN STOCK', ${p[1]})" class="btn-primary p-2 rounded-xl text-xs">${p[0]}<br>${moneda}${p[1]}</button>`).join('')}</div></div>
    ${formDatosDiamantes()}
  `;
}

// SPAM COMPLETO
function abrirPopupSpam() {
  document.getElementById('popup-titulo').innerText = 'Spam 3x3 Horas 📢';
  document.getElementById('popup-contenido').innerHTML = `
    <p class="text-sm bg-orange-50 p-3 rounded-xl mb-4">El spam es x3 horas al día. Si pagan tarde/noche inicia al día siguiente. Es puro texto.</p>
    <button onclick="selectSpam('3 Dias')" class="variant-btn w-full p-3 rounded-xl mb-2 font-bold">3 Días</button>
    <button onclick="selectSpam('5 Dias')" class="variant-btn w-full p-3 rounded-xl mb-2 font-bold">5 Días</button>
    <button onclick="selectSpam('1 Semana')" class="variant-btn w-full p-3 rounded-xl mb-4 font-bold">1 Semana</button>
    <div class="grid grid-cols-4 gap-2 mb-4" id="paises-spam"></div>
    <div id="precio-spam"></div>
  `;
  document.getElementById('popup').style.display = 'flex';
}
function selectSpam(dias) {
  document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('variant-active'));
  event.target.classList.add('variant-active');
  productoActual.dias = dias;
  document.getElementById('paises-spam').innerHTML = `<button onclick="setPrecioSpam('PERU')" class="variant-btn p-2 rounded-xl text-xs">🇵🇪</button><button onclick="setPrecioSpam('CHILE')" class="variant-btn p-2 rounded-xl text-xs">🇨🇱</button><button onclick="setPrecioSpam('ARGENTINA')" class="variant-btn p-2 rounded-xl text-xs">🇦🇷</button><button onclick="setPrecioSpam('URUGUAY')" class="variant-btn p-2 rounded-xl text-xs">🇺🇾</button><button onclick="setPrecioSpam('BOLIVIA')" class="variant-btn p-2 rounded-xl text-xs">🇧🇴</button><button onclick="setPrecioSpam('COLOMBIA')" class="variant-btn p-2 rounded-xl text-xs">🇨🇴</button><button onclick="setPrecioSpam('USA')" class="variant-btn p-2 rounded-xl text-xs">🇺🇸</button><button onclick="setPrecioSpam('MEXICO')" class="variant-btn p-2 rounded-xl text-xs">🇲🇽</button>`;
}
function setPrecioSpam(pais) {
  productoActual.pais = pais;
  let precios = {'3 Dias': {PERU:5.50, CHILE:1750, ARGENTINA:2600, URUGUAY:75, BOLIVIA:22.5, COLOMBIA:7500, USA:2, MEXICO:37.5},'5 Dias': {PERU:7.50, CHILE:2450, ARGENTINA:3640, URUGUAY:105, BOLIVIA:31.5, COLOMBIA:10500, USA:3, MEXICO:52.5},'1 Semana': {PERU:9.50, CHILE:3150, ARGENTINA:4680, URUGUAY:135, BOLIVIA:40.5, COLOMBIA:13500, USA:4, MEXICO:67.5}};
  let simbolos = {PERU:'S/', CHILE:'$', ARGENTINA:'$', URUGUAY:'$', BOLIVIA:'Bs', COLOMBIA:'$', USA:'$', MEXICO:'$'};
  let precio = precios[productoActual.dias][pais];
  setProducto(`Spam ${productoActual.dias}`, precio);
  document.getElementById('precio-spam').innerHTML = `<p class="text-3xl font-black text-orange-500 mb-4">${simbolos[pais]} ${precio}</p>${formDatosSpam()}`;
}

// DESIGN COMPLETO
function abrirPopupDesign() {
  document.getElementById('popup-titulo').innerText = 'Design Luu 🖌️';
  document.getElementById('popup-contenido').innerHTML = `
    <p class="text-sm bg-orange-50 p-3 rounded-xl mb-4">Pedido demora max 2 días. No hago devoluciones. Respondo tardes y noches.</p>
    <button onclick="selectDesign('Tex Logo')" class="variant-btn w-full p-3 rounded-xl mb-2 font-bold">Tex Logo y Logos</button>
    <button onclick="selectDesign('Plantillas 2x1')" class="variant-btn w-full p-3 rounded-xl mb-2 font-bold">Plantillas 2x1</button>
    <button onclick="selectDesign('Caligráficos 2x1')" class="variant-btn w-full p-3 rounded-xl mb-2 font-bold">Caligráficos 2x1</button>
    <button onclick="selectDesign('Jersey')" class="variant-btn w-full p-3 rounded-xl mb-4 font-bold">Jersey</button>
    <div class="grid grid-cols-4 gap-2 mb-4" id="paises-design"></div>
    <div id="precio-design"></div>
  `;
  document.getElementById('popup').style.display = 'flex';
}
function selectDesign(servicio) {
  document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('variant-active'));
  event.target.classList.add('variant-active');
  productoActual.servicio = servicio;
  document.getElementById('paises-design').innerHTML = `<button onclick="setPrecioDesign('PERU')" class="variant-btn p-2 rounded-xl text-xs">🇵🇪</button><button onclick="setPrecioDesign('CHILE')" class="variant-btn p-2 rounded-xl text-xs">🇨🇱</button><button onclick="setPrecioDesign('ARGENTINA')" class="variant-btn p-2 rounded-xl text-xs">🇦🇷</button><button onclick="setPrecioDesign('URUGUAY')" class="variant-btn p-2 rounded-xl text-xs">🇺🇾</button><button onclick="setPrecioDesign('BOLIVIA')" class="variant-btn p-2 rounded-xl text-xs">🇧🇴</button><button onclick="setPrecioDesign('COLOMBIA')" class="variant-btn p-2 rounded-xl text-xs">🇨🇴</button><button onclick="setPrecioDesign('USA')" class="variant-btn p-2 rounded-xl text-xs">🇺🇸</button><button onclick="setPrecioDesign('MEXICO')" class="variant-btn p-2 rounded-xl text-xs">🇲🇽</button>`;
}
function setPrecioDesign(pais) {
  productoActual.pais = pais;
  let precios = {'Tex Logo': {PERU:3, CHILE:1050, ARGENTINA:1560, URUGUAY:22.5, BOLIVIA:13.5, COLOMBIA:4500, USA:2, MEXICO:22.5},'Plantillas 2x1': {PERU:4, CHILE:1050, ARGENTINA:1560, URUGUAY:22.5, BOLIVIA:13.5, COLOMBIA:4500, USA:2, MEXICO:22.5},'Caligráficos 2x1': {PERU:3, CHILE:1050, ARGENTINA:1560, URUGUAY:22.5, BOLIVIA:13.5, COLOMBIA:4500, USA:2, MEXICO:22.5},'Jersey': {PERU:5, CHILE:1750, ARGENTINA:2600, URUGUAY:75, BOLIVIA:22.5, COLOMBIA:7500, USA:2, MEXICO:37.5}};
  let simbolos = {PERU:'S/', CHILE:'$', ARGENTINA:'$', URUGUAY:'$', BOLIVIA:'Bs', COLOMBIA:'$', USA:'$', MEXICO:'$'};
  let precio = precios[productoActual.servicio][pais];
  setProducto(productoActual.servicio, precio);
  document.getElementById('precio-design').innerHTML = `<p class="text-3xl font-black text-orange-500 mb-4">${simbolos[pais]} ${precio}</p>${formDatosDesign()}`;
}

// BOTS Y OTROS
function abrirPopupBots() { document.getElementById('popup-titulo').innerText = 'Bots 🤖'; document.getElementById('popup-contenido').innerHTML = `<button onclick="setProducto('Bot Mensual', 3)" class="btn-primary w-full p-3 rounded-xl mb-2">Bot Mensual - S/ 3 | $2 USD</button><button onclick="setProducto('Bot Personalizado', 20)" class="btn-primary w-full p-3 rounded-xl mb-4">Bot Personalizado - S/ 20 | $8 USD</button>${formDatosBots()}`; document.getElementById('popup').style.display = 'flex'; }
function abrirPopupSeguidores() { document.getElementById('popup-titulo').innerText = 'Seguidores 👥'; document.getElementById('popup-contenido').innerHTML = `<button onclick="setProducto('500 Seguidores IG', 2)" class="btn-primary w-full p-3 rounded-xl mb-2">500 Seguidores - S/ 2.00</button><button onclick="setProducto('1000 Seguidores IG', 5)" class="btn-primary w-full p-3 rounded-xl mb-2">1000 Seguidores - S/ 5.00</button><button onclick="setProducto('2000 Seguidores IG', 9)" class="btn-primary w-full p-3 rounded-xl mb-4">2000 Seguidores - S/ 9.00</button>${formDatosSeguidores()}`; document.getElementById('popup').style.display = 'flex'; }
function abrirPopupSimple(nombre, precio) { setProducto(nombre, precio); document.getElementById('popup-titulo').innerText = nombre; document.getElementById('popup-contenido').innerHTML = `<p class="text-lg mb-2"><b>${nombre}</b></p><p class="text-3xl font-black text-orange-500 mb-4">S/ ${precio}.00</p>${formDatosSimple()}`; document.getElementById('popup').style.display = 'flex'; }
function setProducto(nombre, precio) { productoActual = {nombre, precio, pais: productoActual.pais}; }

// FORMS
function formDatosDiamantes() { return `<input id="nombreCliente" type="text" placeholder="Tu Nombre" class="w-full border rounded-xl p-3 mb-3"><input id="idJuego" type="text" placeholder="ID del Juego" class="w-full border rounded-xl p-3 mb-3"><input id="nickJuego" type="text" placeholder="Nick del Juego" class="w-full border rounded-xl p-3 mb-4"><button onclick="enviarWhatsApp()" class="btn-whatsapp w-full py-4 rounded-xl font-bold text-lg">ENVIAR A WHATSAPP LU</button>`; }
function formDatosSpam() { return `<input id="nombreCliente" type="text" placeholder="Tu Nombre" class="w-full border rounded-xl p-3 mb-3"><input id="textoSpam" type="text" placeholder="Texto que quieres enviar" class="w-full border rounded-xl p-3 mb-4"><button onclick="enviarWhatsApp()" class="btn-whatsapp w-full py-4 rounded-xl font-bold text-lg">ENVIAR A WHATSAPP LU</button>`; }
function formDatosDesign() { return `<input id="nombreCliente" type="text" placeholder="Tu Nombre" class="w-full border rounded-xl p-3 mb-3"><input id="detalleDesign" type="text" placeholder="Que diseño quieres?" class="w-full border rounded-xl p-3 mb-4"><button onclick="enviarWhatsApp()" class="btn-whatsapp w-full py-4 rounded-xl font-bold text-lg">ENVIAR A WHATSAPP LU</button>`; }
function formDatosBots() { return `<input id="nombreCliente" type="text" placeholder="Tu Nombre" class="w-full border rounded-xl p-3 mb-3"><input id="linkGrupo" type="text" placeholder="Link del Grupo" class="w-full border rounded-xl p-3 mb-3"><input id="nombreBot" type="text" placeholder="Nombre del Bot" class="w-full border rounded-xl p-3 mb-3"><input id="numeroBot" type="text" placeholder="Número del Bot" class="w-full border rounded-xl p-3 mb-4"><button onclick="enviarWhatsApp()" class="btn-whatsapp w-full py-4 rounded-xl font-bold text-lg">ENVIAR A WHATSAPP LU</button>`; }
function formDatosSeguidores() { return `<input id="nombreCliente" type="text" placeholder="Tu Nombre" class="w-full border rounded-xl p-3 mb-3"><input id="linkPerfil" type="text" placeholder="Link de Instagram/TikTok" class="w-full border rounded-xl p-3 mb-4"><button onclick="enviarWhatsApp()" class="btn-whatsapp w-full py-4 rounded-xl font-bold text-lg">ENVIAR A WHATSAPP LU</button>`; }
function formDatosSimple() { return `<input id="nombreCliente" type="text" placeholder="Tu Nombre" class="w-full border rounded-xl p-3 mb-3"><input id="datoExtra" type="text" placeholder="Correo/ID" class="w-full border rounded-xl p-3 mb-4"><button onclick="enviarWhatsApp()" class="btn-whatsapp w-full py-4 rounded-xl font-bold text-lg">ENVIAR A WHATSAPP LU</button>`; }

function enviarWhatsApp() {
  let nombre = document.getElementById('nombreCliente')?.value || '';
  if(nombre === '') return alert('Pon tu nombre');
  let mensaje = `*HOLA LU, QUIERO COMPRAR*%0A*PRODUCTO:* ${productoActual.nombre}%0A`;
  if(productoActual.pais) mensaje += `*PAÍS:* ${productoActual.pais}%0A`;
  mensaje += `*PRECIO:* ${productoActual.precio}%0A*Nombre:* ${nombre}%0A`;
  if(document.getElementById('idJuego')) mensaje += `ID: ${document.getElementById('idJuego').value} Nick: ${document.getElementById('nickJuego').value}%0A`;
  window.open(`https://wa.me/51920726588?text=${mensaje}`, '_blank'); cerrarPopup();
}