const toggleSwitch = document.getElementById('toggle-switch');

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el fragmento de la URL
    var fragment = window.location.hash;

    // Verificar si el fragmento contiene la cadena "section=books&lang=es"
    if (fragment.includes('s' || 'section')) {
        // Obtener el nombre de la sección de la URL
        var sectionName = fragment.split('=')[1].split('&')[0];
    
  
        // Encontrar el elemento con el ID correspondiente a la sección
        var idElement = document.getElementById(sectionName);
  
        if (idElement) {
          idElement.scrollIntoView({
            behavior: 'smooth' // Esto proporciona un desplazamiento suave
          });
  
          // Puedes realizar acciones adicionales aquí después de desplazarte
        }
    }

    if (fragment.includes('lang=es')){
        cambiarIdioma();
    }

    if (fragment.includes('lang=en')){
        cambiarIdioma();
        setTimeout(cambiarIdiomaIngles(), 500)
        
    }
  });
// Función para cambiar el idioma a español
function cambiarIdioma() {
    const elementosATraducir = document.querySelectorAll('[data-translate]');
    elementosATraducir.forEach((elemento) => {
        const textoOriginal = elemento.getAttribute('data-translate');
        // Agregar el atributo data-original-text con el valor del texto original
        elemento.setAttribute('data-original-text', elemento.textContent);
        elemento.textContent = textoOriginal;
    });

    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('language', 'spanish');
}

// Función para cambiar el idioma a inglés
function cambiarIdiomaIngles() {
    const elementosATraducir = document.querySelectorAll('[data-translate]');
    elementosATraducir.forEach((elemento) => {
        const textoTraducido = elemento.getAttribute('data-original-text');
        elemento.textContent = textoTraducido;
    });

    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('language', 'english');
}

toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
        cambiarIdioma();
    } else {
        cambiarIdiomaIngles();
    }
});
