/******************** CARRUCELITO INDEX ********************************** */
// Selecciona el elemento del carrucelito_index
const carrucelitoIndex = document.getElementById('carrucelito_index');

// Función para animar el carrucelito_index cuando se carga la página
function animateOnLoadCarrucelitoIndex() {
  anime({
    targets: carrucelitoIndex,
    translateX: [100, 0],
    opacity: [0, 1], 
    duration: 3000, 
    easing: 'easeOutExpo', 
  });
}

// Ejecutar la animación al cargar la página
animateOnLoadCarrucelitoIndex();

/********************** MENU TOGGLE *********************/
// Obtenemos las referencias a los elementos del DOM
const menuToggle = document.querySelector('.menusito-toggle');
const nav = document.querySelector('.navsito');
const menuLine = document.querySelector('.menusito-line');
const texto1 = document.querySelector('.texto1');

const screenWidth = window.innerWidth;
if (screenWidth < 768) { // Ancho de pantalla menor a 768px
// Función para alternar la clase "nav--active" en el menú y cambiar los iconos
function toggleMenu() {
  if (texto1){ /* PAGINA INDEX */
  if (texto1.style.marginTop== '100%'){
    texto1.style.marginTop = '20%';
    
  }else{
    texto1.style.marginTop = '100%';
  }
}
nav.classList.toggle('navsito--active');
menuLine.classList.toggle('menusito-line--active');
}
// Agregamos un event listener al botón del menú
menuToggle.addEventListener('click', toggleMenu);
// Agregamos un event listener para cerrar el menú al hacer clic en los enlaces
const navLinks = document.querySelectorAll('.navsito__link');
navLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});
}