import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/nav/nav.css";
import { AnimatePresence, motion } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

function Nav() {
  const [selectedTab, setSelectedTab] = useState("Inicio");
  const location = useLocation();

  const handleButtonRedirectClick = (url) => {
    window.open(url, "_blank");
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  const tabs = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/projects" },
    { name: "Sobre Mi", href: "/aboutme" },
    { name: "Libros", href: "/books" },
    { name: "Contacto", href: "/contact" },
  ];

  const buttonsContainer = {
    show: {
      opacity: 1,
      maxHeight: "fit-content",
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      maxHeight: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const iconAnimation = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.1,
      },
    },
  };

  const TabOnClick = (tab) => {
    setSelectedTab(tab.name);
  };

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.href === location.pathname);
    if (currentTab) {
      setSelectedTab(currentTab.name);
    }
  }, [location.pathname, tabs]);

  const [toggledNav, setToggledNav] = useState(false); // Iniciar como false para que inicialmente esté cerrado
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const buttonsRef = useRef(null);
  const navTogglerRef = useRef(null);

  useEffect(() => {
    if (windowWidth < 800) {
      setIsMobileWidth(true);
    } else {
      setIsMobileWidth(false);
    }
  }, [windowWidth]);

  const handleNavToggle = () => {
    setToggledNav(!toggledNav); // Alternar el estado al hacer clic en el icono
  };

  return (
    <AnimatePresence>
      <nav className="navBar">
        <ScrollProgress />

        <motion.main className="navcontent">
          <Link ref={navTogglerRef} onClick={handleNavToggle}>
            <motion.i
              className={`navtoggler ${
                toggledNav ? "ri-close-large-line" : "ri-menu-line"
              }`}
              variants={iconAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
            />
          </Link>

          <motion.section
            ref={buttonsRef}
            className="buttons"
            variants={buttonsContainer}
            initial="exit"
            animate={toggledNav || !isMobileWidth ? "show" : "exit"} // Animar según el estado de toggledNav
            exit="exit"
          >
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                variants={{
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  },
                  exit: {
                    y: -200,
                    opacity: 0,
                  },
                }}
              >
                <Link
                  to={tab.href}
                  onClick={() => {
                    TabOnClick(tab);
                  }}
                  className="button"
                >
                  <p>{tab.name}</p>
                  {selectedTab === tab.name && (
                    <motion.div
                      layoutId="navunderline"
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                      className="underline"
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Agregar aquí los elementos adicionales con animaciones */}
            <motion.div
              variants={{
                show: {
                  y: 0,
                  opacity: 1,
                  scale: 1.5,
                  transition: {
                    duration: 1,
                  },
                },
                exit: {
                  y: -200,
                  opacity: 0,
                },
              }}
              whileHover={{ scale: 1.8 }}
            >
              <Link
                onClick={() => {
                  handleButtonRedirectClick("https://github.com/CrisKop");
                }}
              >
                <i className="ri-github-fill"></i>
              </Link>
            </motion.div>

            <motion.div
              variants={{
                show: {
                  y: 0,
                  opacity: 1,
                  scale: 1.5,
                  transition: {
                    duration: 1,
                  },
                },
                exit: {
                  y: -200,
                  opacity: 0,
                },
              }}
              whileHover={{ scale: 1.8 }}
            >
              <Link
                onClick={() => {
                  handleButtonRedirectClick(
                    "https://www.instagram.com/cristian__prince/"
                  );
                }}
              >
                <i className="ri-instagram-line"></i>
              </Link>
            </motion.div>

            <motion.div
              variants={{
                show: {
                  y: 0,
                  opacity: 1,
                  scale: 1.5,
                  transition: {
                    duration: 1,
                  },
                },
                exit: {
                  y: -200,
                  opacity: 0,
                },
              }}
              whileHover={{ scale: 1.8 }}
            >
              <Link
                onClick={() => {
                  handleButtonRedirectClick(
                    "https://www.facebook.com/cristianorlando.sanchezprince.9/"
                  );
                }}
              >
                <i className="ri-facebook-circle-fill"></i>
              </Link>
            </motion.div>

            <motion.div
              variants={{
                show: {
                  y: 0,
                  opacity: 1,
                  scale: 1.5,
                  transition: {
                    duration: 1,
                  },
                },
                exit: {
                  y: -200,
                  opacity: 0,
                },
              }}
              whileHover={{ scale: 1.8 }}
            >
              <Link
                onClick={() => {
                  handleButtonRedirectClick("https://discord.gg/TwbQNWGFAy");
                }}
              >
                <i className="ri-discord-fill"></i>
              </Link>
            </motion.div>
          </motion.section>
        </motion.main>
      </nav>
    </AnimatePresence>
  );
}

export default Nav;
