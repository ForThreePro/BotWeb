let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let paisActual = localStorage.getItem('pais') || "PE";

// PEGA AQUI EL MISMO OBJETO "precios" QUE TE DI ANTES

function generarProductos(pais){
  let productos = [];
  // SPAM
  for(let dur in precios.SPAM){
    let precio = precios.SPAM[dur][pais];
    let precioNum = parseFloat(precio.replace(/[^0-9.]/g,''));
    let precioOld = "S/ " + (precioNum * 1.25).toFixed(2);
    productos.push({cat:"spam", nombre:`Spam ${dur}`, desc:"x3h al día", precio, precioOld, logo:"📢"})
  }
  // DIAMANTES
  if(precios.DIAMANTES[pais]){
    precios.DIAMANTES[pais].con.forEach(i => {
      productos.push({cat:"diamantes", nombre:`Diamantes ${i.d}`, desc:"Con Stock", precio:i.p, logo:"💎"})
    })
  }
  // DESIGN
  for(let item in precios.DESIGN){
    productos.push({cat:"design", nombre:item, desc:"Entrega 2 días", precio:precios.DESIGN[item][pais], logo:"🎨"})
  }
  return productos;
}

function crearCard(p){
  return `
  <div class="card-tienda">
    <span class="tag">-20%</span>
    <button class="fav">♡</button>
    <div class="logo">${p.logo}</div>
    <div class="cat">${p.cat.toUpperCase()}</div>
    <h4>${p.nombre}</h4>
    <div class="stars">★ 4.9</div>
    <div class="precio">${p.precio} ${p.precioOld? `<span>${p.precioOld}</span>` : ''}</div>
    <button class="btn-add" onclick="agregarCarrito('${p.nombre} - ${p.precio}')">Añadir al carrito</button>
  </div>`
}

function renderizar(){
  const productos = generarProductos(paisActual);
  document.getElementById("productos-spam").innerHTML = productos.filter(p=>p.cat=="spam").map(crearCard).join("");
  document.getElementById("productos-diamantes").innerHTML = productos.filter(p=>p.cat=="diamantes").map(crearCard).join("");
  document.getElementById("productos-design").innerHTML = productos.filter(p=>p.cat=="design").map(crearCard).join("");
  document.getElementById("recomendados").innerHTML = productos.slice(0,4).map(crearCard).join("");
}

// FILTROS Y BUSCADOR
document.querySelectorAll(".filtro").forEach(btn => {
  btn.onclick = () => {
    document.querySelector(".filtro.active").classList.remove("active");
    btn.classList.add("active");
    const cat = btn.dataset.cat;
    document.querySelectorAll("#catalogo.grid-productos").forEach(g => g.style.display = "none");
    document.querySelectorAll("#catalogo h3").forEach(h => h.style.display = "none");
    if(cat=="todos"){
      document.querySelectorAll("#catalogo.grid-productos, #catalogo h3").forEach(e => e.style.display = "grid");
    } else {
      document.getElementById("productos-"+cat).style.display = "grid";
      document.getElementById("titulo-seccion"+(cat=="spam"?"":cat=="diamantes"?"2":"3")).style.display = "block";
    }
  }
})

document.getElementById("buscador").oninput = (e) => {
  const txt = e.target.value.toLowerCase();
  document.querySelectorAll(".card-tienda").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(txt)? "block" : "none";
  })
}

// El resto: agregarCarrito, verCarrito, selectorPais, menu. Igual que antes
function agregarCarrito(item){carrito.push(item);localStorage.setItem('carrito',JSON.stringify(carrito));actualizarContador();alert("✅ Agregado")}
function actualizarContador(){document.getElementById("contador").textContent=carrito.length;document.getElementById("contador2").textContent=carrito.length;}
function verCarrito(){if(carrito.length==0)return alert("Vacío");window.open(`https://wa.me/51999999?text=${encodeURIComponent("Hola, quiero: \n"+carrito.join("\n"))}`)}
document.getElementById("selectorPais").value=paisActual;
document.getElementById("selectorPais").onchange=e=>{paisActual=e.target.value;localStorage.setItem('pais',paisActual);renderizar();}
document.getElementById("btnMenu").onclick=()=>{document.getElementById("sidebar").classList.toggle("active");document.getElementById("overlay").classList.toggle("active");}
document.getElementById("overlay").onclick=()=>{document.getElementById("sidebar").classList.remove("active");document.getElementById("overlay").classList.remove("active");}

renderizar();
actualizarContador();