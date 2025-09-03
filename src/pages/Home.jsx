import React, { useRef, useEffect } from "react";
import Presentation from "../components/sections/Presentation";
import Projects from "../components/sections/Projects";
import AboutMeMini from "../components/sections/AboutMeMini";
import { motion, useScroll } from "framer-motion";
import Books from "../components/sections/books/Books";
import Contact from "../components/sections/contact/Contact";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Cristian Prince - Desarrollador Web Full Stack | Portfolio"
        description="Portfolio de Cristian Prince, desarrollador web full stack especializado en React, Node.js y tecnologías modernas. Proyectos innovadores y soluciones web personalizadas."
        keywords="desarrollador web, full stack, React, Node.js, JavaScript, portfolio, Cristian Prince, CrisKop, desarrollo web, programador"
        url="https://criskop.github.io"
        type="website"
      />
      <motion.section className="allcontainer">
        <Presentation />

        <Projects isPreview={true} />

        <AboutMeMini />

        <Books isPreview={true} />

        <Contact isPreview={true} />
      </motion.section>
    </>
  );
}

export default Home;
