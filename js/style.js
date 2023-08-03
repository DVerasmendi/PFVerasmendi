/* *************** ANIMACION LOGO **************/
// Selecciona el elemento del logo
const header = document.querySelector('.header');

// Crea la animación con Anime.js
anime({
  targets: header,
  translateY: [-100, 0], // Mueve el logo desde arriba hacia abajo
  opacity: [0, 1], // Cambia la opacidad del logo de 0 a 1
  duration: 3000, // Duración de la animación en milisegundos
  easing: 'easeOutExpo', // Efecto de aceleración
});
/****************** EFECTO ICONO 1  *************************** */
// Selecciona el elemento de la imagen
const imagen = document.getElementById('parrafo1');
// Selecciona el elemento del div objetivo y la imagen
const targetDiv = document.getElementById('parrafo1');
if ((imagen) || (targetDiv)) {
// Función para verificar si el elemento está visible en la pantalla
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para animar la imagen cuando el elemento está visible
function animateOnScroll() {
  if (isElementInViewport(targetDiv)) {
    anime({
      targets: imagen,
      translateX: [-100, 0], // Mueve la imagen desde la izquierda hacia la posición original
      opacity: [0, 1], // Cambia la opacidad de la imagen de 0 a 1
      duration: 3000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });

    // Remover los eventos de scroll una vez que se ha realizado la animación
    window.removeEventListener('scroll', animateOnScroll);
    window.removeEventListener('scroll', resetOnScroll);
  }
}

// Función para restablecer la posición de la imagen cuando el elemento sale de la pantalla
function resetOnScroll() {
  if (!isElementInViewport(targetDiv)) {
    anime({
      targets: imagen,
      translateX: 0, // Restablece la posición X de la imagen a 0
      opacity: 1, // Restablece la opacidad de la imagen a 1
      duration: 3000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });
  }
}

// Agregar los eventos al hacer scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('scroll', resetOnScroll);
}

/********************EFECTO ICONO 2 ************************ */
// Selecciona el elemento de la imagen
const imagen2 = document.getElementById('parrafo2');
// Selecciona el elemento del div objetivo y la imagen
const targetDiv2 = document.getElementById('parrafo2');
if ((imagen2) || (targetDiv2)) {
// Función para verificar si el elemento está visible en la pantalla
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para animar la imagen cuando el elemento está visible
function animateOnScroll2() {
  if (isElementInViewport(targetDiv2)) {
    anime({
      targets: imagen2,
      translateX: [100, 0], // Mueve la imagen desde la derecha hacia la posición original
      opacity: [0, 1], // Cambia la opacidad de la imagen de 0 a 1
      duration: 3000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });

    // Remover los eventos de scroll una vez que se ha realizado la animación
    window.removeEventListener('scroll', animateOnScroll2);
    window.removeEventListener('scroll', resetOnScroll2);
  }
}

// Función para restablecer la posición de la imagen cuando el elemento sale de la pantalla
function resetOnScroll2() {
  if (!isElementInViewport(targetDiv2)) {
    anime({
      targets: imagen2,
      translateX: 0, // Restablece la posición X de la imagen a 0
      opacity: 1, // Restablece la opacidad de la imagen a 1
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });
  }
}

// Agregar los eventos al hacer scroll
window.addEventListener('scroll', animateOnScroll2);
window.addEventListener('scroll', resetOnScroll2);
}
/***************************************************   */
/********************EFECTO ICONO 3 ************************ */
// Selecciona el elemento de la imagen
const imagen3 = document.getElementById('parrafo3');
// Selecciona el elemento del div objetivo y la imagen
const targetDiv3 = document.getElementById('parrafo3');
if ((imagen3) || (targetDiv3)) {
// Función para verificar si el elemento está visible en la pantalla
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para animar la imagen cuando el elemento está visible
function animateOnScroll3() {
  if (isElementInViewport(targetDiv3)) {
    anime({
      targets: imagen3,
      translateX: [-100, 0], // Mueve la imagen desde la izquierda hacia la posición original
      opacity: [0, 1], // Cambia la opacidad de la imagen de 0 a 1
      duration: 3000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });

    // Remover los eventos de scroll una vez que se ha realizado la animación
    window.removeEventListener('scroll', animateOnScroll3);
    window.removeEventListener('scroll', resetOnScroll3);
  }
}

// Función para restablecer la posición de la imagen cuando el elemento sale de la pantalla
function resetOnScroll3() {
  if (!isElementInViewport(targetDiv3)) {
    anime({
      targets: imagen3,
      translateX: 0, // Restablece la posición X de la imagen a 0
      opacity: 1, // Restablece la opacidad de la imagen a 1
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });
  }
}

// Agregar los eventos al hacer scroll
window.addEventListener('scroll', animateOnScroll3);
window.addEventListener('scroll', resetOnScroll3);
}
/******************** PARRAFO INCIAL 1 INDEX *******************************   */
// Selecciona el elemento del párrafo inicial 1
const parrafoInicial1 = document.getElementById('parrafo_inicial_1');

// Función para animar el párrafo inicial cuando se carga la página
function animateOnLoadParrafoInicial1() {
  anime({
    targets: parrafoInicial1,
    translateX: [-100, 0], // Mueve el párrafo inicial desde la izquierda hacia la posición original
    opacity: [0, 1], // Cambia la opacidad del párrafo inicial de 0 a 1
    duration: 3000, // Duración de la animación en milisegundos
    easing: 'easeOutExpo', // Efecto de aceleración
  });
}

// Ejecutar la animación al cargar la página
animateOnLoadParrafoInicial1();

/******************** CARRUCELITO INDEX ********************************** */
// Selecciona el elemento del carrucelito_index
const carrucelitoIndex = document.getElementById('carrucelito_index');

// Función para animar el carrucelito_index cuando se carga la página
function animateOnLoadCarrucelitoIndex() {
  anime({
    targets: carrucelitoIndex,
    translateX: [100, 0], // Mueve el carrucelito_index desde la derecha hacia la posición original
    opacity: [0, 1], // Cambia la opacidad del carrucelito_index de 0 a 1
    duration: 3000, // Duración de la animación en milisegundos
    easing: 'easeOutExpo', // Efecto de aceleración
  });
}

// Ejecutar la animación al cargar la página
animateOnLoadCarrucelitoIndex();
/****************************  PARRAFO INICIAL 2 *********************** */
// Selecciona el elemento del parrafo_inicial_2
const parrafoInicial2 = document.getElementById('parrafo_inicial_2');

// Función para animar el parrafo_inicial_2 cuando se carga la página
function animateOnLoadParrafoInicial2() {
  anime({
    targets: parrafoInicial2,
    translateX: [-100, 0], // Mueve el parrafo_inicial_2 desde la izquierda hacia la posición original
    opacity: [0, 1], // Cambia la opacidad del parrafo_inicial_2 de 0 a 1
    duration: 3000, // Duración de la animación en milisegundos
    easing: 'easeOutExpo', // Efecto de aceleración
  });
}

