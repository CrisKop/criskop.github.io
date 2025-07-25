import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PricingCard(cardData) {

    const handleButtonRedirectClick = (url) => {
        window.open(url, "_blank");
      };

    const {cardData: plan} = cardData

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
            duration: 1.6,
            staggerChildren: 1,
          },
        },
        exit: {
          opacity: 0,
          y: -200,
          transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1.6,
          },
        },
      };
    
  return (
    <motion.div 
    className="pricingCard"
    variants={sectionAnimation}
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1}}
    >
        <header>
            <div className="cardtitle">
                <h1>{plan.name}</h1>
            </div>

            <div className="carddescription">
                <p>{plan.description}</p>
            </div>
        </header>

        <main>
        <div className="price">
                <div className="finalprice">
                    {plan.price === "variable" ? (
                        <>
                                       <h1>Precio Variable</h1>
                        </>
                    ) : (
                        <>
                                       <p>$</p>
                                       <h1>{plan.price}+ COP</h1>
                        </>
                    )}
     
                </div>

                <div className="initialprice">
                {plan.initialPrice === "variable" ? (
                        <>
                                       <h1>Cuota inicial variable</h1>
                        </>
                    ) : (
                        <>
                                       <p>$</p>
                                       <h1>{plan.initialPrice}+ COP cuota inicial</h1>
                        </>
                    )}
                </div>

            </div>
                <section className="buttons">
                
                <Link onClick={() => {handleButtonRedirectClick(plan.whatsappApiUrl)}} className="button primary">
                     Me Interesa
                    </Link>
                </section>
                    <hr />
            <div className="pros">

                {plan.pros.map((pro) => {
                    return(
                        <div className="pro">
                            <div className="check">✔</div>
                            <p className='pro-name'>{pro.title}</p>
                        </div>
                    )
                })}
            </div>
        </main>
    </motion.div>
  )
}

export default PricingCard