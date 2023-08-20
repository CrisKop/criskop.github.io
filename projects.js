document.addEventListener("DOMContentLoaded", async function() {
  const projectsContainer = document.querySelector(".projects");

  try {
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
      aVisit.textContent = index === 0 ? "THIS PAGE" : "VISIT";
      buttons.appendChild(aVisit);
      footer.appendChild(buttons);

      projectElement.appendChild(footer);

      projectsContainer.appendChild(projectElement);
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
});