// Ejecutar la animación al cargar la página
animateOnLoadParrafoInicial2();
/***********************   EFECTO MENUCITO EN RESUMEN  ******************/
// Selecciona los elementos de los menús
const menu1 = document.getElementById('menu_1');
const menu2 = document.getElementById('menu_2');
const menu3 = document.getElementById('menu_3');
const menu4 = document.getElementById('menu_4');

// Selecciona el elemento del div principal de los menús
const targetDivMenus = document.getElementById('div_principal_en_resumen');
if ((menu1) || (menu2) || (menu3) || (menu4)) {
// Función para verificar si el elemento está visible en la pantalla
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para animar los menús cuando el elemento está visible
function animateMenusOnScroll() {
  if (isElementInViewport(targetDivMenus)) {
    anime({
      targets: menu1,
      translateY: [100, 0], // Mueve el menú desde abajo hacia la posición original
      opacity: [0, 1], // Cambia la opacidad del menú de 0 a 1
      duration: 3000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });

    anime({
      targets: menu2,
      translateX: [-100, 0], // Mueve el menú desde la izquierda hacia la posición original
      opacity: [0, 1], // Cambia la opacidad del menú de 0 a 1
      duration: 3000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });

    anime({
      targets: menu3,
      translateX: [100, 0], // Mueve el menú desde la derecha hacia la posición original
      opacity: [0, 1], // Cambia la opacidad del menú de 0 a 1
      duration: 3000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });

    anime({
      targets: menu4,
      translateY: [-100, 0], // Mueve el menú desde arriba hacia la posición original
      opacity: [0, 1], // Cambia la opacidad del menú de 0 a 1
      duration: 3000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });

    // Remover los eventos de scroll una vez que se ha realizado la animación
    window.removeEventListener('scroll', animateMenusOnScroll);
    window.removeEventListener('scroll', resetMenusOnScroll);
  }
}

// Función para restablecer la posición de los menús cuando el elemento sale de la pantalla
function resetMenusOnScroll() {
  if (!isElementInViewport(targetDivMenus)) {
    anime({
      targets: [menu1, menu2, menu3, menu4],
      translateY: 0, // Restablece la posición Y de los menús a 0
      translateX: 0, // Restablece la posición X de los menús a 0
      opacity: 1, // Restablece la opacidad de los menús a 1
      duration: 3000, // Duración de la animación en milisegundos
      easing: 'easeOutExpo', // Efecto de aceleración
    });
  }
}

// Agregar los eventos al hacer scroll
window.addEventListener('scroll', animateMenusOnScroll);
window.addEventListener('scroll', resetMenusOnScroll);
}

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
/************************ BOTON PARRAFOS INDEX  ****************/
var pElement = document.getElementById("p_conviert_ideas_index");
var mostrarBtn = document.getElementById("mostrarBtn_conviert_ideas_index");
var mostrarMenosBtn = document.getElementById("mostrarMenosBtn_conviert_ideas_index");

if ((mostrarBtn) || (mostrarBtn)) {
mostrarBtn.addEventListener("click", function() {
  pElement.style.height = "auto"; 
  mostrarBtn.style.display = "none"; 
  mostrarMenosBtn.style.display = "inline-block"; 
});

mostrarMenosBtn.addEventListener("click", function() {
  pElement.style.height = "3rem"; 
  mostrarMenosBtn.style.display = "none"; 
  mostrarBtn.style.display = "inline-block"; 
});
/****************************************************************** */
var pElement_2 = document.getElementById("p_conviert_ideas_index_2");
var mostrarBtn_2 = document.getElementById("mostrarBtn_conviert_ideas_index_2");
var mostrarMenosBtn_2 = document.getElementById("mostrarMenosBtn_conviert_ideas_index_2");

mostrarBtn_2.addEventListener("click", function() {
  pElement_2.style.height = "auto"; 
  mostrarBtn_2.style.display = "none"; 
  mostrarMenosBtn_2.style.display = "inline-block";
});

mostrarMenosBtn_2.addEventListener("click", function() {
  pElement_2.style.height = "3rem"; 
  mostrarMenosBtn_2.style.display = "none"; 
  mostrarBtn_2.style.display = "inline-block"; 
});
}
/************************** BOTON PARRAFO CONOCEME **************************/
var pElement_conoceme = document.getElementById("p_conoceme_text");
var mostrarBtn_conoceme = document.getElementById("mostrarBtn_conoceme");
var mostrarMenosBtn_conoceme = document.getElementById("mostrarMenosBtn_conoceme");

if ((mostrarBtn_conoceme)) {
mostrarBtn_conoceme.addEventListener("click", function() {
  pElement_conoceme.style.height = "auto"; 
mostrarBtn_conoceme.style.display = "none"; 
mostrarMenosBtn_conoceme.style.display = "inline-block"; 
});

mostrarMenosBtn_conoceme.addEventListener("click", function() {
pElement_conoceme.style.height = "5.9rem";
mostrarMenosBtn_conoceme.style.display = "none"; 
mostrarBtn_conoceme.style.display = "inline-block"; 
});
}
/************************** BOTONES SERVICIOS **************************/
/************************** BOTONES SERVICIO 1 **************************/
var parrafo_servicio1 = document.getElementById("parrafo_servicio1");
var mostrarBtn_servicio1 = document.getElementById("mostrarBtn_servicio1");
var mostrarMenosBtn_servicio1 = document.getElementById("mostrarMenosBtn_servicio1");

if ((mostrarBtn_servicio1)) {
  mostrarBtn_servicio1.addEventListener("click", function() {
  parrafo_servicio1.style.height = "auto"; 
  mostrarBtn_servicio1.style.display = "none"; 
  mostrarMenosBtn_servicio1.style.display = "inline-block"; 
});

mostrarMenosBtn_servicio1.addEventListener("click", function() {
parrafo_servicio1.style.height = "5.6rem";
mostrarMenosBtn_servicio1.style.display = "none"; 
mostrarBtn_servicio1.style.display = "inline-block"; 
});
}
/************************** BOTONES SERVICIO 2 **************************/
var parrafo_servicio2 = document.getElementById("parrafo_servicio2");
var mostrarBtn_servicio2 = document.getElementById("mostrarBtn_servicio2");
var mostrarMenosBtn_servicio2 = document.getElementById("mostrarMenosBtn_servicio2");

