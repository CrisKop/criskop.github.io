import React, {useEffect, useRef, useState} from 'react'
import '../../css/sections/pricing/pricing.css'
import PricingCard from './PricingCard'
import PricingList from '../../assets/json/pricingCards.json'
import { Link, useLocation } from 'react-router-dom'
import { motion } from "framer-motion";
import LazyLoad from 'react-lazyload'

function Pricing() {
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(
          () => {
            setAnimationStarted(true);
          },
        500
        );
    
        return () => clearTimeout(timeout);
      }, []);

      const { pathname } = useLocation();
  const pricingRef = useRef(null);

  useEffect(() => {
    if (pathname === "/pricing" && pricingRef.current) {
      setTimeout(() => {
        const topPos = pricingRef.current.offsetTop - 70;
        window.scrollTo({
          top: topPos,
          behavior: 'smooth'
        });
      }, 10);
    }
  }, [pathname]);

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
            staggerChildren: 0.5,
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


    const handleButtonRedirectClick = (url) => {
        window.open(url, "_blank");
      };

  return (
    <LazyLoad>
    <motion.section
    ref={pricingRef}
    className="pricing-container"
    variants={sectionAnimation}
      initial="start"
      animate={animationStarted ? "show" : "start"}
      exit="exit"
    >

        <header className="title">
        <h1>SERVICIOS</h1>
      </header>

      <motion.section 
      className="paragraphs"
      variants={sectionAnimation}
      initial="start"
      animate={animationStarted ? "show" : "start"}
      exit="exit"
      >
        <motion.h1
        variants={sectionAnimation}
        initial={{opacity: 0, y: 200}}
        animate={animationStarted ? {opacity: 1, y:0} : {opacity: 0}}
        transition={{duration: 1}}
        >¿Quieres una web para ti?</motion.h1>
        </motion.section>

      <motion.section
    className="cardscontainer"
    variants={sectionAnimation}
    initial="start"
    animate="show"
    exit="exit"
    >
        {PricingList.map((plan) => {

            return(
                <PricingCard cardData={plan}/>
            )
        })}
      </motion.section>

      <motion.section 
      className="paragraphs"
      variants={sectionAnimation}
      initial="start"
      animate={animationStarted ? "show" : "start"}
      exit="exit"
      >
        <motion.p
        variants={sectionAnimation}
        initial={{opacity: 0, y: 50}}
        animate={animationStarted ? {opacity: 1, y:0} : {opacity: 0}}
        transition={{duration: 1}}
        >Estos son los servicios que puedes adquirir, si te interesa algo que no está aquí
        , <Link onClick={() => {handleButtonRedirectClick('https://api.whatsapp.com/send?phone=+573178886108&text=Hola%20Cristian,%20estaba%20viendo%20tu%20p%C3%A1gina%20y%20me%20interesa%20adquirir%20un%20servicio%20m%C3%A1s%20espec%C3%ADfico')}}>contáctame por WhatsApp</Link></motion.p>
        </motion.section>



    </motion.section>
    </LazyLoad>
  )
}

export default Pricing