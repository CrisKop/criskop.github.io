import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import booksList from "../assets/json/books.json";
import BookModel from "../components/sections/books/BookModel";
import SEO from "../components/SEO";
import "../css/sections/books/bookDetail.css";

function BookDetail() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Buscar el libro por resourcesFolder
    const foundBook = booksList.find(
      (book) => book.resourcesFolder === bookId
    );
    
    if (foundBook) {
      setBook(foundBook);
    } else {
      // Si no se encuentra el libro, redirigir a 404 o books
      navigate("/books");
    }
    setLoading(false);

    // Scroll al inicio
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 10);
  }, [bookId, navigate]);

  const handleButtonRedirectClick = (url) => {
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!book) {
    return null;
  }

  return (
    <>
      <SEO
        title={`${book.name} - Cristian Prince | Libro`}
        description={book.shortDescription}
        keywords={`${book.name}, libro, Cristian Prince, literatura, ${book.resourcesFolder}`}
        url={`https://criskop.github.io/books/${book.resourcesFolder}`}
        type="article"
      />
      
      <motion.section 
        className="allcontainer book-detail-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Botón de regreso */}
        <motion.div 
          className="back-button-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button 
            onClick={() => navigate("/books")} 
            className="back-button"
          >
            <i className="ri-arrow-left-line"></i>
            Volver a Libros
          </button>
        </motion.div>

        {/* Contenido principal */}
        <motion.div 
          className="book-detail-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Modelo del libro */}
          <motion.div 
            className="book-model-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <BookModel data={book.resourcesFolder} />
          </motion.div>

          {/* Información del libro */}
          <motion.div 
            className="book-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h1 className="book-title">{book.name}</h1>
            
            <div className="book-meta">
              <p className="publish-date">
                <i className="ri-calendar-line"></i>
                Publicado: {book.publishDate}
              </p>
            </div>

            <div className="book-description">
              <h3>Descripción</h3>
              <p className="short-description">{book.shortDescription}</p>
              
              {book.description && book.description.length > 0 && (
                <div className="full-description">
                  {book.description.map((paragraph, index) => (
                    <p key={index} className="description-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Botones de acción */}
            <motion.div 
              className="action-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button
                onClick={() => handleButtonRedirectClick(book.amazonUrl)}
                className="button primary"
              >
                <i className="ri-amazon-line"></i>
                Comprar en Amazon
              </button>

              <button
                onClick={() => handleButtonRedirectClick(book.whatsappApiUrl)}
                className="button secondary"
              >
                <i className="ri-whatsapp-line"></i>
                Comprar Localmente
                <small>(Solo para Colombia)</small>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default BookDetail;