if ((mostrarBtn_servicio2)) {
  mostrarBtn_servicio2.addEventListener("click", function() {
  parrafo_servicio2.style.height = "auto"; 
  mostrarBtn_servicio2.style.display = "none"; 
  mostrarMenosBtn_servicio2.style.display = "inline-block"; 
});

mostrarMenosBtn_servicio2.addEventListener("click", function() {
parrafo_servicio2.style.height = "5.6rem";
mostrarMenosBtn_servicio2.style.display = "none"; 
mostrarBtn_servicio2.style.display = "inline-block"; 
});
}
/************************** BOTONES SERVICIO 3 **************************/
var parrafo_servicio3 = document.getElementById("parrafo_servicio3");
var mostrarBtn_servicio3 = document.getElementById("mostrarBtn_servicio3");
var mostrarMenosBtn_servicio3 = document.getElementById("mostrarMenosBtn_servicio3");

if ((mostrarBtn_servicio3)) {
  mostrarBtn_servicio3.addEventListener("click", function() {
  parrafo_servicio3.style.height = "auto"; 
  mostrarBtn_servicio3.style.display = "none"; 
  mostrarMenosBtn_servicio3.style.display = "inline-block"; 
});

mostrarMenosBtn_servicio3.addEventListener("click", function() {
parrafo_servicio3.style.height = "5.6rem";
mostrarMenosBtn_servicio3.style.display = "none"; 
mostrarBtn_servicio3.style.display = "inline-block"; 
});
}
/************************** BOTONES SERVICIO 4 **************************/
var parrafo_servicio4 = document.getElementById("parrafo_servicio4");
var mostrarBtn_servicio4 = document.getElementById("mostrarBtn_servicio4");
var mostrarMenosBtn_servicio4 = document.getElementById("mostrarMenosBtn_servicio4");

if ((mostrarBtn_servicio4)) {
  mostrarBtn_servicio4.addEventListener("click", function() {
  parrafo_servicio4.style.height = "auto"; 
  mostrarBtn_servicio4.style.display = "none"; 
  mostrarMenosBtn_servicio4.style.display = "inline-block"; 
});

mostrarMenosBtn_servicio4.addEventListener("click", function() {
parrafo_servicio4.style.height = "5.6rem";
mostrarMenosBtn_servicio4.style.display = "none"; 
mostrarBtn_servicio4.style.display = "inline-block"; 
});
}
/*********************** BOTONES PORTAFOLIO **************************/
/************************** BOTON PORT 1 *****************************/
var parrafo_port1 = document.getElementById("parrafo_port1");
var mostrarBtn_port1 = document.getElementById("mostrarBtn_port1");
var mostrarMenosBtn_port1 = document.getElementById("mostrarMenosBtn_port1");

if ((mostrarBtn_port1)) {
  mostrarBtn_port1.addEventListener("click", function() {
    parrafo_port1.style.height = "auto"; 
    mostrarBtn_port1.style.display = "none"; 
    mostrarMenosBtn_port1.style.display = "inline-block"; 
});

mostrarMenosBtn_port1.addEventListener("click", function() {
  parrafo_port1.style.height = "2.3rem";
  mostrarMenosBtn_port1.style.display = "none"; 
mostrarBtn_port1.style.display = "inline-block"; 
});
}
/************************** BOTON PORT 2 *****************************/
var parrafo_port2 = document.getElementById("parrafo_port2");
var mostrarBtn_port2 = document.getElementById("mostrarBtn_port2");
var mostrarMenosBtn_port2 = document.getElementById("mostrarMenosBtn_port2");

if ((mostrarBtn_port2)) {
  mostrarBtn_port2.addEventListener("click", function() {
    parrafo_port2.style.height = "auto"; 
    mostrarBtn_port2.style.display = "none"; 
    mostrarMenosBtn_port2.style.display = "inline-block"; 
});

mostrarMenosBtn_port2.addEventListener("click", function() {
  parrafo_port2.style.height = "2.3rem";
  mostrarMenosBtn_port2.style.display = "none"; 
mostrarBtn_port2.style.display = "inline-block"; 
});
}
/************************** BOTON PORT 3 *****************************/
var parrafo_port3 = document.getElementById("parrafo_port3");
var mostrarBtn_port3 = document.getElementById("mostrarBtn_port3");
var mostrarMenosBtn_port3 = document.getElementById("mostrarMenosBtn_port3");

if ((mostrarBtn_port3)) {
  mostrarBtn_port3.addEventListener("click", function() {
    parrafo_port3.style.height = "auto"; 
    mostrarBtn_port3.style.display = "none"; 
    mostrarMenosBtn_port3.style.display = "inline-block"; 
});

mostrarMenosBtn_port3.addEventListener("click", function() {
  parrafo_port3.style.height = "2.3rem";
  mostrarMenosBtn_port3.style.display = "none"; 
mostrarBtn_port3.style.display = "inline-block"; 
});
}
/************************** BOTON PORT 4 *****************************/
var parrafo_port4 = document.getElementById("parrafo_port4");
var mostrarBtn_port4 = document.getElementById("mostrarBtn_port4");
var mostrarMenosBtn_port4 = document.getElementById("mostrarMenosBtn_port4");

if ((mostrarBtn_port4)) {
  mostrarBtn_port4.addEventListener("click", function() {
    parrafo_port4.style.height = "auto"; 
    mostrarBtn_port4.style.display = "none"; 
    mostrarMenosBtn_port4.style.display = "inline-block"; 
});

mostrarMenosBtn_port4.addEventListener("click", function() {
  parrafo_port4.style.height = "2.3rem";
  mostrarMenosBtn_port4.style.display = "none"; 
mostrarBtn_port4.style.display = "inline-block"; 
});
}
}


