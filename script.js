const audio = document.getElementById('musica');
const btn = document.getElementById('btnMusica');
if(localStorage.getItem('musicaEstado') === 'playing'){
  audio.play(); 
  btn.textContent = '🔇';
}
btn.onclick = () => {
  if(audio.paused){
    audio.play(); 
    btn.textContent='🔇'; 
    localStorage.setItem('musicaEstado','playing');
  } else {
    audio.pause(); 
    btn.textContent='🔊'; 
    localStorage.setItem('musicaEstado','paused');
  }
}