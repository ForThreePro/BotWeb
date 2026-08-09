const productos = [
  { nombre: "Diamantes", precio: "$9.99", img: "https://placehold.co/300x200/FFB400/000?text=Diamantes", desc: "Brillan como los lunes sin lasaña" },
  { nombre: "Spam", precio: "$4.50", img: "https://placehold.co/300x200/FF7F50/000?text=Spam", desc: "El favorito de Garfield para el desayuno" },
  { nombre: "Design", precio: "$19.99", img: "https://placehold.co/300x200/FFD700/000?text=Design", desc: "Diseños naranja con actitud" },
  { nombre: "Bots", precio: "$29.99", img: "https://placehold.co/300x200/FFA500/000?text=Bots", desc: "Bots que no se comen tu lasaña" }
];

const contenedor = document.getElementById("productos");

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