/*************** VIDEO IMAGEN 1 EN ACCION INDEX  REINICIO AUTOMATICO *******************/
const video_img1 = document.getElementById('myVideo2');
if (video_img1) {
// Reiniciar el video cuando finalice
video_img1.addEventListener('ended', function() {
  video_img1.currentTime = 0; // Establecer el tiempo actual a 0 para reiniciar
  video_img1.play(); // Reproducir el video nuevamente
});
}
/*************** VIDEO  CONVIERTE TUS IDEAS EN ACCION INDEX  REINICIO AUTOMATICO *******************/
const video = document.getElementById('myVideo');
if (video) {
// Reiniciar el video cuando finalice
video.addEventListener('ended', function() {
  video.currentTime = 0; // Establecer el tiempo actual a 0 para reiniciar
  video.play(); // Reproducir el video nuevamente
});
}
/********************** CAMBIO DE IMAGENES INDEX 1 *****************/
/**************** PARRAFO 1 ************/
const parrafo1 = document.getElementById('parrafo1');
const imagen1_parrafo1 = document.getElementById('imagen1_parrafo1');
const imagen2_parrafo1 = document.getElementById('imagen2_parrafo1');
if (parrafo1) {
parrafo1.addEventListener('mouseover', () => {
  imagen1_parrafo1.classList.add('paragraph__image_oculto');
  imagen2_parrafo1.classList.remove('paragraph__image_oculto');
});

parrafo1.addEventListener('mouseout', () => {
  imagen1_parrafo1.classList.remove('paragraph__image_oculto');
  imagen2_parrafo1.classList.add('paragraph__image_oculto');
});

/**************** PARRAFO 2 ************/
const parrafo2 = document.getElementById('parrafo2');
const imagen1_parrafo2 = document.getElementById('imagen1_parrafo2');
const imagen2_parrafo2 = document.getElementById('imagen2_parrafo2');

parrafo2.addEventListener('mouseover', () => {
  imagen1_parrafo2.classList.add('paragraph__image_oculto');
  imagen2_parrafo2.classList.remove('paragraph__image_oculto');
});

parrafo2.addEventListener('mouseout', () => {
  imagen1_parrafo2.classList.remove('paragraph__image_oculto');
  imagen2_parrafo2.classList.add('paragraph__image_oculto');
});
/**************** PARRAFO 3 ************/
const parrafo3 = document.getElementById('parrafo3');
const imagen1_parrafo3 = document.getElementById('imagen1_parrafo3');
const imagen2_parrafo3 = document.getElementById('imagen2_parrafo3');

parrafo3.addEventListener('mouseover', () => {
  imagen1_parrafo3.classList.add('paragraph__image_oculto');
  imagen2_parrafo3.classList.remove('paragraph__image_oculto');
});

parrafo3.addEventListener('mouseout', () => {
  imagen1_parrafo3.classList.remove('paragraph__image_oculto');
  imagen2_parrafo3.classList.add('paragraph__image_oculto');
});
/************************************************************ */
}

/*************************** EFECTO LOGO JUGUETON *******************/
// Selecciona el elemento del logo
const logo = document.getElementById('loguito_jugueton');


// Define las variables para el tamaño y la posición del logo
let logoWidth = logo.offsetWidth;
let logoHeight = logo.offsetHeight;
let logoX = 0;
let logoY = 0;

// Define las variables para el tamaño del área visible del cuerpo
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

// Define las variables para la velocidad y la dirección del movimiento del logo
let speedX = 0.5; // Velocidad horizontal
let speedY = 0.5; // Velocidad vertical
let directionX = 1; // Dirección horizontal (1 para derecha, -1 para izquierda)
let directionY = 1; // Dirección vertical (1 para abajo, -1 para arriba)

// Función para actualizar la posición del logo
function updateLogoPosition() {
  // Actualiza la posición del logo en el DOM
  logo.style.left = logoX + 'px';
  logo.style.top = logoY + 'px';
}

// Función para animar el movimiento del logo
function animateLogo() {
  // Actualiza la posición del logo según la velocidad y la dirección
  logoX += speedX * directionX;
  logoY += speedY * directionY;

  // Comprueba si el logo ha alcanzado los límites del área visible del cuerpo
  if (logoX + logoWidth >= viewportWidth || logoX <= 0) {
    directionX *= -1; // Invierte la dirección horizontal
  }
  if (logoY + logoHeight >= viewportHeight || logoY <= 0) {
    directionY *= -1; // Invierte la dirección vertical
  }

  // Actualiza la posición del logo en el DOM
  updateLogoPosition();

  // Repite la animación en el siguiente cuadro de animación
  requestAnimationFrame(animateLogo);
}

function logoClickHandler() {
  Swal.fire({
    html: `
    <div class="containers__sweet_alert">
    <h2 class="main-containers__right-title">Contact me for job opportunities!</h2>
    <form class="main-containers__right-form" method="POST">
      <input
        type="email"
        class="main-containers__right-input"
        placeholder="Email Address"
      />
      <input
        type="name"
        class="main-containers__right-input"
        placeholder="Full name"
      />
      <input
        type="text"
        class="main-containers__right-input contacto-formulario__textarea"
        placeholder="Text"
      />
    </form>
  </div>
    `,
    showCancelButton: true,
    confirmButtonText: 'Send',
    cancelButtonText: 'Cancel',
    preConfirm: () => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      return Promise.resolve();
    }
  });
}

/************************ EVENTO AGRANDAR LOGO JUGUETON AL PASAR CLICK ENCIMA *************/
// Agregar el evento 'mouseover' al logo
logo.addEventListener("mouseover", function() {
  // Aumentar el tamaño del logo de manera suave
  logo.style.transform = "scale(1.4)";
  logo.style.transition = "transform 0.2s ease";
});

// Agregar el evento 'mouseout' al logo
logo.addEventListener("mouseout", function() {
  // Restaurar el tamaño original del logo de manera suave
  logo.style.transform = "scale(1)";
  logo.style.transition = "transform 0.2s ease";
});
/************************************************************ */

// Agrega el evento de clic al logo
logo.addEventListener('click', logoClickHandler);

// Inicia la animación del logo
animateLogo();
/**************************** EVENTO BOTONES ***************************/
// Obtener todos los elementos de botón
var buttons = document.querySelectorAll("button");

// Recorrer todos los botones
buttons.forEach(function(button) {
  // Agregar el evento 'mouseover' al botón
  button.addEventListener("mouseover", function() {
    // Aumentar el tamaño del botón de manera suave
    button.style.transform = "scale(0.9)";
    button.style.transition = "transform 0.2s ease";
    // Cambiar la opacidad del botón para que sea un poco transparente
    button.style.opacity = "0.8";
  });

  // Agregar el evento 'mouseout' al botón
  button.addEventListener("mouseout", function() {
    // Restaurar el tamaño original del botón de manera suave
    button.style.transform = "scale(1)";
    button.style.transition = "transform 0.2s ease";
    // Restaurar la opacidad original del botón
    button.style.opacity = "1";
  });
});
/******************************* EVENTO LOGOS SOCIALES **********************/
// Obtener todos los elementos con la clase 'footer__social-icon'
var socialIcons = document.querySelectorAll(".footer__social-icon");

// Recorrer todos los elementos
socialIcons.forEach(function(icon) {
  // Agregar el evento 'mouseover' al elemento
  icon.addEventListener("mouseover", function() {
    // Aumentar el tamaño del elemento de manera suave
    icon.style.transform = "scale(1.1)";
    icon.style.transition = "transform 0.2s ease";
  });

  // Agregar el evento 'mouseout' al elemento
  icon.addEventListener("mouseout", function() {
    // Restaurar el tamaño original del elemento de manera suave
    icon.style.transform = "scale(1)";
    icon.style.transition = "transform 0.2s ease";
  });
});


window.addEventListener("scroll", function() {
  var whatsappLink = document.querySelector(".whatsapp-link");
  var distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;

  if (whatsappLink){
  if (distanceFromTop > 100) {
    whatsappLink.classList.add("show");
  } else {
    whatsappLink.classList.remove("show");
  }
}
});




