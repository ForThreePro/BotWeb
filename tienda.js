let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let paisActual = localStorage.getItem('pais') || "PE";

const precios = {
  SPAM: {
    "3 dias": {PE: "S/5.50", CL: "$1750", AR: "$2600", UY: "$75", BO: "Bs22.5", CO: "$7.500", US: "$2", MX: "$37.5"},
    "5 dias": {PE: "S/7.50", CL: "$2450", AR: "$3640", UY: "$105", BO: "Bs31.5", CO: "$10.500", US: "$3", MX: "$52.5"},
    "1 semana": {PE: "S/9.50", CL: "$3150", AR: "$4680", UY: "$135", BO: "Bs40.5", CO: "$13.500", US: "$4", MX: "$67.5"}
  },
  DIAMANTES: {
    CL: {con: [{d:"110💎", p:"$875"}, {d:"341💎", p:"$2.450"}, {d:"572💎", p:"$4.200"}, {d:"1166💎", p:"$7.000"}, {d:"2398💎", p:"$12.600"}, {d:"6160💎", p:"$32.200"}],
         sin: [{d:"110💎", p:"$1.225"}, {d:"341💎", p:"$3.500"}, {d:"572💎", p:"$5.250"}, {d:"1166💎", p:"$9.100"}, {d:"2398💎", p:"$18.200"}, {d:"6160💎", p:"$44.100"}]},
    AR: {con: [{d:"110💎", p:"$1.300"}, {d:"341💎", p:"$3.380"}, {d:"572💎", p:"$5.720"}, {d:"1166💎", p:"$9.880"}, {d:"2398💎", p:"$18.200"}, {d:"6160💎", p:"$46.800"}],
         sin: [{d:"110💎", p:"$1820"}, {d:"341💎", p:"$4.680"}, {d:"572💎", p:"$7.800"}, {d:"1166💎", p:"$13.520"}, {d:"2398💎", p:"$27.040"}, {d:"6160💎", p:"$65.520"}]},
    MX: {con: [{d:"110💎", p:"$18.75"}, {d:"341💎", p:"$52.50"}, {d:"572💎", p:"$90"}, {d:"1166💎", p:"$150"}, {d:"2398💎", p:"$270"}, {d:"6160💎", p:"$690"}],
         sin: [{d:"110💎", p:"$26.25"}, {d:"341💎", p:"$75"}, {d:"572💎", p:"$112.5"}, {d:"1166💎", p:"$195"}, {d:"2398💎", p:"$390"}, {d:"6160💎", p:"$945"}]},
    BO: {con: [{d:"110💎", p:"Bs11.25"}, {d:"341💎", p:"Bs31.5"}, {d:"572💎", p:"Bs54"}, {d:"1166💎", p:"Bs90"}, {d:"2398💎", p:"Bs162"}, {d:"6160💎", p:"Bs414"}],
         sin: [{d:"110💎", p:"Bs15.75"}, {d:"341💎", p:"Bs45"}, {d:"572💎", p:"Bs67.5"}, {d:"1166💎", p:"Bs117"}, {d:"2398💎", p:"Bs234"}, {d:"6160💎", p:"Bs567"}]},
    UY: {con: [{d:"110💎", p:"$37.5"}, {d:"341💎", p:"$105"}, {d:"572💎", p:"$180"}, {d:"1166💎", p:"$300"}, {d:"2398💎", p:"$540"}, {d:"6160💎", p:"$1.380"}],
         sin: [{d:"110💎", p:"$52.5"}, {d:"341💎", p:"$150"}, {d:"572💎", p:"$225"}, {d:"1166💎", p:"$390"}, {d:"2398💎", p:"$780"}, {d:"6160💎", p:"$1.890"}]},
    PE: {con: [{d:"110💎", p:"S/2.50"}, {d:"341💎", p:"S/7.00"}, {d:"572💎", p:"S/12.00"}, {d:"1166💎", p:"S/20.00"}, {d:"2398💎", p:"S/36.00"}, {d:"6160💎", p:"S/92.00"}],
         sin: [{d:"110💎", p:"S/3.50"}, {d:"341💎", p:"S/10.00"}, {d:"572💎", p:"S/15.00"}, {d:"1166💎", p:"S/26.00"}, {d:"2398💎", p:"S/52.00"}, {d:"6160💎", p:"S/126.00"}]}
  },
  DESIGN: {
    "Tex Logo y Logos": {PE: "S/3", CL: "$1050", AR: "$1560", MX: "$22.5", UY: "$22.5", BO: "Bs13.5", CO: "$4500", US: "$2"},
    "Plantillas 2x1": {PE: "S/4", CL: "$1050", AR: "$1560", MX: "$22.5", UY: "$22.5", BO: "Bs13.5", CO: "$4500", US: "$2"},
    "Caligráficos 2x1": {PE: "S/3", CL: "$1050", AR: "$1560", MX: "$22.5", UY: "$22.5", BO: "Bs13.5", CO: "$4500", US: "$2"},
    "Jersey": {PE: "S/5", CL: "$1750", AR: "$2600", MX: "$37.5", UY: "$75", BO: "Bs22.5", CO: "$7.500", US: "$2"}
  }
};

