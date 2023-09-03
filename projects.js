document.addEventListener("DOMContentLoaded", async function() {
  const projectsContainer = document.querySelector(".projects");

  try {
    
    async function proceso() {
    const response = await fetch("projects.json");
    const projects = await response.json();

    projects.forEach((project, index) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");

      const header = document.createElement("header");
      const img = document.createElement("img");
      img.src = `./img/${project.img}`;
      img.alt = project.title;
      header.appendChild(img);
      projectElement.appendChild(header);

      const main = document.createElement("main");
      const pTitle = document.createElement("p");
      pTitle.classList.add("ptitle");
      pTitle.textContent = project.title;
      const pDescription = document.createElement("p");
      pDescription.classList.add("pdescription");
      pDescription.textContent = project.description;
      pDescription.setAttribute('data-translate', project.descriptionEs);
      pDescription.setAttribute('data-original-text', project.description);
      main.appendChild(pTitle);
      main.appendChild(pDescription);
      projectElement.appendChild(main);

      const footer = document.createElement("footer");
      const lenguages = document.createElement("div");
      lenguages.classList.add("lenguages");
      const pLenguages = document.createElement("p");
      pLenguages.classList.add("xd");
      pLenguages.textContent = "#";
      const pLenguagesText = document.createElement("p");
      pLenguagesText.textContent = project.lenguages;
      lenguages.appendChild(pLenguages);
      lenguages.appendChild(pLenguagesText);
      footer.appendChild(lenguages);

      const buttons = document.createElement("div");
      buttons.classList.add("buttons");
      const aVisit = document.createElement("a");
      aVisit.target = "_blank";
      aVisit.href = project.link;
      aVisit.classList.add("btn");
      aVisit.setAttribute('data-translate', index === 0 ? "PÁGINA ACTUAL" : "VISITAR");
      aVisit.textContent = index === 0 ? "THIS PAGE" : "VISIT";
      buttons.appendChild(aVisit);
      footer.appendChild(buttons);

      projectElement.appendChild(footer);

      projectsContainer.appendChild(projectElement);
    });
  }

    proceso().then(() => {
      function cambiarIdioma() {
        const elementosATraducir = document.querySelectorAll('[data-translate]');
        elementosATraducir.forEach((elemento) => {
            const textoOriginal = elemento.getAttribute('data-translate');
            // Agregar el atributo data-original-text con el valor del texto original
            elemento.setAttribute('data-original-text', elemento.textContent);
            elemento.textContent = textoOriginal;
        });
    }
      // Obtener el idioma guardado en localStorage al cargar la página
const savedLanguage = localStorage.getItem('language');
console.log(savedLanguage)
if (savedLanguage === 'spanish') {
  const toggleSwitch = document.getElementById('toggle-switch');
    toggleSwitch.checked = true;
    cambiarIdioma();
    console.log("Hola")
}
    })
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
});
