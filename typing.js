const phrases = ["FULL STACK DEVELOPER", "READY FOR EVERYTHING"];
const typingSpeed = 50; // Velocidad de escritura en milisegundos
const eraseSpeed = 35; // Velocidad de borrado en milisegundos
const pauseBetweenPhrases = 2000; // Pausa entre frases en milisegundos
const pauseBeforeTyping = 500; // Pausa antes de comenzar a escribir una nueva frase en milisegundos
const cursor = document.getElementById("cursor");
const textContainer = document.getElementById("text");

let phraseIndex = 0;
let charIndex = 0;

// Establecer el tamaño del contenedor para evitar el movimiento
textContainer.style.minHeight = textContainer.clientHeight + "px";

function typeText() {
  if (charIndex < phrases[phraseIndex].length) {
    textContainer.textContent += phrases[phraseIndex][charIndex];
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    cursor.style.display = "inline";
    setTimeout(eraseText, pauseBetweenPhrases);
  }
}

function eraseText() {
  if (charIndex > 0) {
    textContainer.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, eraseSpeed);
  } else {
    cursor.style.display = "inline";
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeText, pauseBeforeTyping);
  }
}

typeText();