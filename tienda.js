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

const contenedor = document.getElementById("productos");
const selector = document.getElementById("selectorPais");

function renderizar(pais){
  contenedor.innerHTML = "";

  // SPAM
  let cardSpam = document.createElement("div");
  cardSpam.className = "card";
  cardSpam.innerHTML = `<img src="https://placehold.co/300x200/FF8C00/fff?text=Spam"><h4>Spam x3h al día</h4><p>Texto igual al que mandas. Si pagas mañana inicia mismo día</p>`;
  for(let dur in precios.SPAM){
    cardSpam.innerHTML += `<p><b>${dur}:</b> ${precios.SPAM[dur][pais]}</p>`;
  }
  cardSpam.innerHTML += `<button>Comprar Spam</button>`;
  contenedor.appendChild(cardSpam);

  // DIAMANTES
  if(precios.DIAMANTES[pais]){
    let cardDia = document.createElement("div");
    cardDia.className = "card";
    cardDia.innerHTML = `<img src="https://placehold.co/300x200/FFA500/fff?text=Diamantes"><h4>Diamantes</h4><p><b>Con Stock:</b></p>`;
    precios.DIAMANTES[pais].con.forEach(i => cardDia.innerHTML += `<p>${i.d} ${i.p}</p>`);
    cardDia.innerHTML += `<p><b>Sin Stock:</b></p>`;
    precios.DIAMANTES[pais].sin.forEach(i => cardDia.innerHTML += `<p>${i.d} ${i.p}</p>`);
    cardDia.innerHTML += `<small>Para saber tu stock mándame tu ID. Recargas en mañana y noche</small><button>Comprar Diamantes</button>`;
    contenedor.appendChild(cardDia);
  }

  // DESIGN
  let cardDes = document.createElement("div");
  cardDes.className = "card";
  cardDes.innerHTML = `<img src="https://placehold.co/300x200/FFD580/000?text=Design"><h4>Design</h4><p>Entrega máx 2 días. Sin devoluciones</p>`;
  for(let item in precios.DESIGN){
    cardDes.innerHTML += `<p><b>${item}:</b> ${precios.DESIGN[item][pais]}</p>`;
  }
  cardDes.innerHTML += `<button>Comprar Design</button>`;
  contenedor.appendChild(cardDes);
}

selector.addEventListener("change", e => renderizar(e.target.value));
renderizar("PE");