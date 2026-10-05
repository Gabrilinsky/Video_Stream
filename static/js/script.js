document.addEventListener('DOMContentLoaded', () => {

  // 1. REPRODUCCIÓN AL PASAR EL CURSOR (HOVER)
  const videosMiniatura = document.querySelectorAll('.principal-video');

  videosMiniatura.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play().catch(error => {
        console.log("Error de reproducción:", error);
      });
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  // 2. SUMAR "ME GUSTA"
  const btnLike = document.getElementById('btn-like');
  const likeCountSpan = document.getElementById('like-count');
  let meGustaDado = false;

  if (btnLike && likeCountSpan) {
    btnLike.addEventListener('click', () => {
      meGustaDado = !meGustaDado;
      if (meGustaDado) {
        likeCountSpan.innerText = '4,9 K';
        btnLike.classList.add('liked');
      } else {
        likeCountSpan.innerText = '4,8 K';
        btnLike.classList.remove('liked');
      }
    });
  }

  // 3. SUSCRIBIRSE + CAMBIO DE ESTADO
  const btnSuscripcion = document.getElementById('btn-suscripcion');
  const btnCampana = document.getElementById('btn-campana');
  const subPlus = document.getElementById('sub-plus');
  let suscrito = false;

  if (btnSuscripcion) {
    btnSuscripcion.addEventListener('click', () => {
      suscrito = !suscrito;
      if (suscrito) {
        btnSuscripcion.textContent = 'Suscrito';
        btnSuscripcion.classList.add('suscrito');
        btnCampana.classList.remove('hidden');
        subPlus.classList.add('visible');
      } else {
        btnSuscripcion.textContent = 'Suscribirse';
        btnSuscripcion.classList.remove('suscrito');
        btnCampana.classList.add('hidden');
        subPlus.classList.remove('visible');
      }
    });
  }

  // 4. AÑADIR A LA COLA + TOAST
  const toast = document.getElementById('toast');
  const btnCloseToast = document.getElementById('btn-close-toast');
  const botonesAddQueue = document.querySelectorAll('.btn-add-queue');
  let temporizadorToast;

  botonesAddQueue.forEach(boton => {
    boton.addEventListener('click', () => {
      toast.classList.add('show');

      clearTimeout(temporizadorToast);
      temporizadorToast = setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    });
  });

  if (btnCloseToast) {
    btnCloseToast.addEventListener('click', () => {
      toast.classList.remove('show');
    });
  }

  // 5. MOSTRAR MÁS / MENOS DESCRIPCIÓN
  const btnMostrarMas = document.getElementById('btn-mostrar-mas');
  const textoDescripcion = document.getElementById('texto-descripcion');

  if (btnMostrarMas && textoDescripcion) {
    let expandido = false;

    btnMostrarMas.addEventListener('click', () => {
      expandido = !expandido;
      if (expandido) {
        textoDescripcion.innerHTML += "<br><br>Recuerda activar la campana de notificaciones para no perderte ningún nuevo episodio semanal sobre viajes y naturaleza.";
        btnMostrarMas.textContent = 'Mostrar menos ▴';
      } else {
        textoDescripcion.innerHTML = "Un recorrido por los lagos más hermosos de la Patagonia y sus alrededores. Consejos, rutas y paisajes imperdibles.";
        btnMostrarMas.textContent = 'Mostrar más ▾';
      }
    });
  }

});

// Selección de elementos del DOM
const btnSuscripcion = document.getElementById('btn-suscripcion');
const btnCampana = document.getElementById('btn-campana');
const subPlus = document.getElementById('sub-plus');

// Variable de estado inicial (no suscrito)
let suscrito = false;

if (btnSuscripcion) {
  btnSuscripcion.addEventListener('click', () => {
    // Cambia el estado al opuesto (true a false, o false a true)
    suscrito = !suscrito;

    if (suscrito) {
      // Estado: SUSCRITO
      btnSuscripcion.textContent = 'Suscrito';
      btnSuscripcion.classList.add('suscrito');
      
      if (btnCampana) btnCampana.classList.remove('hidden');
      if (subPlus) subPlus.classList.add('visible');
    } else {
      // Estado: NO SUSCRITO (Vuelve al estado inicial)
      btnSuscripcion.textContent = 'Suscribirse';
      btnSuscripcion.classList.remove('suscrito');
      
      if (btnCampana) btnCampana.classList.add('hidden');
      if (subPlus) subPlus.classList.remove('visible');
    }
  });
}