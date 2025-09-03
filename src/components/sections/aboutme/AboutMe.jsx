import React from "react";
import "../../../css/sections/aboutme/aboutmefull.css";
import aboutMeSections from "../../../assets/json/aboutMe.json";
import { motion } from "framer-motion";
import { getCristianAge } from "../../../utils/ageCalculator";

function AboutMe() {
  // Procesar las secciones para reemplazar la edad dinámica
  const processedSections = aboutMeSections.map(section => {
    if (section.title === "Información Básica") {
      return {
        ...section,
        paragraphs: section.paragraphs.map(paragraph => {
          if (paragraph.text.includes("actualmente tiene")) {
            return {
              ...paragraph,
              text: paragraph.text.replace(/actualmente tiene \d+ años/, `actualmente tiene ${getCristianAge()} años`)
            };
          }
          return paragraph;
        })
      };
    }
    return section;
  });

  const sectionAnimation = {
    start: {
      y: 200,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.section
        className="aboutmefull-container"
        variants={sectionAnimation}
        initial="start"
        animate={"show"}
        exit="exit"
      >
        <header className="title">
          <h1>SOBRE MÍ</h1>
        </header>

        <motion.main>
          {processedSections.map((section, n) => {
            //#region MAP SECTIONS
            return (
              <>
                <motion.section
                  className="section"
                  key={n}
                  variants={sectionAnimation}
                  initial="start"
                  animate={"show"}
                  exit="exit"
                >
                  <motion.div
                    className="content"
                    variants={sectionAnimation}
                    initial="start"
                    animate={"show"}
                    exit="exit"
                  >
                    <motion.h1
                      variants={sectionAnimation}
                      initial={{ opacity: 0, y: 200 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {section.title.toUpperCase()}
                    </motion.h1>

                    {section.paragraphs.map((p, index) => {
                      return (
                        <React.Fragment key={index}>
                          {p.subtitle && (
                            <React.Fragment>
                              <motion.h2
                                variants={sectionAnimation}
                                initial={{ opacity: 0, y: 200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                              >
                                {p.subtitle}
                              </motion.h2>
                            </React.Fragment>
                          )}

                          <motion.div className="textcontainer">
                            <motion.p
                              variants={sectionAnimation}
                              initial={{ opacity: 0, y: 200 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1 }}
                            >
                              {p.text}
                            </motion.p>
                            {p.footer && (
                              <React.Fragment>
                                <motion.small
                                  variants={sectionAnimation}
                                  initial={{ opacity: 0, y: 200 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1 }}
                                >
                                  {p.footer}
                                </motion.small>
                              </React.Fragment>
                            )}
                          </motion.div>

                          {p.separator && (
                            <React.Fragment>
                              <motion.hr
                                variants={sectionAnimation}
                                initial={{ opacity: 0, y: 200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                              />
                            </React.Fragment>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </motion.div>

                  <div className="image">
                    <img src={`/img/aboutme/${section.image}`} alt="" />
                  </div>
                </motion.section>
              </>
            );
          })}
        </motion.main>
      </motion.section>
    </>
  );
}

export default AboutMe;
