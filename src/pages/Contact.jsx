import React from "react";
import Contact from "../components/sections/contact/Contact";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

function ContactPage() {
  return (
    <>
      <SEO 
        title="Contacto - Cristian Prince | Desarrollador Web Full Stack"
        description="¿Tienes un proyecto en mente? Contacta con Cristian Prince para desarrollo web, aplicaciones React, Node.js y soluciones full stack personalizadas."
        keywords="contacto, contratar desarrollador, servicios web, desarrollo React, desarrollo Node.js, freelance developer"
        url="https://criskop.github.io/contact"
        type="website"
      />
      <motion.section className="allcontainer">
        <Contact isPreview={false} />
      </motion.section>
    </>
  );
}

export default ContactPage;
