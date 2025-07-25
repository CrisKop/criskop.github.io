import React from "react";
import "../../../css/sections/books/oneBook.css";
import { motion } from "framer-motion";

function BookModel(data) {
  const { data: resourcesFolder } = data;

  return (
    <>
      {!resourcesFolder ? (
        <>resourcesFolder faltante {"(prop)"}</>
      ) : (
        <>
          <motion.div
            style={{ scale: 0.75 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 1 }}
            className="containerbook"
          >
            <div className="book">
              <div className="front">
                <div
                  className="cover"
                  style={{
                    backgroundImage: `url(/img/books/${resourcesFolder}/portada.png)`,
                  }}
                />
              </div>
              <div
                className="left-side"
                style={{
                  backgroundImage: `url(/img/books/${resourcesFolder}/borde.png)`,
                }}
              >
                <h2>
                  <span>Cristian Prince</span>
                  <span>2023</span>
                </h2>
              </div>
              <div
                className="back"
                style={{
                  backgroundImage: `url(/img/books/${resourcesFolder}/contraportada.png)`,
                }}
              >
                <div className="cover2"></div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}

export default BookModel;
