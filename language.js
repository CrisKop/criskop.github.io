const toggleSwitch = document.getElementById('toggle-switch');

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