function generarProductos(pais){
  const productosData = [];
  
  for(let dur in precios.SPAM){
    productosData.push({
      id: "spam-"+dur, cat:"spam",
      nombre: `Spam ${dur}`, 
      desc: "x3 horas al día. Si pagas en la mañana inicia el mismo día",
      precio: precios.SPAM[dur][pais],
      img: "https://placehold.co/300x200/FF8C00/000?text=Spam"
    })
  }

  if(precios.DIAMANTES[pais]){
    productosData.push({
      id: "dia-con", cat:"diamantes",
      nombre: `Diamantes Con Stock`,
      desc: precios.DIAMANTES[pais].con.map(i => `${i.d} ${i.p}`).join(" | "),
      precio: "Desde " + precios.DIAMANTES[pais].con[0].p,
      img: "https://placehold.co/300x200/FFA500/000?text=Diamantes",
      extra: "Para saber tu stock mándame tu ID. Recargas en mañana y noche"
    })
    productosData.push({
      id: "dia-sin", cat:"diamantes",
      nombre: `Diamantes Sin Stock`,
      desc: precios.DIAMANTES[pais].sin.map(i => `${i.d} ${i.p}`).join(" | "),
      precio: "Desde " + precios.DIAMANTES[pais].sin[0].p,
      img: "https://placehold.co/300x200/FFA500/000?text=Diamantes"
    })
  }

  for(let item in precios.DESIGN){
    productosData.push({
      id: "des-"+item, cat:"design",
      nombre: item,
      desc: "Entrega máx 2 días. Sin devoluciones",
      precio: precios.DESIGN[item][pais],
      img: "https://placehold.co/300x200/FFD580/000?text=Design"
    })
  }
  return productosData;
}

function renderizar(filtro="todos"){
  const productosData = generarProductos(paisActual);
  const cont = document.getElementById("productos");
  if(!cont) return;
  cont.innerHTML = "";
  productosData.filter(p => filtro==="todos" || p.cat===filtro).forEach(prod => {
    cont.innerHTML += `
      <div class="card">
        <img src="${prod.img}">
        <h4>${prod.nombre}</h4>
        <p>${prod.desc}</p>
        ${prod.extra ? `<small>${prod.extra}</small>` : ''}
        <p class="precio">${prod.precio}</p>
        <button onclick="agregarCarrito('${prod.nombre} - ${prod.precio}')">Añadir al carrito</button>
      </div>
    `
  })
}

function agregarCarrito(item){
  carrito.push(item);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContador();
  alert("✅ Agregado al carrito");
}
function actualizarContador(){
  if(document.getElementById("contador")) document.getElementById("contador").textContent = carrito.length;
  if(document.getElementById("contador2")) document.getElementById("contador2").textContent = carrito.length;
}
function verCarrito(){
  if(carrito.length === 0) return alert("Carrito vacío");
  let msg = "Hola, quiero pedir:\n\n" + carrito.join("\n");
  window.open(`https://wa.me/51999999?text=${encodeURIComponent(msg)}`, '_blank')
}

document.querySelectorAll(".filtro").forEach(btn => {
  btn.onclick = () => {
    document.querySelector(".filtro.active")?.classList.remove("active");
    btn.classList.add("active");
    renderizar(btn.dataset.cat);
  }
})

if(document.getElementById("selectorPais")){
  document.getElementById("selectorPais").value = paisActual;
  document.getElementById("selectorPais").onchange = (e) => {
    paisActual = e.target.value;
    localStorage.setItem('pais', paisActual);
    renderizar(document.querySelector(".filtro.active")?.dataset.cat || "todos");
  }
}

document.getElementById("btnMenu").onclick = () => {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}
document.getElementById("overlay").onclick = () => {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

renderizar();
actualizarContador();