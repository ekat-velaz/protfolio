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

  showPictures();
  dropDownUI();
  changeAboutMeContent();
})();

export default UI;
