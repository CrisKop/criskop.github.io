let currentPage = 1;
let isTransitioning = false;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(' ' + toggleClassName, '');
  } else {
    e.className += ' ' + toggleClassName;
  }
}

function movePage(e, page) {
  if (isTransitioning) {
    return; // Si ya se está realizando una transición, no se hace nada
  }

  if (page == currentPage) {
    isTransitioning = true; // Marcar que se está realizando una transición
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");

    setTimeout(function() {
      isTransitioning = false; // Marcar que la transición ha terminado
    }, 500); // Esperar 500 milisegundos (0.5 segundos) antes de permitir otra transición
  } else if (page == currentPage - 1) {
    isTransitioning = true; // Marcar que se está realizando una transición
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");

    setTimeout(function() {
      isTransitioning = false; // Marcar que la transición ha terminado
    }, 500); // Esperar 500 milisegundos (0.5 segundos) antes de permitir otra transición
  }
}