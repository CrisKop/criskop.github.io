import React from "react";
import { motion } from "framer-motion";
import "../../css/sections/aboutme/aboutme.scss";

function AboutMeMini() {
  return (
    <motion.section 
      className="aboutme-mini"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="title">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          SOBRE MÍ
        </motion.h1>
      </div>

      <div className="content">
        <motion.div 
          className="aboutme-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="top-section">
            <motion.div 
              className="image-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img src="/img/fotito.jpeg" alt="Cristian Prince - CrisKop" />
              <div className="profile-info">
                <h3>Cristian Prince</h3>
                <p>CrisKop</p>
              </div>
            </motion.div>

            <motion.div 
              className="fragment who-is-criskop"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2>¿QUIÉN ES CRISKOP?</h2>
              <p>
                Programador entusiasta, siempre con ganas de aprender y con el potencial de lograr cualquier cosa si se la imagina.
              </p>
              <p>
                Especializado en el desarrollo web fullstack: BackEnd con Node.js en conjunto con TypeScript y FrontEnd con Astro o Nextjs.
              </p>
            </motion.div>
          </div>

          <div className="bottom-section">
            <motion.div 
              className="fragment"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>PRÓXIMO ENFOQUE</h2>
              <p>
                Optimizar la calidad y velocidad de desarrollo unificando lenguajes para el stack completo de una app.
              </p>
              <p>
                La misión es mejorar la calidad de los proyectos a crear, hacerlos más rápido y mejorar la experiencia de desarrollo colaborativa.
              </p>
            </motion.div>

            <motion.div 
              className="fragment"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>APRENDIENDO</h2>
              <div className="learning-item">
                <h3>Nestjs</h3>
                <p>Herramienta que facilita la creación de backend con API REST.</p>
              </div>
              <div className="learning-item">
                <h3>Scrum</h3>
                <p>Metodología ágil de desarrollo de software.</p>
              </div>
            </motion.div>
          </div>

          <div className="info-content">

            <div className="buttons">
              <motion.a 
                href="/aboutme" 
                className="button primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                SABER MÁS
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutMeMini;