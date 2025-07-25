import React, {useState} from "react";
import BookModel from "./BookModel";
import "../../../css/sections/books/bookDataContainer.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function OneBook({ bookData }) {
  const book = bookData;

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

  const handleButtonRedirectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      {!book ? (
        <>bookData faltante {"(prop)"}</>
      ) : (
        <>
          <motion.section
          className="bookDataContainer"
          variants={sectionAnimation}
          initial={{opacity: 0, y: 200}}
          animate={ {opacity: 1, y:0}}
          transition={{duration: 1}}
          >
            <motion.div className="bookmodel">
              <BookModel data={book.resourcesFolder} />
            </motion.div>

            <motion.main className="bookmain">
                <div className="titulo">
                    <h1>{bookData.name.toUpperCase()}</h1>
                </div>

                <div className="descripcion">
                    <p>{bookData.shortDescription}</p>
                </div>

                <div className="buttons">
                

                    <Link onClick={() => {handleButtonRedirectClick(bookData.amazonUrl)}} className="button primary">
                     Comprar en Amazon
                    </Link>


                    <Link onClick={() => {handleButtonRedirectClick(bookData.whatsappApiUrl)}} className="button secondary">
                     Comprar Localmente<br/>(Solo para Colombia)
                    </Link>

                    <Link to={`/books/${bookData.resourcesFolder}`} className="button secondary">
                     Ver Detalles
                    </Link>
                </div>
            </motion.main>
          </motion.section>
        </>
      )}
    </>
  );
}

export default OneBook;
