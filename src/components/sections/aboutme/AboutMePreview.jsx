import React, { useEffect, useState } from "react";
import "../../../css/sections/aboutme/aboutme.css";
import {
  motion,
  useScroll,
  AnimatePresence,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

function AboutMe() {
  const { scrollYProgress } = useScroll();
  const [visibleFragment, setVisibleFragment] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  let scrollValues = [0.33, 0.4, 0.495]; //1200 px por seccion, si lo muevo multiplico x0,66

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth < 1250) {
      scrollValues = [0.375, 0.45, 0.5];
    }
  }, []);

  useEffect(() => {
    let unsubscribe = scrollYProgress.onChange((value) => {
      if (value >= scrollValues[1]) {
        setVisibleFragment(2);
      } else if (value >= scrollValues[0]) {
        setVisibleFragment(1);
      } else {
        setVisibleFragment(0);
      }
    });

    if (window.innerWidth < 1250) {
      unsubscribe = scrollYProgress.onChange((value) => {
        if (value >= scrollValues[1]) {
          setVisibleFragment(2);
        } else if (value >= scrollValues[0]) {
          setVisibleFragment(1);
        } else {
          setVisibleFragment(0);
        }
      });
    }

    return () => unsubscribe();
  }, []);

  const fragmentVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: windowWidth > 1250 ? 0 : 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.2,
      },
    },
  };

  const titleposition = useTransform(scrollYProgress, (pos) => {
    return pos >= 1 ? "relative" : "sticky";
  });

  const animationExitTitle = useTransform(
    scrollYProgress,
    [0, scrollValues[2], 1],
    [0, 0, -200]
  );

  return (
    <>
      <LazyLoad>
        <motion.section className="aboutme-container">
          <motion.div
            style={{ position: titleposition, y: animationExitTitle }}
            className="title"
          >
            <h1>SOBRE MÍ</h1>
          </motion.div>

          <motion.section className="mainpart">
            <section className="informacion">
              <main className="main">
                <AnimatePresence mode="wait">
                  {visibleFragment === 0 && (
                    <motion.div
                      key="fragment1"
                      className="fragmento"
                      variants={fragmentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 1 }}
                    >
                      <div className="titulo">
                        <h1>¿QUIÉN ES CRISKOP?</h1>
                      </div>
                      <p>
                        Programador entusiasta, siempre con ganas de aprender y
                        con el potencial de lograr cualquier cosa si se la
                        imagina.
                      </p>
                      <p>
                        Especializado en el desarrollo web fullstack: BackEnd
                        con Node.js y FrontEnd con React.js
                      </p>
                    </motion.div>
                  )}
                  {visibleFragment === 1 && (
                    <motion.div
                      key="fragment2"
                      className="fragmento"
                      variants={fragmentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 1 }}
                    >
                      <motion.div className="titulo">
                        <h1>PRÓXIMO ENFOQUE</h1>
                      </motion.div>
                      <p>
                        El diseño web estético y las aplicaciones móviles son
                        los dos enfoques actuales.
                      </p>
                      <p>
                        La misión es mejorar la calidad de los proyectos a crear
                        y maximizar su estética.
                      </p>
                    </motion.div>
                  )}
                  {visibleFragment === 2 && (
                    <>
                      <motion.div
                        key="fragment3"
                        className="fragmento"
                        variants={fragmentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 1 }}
                      >
                        <div className="titulo">
                          <h1>APRENDIENDO</h1>
                        </div>
                        <p>
                          <b>Framer Motion</b>
                        </p>
                        <p>
                          Herramienta que facilita la creación de animaciones en
                          aplicaciones web.
                        </p>
                        <p>
                          <b>React Native</b>
                        </p>
                        <p>
                          Extensión de React.js para crear aplicaciones móviles
                          multiplataforma (Android e iOS)
                        </p>
                      </motion.div>
                      <Link to={"/aboutme"}>
                        <motion.div
                          className="sabermas"
                          variants={fragmentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          transition={{ duration: 1 }}
                        >
                          SABER MÁS
                        </motion.div>
                      </Link>
                    </>
                  )}
                </AnimatePresence>
              </main>
            </section>

            <motion.div
              className="foto"
              animate={{
                borderRadius: [
                  "34% 66% 0% 100% / 63% 0% 100% 37%",
                  "66% 34% 0% 100% / 19% 0% 100% 81%",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <motion.img
                loading="lazy"
                src={`/img/fotito.jpeg`}
                alt=""
                animate={{
                  scale: 1.2,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.section>
        </motion.section>
      </LazyLoad>
    </>
  );
}

export default AboutMe;
