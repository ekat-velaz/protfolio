import smallLogo from "./images/small-logo.png";
import bigLogo from "./images/logo.png";
import portriat from "./images/portriat.jpg";
import jsIcon from "./images/js.svg";
import cssIcon from "./images/css.svg";
import htmlIcon from "./images/html.svg";
import gitIcon from "./images/git.svg";
import gitHubIcon from "./images/github.svg";
import npmIcon from "./images/npm.svg";
import babelIcon from "./images/babel.svg";
import CLIcon from "./images/commandLine.svg";
import eslintIcon from "./images/eslint.svg";
import prettierIcon from "./images/prettier.svg";
import vscodeIcon from "./images/vscode.svg";
import webpackIcon from "./images/webpack.svg";
import weatherLIcon from "./images/projects/weather-light.png";
import weatherDIcon from "./images/projects/weather-dark.png";
import todoLIcon from "./images/projects/todo-light.png";
import todoDIcon from "./images/projects/todo-dark.png";
import restarauntLIcon from "./images/projects/restaraunt-light.png";
import restarauntDIcon from "./images/projects/restraunt-dark.png";
import tictactoeLIcon from "./images/projects/tictactoe-light.png";
import tictactoeDIcon from "./images/projects/tictactoe-dark.png";
import libraryLIcon from "./images/projects/library-light.png";
import libraryDIcon from "./images/projects/library-dark.png";

