// Selecciona el checkbox y el menú
const checkbox = document.getElementById('checkbox');
const menu = document.querySelector('.menu');
const li = document.querySelectorAll('.menu ul li');


// Escucha el evento 'change' del checkbox
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    // Mostrar menú
    menu.style.display = 'flex'; 
  } else {
    // Ocultar menú
    menu.style = 'none'
  }
});


let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveSlide(step) {
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const track = document.querySelector('.carousel-track');
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 5000);