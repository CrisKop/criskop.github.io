import React, {useEffect} from 'react'
import Presentation from '../components/sections/Presentation'
import Projects from '../components/sections/Projects'
import SEO from '../components/SEO'

function ProjectsPage() {

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
        title="Proyectos - Cristian Prince | Desarrollador Web Full Stack"
        description="Explora los proyectos de desarrollo web de Cristian Prince. Aplicaciones React, Node.js, sistemas de inventario, dashboards y soluciones full stack innovadoras."
        keywords="proyectos web, React projects, Node.js applications, portfolio projects, desarrollo web, aplicaciones JavaScript"
        url="https://criskop.github.io/projects"
        type="website"
      />
      <section className="allcontainer">
        <Projects isPreview={false}/>
      </section>
    </>
  )
}

export default ProjectsPage