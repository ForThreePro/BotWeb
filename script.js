const audio = document.getElementById('musica');
const btn = document.getElementById('btnMusica');

// Guardar estado de la música en localStorage para que siga sonando al cambiar de página
if(localStorage.getItem('musicaEstado') === 'playing'){
  audio.play();
  btn.textContent = '🔇 Pausar Música';
  btn.classList.add('activo');
}

btn.addEventListener('click', () => {
  if(audio.paused){
    audio.play();
    btn.textContent = '🔇 Pausar Música';
    btn.classList.add('activo');
    localStorage.setItem('musicaEstado', 'playing');
  } else {
    audio.pause();
    btn.textContent = '🔊 Reproducir Música';
    btn.classList.remove('activo');
    localStorage.setItem('musicaEstado', 'paused');
  }
});