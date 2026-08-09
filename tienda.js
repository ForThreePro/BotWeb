const productos = [
  { nombre: "Diamantes", precio: "$9.99", img: "https://placehold.co/300x200/FFA500/fff?text=Diamantes", desc: "Brillan como los lunes sin lasaña" },
  { nombre: "Spam", precio: "$4.50", img: "https://placehold.co/300x200/FF8C00/fff?text=Spam", desc: "El favorito de Garfield" },
  { nombre: "Design", precio: "$19.99", img: "https://placehold.co/300x200/FFD580/000?text=Design", desc: "Diseños naranja con actitud" },
  { nombre: "Bots", precio: "$29.99", img: "https://placehold.co/300x200/FFA500/fff?text=Bots", desc: "Bots que no se comen tu lasaña" }
];

const contenedor = document.getElementById("productos");
if(contenedor){
  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.nombre}">
      <h4>${prod.nombre}</h4>
      <p>${prod.desc}</p>
      <span class="precio">${prod.precio}</span>
      <button>Comprar</button>
    `;
    contenedor.appendChild(card);
  });
}