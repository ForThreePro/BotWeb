function abrirPopup(tipo) {
    const popup = document.getElementById('popup');
    const titulo = document.getElementById('popup-titulo');
    const texto = document.getElementById('popup-texto');

    const info = {
        mensual: {
            t: "🐱 Bot Grupo Mensual - S/ 5",
            txt: "IDEAL PARA PROBAR 🔥\n\nIncluye:\n✅ 30 días de uso completo\n✅ 150+ comandos activos\n✅ AntiBan + Antispam Pro\n✅ Descargas Ilimitadas 4K\n✅ IA ChatGPT4 + Gemini\n✅ Soporte 24/7 por WhatsApp\nInstalación en 5 minutos.\nRenovación automática opcional."
        },
        permanente: {
            t: "🐱 Bot Grupo Permanente - S/ 7",
            txt: "EL MÁS VENDIDO 👑\n\nIncluye todo lo del mensual MÁS:\n✅ Pago único - Para siempre\n✅ Todas las actualizaciones futuras\n✅ Soporte prioritario 24/7\n✅ Acceso a funciones beta\n✅ Sin renovaciones\nAhorra S/ 53 al año vs mensual."
        },
        vip: {
            t: "👑 Bot Personalizado VIP - S/ 35",
            txt: "TU MARCA, TU BOT ⭐\n\nIncluye:\n✅ Nombre y logo personalizado\n✅ Comandos exclusivos solo para ti\n✅ Panel de control web privado\n✅ Prioridad máxima de soporte\n✅ Funciones VIP ocultas\n✅ 150+ comandos base\n\nEntrega en 24h con tu branding."
        },
        web: {
            t: "🌐 Página Ventas Web - S/ 15",
            txt: "VENDE 24/7 SIN PARAR 🌐\n\nIncluye:\n✅ Diseño Garfield Premium como este\n✅ Botones de WhatsApp con mensaje automático\n✅ Sección de precios con pop-ups\n✅ Responsive para celular\n✅ Lista para subir a Netlify/Vercel\n✅ Edición de textos incluida"
        },
        server: {
            t: "⚡ Servidor para Bot - S/ 10",
            txt: "BOT SIEMPRE ONLINE ⚡\n\nIncluye:\n✅ Hosting 24/7 estable\n✅ Bot online todo el día sin caídas\n✅ Instalación y configuración gratis\n✅ Respaldo automático semanal\n✅ Soporte técnico incluido\nIdeal para 1 a 5 bots."
        }
    };

    titulo.innerText = info[tipo].t;
    texto.innerText = info[tipo].txt;
    popup.style.display = 'flex';
}

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}

// Cerrar popup al hacer click afuera
window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        cerrarPopup();
    }
}