/* IMAGENES DE CONOCEME CV */
////////// Intro ///////
const imgGeneral1 = document.querySelector('#img_general1');
const imgGeneral2 = document.querySelector('#img_general2');
const imgGeneral3 = document.querySelector('#img_general3');
const imgGeneral4 = document.querySelector('#img_general4');
const imgGeneral5 = document.querySelector('#img_general5');
const imgGeneral6 = document.querySelector('#img_general6');
const imgGeneral7 = document.querySelector('#img_general7');
if (imgGeneral1 || imgGeneral2 || imgGeneral3 || imgGeneral4 || imgGeneral5 || imgGeneral6 || imgGeneral7) {

    imgGeneral1.addEventListener('click', () => {
      Swal.fire({
        icon: 'success',
        title: '<h1 class="titulos_sweet_alert">Programming languages</h1>',
        html: '<div class="image-container"><img src="../static/img/conoceme/python.png" alt="Imagen python" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/flask.png" alt="Imagen flask" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/django.png" alt="Imagen django" class="lista-imagenes__imagen"></div>'+
              '<div class="image-container"><img src="../static/img/conoceme/js.png" alt="Imagen js" class="lista-imagenes__imagen"></div>'+
              '<div class="image-container"><img src="../static/img/conoceme/php.png" alt="Imagen php" class="lista-imagenes__imagen"></div>'+
              '<div class="image-container"><img src="../static/img/conoceme/net.png" alt="Imagen net" class="lista-imagenes__imagen"></div>',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        customClass: {
          confirmButton: 'custom-swal-confirm-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Acciones adicionales después de hacer clic en OK
        }
      });
      
});
////////// Integraciones de pago ///////
imgGeneral2.addEventListener('click', () => {
      Swal.fire({
        icon: 'success',
        title: '<h1 class="titulos_sweet_alert">Payment integrations</h1>',
        html: '<div class="image-container"><img src="../static/img/conoceme/stripe.png" alt="Imagen stripe" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/redelcom.png" alt="Imagen redelcom" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/mp.png" alt="Imagen mp" class="lista-imagenes__imagen"></div>'+
              '<div class="image-container"><img src="../static/img/conoceme/wetravel.png" alt="Imagen wetravel" class="lista-imagenes__imagen"></div>'+
              '<div class="image-container"><img src="../static/img/conoceme/pp.png" alt="Imagen paypal" class="lista-imagenes__imagen"></div>'+
              '<div class="image-container"><img src="../static/img/conoceme/otrospagos.png" alt="Imagen otrospagos" class="lista-imagenes__imagen"></div>',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        customClass: {
          confirmButton: 'custom-swal-confirm-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Acciones adicionales después de hacer clic en OK
        }
      });
      
});

////////// DB ///////
img_general3.addEventListener('click', () => {
      Swal.fire({
        icon: 'success',
        title: '<h1 class="titulos_sweet_alert">Database</h1>',
        html: '<div class="image-container"><img src="../static/img/conoceme/aws.png" alt="Imagen aws" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/mysql.png" alt="Imagen mysql" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/firebase.png" alt="Imagen firebase" class="lista-imagenes__imagen"></div>'+
              '<div class="image-container"><img src="../static/img/conoceme/sql.png" alt="Imagen sql" class="lista-imagenes__imagen"></div>'+
              '<div class="image-container"><img src="../static/img/conoceme/sqlite.png" alt="Imagen sqlite" class="lista-imagenes__imagen"></div>',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        customClass: {
          confirmButton: 'custom-swal-confirm-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Acciones adicionales después de hacer clic en OK
        }
      });
      
});

////////// Integraciones Servidores ///////
img_general4.addEventListener('click', () => {
      Swal.fire({
        icon: 'success',
        title: '<h1 class="titulos_sweet_alert">Servers</h1>',
        html: '<div class="image-container"><img src="../static/img/conoceme/vcenter.png" alt="Imagen vcenter" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/linux.png" alt="Imagen linux" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/windows.png" alt="Imagen windows" class="lista-imagenes__imagen"></div>',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        customClass: {
          confirmButton: 'custom-swal-confirm-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Acciones adicionales después de hacer clic en OK
        }
      });
      
});

////////// Integraciones Monitoreo y almacenamiento ///////
img_general5.addEventListener('click', () => {
      Swal.fire({
        icon: 'success',
        title: '<h1 class="titulos_sweet_alert">Monitoring System and Docker</h1>',
        html: '<div class="image-container"><img src="../static/img/conoceme/grafana.png" alt="Imagen grafana" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/docker.png" alt="Imagen docker" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/influx.png" alt="Imagen influx" class="lista-imagenes__imagen"></div>',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        customClass: {
          confirmButton: 'custom-swal-confirm-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Acciones adicionales después de hacer clic en OK
        }
      });
      
});

////////// Integraciones Monitoreo y almacenamiento ///////
img_general6.addEventListener('click', () => {
      Swal.fire({
        icon: 'success',
        title: '<h1 class="titulos_sweet_alert">Networks</h1>',
        html: '<div class="image-container"><img src="../static/img/conoceme/ubiquiti.png" alt="Imagen ubiquiti" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/starlink.jpg" alt="Imagen starlink" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/mikrotik.png" alt="Imagen mikrotik" class="lista-imagenes__imagen"></div>',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        customClass: {
          confirmButton: 'custom-swal-confirm-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Acciones adicionales después de hacer clic en OK
        }
      });
      
});

////////// Mineria de data ///////
img_general7.addEventListener('click', () => {
      Swal.fire({
        icon: 'success',
        title: '<h1 class="titulos_sweet_alert">Minería de Data</h1>',
        html: '<div class="image-container"><img src="../static/img/conoceme/casper.png" alt="Imagen ubiquiti" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/node.png" alt="Imagen starlink" class="lista-imagenes__imagen"></div>'+
              '<div class="image-container"><img src="../static/img/conoceme/html.png" alt="Imagen html" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/css.png" alt="Imagen css" class="lista-imagenes__imagen"></div>' +
              '<div class="image-container"><img src="../static/img/conoceme/sass.png" alt="Imagen sass" class="lista-imagenes__imagen"></div>' ,
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        customClass: {
          confirmButton: 'custom-swal-confirm-button'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Acciones adicionales después de hacer clic en OK
        }
      });
      
});
}



