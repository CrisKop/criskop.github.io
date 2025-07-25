import React, {useEffect} from 'react'
import BooksComponent from '../components/sections/books/Books'
import SEO from '../components/SEO'

function BooksPage() {

    useEffect(() => {
        setTimeout(() => {
    
          window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }); // Scroll al inicio de la página en cada cambio de ubicación
        }, 10)
      }, [])

  return (
    <>
      <SEO 
        title="Libros - Cristian Prince | Recursos de Desarrollo Web"
        description="Descubre los libros y recursos de programación recomendados por Cristian Prince. Guías de React, Node.js, JavaScript y desarrollo web moderno."
        keywords="libros programación, recursos desarrollo web, libros React, libros JavaScript, libros Node.js, aprender programación"
        url="https://criskop.github.io/books"
        type="website"
      />
      <section className="allcontainer">
        <BooksComponent isPreview={false}/>
      </section>
    </>
  )
}

export default BooksPage