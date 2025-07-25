import React, { useState, useEffect } from "react";
import "../../../css/sections/books/books.css";
import OneBook from "./OneBook";
import booksList from "../../../assets/json/books.json";
import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";

function Books({ isPreview }) {
  const [bookList, setBookList] = useState(booksList);

  useEffect(() => {
    if (isPreview) {
      setBookList(booksList.slice(0, 3));
    }
  }, [isPreview]);

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
        staggerChildren: 0.2,
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
    <LazyLoad>
      <motion.section
        style={{
          paddingTop: !isPreview && "calc(4rem + 60px)",
        }}
        id="books"
        className="books-container"
        variants={sectionAnimation}
        initial="start"
        animate="show"
        exit="exit"
      >
        <header className="title">
          <h1>LIBROS</h1>
        </header>

        <motion.section
        className="paragraphs"
        variants={sectionAnimation}
        initial={{opacity: 0, y: 200}}
        animate={ {opacity: 1, y:0}}
        transition={{duration: 1}}
        >
          <p>
            <>
              {isPreview ? (
                <>
                  Como pasatiempo, le gusta la poesía y la filosofía, ha
                  escrito {bookList.length} libro, que puedes ver aquí:
                </>
              ) : (
                <>
                  En esta sección se encontrarán todos los libros que Cris ha
                  escrito, si hay uno nuevo, lo verás aquí
                </>
              )}
            </>
          </p>
        </motion.section>

        <motion.section className="listcontainer">
          {bookList.map((book) => {
            return (
              <>
                <OneBook bookData={book} />
              </>
            );
          })}
        </motion.section>
      </motion.section>
      </LazyLoad>
    </>
  );
}

export default Books;