/* CAMBIO DE IDIOMAS */
i18next.init(
  {
    lng: 'en', // Idioma por defecto
    resources: {
      en: {
        translation: {
          "title": "Custom Web Development and Innovative Applications | Boost Your Business",
          "home": "Home",
          "about": "About",
          "services": "Services",
          "portfolio": "Portfolio",
          "contact": "Contact",
          "welcome": "Welcome to DDB Web Studio",
          "greeting": "Hello, {name}!",
          "intro_paragraph": "Boosting your online presence and building exceptional digital experiences",
          "development_paragraph": "Custom web development and innovative applications to boost your business, comprehensive services, and cutting-edge frontend/backend enhancements",
          "transform_title": "Transforming Ideas into Digital Reality",
          "transform_description": "Custom web development and application creation to boost your online presence",
          "success_title": "Your Web Success, Our Passion",
          "success_description": "Professional web development, comprehensive services, and state-of-the-art improvements",
          "solutions_title": "Comprehensive Solutions",
          "solutions_description": "We are experts in web development and creating apps tailored to your needs",
          "ideas_title": "Turn Your Ideas into Action with a Click",
          "ideas_description": "At DDB Web Studio, we are passionately dedicated to transforming ideas into innovative digital solutions. Our focus is on custom web development and creating applications that adapt to the unique needs of our clients.",
          "show_more": "Show More",
          "show_less": "Show Less",
          "focus_description": "With meticulous focus on design and functionality, we work to deliver engaging and functional digital experiences. From creating custom websites that reflect your brand's identity to developing cutting-edge applications that drive interaction with your customers, our goal is to help you achieve online success.",
          "summary_title": "We Turn Ideas into Successful Digital Solutions.",
          "ddb_studio": "DDB Web Studio",
          "contact_me": "If you would like to schedule an interview or contact me for job opportunities, I will be happy to receive your message.",
          "contact_opportunities": "Contact Me for Job Opportunities!",
          "send": "Send",
          "footer_text": "Santiago de Chile, © 2023 All rights reserved. DDB Web Studio. Designed by DDB Web Studio",
          /**CONOCEME **/
          "conoceme_title":"Get to Know Me - Experience in Programming and Notable Achievements",
          "deiker_name": "Deiker Verasmendi",
          "telecom_engineer": "Telecommunications Engineer",
          "exp_laboral": "Work Experience",
          "prog_desarrollador": "Full Stack Programmer and Developer with skills in Python, PHP, .NET, and JavaScript. Specialized in web development with Flask and Django, and passionate about creating innovative solutions.",
          "exp_pago": "Extensive experience in payment integrations with APIs from recognized companies.",
          "exp_almacenamiento": "Extensive experience in data management and optimization in cloud storage environments, ensuring efficient performance and high availability.",
          "exp_admin_servidores": "Knowledge in server administration: Vcenter, configuring and deploying servers in Linux and Windows environments.",
          "exp_docker": "Experience in using Docker for creating and managing development and production environments. Extensive knowledge in monitoring systems like Grafana and InfluxDB.",
          "ingeniero_redes": "Network Engineer with extensive experience in LAN/WAN network administration and monitoring in the Southern region of Chile, including the Torres del Paine area. Specialized in Telecommunications projects and Ubiquiti links (AirFiber, LiteBeam). Knowledge in technologies like Starlink and Mikrotik modules for Routing, Firewall, and NAT.",
          "desarrollador_casperjs": "Developer specialized in Data Mining Level III with CasperJS.",
          "desarrollo_js_html": "Experience in developing codes in JavaScript. Inspection and handling of codes in HTML. Web Scraping with CasperJS.",
          "trayectoria_profesional": "Professional Trajectory",
          "austro_link": "https://www.austrointernet.cl/",
          "austro_nombre": "AUSTRO INTERNET S.A",
          "austro_fechas": "(Chile) October 2018 - Present",
          "talent_link": "https://cl.talent.com/",
          "talent_nombre": "TALENT INC.",
          "talent_fechas": "(Canada) August 2016 – October 2018",
          /**SERVICIOS **/
          "servicios_title":"Web Development Services, Mobile Applications, and Payment Transactions",
          "servicios_title_2": "Our Services",
          "desarrollo_web_title": "Custom Web Development",
          "desarrollo_web_text": "Our custom web development service offers tailor-made solutions to turn your vision into an exceptional digital reality. Using the latest technologies and development practices, we create responsive, intuitive, and visually appealing websites that reflect your brand and provide an outstanding user experience. We stand out for our commitment to excellence and customer satisfaction, working hard to exceed your expectations and leave our mark on every project. Join us on this exciting journey towards the digital transformation of your business.",
          "show_more": "Show More",
          "show_less": "Show Less",
          "transform_title": "Transform Your Vision into an Exceptional Digital Experience",
          "aplicaciones_moviles_title": "Custom Mobile Applications",
          "aplicaciones_moviles_text": "Our custom mobile application development service offers you the opportunity to reach millions of users through mobile platforms. We design and develop personalized and highly functional mobile applications that adapt to your needs and business goals. Whether you are looking for a native or cross-platform application, our team of mobile development experts will provide innovative and quality solutions. We work closely with you to understand your requirements and offer you a mobile application that will captivate your users and help you stand out in the market. Let us take your business to the next mobile level!",
          "ideas_title": "Empower Your Business",
          "transacciones_negocio_title": "Streamline Transactions in Your Business",
          "transacciones_negocio_text": "Our payment gateway implementation service offers you the possibility to integrate payment systems such as PayPal, Mercado Pago, and PayU into your website or mobile application. We provide custom and secure solutions that ensure a smooth shopping experience for your customers, allowing them to make transactions quickly and reliably. Simplify the payment process and increase sales conversion with our efficient payment gateway solutions tailored to your business needs.",
          "success_title": "Secure and Reliable Payment Solutions",
          "construye_tienda_title": "Build Your Virtual Store",
          "construye_tienda_text": "Our virtual store development service offers you the possibility to create a robust and attractive e-commerce platform for your business. We design and develop customized online stores that cater to your needs and business objectives. From setting up product catalogs to implementing secure payment systems and optimizing the purchasing process, we ensure that you receive a complete and functional virtual store. With our expertise in web development and a user-centric approach, we create intuitive, appealing, and highly convertible virtual stores. Boost your online sales and take your business to the next level with our virtual store development solution.",
          "ecommerce_title": "Ecommerce Development Service",
          /**PORTAFOLIO **/
          "portafolio_title":"Apps Portfolio | Development of Easy Pay, DataDash, Inventory Track, and Totem Flow",
          "portfolio.apps_title": "Explore Our Portfolio of Applications",
          "portfolio.apps_intro_text": "Welcome to our portfolio of applications, where you can discover a wide variety of projects that have been developed with passion and dedication. Our portfolio covers a wide range of applications that stand out in different areas, from custom websites and virtual stores to innovative mobile applications.",
          "portfolio.app1_title": "EasyPay",
          "portfolio.app1_text": "EasyPay is an innovative payment gateway application that simplifies your online transactions. With its intuitive interface and high security standards, you can make payments quickly and securely, providing a hassle-free experience for your online purchases.",
          "portfolio.app1_caption": "Your Ally for Fast and Secure Payments",
          "portfolio.app2_title": "DataDash",
          "portfolio.app2_text": "DataDash is an intuitive and powerful dashboard application that allows you to monitor and analyze your data in real-time. Get key insights and make informed decisions quickly and efficiently.",
          "portfolio.app2_caption": "Your Smart Control Center for Data Visualization",
          "portfolio.app3_title": "InventoTrack",
          "portfolio.app3_text": "InventoTrack is a powerful inventory management application that enables you to have precise control of your products and efficiently track your stocks. Optimize your operations and maximize your efficiency with this intuitive and practical tool.",
          "portfolio.app3_caption": "Control and Optimize Your Inventories with Ease",
          "portfolio.app4_title": "TotemFlow",
          "portfolio.app4_text": "TotemFlow is a self-service application that transforms the way your customers interact with your business. With an intuitive interface and advanced features, users can carry out transactions, obtain information, and access services quickly and autonomously. Optimize your processes, improve customer satisfaction, and empower your business with TotemFlow.",
          "portfolio.app4_caption": "The Innovative Solution for Customer Self-Service",
          /** CONTACTO **/
          "contacto_title":"Contact | Send Us Your Inquiries and Job Opportunities",
          "contact.title": "Contact | Send us your inquiries and job opportunities",
          "contact.placeholderName": "Full Name",
          "contact.placeholderEmail": "Email",
          "contact.placeholderSubject": "Subject",
          "contact.placeholderMessage": "Message",
          "contact.buttonSend": "Send",
        }
      },
      es: {
        translation: {
          "title": "Desarrollo web a medida y aplicaciones innovadoras | Impulsa tu negocio",
          "home": "Inicio",
          "about": "Conóceme",
          "services": "Servicios",
          "portfolio": "Portafolio",
          "contact": "Contacto",
          "welcome": "Bienvenido a DDB Web Studio",
          "greeting": "¡Hola, {name}!",
          "intro_paragraph": "Impulsando tu presencia en línea y construyendo experiencias digitales excepcionales",
          "development_paragraph": "Desarrollo web personalizado y creación de aplicaciones para potenciar tu presencia en línea, servicios integrales y mejoras frontend/backend de vanguardia",
          "transform_title": "Transformando Ideas en Realidad Digital",
          "transform_description": "Desarrollo web personalizado y creación de aplicaciones para potenciar tu presencia en línea",
          "success_title": "Tu Éxito en la Web, Nuestra Pasión",
          "success_description": "Desarrollo web profesional, servicios completos y mejoras de última generación",
          "solutions_title": "Soluciones Integrales",
          "solutions_description": "Somos expertos en el desarrollo web y la creación de aplicaciones adaptadas a tus necesidades",
          "ideas_title": "Convierte tus Ideas en Acción con un Click",
          "ideas_description": "En DDB Web Studio, nos dedicamos apasionadamente a transformar ideas en soluciones digitales innovadoras. Nuestro enfoque se centra en el desarrollo web personalizado y la creación de aplicaciones que se adaptan a las necesidades únicas de nuestros clientes.",
          "show_more": "Mostrar Más",
          "show_less": "Mostrar Menos",
          "focus_description": "Con un enfoque meticuloso en el diseño y la funcionalidad, trabajamos para proporcionar experiencias digitales atractivas y funcionales. Desde la creación de sitios web personalizados que reflejen la identidad de tu marca hasta el desarrollo de aplicaciones de vanguardia que impulsen la interacción con tus clientes, nuestro objetivo es ayudarte a alcanzar el éxito en línea.",
          "summary_title": "Transformamos Ideas en Soluciones Digitales Exitosas.",
          "ddb_studio": "DDB Web Studio",
          "contact_me": "Si deseas concertar una entrevista o contactarme para oportunidades laborales, estaré encantado de recibir tu mensaje.",
          "contact_opportunities": "¡Contáctame para oportunidades laborales!",
          "send": "Enviar",
          "footer_text": "Santiago de Chile, © 2023 Todos los derechos reservados. DDB Web Studio. Diseñado por DDB Web Studio",
          /** CONOCEME */
          "conoceme_title":"Conóceme - Experiencia en programación y logros destacados",
          "deiker_name": "Deiker Verasmendi",
          "telecom_engineer": "Ingeniero en Telecomunicaciones",
          "exp_laboral": "Experiencia Laboral",
          "prog_desarrollador": "Programador y desarrollador Full Stack con habilidades en Python, PHP, .NET y JavaScript. Especializado en el desarrollo web con Flask y Django, y apasionado por crear soluciones innovadoras.",
          "exp_pago": "Amplia experiencia en integraciones de pago con APIs de reconocidas compañías.",
          "exp_almacenamiento": "Amplia experiencia en la gestión y optimización de datos en entornos de almacenamiento en la nube, garantizando un rendimiento eficiente y una alta disponibilidad.",
          "exp_admin_servidores": "Conocimiento en administración de servidores: Vcenter, configuración y despliegue de servidores en entornos Linux y Windows.",
          "exp_docker": "Experiencia en el uso de Docker para la creación y gestión de entornos de desarrollo y producción. Amplio conocimiento en sistemas de monitoreo como Grafana e InfluxDB.",
          "ingeniero_redes": "Ingeniero de Redes con amplia experiencia en la administración y monitorización de redes LAN/WAN en la región Sur de Chile, incluyendo el área de Torres del Paine. Especializado en proyectos de Telecomunicaciones y enlaces Ubiquiti (AirFiber, LiteBeam). Conocimiento en tecnologías como Starlink y módulos Mikrotik para Routing, Firewall y NAT.",
          "desarrollador_casperjs": "Desarrollador Especializado en Minería de Data Nivel III en CasperJS.",
          "desarrollo_js_html": "Experiencia en desarrollo de códigos en JavaScript. Inspección y Manejo de códigos en HTML. Web Scraping en CasperJS.",
          "trayectoria_profesional": "Trayectoria Profesional",
          "austro_link": "https://www.austrointernet.cl/",
          "austro_nombre": "AUSTRO INTERNET S.A",
          "austro_fechas": "(Chile) Octubre 2018 - Actualidad",
          "talent_link": "https://cl.talent.com/",
          "talent_nombre": "TALENT INC.",
          "talent_fechas": "(Canadá) Agosto 2016 – Octubre 2018",
          /**SERVICIOS **/
          "servicios_title":"Servicios de Desarrollo Web, Aplicaciones Móviles y Transacciones de Pago",
          "servicios_title_2": "Nuestros Servicios",
          "desarrollo_web_title": "Desarrollo Web Personalizado",
          "desarrollo_web_text": "Nuestro servicio de desarrollo web personalizado te ofrece soluciones a medida para convertir tu visión en una realidad digital excepcional. Utilizando las últimas tecnologías y prácticas de desarrollo, creamos sitios web responsivos, intuitivos y visualmente atractivos que reflejan tu marca y brindan una experiencia de usuario excepcional. Nos destacamos por nuestro compromiso con la excelencia y la satisfacción del cliente, trabajando arduamente para superar tus expectativas y dejando nuestra marca en cada proyecto. Únete a nosotros en este emocionante viaje hacia la transformación digital de tu negocio.",
          "show_more": "Mostrar Más",
          "show_less": "Mostrar Menos",
          "transform_title": "Transforma tu Visión en una Experiencia Digital Excepcional",
          "aplicaciones_moviles_title": "Aplicaciones móviles personalizadas",
          "aplicaciones_moviles_text": "Nuestro servicio de desarrollo de aplicaciones móviles te ofrece la oportunidad de llevar tu negocio al alcance de millones de usuarios a través de plataformas móviles. Diseñamos y desarrollamos aplicaciones móviles personalizadas y altamente funcionales que se adaptan a tus necesidades y objetivos comerciales. Ya sea que estés buscando una aplicación nativa o multiplataforma, nuestro equipo de expertos en desarrollo móvil se encargará de brindarte soluciones innovadoras y de calidad. Trabajamos estrechamente contigo para comprender tus requerimientos y ofrecerte una aplicación móvil que cautivará a tus usuarios y te ayudará a destacarte en el mercado. ¡Déjanos llevar tu negocio al siguiente nivel móvil!",
          "ideas_title": "Potencia tu negocio",
          "transacciones_negocio_title": "Facilita las transacciones en tu negocio",
          "transacciones_negocio_text": "Nuestro servicio de implementación de pasarelas de pago te ofrece la posibilidad de integrar sistemas de pago como PayPal, Mercado Pago y PayU a tu sitio web o aplicación móvil. Brindamos soluciones personalizadas y seguras que garantizan una experiencia de compra fluida para tus clientes, permitiéndoles realizar transacciones de forma rápida y confiable. Simplifica el proceso de pago y aumenta la conversión de ventas con nuestras soluciones de pasarelas de pago eficientes y adaptadas a tus necesidades comerciales.",
          "success_title": "Soluciones de pagos seguras y confiables",
          "construye_tienda_title": "Construye tu Tienda Virtual",
          "construye_tienda_text": "Nuestro servicio de desarrollo de tiendas virtuales te ofrece la posibilidad de crear una plataforma de comercio electrónico sólida y atractiva para tu negocio. Diseñamos y desarrollamos tiendas en línea personalizadas, adaptadas a tus necesidades y objetivos comerciales. Desde la configuración de catálogos de productos hasta la implementación de sistemas de pago seguros y la optimización del proceso de compra, nos aseguramos de brindarte una tienda virtual completa y funcional. Con nuestra experiencia en desarrollo web y enfoque centrado en la experiencia del usuario, creamos tiendas virtuales intuitivas, atractivas y altamente convertibles. Impulsa tus ventas en línea y lleva tu negocio al siguiente nivel con nuestra solución de desarrollo de tiendas virtuales.",
          "ecommerce_title": "Servicio de Desarrollo Ecommerce",
          /**PORTAFOLIO **/
          "portafolio_title":"Portafolio de Apps | Desarrollo de Easy Pay, DataDash, Inventario Track y Totem Flow",
          "portfolio.apps_title": "Explora nuestro Portafolio de Aplicaciones",
          "portfolio.apps_intro_text": "Bienvenido a nuestro portafolio de aplicaciones, donde podrás descubrir una amplia variedad de proyectos que han sido desarrollados con pasión y dedicación. Nuestro portafolio abarca una amplia gama de aplicaciones que destacan en diferentes áreas, desde sitios web personalizados y tiendas virtuales, hasta aplicaciones móviles innovadoras.",
          "portfolio.app1_title": "EasyPay",
          "portfolio.app1_text": "EasyPay es una innovadora aplicación de pasarela de pago que simplifica tus transacciones en línea. Con su interfaz intuitiva y altos estándares de seguridad, podrás realizar pagos de manera rápida y segura, brindando una experiencia sin complicaciones para tus compras en línea.",
          "portfolio.app1_caption": "Tu Aliado para Pagos Rápidos y Seguros",
          "portfolio.app2_title": "DataDash",
          "portfolio.app2_text": "DataDash es una aplicación de dashboard intuitiva y poderosa que te permite monitorear y analizar tus datos en tiempo real. Obtén información clave y toma decisiones informadas de manera rápida y eficiente.",
          "portfolio.app2_caption": "Tu centro de control inteligente para visualizar datos",
          "portfolio.app3_title": "InventoTrack",
          "portfolio.app3_text": "InventoTrack es una potente aplicación de gestión de inventario que te permite tener un control preciso de tus productos y realizar un seguimiento eficiente de tus existencias. Optimiza tus operaciones y maximiza tu eficiencia con esta herramienta intuitiva y práctica.",
          "portfolio.app3_caption": "Controla y optimiza tus inventarios con facilidad",
          "portfolio.app4_title": "TotemFlow",
          "portfolio.app4_text": "TotemFlow es una aplicación de autoatención que transforma la forma en que tus clientes interactúan con tu negocio. Con una interfaz intuitiva y funciones avanzadas, permite a los usuarios realizar transacciones, obtener información y acceder a servicios de manera rápida y autónoma. Optimiza tus procesos, mejora la satisfacción del cliente y potencia tu negocio con TotemFlow.",
          "portfolio.app4_caption": "La solución innovadora para la autoatención de tus clientes",
          /** CONTACTO **/
          "contacto_title":"Contacto | Envíanos tus consultas y oportunidades laborales",
          "contact.title": "Contáctame para una consulta",
          "contact.placeholderName": "Nombre Completo",
          "contact.placeholderEmail": "Email",
          "contact.placeholderSubject": "Asunto",
          "contact.placeholderMessage": "Mensaje",
          "contact.buttonSend": "Enviar",
        }
      }
    }
  },
  function (err, t) {
    // El i18next está listo para ser utilizado
    updateTranslations(t);
  }
);

// Función para actualizar los elementos traducibles del DOM
function updateTranslations(t) {
  const elementsToTranslate = document.querySelectorAll("[data-i18n]");
  elementsToTranslate.forEach((element) => {
    const key = element.dataset.i18n;
    const options = element.dataset.i18nOptions ? JSON.parse(element.dataset.i18nOptions) : null;

    if (options) {
      element.textContent = t(key, options);
    } else {
      element.textContent = t(key);
    }
  });
}

// Función para cambiar al idioma seleccionado
function switchLanguage(language) {
  i18next.changeLanguage(language, function (err, t) {
    updateTranslations(t);
  });
}

// Evento click para cambiar al idioma inglés
document.getElementById("btn-en").addEventListener("click", () => switchLanguage("en"));

// Evento click para cambiar al idioma español
document.getElementById("btn-es").addEventListener("click", () => switchLanguage("es"));

// Carga el idioma actual al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const currentLanguage = localStorage.getItem("language") || "en";
  switchLanguage(currentLanguage);
});