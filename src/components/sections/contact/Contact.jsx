import React, { useEffect, useRef, useState } from "react";
import "../../../css/sections/contact/contact.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import LazyLoad from "react-lazyload";
import emailjs from "@emailjs/browser";
import countriesData from "../../../assets/json/countries.json";

function Contact({ isPreview }) {
  // Ordenar países alfabéticamente al importar
  const countries = [...countriesData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [animationStarted, setAnimationStarted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    whatsapp: "",
    countryCode: "+57", // Colombia por defecto
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const { pathname } = useLocation();
  const contactRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (pathname === "/contact" && contactRef.current) {
      setTimeout(() => {
        const topPos = contactRef.current.offsetTop - 70;
        window.scrollTo({
          top: topPos,
          behavior: "smooth",
        });
      }, 10);
    }
  }, [pathname]);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
        setCountrySearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        staggerChildren: 0.3,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountrySelect = (country) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: country.code,
    }));
    setShowCountryDropdown(false);
    setCountrySearch("");
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.code.includes(countrySearch)
  );

  const selectedCountry =
    countries.find((country) => country.code === formData.countryCode) ||
    countries[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuración para enviar email a TU correo
      const templateParams = {
        from_name: formData.name, // Nombre del usuario
        from_email: formData.email, // Email del usuario
        from_whatsapp: formData.countryCode + formData.whatsapp, // WhatsApp completo
        subject: formData.subject, // Asunto del usuario
        message: formData.message, // Mensaje del usuario
        to_name: "Cristian", // Tu nombre
        reply_to: formData.email, // Para que puedas responder directamente
      };

      // Enviar email usando variables de entorno
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        whatsapp: "",
        countryCode: "+57",
      });
    } catch (error) {
      console.error("Error enviando email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LazyLoad>
      <motion.section
        style={{
          paddingTop: !isPreview && "calc(4rem + 60px)",
        }}
        ref={contactRef}
        className="contact-container"
        variants={sectionAnimation}
        initial="start"
        animate={animationStarted ? "show" : "start"}
        exit="exit"
      >
        <header className="title">
          <h1>CONTACTO</h1>
        </header>

        <motion.section
          className="contact-intro"
          variants={sectionAnimation}
          initial="start"
          animate={animationStarted ? "show" : "start"}
          exit="exit"
        >
          <motion.h1
            variants={sectionAnimation}
            initial={{ opacity: 0, y: 200 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            ¿Tienes un proyecto en mente?
          </motion.h1>
          <motion.p
            variants={sectionAnimation}
            initial={{ opacity: 0, y: 50 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Cuéntame sobre tu idea y trabajemos juntos para hacerla realidad
          </motion.p>
        </motion.section>

        <motion.section
          className="contact-form-container"
          variants={sectionAnimation}
          initial="start"
          animate={animationStarted ? "show" : "start"}
          exit="exit"
        >
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={sectionAnimation}
            initial={{ opacity: 0, y: 200 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp">WhatsApp (opcional)</label>
              <div className="phone-input-container">
                <div className="country-selector" ref={dropdownRef}>
                  <button
                    type="button"
                    className="country-button"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  >
                    <span className="flag">{selectedCountry.flag}</span>
                    <span className="code">{selectedCountry.code}</span>
                    <span className="arrow">▼</span>
                  </button>

                  {showCountryDropdown && (
                    <div className="country-dropdown">
                      <input
                        type="text"
                        placeholder="Buscar país..."
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        className="country-search"
                        autoFocus
                      />
                      <div className="country-list">
                        {filteredCountries.map((country, index) => (
                          <button
                            key={index}
                            type="button"
                            className="country-option"
                            onClick={() => handleCountrySelect(country)}
                          >
                            <span className="flag">{country.flag}</span>
                            <span className="name">{country.name}</span>
                            <span className="code">{country.code}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="317 888 6108"
                  className="phone-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="¿De qué quieres hablar?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Cuéntame sobre tu proyecto, ideas, presupuesto, timeline, etc."
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {submitStatus === "success" && (
              <motion.div
                className="status-message success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ¡Mensaje enviado correctamente! Te responderé pronto.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="status-message error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Error al enviar el mensaje. Por favor intenta nuevamente.
              </motion.div>
            )}
          </motion.form>

          <motion.div
            className="contact-info"
            variants={sectionAnimation}
            initial={{ opacity: 0, y: 200 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3>Otras formas de contacto</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="icon">📧</div>
                <div className="info">
                  <h4>Email</h4>
                  <p>criskop.dev@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="icon">
                  <i className="ri-whatsapp-fill"></i>
                </div>
                <div className="info">
                  <h4>WhatsApp</h4>
                  <p>+57 317 888 6108</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="icon">
                  <i className="ri-instagram-fill"></i>
                </div>
                <div className="info">
                  <h4>Instagram</h4>
                  <p>cristian__prince</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </motion.section>
    </LazyLoad>
  );
}

export default Contact;
