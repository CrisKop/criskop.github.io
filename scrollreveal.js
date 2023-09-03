gsap.registerPlugin(ScrollTrigger);

gsap.from('.scrollreveal', {
  opacity: 0, // Establece la propiedad de opacidad inicial en 0
  y: 50, // Establece la propiedad de posición inicial en 50px hacia abajo (o cualquier otro valor deseado)
  duration: 0.25, // Duración de la animación
  scrollTrigger: {
    trigger: '.scrollreveal',
    toggleActions: 'play none none none', // Configuración de toggleActions
    start: 'top 80%', // Comienza la animación cuando el 80% superior del elemento entra en la vista
    end: 'bottom 20%', // Termina la animación cuando el 20% inferior del elemento sale de la vista
  },
});