const UI = (() => {
  // Putting src attribute on every image
  function showPictures() {
    const smallLogoImg = document.getElementById("nav-logo");
    smallLogoImg.src = smallLogo;

    const bigLogoImg = document.getElementById("big-logo");
    bigLogoImg.src = bigLogo;

    const portriatImg = document.getElementById("portriat");
    portriatImg.src = portriat;
  }

  // make drop-down menu not to disappear when you click on it
  // (and also include toggle of active class if youll have many menu buttons)
  function dropDownUI() {
    document.addEventListener("click", (e) => {
      const isDropdownBtn = e.target.matches("[data-dropdown-btn]");
      if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) return;

      let currentDropdown;
      if (isDropdownBtn) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
      }

      document
        .querySelectorAll("[data-dropdown].active")
        .forEach((dropdown) => {
          if (dropdown === currentDropdown) return;
          dropdown.classList.remove("active");
        });
    });
  }

  function changeAboutMeContent() {
    const aboutMeContainer = document.getElementById("about-me-text");

    const myStoryBtn = document.getElementById("my-story");
    const educationBtn = document.getElementById("education");
    const skillsBtn = document.getElementById("skills");

    myStoryBtn.addEventListener("click", () => {
      aboutMeContainer.innerHTML =
        "Hello there!<br/><br/>I'm Ekaterina Velazquez, a passionate Frontend Developer basedin the UK. In early 2022, I discovered my love for coding, and since then, I've been on an exciting journey, dedicatedly studying and improving my skills to this day.<br/><br/>As a self-taught enthusiast, I find immense joy in overcoming coding challenges and creating visually captivating websites. I firmly believe that persistence and dedication hold the key toconquering any obstacle. I'm committed to delivering seamless user experiences through simple and elegant code. Let's collaborate and embark on exciting endeavors together!";
    });

    educationBtn.addEventListener("click", () => {
      aboutMeContainer.innerHTML =
        '<li>"Full-Stack JavaScript" course at The Odin Project</li></br><li>Bachelors degree in Computer Science, Moscow University named after S. U. Witte (2022 - to this day, online studying)</li></br><li>Bachelors degree in Political Science, Moscow State University named after M. V. Lomonosov (2018-2022)</li>';
    });

    skillsBtn.addEventListener("click", () => {
      aboutMeContainer.innerHTML = "";
      aboutMeContainer.innerHTML += `
      <div class="skills-container">
            <div class="skills-item">
              <img src="${jsIcon}" alt="" id="JS" class="skill-pic" />
              <div class="skill-name">JS</div>
            </div>
            <div class="skills-item">
              <img src="${htmlIcon}" alt="" id="HTML" class="skill-pic" />
              <div class="skill-name">HTML</div>
            </div>
            <div class="skills-item">
              <img src="${cssIcon}" alt="" id="CSS" class="skill-pic" />
              <div class="skill-name">CSS</div>
            </div>
            <div class="skills-item">
              <img src="${gitIcon}" alt="" id="Git" class="skill-pic" />
              <div class="skill-name">Git</div>
            </div>
            <div class="skills-item">
              <img src="${gitHubIcon}" alt="" id="GitHub" class="skill-pic" />
              <div class="skill-name">Github</div>
            </div>
            <div class="skills-item">
              <img src="${webpackIcon}" alt="" id="Webpack" class="skill-pic" />
              <div class="skill-name">Webpack</div>
            </div>
            <div class="skills-item">
              <img src="${babelIcon}" alt="" id="Babel" class="skill-pic" />
              <div class="skill-name">Babel</div>
            </div>
            <div class="skills-item">
              <img src="${eslintIcon}" alt="" id="Lint" class="skill-pic" />
              <div class="skill-name">ESLint</div>
            </div>
            <div class="skills-item">
              <img src="${prettierIcon}" alt="" id="Prettier" class="skill-pic" />
              <div class="skill-name">Prettier</div>
            </div>
            <div class="skills-item">
              <img src="${npmIcon}" alt="" id="npm" class="skill-pic" />
              <div class="skill-name">Npm</div>
            </div>
            <div class="skills-item">
              <img src="${CLIcon}" alt="" id="CL" class="skill-pic" />
              <div class="skill-name">Command Line</div>
            </div>
            <div class="skills-item">
              <img src="${vscodeIcon}" alt="" id="Vscode" class="skill-pic" />
              <div class="skill-name">VS Code</div>
            </div>
          </div>
      `;
    });
  }

  function createProjects() {
    const projectsSection = document.querySelector(".carousel-track");

    projectsSection.innerHTML += `
    <ul class='carousel-ul'>
          <li class="project-item" id='1'>
            <img src="${weatherLIcon}" alt="project mockup" />
            <div class='project-text-container'>
            <div class="project-title">Weather-App</div>
            <div class="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="proj-btn-container">
              <button class="proj-btn"><a href="https://github.com/ekat-velaz/weather-app">Code</a></button>
              <button class="proj-btn"><a href="https://ekat-velaz.github.io/weather-app/">Demo</a></button>
            </div>
            </div>
          </li>
          <li class="project-item" id='2'>
            <img src="${todoLIcon}" alt="project mockup" />
            <div class='project-text-container'>
            <div class="project-title">To-Do List</div>
            <div class="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="proj-btn-container">
              <button class="proj-btn"><a href="https://github.com/ekat-velaz/to-do-list">Code</a></button>
              <button class="proj-btn"><a href="https://ekat-velaz.github.io/to-do-list/">Demo</a></button>
            </div>
            </div>
          </li>
          <li class="project-item" id='3'>
            <img src="${restarauntLIcon}" alt="project mockup" />
            <div class='project-text-container'>
            <div class="project-title">Restaraunt page</div>
            <div class="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="proj-btn-container">
              <button class="proj-btn"><a href="https://github.com/ekat-velaz/restauraunt_page">Code</a></button>
              <button class="proj-btn"><a href="https://ekat-velaz.github.io/restauraunt_page/">Demo</a></button>
            </div>
            </div>
          </li>
          <li class="project-item" id='4'>
            <img src="${tictactoeLIcon}" alt="project mockup" />
            <div class='project-text-container'>
            <div class="project-title">Tic-Tac-Toe</div>
            <div class="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="proj-btn-container">
            <button class="proj-btn">
            <a href="https://github.com/ekat-velaz/tic-tac-toe">Code</a>
          </button>
          <button class="proj-btn">
            <a href="https://ekat-velaz.github.io/tic-tac-toe/">Demo</a>
          </button>
            </div>
            </div>
          </li>
          <li class="project-item" id='5'>
            <img src="${libraryLIcon}" alt="project mockup" />
            <div class='project-text-container'>
            <div class="project-title">My Library</div>
            <div class="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="proj-btn-container">
              <button class="proj-btn">
                <a href="https://github.com/ekat-velaz/library">Code</a>
              </button>
              <button class="proj-btn">
                <a href="https://ekat-velaz.github.io/library/">Demo</a>
              </button>
            </div>
            </div>
          </li>
     </ul>
    `;
  }

  function scrollProj() {
    let scrollContainer = document.querySelector(".carousel-ul");
    let backBtn = document.getElementById("btn-left");
    let nextBtn = document.getElementById("btn-right");
    let projectItem = document.querySelector(".project-item");

    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += e.deltaY;
    });

    nextBtn.addEventListener("click", () => {
      let itemSize = projectItem.offsetWidth;
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += itemSize;
      if (scrollContainer.scrollLeft % itemSize !== 0) {
        scrollContainer.scrollLeft =
          Math.floor(scrollContainer.scrollLeft / itemSize) * itemSize +
          itemSize;
      }
    });

    backBtn.addEventListener("click", () => {
      let itemSize = projectItem.offsetWidth;
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= itemSize;
      if (scrollContainer.scrollLeft % itemSize !== 0) {
        scrollContainer.scrollLeft =
          Math.floor(scrollContainer.scrollLeft / itemSize) * itemSize;
      }
    });
  }

  function createFooter() {
    const footerContainer = document.getElementById("footer");

    const copyright = document.createElement("div");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} ekat-velaz`;
    copyright.setAttribute("id", "copyright");

    const githubLink = document.createElement("a");
    githubLink.setAttribute("id", "github-link");
    githubLink.href = "https://github.com/ekat-velaz";

    copyright.appendChild(githubLink);
    footerContainer.appendChild(copyright);

    return footerContainer;
  }

  showPictures();
  dropDownUI();
  changeAboutMeContent();
  createProjects();
  scrollProj();
  createFooter();
})();

export default UI;
