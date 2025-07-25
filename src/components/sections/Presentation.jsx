import React, { useRef, useState, useEffect } from "react";
import "../../css/sections/presentation/presentation.css";
import useTypingEffect from "../../hooks/useTypingEffect";
import { motion, AnimatePresence } from "framer-motion";

function Presentation() {
  const phrases = [
    "DESARROLLADOR WEB FULL STACK",
    "SI LO IMAGINAS, ES POSIBLE",
  ];
  const textContainerRef = useRef(null);
  const cursorRef = useRef(null);

  const { currentText } = useTypingEffect(phrases, textContainerRef, cursorRef);

  const crownAnimation = {
    start: {
      opacity: 0,
      y: 500,
      scale: 3,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.8,
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

  const loopAnimation = {
    scale: {
      scale: [1, 1.1, 1],
      transition: {
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
      },
    },
    brightness: {
      filter: ["brightness(1)", "brightness(2)", "brightness(1)"],
      transition: {
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
      },
    },
  };

  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialAnimationDone(true);
    }, 800); // Duration of the initial animation (1.6 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="presentation-container">
      <section className="presentation">
        <AnimatePresence>
          <motion.div
            className="corona"
            style={{
              background: `url('/img/corona.png')`,
              backgroundSize: "cover",
            }}
            key="corona"
            initial="start"
            animate={isInitialAnimationDone ? ["scale", "brightness"] : "show"}
            exit="exit"
            variants={isInitialAnimationDone ? loopAnimation : crownAnimation}
            viewport={{ once: true }}
          />
          <motion.div
            className="name"
            key="name"
            initial={{ opacity: 0, y: 100 }}
            animate={
              isInitialAnimationDone
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: [0.1, 0.01, 0.05, 0.95],
                      duration: 0.8,
                    },
                  }
                : { opacity: 0 }
            }
            exit={{ opacity: 0 }}
          >
            <h1 className="title">CRISKOP</h1>
          </motion.div>
          <motion.div
            className="description"
            key="description"
            initial={{ opacity: 0, y: 100 }}
            animate={
              isInitialAnimationDone
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { ease: [0.1, 0.01, 0.05, 0.95], duration: 1 },
                  }
                : { opacity: 0 }
            }
            exit={{ opacity: 0 }}
          >
            <div className="typing-effect" id="typing-container">
              <span ref={textContainerRef}>{currentText}</span>
              <span ref={cursorRef} id="cursor">
                |
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </section>
  );
}

export default Presentation;
