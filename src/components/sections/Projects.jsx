import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/sections/projects/projects.css";
import ProjectsData from "../../assets/json/proyects.json";
import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";

function Projects({ isPreview }) {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [projectData, setProjectData] = useState(ProjectsData);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setAnimationStarted(true);
      },
      isPreview ? 200 : 5
    );

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isPreview) {
      setProjectData(ProjectsData.slice(0, 4));
    } else {
      setProjectData(ProjectsData);
    }
  }, [isPreview]);

  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

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
        duration: 0.8,
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.8,
      },
    },
  };

  const projectContainer = {
    start: {
      y: 200,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.8,
      },
    },
  };

  return (
    <LazyLoad>
      <motion.section
        id="experience"
        variants={sectionAnimation}
        initial="start"
        animate={animationStarted ? "show" : "start"}
        exit="exit"
        style={{
          paddingTop: !isPreview && "calc(4rem + 60px)",
        }}
        className="experience-container"
      >
        <header className="title">
          <h1>PROYECTOS</h1>
        </header>

        <motion.section
          className="projects"
          variants={projectContainer}
          initial="start"
          animate={animationStarted ? "show" : "start"}
          exit="exit"
        >
          {projectData.map((project) => (
            <motion.div
              className="project"
              key={project.id}
              onClick={() => {
                handleProjectClick(project.link);
              }}
              variants={sectionAnimation}
              initial={{ opacity: 0, y: 200 }}
              animate={animationStarted ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <header>
                <img
                  src={`/img/${project.img}`}
                  alt={project.title}
                  loading="lazy"
                />
              </header>

              <main>
                <section className="cardtitle">
                  <h1>{project.title}</h1>
                </section>
                <section className="carddescription">
                  <p>{project.descriptionEs}</p>
                </section>
                <footer className="languages">
                  <img
                    src={`https://skillicons.dev/icons?i=${project.lenguages
                      .replace(/ /g, "")
                      .toLowerCase()}`}
                    alt=""
                  />
                </footer>
              </main>
            </motion.div>
          ))}

          {isPreview && (
            <Link className="project projects-see-more" to={"/projects"}>
              {"<<"} VER TODOS LOS PROYECTOS {">>"}
            </Link>
          )}
        </motion.section>
      </motion.section>
    </LazyLoad>
  );
}

export default Projects;
