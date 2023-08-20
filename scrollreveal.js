ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 500,
    delay: 50
  })

  ScrollReveal().reveal('.scrollreveal', {origin: 'top'})

  gsap.registerPlugin(ScrollTrigger);



  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)