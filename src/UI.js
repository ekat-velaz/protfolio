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
        "Hello there!<br/><br/>I'm Ekaterina Velazquez, a passionate Frontend Developer based in the UK. I discovered my love for coding in the early 2022 and since then I've been on an exciting journey, dedicatedly studying and improving my skills to this day.<br/><br/>As a self-taught enthusiast, I find immense joy in overcoming coding challenges and creating visually captivating websites. I firmly believe that persistence and dedication hold the key to conquering any obstacle. I'm committed to delivering seamless user experiences through simple and elegant code. Let's work together on exciting projects!";
    });

    educationBtn.addEventListener("click", () => {
      aboutMeContainer.innerHTML =
        "<li>\"Full-Stack JavaScript\" course at The Odin Project</li></br><li>Bachelor's degree in Computer Science, Moscow University named after S. U. Witte (2022 - to this day, online studying)</li></br><li>Bachelor's degree in Political Science, Moscow State University named after M. V. Lomonosov (2018-2022)</li>";
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

  function createProjects(
    weatherPic,
    todoPic,
    restarauntPic,
    tictactoePic,
    libraryPic
  ) {
    const projectsSection = document.querySelector(".carousel-track");

    projectsSection.innerHTML = "";

    projectsSection.innerHTML += `
    <ul class='carousel-ul'>
          <li class="project-item" id='1'>
            <img src="${weatherPic}" alt="project mockup" />
            <div class='project-text-container'>
            <div class="project-title">Weather-App</div>
            <div class="project-description">
            This Weather App, built with vanilla JavaScript, HTML, and CSS, using Weather API, provides real-time weather information with a clean and user-friendly interface, allowing users to effortlessly check current weather conditions and forecasts for any location worldwide.
            </div>
            <div class="proj-btn-container">
              <button class="proj-btn"><a href="https://github.com/ekat-velaz/weather-app">Code</a></button>
              <button class="proj-btn"><a href="https://ekat-velaz.github.io/weather-app/">Demo</a></button>
            </div>
            </div>
          </li>
          <li class="project-item" id='2'>
            <img src="${todoPic}" alt="project mockup" />
            <div class='project-text-container'>
            <div class="project-title">To-Do List</div>
            <div class="project-description">
            This To-Do App, created using vanilla JavaScript, HTML, and CSS, leverages local storage to help users organize their tasks efficiently. It offers a seamless and intuitive experience for adding, managing, and completing to-do items, ensuring tasks are always at your fingertips.
            </div>
            <div class="proj-btn-container">
              <button class="proj-btn"><a href="https://github.com/ekat-velaz/to-do-list">Code</a></button>
              <button class="proj-btn"><a href="https://ekat-velaz.github.io/to-do-list/">Demo</a></button>
            </div>
            </div>
          </li>
          <li class="project-item" id='3'>
            <img src="${restarauntPic}" alt="project mockup" />
            <div class='project-text-container'>
            <div class="project-title">Restaraunt page</div>
            <div class="project-description">
            This restaurant website, built with basic JavaScript, HTML, and CSS, provides a user-friendly way for people to check out the restaurant's menu, contacts, and learn about the restaurant's atmosphere. It's designed to be simple and easy to use.
            </div>
            <div class="proj-btn-container">
              <button class="proj-btn"><a href="https://github.com/ekat-velaz/restauraunt_page">Code</a></button>
              <button class="proj-btn"><a href="https://ekat-velaz.github.io/restauraunt_page/">Demo</a></button>
            </div>
            </div>
          </li>
          <li class="project-item" id='4'>
            <img src="${tictactoePic}" alt="project mockup" />
            <div class='project-text-container'>
            <div class="project-title">Tic-Tac-Toe</div>
            <div class="project-description">
            This Tic-Tac-Toe game, created using plain JavaScript, HTML, and CSS, offers a classic and entertaining gaming experience. Players can enjoy friendly competitions on a visually appealing and easy-to-use game board, playing against another player or against computer.
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
            <img src="${libraryPic}" alt="project mockup" />
            <div class='project-text-container'>
            <div class="project-title">My Library</div>
            <div class="project-description">
            This Library App, developed using simple JavaScript, HTML, and CSS, provides an organized way for users to manage their book collections. With its intuitive interface, users can easily add, delete, edit and mark their books read/unread.
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
    const scrollContainer = document.querySelector(".carousel-ul");
    const backBtn = document.getElementById("btn-left");
    const nextBtn = document.getElementById("btn-right");
    const projectItem = document.querySelector(".project-item");

    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += e.deltaY;
    });

    nextBtn.addEventListener("click", () => {
      const itemSize = projectItem.offsetWidth;
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += itemSize;
      if (scrollContainer.scrollLeft % itemSize !== 0) {
        scrollContainer.scrollLeft =
          Math.floor(scrollContainer.scrollLeft / itemSize) * itemSize +
          itemSize;
      }
    });

    backBtn.addEventListener("click", () => {
      const itemSize = projectItem.offsetWidth;
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

  function toggleMode() {
    const toggleBtn = document.getElementById("toggle-btn");

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        createProjects(
          weatherDIcon,
          todoDIcon,
          restarauntDIcon,
          tictactoeDIcon,
          libraryDIcon
        );
        scrollProj();
      } else {
        createProjects(
          weatherLIcon,
          todoLIcon,
          restarauntLIcon,
          tictactoeLIcon,
          libraryLIcon
        );
        scrollProj();
      }
    });
  }

  function scrollAnimation() {
    const observerLeft = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-left");
        } else {
          entry.target.classList.remove("show-left");
        }
      });
    });

    const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
    hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

    const observerRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-right");
        } else {
          entry.target.classList.remove("show-right");
        }
      });
    });

    const hiddenElementsRight = document.querySelectorAll(".hidden-right");
    hiddenElementsRight.forEach((el) => observerRight.observe(el));
  }

  showPictures();
  dropDownUI();
  changeAboutMeContent();
  createProjects(
    weatherLIcon,
    todoLIcon,
    restarauntLIcon,
    tictactoeLIcon,
    libraryLIcon
  );
  scrollProj();
  createFooter();
  toggleMode();
  scrollAnimation();
})();

export default UI;
