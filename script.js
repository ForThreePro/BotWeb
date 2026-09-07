function abrirPopup(tipo) {
    const popup = document.getElementById('popup');
    const titulo = document.getElementById('popup-titulo');
    const texto = document.getElementById('popup-texto');

    const info = {
        mensual: {
            t: "🐱 Bot Grupo Mensual - S/ 5",
            txt: "¿Para qué sirve?\n\nPerfecto si quieres probar Garfield Bot en tu grupo por 30 días.\n\nIncluye:\n✅ Los 150+ comandos\n✅ Antispam, Antidelete, Descargas\n✅ IA: ChatGPT4, Claude, Gemini\n✅ Soporte por WhatsApp\n✅ Actualizaciones del mes"
        },
        permanente: {
            t: "🐱 Bot Grupo Permanente - S/ 7",
            txt: "¿Para qué sirve?\n\nPago único y tu grupo tiene Garfield Bot de por vida. Sin renovar cada mes.\n\nIncluye todo lo del mensual +\n✅ Bot activo para siempre\n✅ Todas las actualizaciones futuras\n✅ Soporte prioritario"
        },
        vip: {
            t: "👑 Bot Personalizado VIP - S/ 35",
            txt: "¿Para qué sirve?\n\nTu propio bot con el nombre que quieras. El más completo.\n\nIncluye:\n✅ Nombre y logo personalizado\n✅ Comandos exclusivos para ti\n✅ Panel de control privado\n✅ Prioridad 24/7\n✅ 150+ comandos + funciones VIP"
        },
        web: {
            t: "🌐 Página Ventas Web - S/ 15",
            txt: "¿Para qué sirve?\n\nUna página como esta para que vendas tu bot 24/7.\n\nIncluye:\n✅ Diseño Garfield profesional\n✅ Botones de WhatsApp directos\n✅ Sección de precios con pop-ups\n✅ Lista para publicar en Netlify/Vercel"
        },
        server: {
            t: "⚡ Servidor para Bot - S/ 10",
            txt: "¿Para qué sirve?\n\nHosting 24/7 para que tu bot nunca se caiga.\n\nIncluye:\n✅ Servidor rápido y estable\n✅ Bot online todo el día\n✅ Instalación gratis\n✅ Respaldo automático"
        }
    };

    titulo.innerText = info[tipo].t;
    texto.innerText = info[tipo].txt;
    popup.style.display = 'flex';
}

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}