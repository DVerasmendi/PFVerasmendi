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
    <h2 class="main-containers__right-title">¡Contáctame para oportunidades laborales!</h2>
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
        placeholder="Texto"
      />
    </form>
  </div>
    `,
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    cancelButtonText: 'Cancelar',
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
        title: '<h1 class="titulos_sweet_alert">Lenguajes de programación</h1>',
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
        title: '<h1 class="titulos_sweet_alert">Integraciones de pago</h1>',
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
        title: '<h1 class="titulos_sweet_alert">Servidores</h1>',
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
        title: '<h1 class="titulos_sweet_alert">Sistema de monitoreo y Docker</h1>',
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
        title: '<h1 class="titulos_sweet_alert">Redes</h1>',
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