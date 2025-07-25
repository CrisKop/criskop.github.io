import React, { useEffect } from "react";
import AboutMeComponent from "../components/sections/aboutme/AboutMe";
import SEO from "../components/SEO";

function AboutMe() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }); // Scroll al inicio de la página en cada cambio de ubicación
    }, 10);
  }, []);

  return (
    <>
      <SEO 
        title="Sobre Mí - Cristian Prince | Desarrollador Web Full Stack"
        description="Conoce más sobre Cristian Prince, desarrollador web full stack con experiencia en React, Node.js y tecnologías modernas. Historia, habilidades y pasión por el desarrollo."
        keywords="sobre mi, Cristian Prince, desarrollador web, experiencia, habilidades, React developer, Node.js developer"
        url="https://criskop.github.io/aboutme"
        type="profile"
      />
      <section className="allcontainer">
        <AboutMeComponent />
      </section>
    </>
  );
}

export default AboutMe;
