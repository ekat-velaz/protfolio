"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_small_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/small-logo.png */ "./src/images/small-logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_portriat_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/portriat.jpg */ "./src/images/portriat.jpg");
/* harmony import */ var _images_js_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/js.svg */ "./src/images/js.svg");
/* harmony import */ var _images_css_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/css.svg */ "./src/images/css.svg");
/* harmony import */ var _images_html_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/html.svg */ "./src/images/html.svg");
/* harmony import */ var _images_git_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/git.svg */ "./src/images/git.svg");
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/github.svg */ "./src/images/github.svg");
/* harmony import */ var _images_npm_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/npm.svg */ "./src/images/npm.svg");
/* harmony import */ var _images_babel_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/babel.svg */ "./src/images/babel.svg");
/* harmony import */ var _images_commandLine_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/commandLine.svg */ "./src/images/commandLine.svg");
/* harmony import */ var _images_eslint_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/eslint.svg */ "./src/images/eslint.svg");
/* harmony import */ var _images_prettier_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/prettier.svg */ "./src/images/prettier.svg");
/* harmony import */ var _images_vscode_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/vscode.svg */ "./src/images/vscode.svg");
/* harmony import */ var _images_webpack_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/webpack.svg */ "./src/images/webpack.svg");
/* harmony import */ var _images_projects_weather_light_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/projects/weather-light.png */ "./src/images/projects/weather-light.png");
/* harmony import */ var _images_projects_weather_dark_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/projects/weather-dark.png */ "./src/images/projects/weather-dark.png");
/* harmony import */ var _images_projects_todo_light_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/projects/todo-light.png */ "./src/images/projects/todo-light.png");
/* harmony import */ var _images_projects_todo_dark_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/projects/todo-dark.png */ "./src/images/projects/todo-dark.png");
/* harmony import */ var _images_projects_restaraunt_light_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/projects/restaraunt-light.png */ "./src/images/projects/restaraunt-light.png");
/* harmony import */ var _images_projects_restraunt_dark_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/projects/restraunt-dark.png */ "./src/images/projects/restraunt-dark.png");
/* harmony import */ var _images_projects_tictactoe_light_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/projects/tictactoe-light.png */ "./src/images/projects/tictactoe-light.png");
/* harmony import */ var _images_projects_tictactoe_dark_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/projects/tictactoe-dark.png */ "./src/images/projects/tictactoe-dark.png");
/* harmony import */ var _images_projects_library_light_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/projects/library-light.png */ "./src/images/projects/library-light.png");
/* harmony import */ var _images_projects_library_dark_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/projects/library-dark.png */ "./src/images/projects/library-dark.png");

























const UI = (() => {
  // Putting src attribute on every image
  function showPictures() {
    const smallLogoImg = document.getElementById("nav-logo");
    smallLogoImg.src = _images_small_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    const bigLogoImg = document.getElementById("big-logo");
    bigLogoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    const portriatImg = document.getElementById("portriat");
    portriatImg.src = _images_portriat_jpg__WEBPACK_IMPORTED_MODULE_2__;
  }

  // make drop-down menu not to disappear when you click on it
  // (and also include toggle of active class if youll have many menu buttons)
  function dropDownUI() {
    document.addEventListener("click", e => {
      const isDropdownBtn = e.target.matches("[data-dropdown-btn]");
      if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) return;
      let currentDropdown;
      if (isDropdownBtn) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
      }
      document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
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
      aboutMeContainer.innerHTML = "Hello there!<br/><br/>I'm Ekaterina Velazquez, a passionate Frontend Developer basedin the UK. In early 2022, I discovered my love for coding, and since then, I've been on an exciting journey, dedicatedly studying and improving my skills to this day.<br/><br/>As a self-taught enthusiast, I find immense joy in overcoming coding challenges and creating visually captivating websites. I firmly believe that persistence and dedication hold the key toconquering any obstacle. I'm committed to delivering seamless user experiences through simple and elegant code. Let's collaborate and embark on exciting endeavors together!";
    });
    educationBtn.addEventListener("click", () => {
      aboutMeContainer.innerHTML = '<li>"Full-Stack JavaScript" course at The Odin Project</li></br><li>Bachelors degree in Computer Science, Moscow University named after S. U. Witte (2022 - to this day, online studying)</li></br><li>Bachelors degree in Political Science, Moscow State University named after M. V. Lomonosov (2018-2022)</li>';
    });
    skillsBtn.addEventListener("click", () => {
      aboutMeContainer.innerHTML = "";
      aboutMeContainer.innerHTML += `
      <div class="skills-container">
            <div class="skills-item">
              <img src="${_images_js_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="" id="JS" class="skill-pic" />
              <div class="skill-name">JS</div>
            </div>
            <div class="skills-item">
              <img src="${_images_html_svg__WEBPACK_IMPORTED_MODULE_5__}" alt="" id="HTML" class="skill-pic" />
              <div class="skill-name">HTML</div>
            </div>
            <div class="skills-item">
              <img src="${_images_css_svg__WEBPACK_IMPORTED_MODULE_4__}" alt="" id="CSS" class="skill-pic" />
              <div class="skill-name">CSS</div>
            </div>
            <div class="skills-item">
              <img src="${_images_git_svg__WEBPACK_IMPORTED_MODULE_6__}" alt="" id="Git" class="skill-pic" />
              <div class="skill-name">Git</div>
            </div>
            <div class="skills-item">
              <img src="${_images_github_svg__WEBPACK_IMPORTED_MODULE_7__}" alt="" id="GitHub" class="skill-pic" />
              <div class="skill-name">Github</div>
            </div>
            <div class="skills-item">
              <img src="${_images_webpack_svg__WEBPACK_IMPORTED_MODULE_14__}" alt="" id="Webpack" class="skill-pic" />
              <div class="skill-name">Webpack</div>
            </div>
            <div class="skills-item">
              <img src="${_images_babel_svg__WEBPACK_IMPORTED_MODULE_9__}" alt="" id="Babel" class="skill-pic" />
              <div class="skill-name">Babel</div>
            </div>
            <div class="skills-item">
              <img src="${_images_eslint_svg__WEBPACK_IMPORTED_MODULE_11__}" alt="" id="Lint" class="skill-pic" />
              <div class="skill-name">ESLint</div>
            </div>
            <div class="skills-item">
              <img src="${_images_prettier_svg__WEBPACK_IMPORTED_MODULE_12__}" alt="" id="Prettier" class="skill-pic" />
              <div class="skill-name">Prettier</div>
            </div>
            <div class="skills-item">
              <img src="${_images_npm_svg__WEBPACK_IMPORTED_MODULE_8__}" alt="" id="npm" class="skill-pic" />
              <div class="skill-name">Npm</div>
            </div>
            <div class="skills-item">
              <img src="${_images_commandLine_svg__WEBPACK_IMPORTED_MODULE_10__}" alt="" id="CL" class="skill-pic" />
              <div class="skill-name">Command Line</div>
            </div>
            <div class="skills-item">
              <img src="${_images_vscode_svg__WEBPACK_IMPORTED_MODULE_13__}" alt="" id="Vscode" class="skill-pic" />
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
            <img src="${_images_projects_weather_light_png__WEBPACK_IMPORTED_MODULE_15__}" alt="project mockup" />
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
            <img src="${_images_projects_todo_light_png__WEBPACK_IMPORTED_MODULE_17__}" alt="project mockup" />
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
            <img src="${_images_projects_restaraunt_light_png__WEBPACK_IMPORTED_MODULE_19__}" alt="project mockup" />
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
            <img src="${_images_projects_tictactoe_light_png__WEBPACK_IMPORTED_MODULE_21__}" alt="project mockup" />
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
            <img src="${_images_projects_library_light_png__WEBPACK_IMPORTED_MODULE_23__}" alt="project mockup" />
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
    scrollContainer.addEventListener("wheel", e => {
      e.preventDefault();
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += e.deltaY;
    });
    nextBtn.addEventListener("click", () => {
      let itemSize = projectItem.offsetWidth;
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += itemSize;
      if (scrollContainer.scrollLeft % itemSize !== 0) {
        scrollContainer.scrollLeft = Math.floor(scrollContainer.scrollLeft / itemSize) * itemSize + itemSize;
      }
    });
    backBtn.addEventListener("click", () => {
      let itemSize = projectItem.offsetWidth;
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= itemSize;
      if (scrollContainer.scrollLeft % itemSize !== 0) {
        scrollContainer.scrollLeft = Math.floor(scrollContainer.scrollLeft / itemSize) * itemSize;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


(0,_UI__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf */ "./src/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf */ "./src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/Playfair_Display/static/PlayfairDisplay-Bold.ttf */ "./src/Playfair_Display/static/PlayfairDisplay-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf */ "./src/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/Playfair_Display/static/PlayfairDisplay-Regular.ttf */ "./src/Playfair_Display/static/PlayfairDisplay-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Reset */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

a {
  all: unset;
}

/* General space styling */
@font-face {
  font-family: "PlayfairDisplay";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

:root {
  --pink: #fde5ec;
  --peach: #fcbaad;
  --darkPeach: #e48586;
  --purple: #916db3;
  --trasparentPink: #fde5ec;
  --transparentPeach: #fcbaad;
  --transparentDarkPeach: #e48586;

  font-family: "PlayfairDisplay";

  /* Step -2: 12.50px → 12.80px */
  --step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem);

  /* Step -1: 15.00px → 16.00px */
  --step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem);

  /* Step 0: 18.00px → 20.00px */
  --step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);

  /* Step 1: 21.60px → 25.00px */
  --step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);

  /* Step 2: 25.92px → 31.25px */
  --step-2: clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);

  /* Step 3: 31.10px → 39.06px */
  --step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);

  /* Step 4: 37.32px → 48.83px */
  --step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);

  /* Step 5: 44.79px → 61.04px */
  --step-5: clamp(2.8rem, calc(2.45rem + 1.77vw), 3.82rem);
}

body {
  background-color: var(--pink);
  font-size: var(--step-0);
  overflow-x: hidden;
}

#content {
  /* height: 100%;
  width: 100%; */
  display: grid;
  align-content: space-between;
}

/* #header {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 6fr;
  align-items: center;
} */

/* Navigation styling */

#nav-container-main {
  font-size: var(--step-1);
  color: var(--pink);
  font-weight: bold;
  background-color: var(--darkPeach);
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 1rem max(6vw, 2rem);
  position: sticky;
  top: 0;
  align-self: start;
}

.nav-container {
  display: grid;
  grid-auto-flow: column;
  gap: max(4vw, 2rem);
}

.nav {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  gap: max(4vw, 2rem);
}

#nav-logo {
  width: 100px;
}

.nav-item,
.drop-down-item {
  padding-bottom: 10px;
  padding-left: 15px;
  padding-top: 0;
  padding-right: 0;
  border-bottom: solid 2px var(--purple);
  text-align: end;
  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,
    padding-left 1s ease-in-out, border-radius 1s ease-in-out,
    padding-top 1s ease-in-out, padding-right 1s ease-in-out;
}

.nav-item:hover,
.nav-item:focus,
.drop-down-item:hover,
.drop-down-item:focus {
  background-color: var(--purple);
  color: var(--pink);
  padding-bottom: 3px;
  padding-top: 10px;
  padding-right: 15px;
  padding-left: 5px;
  border-radius: 5px;
  text-align: start;
}

/* Switch dark mode btn styling */
input[type="checkbox"] {
  position: relative;
  width: 60px;
  height: 30px;
  -webkit-appearance: none;
  appearance: none;
  background: var(--pink);
  outline: none;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: inset 0 0 5px rgb(0 0 0 / 50%);
}

input[type="checkbox"]::before {
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--purple);
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
  font-family: fontAwesome;
  content: "\\f185";
  color: var(--pink);
  display: grid;
  place-items: center;
}

input[type="checkbox"]:checked::before {
  transform: translateX(100%);
  background: var(--pink);
  font-family: fontAwesome;
  content: "\\f186";
  color: var(--purple);
}

input[type="checkbox"]:checked {
  background: var(--purple);
}

.section-header {
  font-size: var(--step-3);
  font-weight: bold;
}

/* Drop down menu styling */

#drop-down-container {
  display: none;
  position: relative;
}

.drop-down-btn {
  background-color: var(--pink);
  width: 35px;
  height: 35px;
  border-radius: 10px;
}

.drop-down-btn::before {
  font-family: fontAwesome;
  content: "\\f0c9";
  color: var(--darkPeach);
  font-size: var(--step-1);
}
.drop-down-btn:hover,
.drop-down-container.active > .drop-down-btn,
.nav-btn:hover {
  background-color: var(--purple);
}

#drop-down-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background-color: var(--peach);
  color: var(--darkPeach);
  padding: 20px;
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.238);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
  display: grid;
  gap: 15px;
  z-index: 9999;
}

#drop-down-container.active > .drop-down-btn + #drop-down-menu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  z-index: 9999;
}

.drop-down-item {
  color: var(--purple);
}

/* Hero styling */

#hero {
  height: 90vh;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 2rem max(5vw, 2rem);
  /* justify-self: center;
  grid-template-columns: 1fr 2fr; */
}

#big-logo {
  width: max(30vw, 300px);
  padding: 0 2rem;
  /* min-width: 300px; */
}

#hero-text {
  font-size: var(--step-4);
  color: var(--darkPeach);
  font-weight: bold;
  padding: 0 2rem;
  width: max(45vw, 280px);
  /* line-height: 4rem; */
}

/* About me section styling */

#about-me {
  height: 100vh;
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  place-content: center;
  gap: 60px;
  padding: 2rem max(2vw, 2rem);
  color: var(--purple);
}

#about-container {
  display: grid;
  gap: 20px;
  width: max(45vw, 350px);
  justify-items: start;
}

#about-me-nav {
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  list-style: none;
  font-weight: bold;
}

.about-nav-item {
  background-color: inherit;
  color: var(--darkPeach);
  padding-bottom: 10px;
  padding-left: 15px;
  padding-top: 0;
  padding-right: 0;
  border-bottom: solid 2px var(--purple);
  text-align: end;

  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,
    padding-left 1s ease-in-out, border-radius 1s ease-in-out,
    padding-top 1s ease-in-out, padding-right 1s ease-in-out;
}

.about-nav-item:hover,
.about-nav-item:focus {
  background-color: var(--purple);
  color: var(--pink);
  padding-bottom: 3px;
  padding-top: 10px;
  padding-right: 15px;
  padding-left: 5px;
  border-radius: 5px;
  text-align: start;
}

#about-me-text {
  width: 100%;
  line-height: 2rem;
  padding: 2rem 0;
}

#portriat {
  border-radius: 20px;
  box-shadow: 10px -8px var(--purple);
  width: max(30vw, 300px);
}

/* Skills styling */

.skills-container {
  width: 100%;
  display: grid;
  gap: 15px;
  row-gap: 50px;
  place-content: center;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  /* grid-template-rows: repeat(auto-fit, minmax(60px, 1fr)); */
}

.skills-item {
  display: grid;
  place-content: center;
  place-items: center;
  gap: 5px;
}

.skill-pic {
  width: 50px;
  filter: invert(58%) sepia(89%) saturate(403%) hue-rotate(309deg)
    brightness(97%) contrast(84%);
  transition: filter 0.5s ease-in-out;
}

.skill-pic:hover {
  filter: invert(53%) sepia(18%) saturate(1081%) hue-rotate(228deg)
    brightness(87%) contrast(90%);
}

.skill-name {
  text-align: center;
}

/* Projects section */

#projects {
  display: grid;
  place-content: center;
  place-items: center;
  padding: 2rem max(2vw, 2rem);
  color: var(--purple);
}

.projects-header {
  font-size: var(--step-3);
  font-weight: bold;
}

.class-header {
  font-size: var(--step-3);
  font-weight: bold;
}

.projects-carousel {
  display: grid;
  grid-auto-flow: column;
}

.carousel-ul {
  --slider-index: 0;
  padding: 10px 0;
  width: max(60vw, 400px);
  height: fit-content;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
}

.carousel-ul::-webkit-scrollbar {
  display: none;
}

.project-item > img {
  inline-size: 70%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  padding: 5px;
}

.project-item {
  width: 100%;
  display: grid;
  grid-template-rows: min-content;
  gap: 10px;
  padding: 15px 0;
  justify-items: center;
}

.project-text-container {
  display: grid;
  grid-template-rows: min-content;
  gap: 20px;
  padding: 15px;
  width: 90%;
  justify-items: center;
}

.project-title {
  color: var(--darkPeach);

  font-size: var(--step-2);
}

.proj-btn-container {
  display: grid;
  grid-auto-flow: column;
  gap: 30px;
}

.proj-btn {
  background-color: inherit;
  color: var(--darkPeach);
  padding-bottom: 10px;
  padding-left: 15px;
  padding-top: 0;
  padding-right: 0;
  border-bottom: solid 2px var(--purple);
  text-align: end;

  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,
    padding-left 1s ease-in-out, border-radius 1s ease-in-out,
    padding-top 1s ease-in-out, padding-right 1s ease-in-out;
}

.proj-btn:hover,
.proj-btn:focus {
  background-color: var(--purple);
  color: var(--pink);
  padding-bottom: 3px;
  padding-top: 10px;
  padding-right: 15px;
  padding-left: 5px;
  border-radius: 5px;
  text-align: start;
}

#btn-left::before {
  font-size: var(--step-3);
  font-family: "fontAwesome";
  content: "\\f053";
  padding-right: 5px;
}

#btn-right::before {
  font-size: var(--step-3);
  font-family: "fontAwesome";
  content: "\\f054";
  padding-left: 5px;
}

/* Contacts section styling */

#contacts {
  height: 80vh;
  display: grid;
  place-items: center;
  place-content: center;
  gap: 60px;
  padding: 2rem max(2vw, 2rem);
  color: var(--purple);
  font-size: var(--step-2);
}

.contacts-container {
  display: grid;
  gap: 50px;
  width: max(40vw, 350px);
}

.contacts-hero {
  font-weight: bold;
  text-align: center;
}

.btn-lin {
  justify-self: start;
}

.btn-email,
.btn-github {
  justify-self: end;
}

.cont-btn {
  background-color: inherit;
  color: var(--darkPeach);
  padding-bottom: 10px;
  padding-left: 15px;
  padding-top: 0;
  padding-right: 0;
  border-bottom: solid 2px var(--purple);
  text-align: end;

  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,
    padding-left 1s ease-in-out, border-radius 1s ease-in-out,
    padding-top 1s ease-in-out, padding-right 1s ease-in-out;
}

.cont-btn:hover,
.cont-btn:focus {
  background-color: var(--purple);
  color: var(--pink);
  padding-bottom: 3px;
  padding-top: 10px;
  padding-right: 15px;
  padding-left: 5px;
  border-radius: 5px;
  text-align: start;
}

.btn-email::before {
  font-size: var(--step-3);
  font-family: "fontAwesome";
  content: "\\f0e0";
  padding-right: 5px;
}

.btn-lin::before {
  font-size: var(--step-3);
  font-family: "fontAwesome";
  content: "\\f08c";
  padding-right: 5px;
}

.btn-github::before {
  font-size: var(--step-3);
  font-family: "fontAwesome";
  content: "\\f09b";
  padding-right: 5px;
}

/* Footer styling */

#footer {
  height: 100px;
  background-color: var(--purple);
  color: var(--pink);
  display: grid;
  place-content: center;
  place-items: center;
}

#github-link::after {
  font-size: var(--step-3);
  font-family: "fontAwesome";
  content: "\\f09b";
  padding-left: 10px;
}

/* Mobile version styling */

@media (max-width: 600px) {
  /* Nav to drop-down */
  .nav {
    display: none;
  }

  #drop-down-container {
    display: block;
  }

  /* Hero atyling */
  #header {
    height: fit-content;
  }

  #hero {
    display: grid;
    grid-auto-flow: row;
    justify-items: center;
  }

  #hero-text {
    width: 80%;
    line-height: 3rem;
  }

  /* About me section styling */
  #about-me {
    grid-auto-flow: row;
    height: fit-content;
  }

  #about-container {
    justify-items: center;
    text-align: justify;
  }
}

/* Tablet styling */

@media (min-width: 600px) and (max-width: 1000px) {
  /* Nav to drop-down */
  .nav {
    display: none;
  }

  #drop-down-container {
    display: block;
  }

  /* Hero styling */
  #header {
    align-items: start;
  }

  #big-logo {
    width: max(40vw, 400px);
    justify-self: end;
  }

  #hero-text {
    width: 80%;
    line-height: 4rem;
  }

  #hero {
    grid-auto-flow: row;
    justify-items: center;
  }

  /* About me section styling */
  #about-me {
    grid-auto-flow: row;
  }

  #about-container {
    width: max(80vw, 500px);
    justify-items: center;
    text-align: justify;
    font-size: var(--step-2);
  }

  .skills-container {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  /* #portriat {
    width: max(50vw, 500px);
  } */
}

/* Tablet small height */
@media (max-height: 750px) and (min-width: 600px) {
  #header,
  #about-me {
    height: fit-content;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\na {\n  all: unset;\n}\n\n/* General space styling */\n@font-face {\n  font-family: \"PlayfairDisplay\";\n  src: url(/src/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Bold.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Regular.ttf);\n}\n\n:root {\n  --pink: #fde5ec;\n  --peach: #fcbaad;\n  --darkPeach: #e48586;\n  --purple: #916db3;\n  --trasparentPink: #fde5ec;\n  --transparentPeach: #fcbaad;\n  --transparentDarkPeach: #e48586;\n\n  font-family: \"PlayfairDisplay\";\n\n  /* Step -2: 12.50px → 12.80px */\n  --step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem);\n\n  /* Step -1: 15.00px → 16.00px */\n  --step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem);\n\n  /* Step 0: 18.00px → 20.00px */\n  --step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);\n\n  /* Step 1: 21.60px → 25.00px */\n  --step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);\n\n  /* Step 2: 25.92px → 31.25px */\n  --step-2: clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);\n\n  /* Step 3: 31.10px → 39.06px */\n  --step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);\n\n  /* Step 4: 37.32px → 48.83px */\n  --step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);\n\n  /* Step 5: 44.79px → 61.04px */\n  --step-5: clamp(2.8rem, calc(2.45rem + 1.77vw), 3.82rem);\n}\n\nbody {\n  background-color: var(--pink);\n  font-size: var(--step-0);\n  overflow-x: hidden;\n}\n\n#content {\n  /* height: 100%;\n  width: 100%; */\n  display: grid;\n  align-content: space-between;\n}\n\n/* #header {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 6fr;\n  align-items: center;\n} */\n\n/* Navigation styling */\n\n#nav-container-main {\n  font-size: var(--step-1);\n  color: var(--pink);\n  font-weight: bold;\n  background-color: var(--darkPeach);\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n  padding: 1rem max(6vw, 2rem);\n  position: sticky;\n  top: 0;\n  align-self: start;\n}\n\n.nav-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: max(4vw, 2rem);\n}\n\n.nav {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  gap: max(4vw, 2rem);\n}\n\n#nav-logo {\n  width: 100px;\n}\n\n.nav-item,\n.drop-down-item {\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.nav-item:hover,\n.nav-item:focus,\n.drop-down-item:hover,\n.drop-down-item:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n/* Switch dark mode btn styling */\ninput[type=\"checkbox\"] {\n  position: relative;\n  width: 60px;\n  height: 30px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: var(--pink);\n  outline: none;\n  border-radius: 2rem;\n  cursor: pointer;\n  box-shadow: inset 0 0 5px rgb(0 0 0 / 50%);\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--purple);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.5s;\n  font-family: fontAwesome;\n  content: \"\\f185\";\n  color: var(--pink);\n  display: grid;\n  place-items: center;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: translateX(100%);\n  background: var(--pink);\n  font-family: fontAwesome;\n  content: \"\\f186\";\n  color: var(--purple);\n}\n\ninput[type=\"checkbox\"]:checked {\n  background: var(--purple);\n}\n\n.section-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n\n/* Drop down menu styling */\n\n#drop-down-container {\n  display: none;\n  position: relative;\n}\n\n.drop-down-btn {\n  background-color: var(--pink);\n  width: 35px;\n  height: 35px;\n  border-radius: 10px;\n}\n\n.drop-down-btn::before {\n  font-family: fontAwesome;\n  content: \"\\f0c9\";\n  color: var(--darkPeach);\n  font-size: var(--step-1);\n}\n.drop-down-btn:hover,\n.drop-down-container.active > .drop-down-btn,\n.nav-btn:hover {\n  background-color: var(--purple);\n}\n\n#drop-down-menu {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 0.25rem);\n  background-color: var(--peach);\n  color: var(--darkPeach);\n  padding: 20px;\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.238);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-10px);\n  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n  display: grid;\n  gap: 15px;\n  z-index: 9999;\n}\n\n#drop-down-container.active > .drop-down-btn + #drop-down-menu {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n  z-index: 9999;\n}\n\n.drop-down-item {\n  color: var(--purple);\n}\n\n/* Hero styling */\n\n#hero {\n  height: 90vh;\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  padding: 2rem max(5vw, 2rem);\n  /* justify-self: center;\n  grid-template-columns: 1fr 2fr; */\n}\n\n#big-logo {\n  width: max(30vw, 300px);\n  padding: 0 2rem;\n  /* min-width: 300px; */\n}\n\n#hero-text {\n  font-size: var(--step-4);\n  color: var(--darkPeach);\n  font-weight: bold;\n  padding: 0 2rem;\n  width: max(45vw, 280px);\n  /* line-height: 4rem; */\n}\n\n/* About me section styling */\n\n#about-me {\n  height: 100vh;\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  place-content: center;\n  gap: 60px;\n  padding: 2rem max(2vw, 2rem);\n  color: var(--purple);\n}\n\n#about-container {\n  display: grid;\n  gap: 20px;\n  width: max(45vw, 350px);\n  justify-items: start;\n}\n\n#about-me-nav {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 20px;\n  list-style: none;\n  font-weight: bold;\n}\n\n.about-nav-item {\n  background-color: inherit;\n  color: var(--darkPeach);\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.about-nav-item:hover,\n.about-nav-item:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n#about-me-text {\n  width: 100%;\n  line-height: 2rem;\n  padding: 2rem 0;\n}\n\n#portriat {\n  border-radius: 20px;\n  box-shadow: 10px -8px var(--purple);\n  width: max(30vw, 300px);\n}\n\n/* Skills styling */\n\n.skills-container {\n  width: 100%;\n  display: grid;\n  gap: 15px;\n  row-gap: 50px;\n  place-content: center;\n  place-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));\n  /* grid-template-rows: repeat(auto-fit, minmax(60px, 1fr)); */\n}\n\n.skills-item {\n  display: grid;\n  place-content: center;\n  place-items: center;\n  gap: 5px;\n}\n\n.skill-pic {\n  width: 50px;\n  filter: invert(58%) sepia(89%) saturate(403%) hue-rotate(309deg)\n    brightness(97%) contrast(84%);\n  transition: filter 0.5s ease-in-out;\n}\n\n.skill-pic:hover {\n  filter: invert(53%) sepia(18%) saturate(1081%) hue-rotate(228deg)\n    brightness(87%) contrast(90%);\n}\n\n.skill-name {\n  text-align: center;\n}\n\n/* Projects section */\n\n#projects {\n  display: grid;\n  place-content: center;\n  place-items: center;\n  padding: 2rem max(2vw, 2rem);\n  color: var(--purple);\n}\n\n.projects-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n\n.class-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n\n.projects-carousel {\n  display: grid;\n  grid-auto-flow: column;\n}\n\n.carousel-ul {\n  --slider-index: 0;\n  padding: 10px 0;\n  width: max(60vw, 400px);\n  height: fit-content;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 100%;\n  overflow-x: auto;\n  overscroll-behavior-inline: contain;\n}\n\n.carousel-ul::-webkit-scrollbar {\n  display: none;\n}\n\n.project-item > img {\n  inline-size: 70%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  padding: 5px;\n}\n\n.project-item {\n  width: 100%;\n  display: grid;\n  grid-template-rows: min-content;\n  gap: 10px;\n  padding: 15px 0;\n  justify-items: center;\n}\n\n.project-text-container {\n  display: grid;\n  grid-template-rows: min-content;\n  gap: 20px;\n  padding: 15px;\n  width: 90%;\n  justify-items: center;\n}\n\n.project-title {\n  color: var(--darkPeach);\n\n  font-size: var(--step-2);\n}\n\n.proj-btn-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 30px;\n}\n\n.proj-btn {\n  background-color: inherit;\n  color: var(--darkPeach);\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.proj-btn:hover,\n.proj-btn:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n#btn-left::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f053\";\n  padding-right: 5px;\n}\n\n#btn-right::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f054\";\n  padding-left: 5px;\n}\n\n/* Contacts section styling */\n\n#contacts {\n  height: 80vh;\n  display: grid;\n  place-items: center;\n  place-content: center;\n  gap: 60px;\n  padding: 2rem max(2vw, 2rem);\n  color: var(--purple);\n  font-size: var(--step-2);\n}\n\n.contacts-container {\n  display: grid;\n  gap: 50px;\n  width: max(40vw, 350px);\n}\n\n.contacts-hero {\n  font-weight: bold;\n  text-align: center;\n}\n\n.btn-lin {\n  justify-self: start;\n}\n\n.btn-email,\n.btn-github {\n  justify-self: end;\n}\n\n.cont-btn {\n  background-color: inherit;\n  color: var(--darkPeach);\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.cont-btn:hover,\n.cont-btn:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n.btn-email::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f0e0\";\n  padding-right: 5px;\n}\n\n.btn-lin::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f08c\";\n  padding-right: 5px;\n}\n\n.btn-github::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f09b\";\n  padding-right: 5px;\n}\n\n/* Footer styling */\n\n#footer {\n  height: 100px;\n  background-color: var(--purple);\n  color: var(--pink);\n  display: grid;\n  place-content: center;\n  place-items: center;\n}\n\n#github-link::after {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f09b\";\n  padding-left: 10px;\n}\n\n/* Mobile version styling */\n\n@media (max-width: 600px) {\n  /* Nav to drop-down */\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n  }\n\n  /* Hero atyling */\n  #header {\n    height: fit-content;\n  }\n\n  #hero {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n  }\n\n  #hero-text {\n    width: 80%;\n    line-height: 3rem;\n  }\n\n  /* About me section styling */\n  #about-me {\n    grid-auto-flow: row;\n    height: fit-content;\n  }\n\n  #about-container {\n    justify-items: center;\n    text-align: justify;\n  }\n}\n\n/* Tablet styling */\n\n@media (min-width: 600px) and (max-width: 1000px) {\n  /* Nav to drop-down */\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n  }\n\n  /* Hero styling */\n  #header {\n    align-items: start;\n  }\n\n  #big-logo {\n    width: max(40vw, 400px);\n    justify-self: end;\n  }\n\n  #hero-text {\n    width: 80%;\n    line-height: 4rem;\n  }\n\n  #hero {\n    grid-auto-flow: row;\n    justify-items: center;\n  }\n\n  /* About me section styling */\n  #about-me {\n    grid-auto-flow: row;\n  }\n\n  #about-container {\n    width: max(80vw, 500px);\n    justify-items: center;\n    text-align: justify;\n    font-size: var(--step-2);\n  }\n\n  .skills-container {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  }\n\n  /* #portriat {\n    width: max(50vw, 500px);\n  } */\n}\n\n/* Tablet small height */\n@media (max-height: 750px) and (min-width: 600px) {\n  #header,\n  #about-me {\n    height: fit-content;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf":
/*!***************************************************************************!*\
  !*** ./src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a3a30667c7d75e00588.ttf";

/***/ }),

/***/ "./src/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf":
/*!********************************************************************!*\
  !*** ./src/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f7c141215e6d22d0f1e.ttf";

/***/ }),

/***/ "./src/Playfair_Display/static/PlayfairDisplay-Bold.ttf":
/*!**************************************************************!*\
  !*** ./src/Playfair_Display/static/PlayfairDisplay-Bold.ttf ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93cdecc21109a014b86b.ttf";

/***/ }),

/***/ "./src/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf":
/*!********************************************************************!*\
  !*** ./src/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a31df86d28c290c8e682.ttf";

/***/ }),

/***/ "./src/Playfair_Display/static/PlayfairDisplay-Regular.ttf":
/*!*****************************************************************!*\
  !*** ./src/Playfair_Display/static/PlayfairDisplay-Regular.ttf ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27705d9c43e8c36b1abd.ttf";

/***/ }),

/***/ "./src/images/babel.svg":
/*!******************************!*\
  !*** ./src/images/babel.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b8dbb62ec5ac59560ea.svg";

/***/ }),

/***/ "./src/images/commandLine.svg":
/*!************************************!*\
  !*** ./src/images/commandLine.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1d0c052fdd37ef03e64.svg";

/***/ }),

/***/ "./src/images/css.svg":
/*!****************************!*\
  !*** ./src/images/css.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f68dd972d58165b76e1.svg";

/***/ }),

/***/ "./src/images/eslint.svg":
/*!*******************************!*\
  !*** ./src/images/eslint.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "226cb12a45243637f9e8.svg";

/***/ }),

/***/ "./src/images/git.svg":
/*!****************************!*\
  !*** ./src/images/git.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "890ec924b44c2821c266.svg";

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5531be85d7a8d6f333e5.svg";

/***/ }),

/***/ "./src/images/html.svg":
/*!*****************************!*\
  !*** ./src/images/html.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "971e51be42aafa7db8fb.svg";

/***/ }),

/***/ "./src/images/js.svg":
/*!***************************!*\
  !*** ./src/images/js.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "952f950e6c460b6efb6a.svg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5543e40e1ab3778f1e6f.png";

/***/ }),

/***/ "./src/images/npm.svg":
/*!****************************!*\
  !*** ./src/images/npm.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a17ac6174f973fc9cc5.svg";

/***/ }),

/***/ "./src/images/portriat.jpg":
/*!*********************************!*\
  !*** ./src/images/portriat.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "957135ce223893504ded.jpg";

/***/ }),

/***/ "./src/images/prettier.svg":
/*!*********************************!*\
  !*** ./src/images/prettier.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8bfd863f4c1c0c4a08f.svg";

/***/ }),

/***/ "./src/images/projects/library-dark.png":
/*!**********************************************!*\
  !*** ./src/images/projects/library-dark.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a410552e6421ab1e50a2.png";

/***/ }),

/***/ "./src/images/projects/library-light.png":
/*!***********************************************!*\
  !*** ./src/images/projects/library-light.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c417e4fc521d7b9cd0c.png";

/***/ }),

/***/ "./src/images/projects/restaraunt-light.png":
/*!**************************************************!*\
  !*** ./src/images/projects/restaraunt-light.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0081b221dbd7ef5314d.png";

/***/ }),

/***/ "./src/images/projects/restraunt-dark.png":
/*!************************************************!*\
  !*** ./src/images/projects/restraunt-dark.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "598cbceb829c4cd15092.png";

/***/ }),

/***/ "./src/images/projects/tictactoe-dark.png":
/*!************************************************!*\
  !*** ./src/images/projects/tictactoe-dark.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5a2ae2a178b6cc8a191.png";

/***/ }),

/***/ "./src/images/projects/tictactoe-light.png":
/*!*************************************************!*\
  !*** ./src/images/projects/tictactoe-light.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5f3cb5835d4d0f71b21.png";

/***/ }),

/***/ "./src/images/projects/todo-dark.png":
/*!*******************************************!*\
  !*** ./src/images/projects/todo-dark.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8bc86b104a7597a82c6.png";

/***/ }),

/***/ "./src/images/projects/todo-light.png":
/*!********************************************!*\
  !*** ./src/images/projects/todo-light.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2d1cbdac7f284c7903f.png";

/***/ }),

/***/ "./src/images/projects/weather-dark.png":
/*!**********************************************!*\
  !*** ./src/images/projects/weather-dark.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7febc93cc343bcb1a168.png";

/***/ }),

/***/ "./src/images/projects/weather-light.png":
/*!***********************************************!*\
  !*** ./src/images/projects/weather-light.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fe1779ec42851285224.png";

/***/ }),

/***/ "./src/images/small-logo.png":
/*!***********************************!*\
  !*** ./src/images/small-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d16a1264ef4b1a2b2414.png";

/***/ }),

/***/ "./src/images/vscode.svg":
/*!*******************************!*\
  !*** ./src/images/vscode.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "370b1dff3eadbfa2f2df.svg";

/***/ }),

/***/ "./src/images/webpack.svg":
/*!********************************!*\
  !*** ./src/images/webpack.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c009b35964219d77a2f.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsT0FBTyxNQUFNLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksZ0JBQWdCLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxRQUFRLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLFlBQVksT0FBTyxTQUFTLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLE1BQU0sT0FBTyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxPQUFPLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxPQUFPLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEs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b3J0Zm9saW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNtYWxsTG9nbyBmcm9tIFwiLi9pbWFnZXMvc21hbGwtbG9nby5wbmdcIjtcbmltcG9ydCBiaWdMb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IHBvcnRyaWF0IGZyb20gXCIuL2ltYWdlcy9wb3J0cmlhdC5qcGdcIjtcbmltcG9ydCBqc0ljb24gZnJvbSBcIi4vaW1hZ2VzL2pzLnN2Z1wiO1xuaW1wb3J0IGNzc0ljb24gZnJvbSBcIi4vaW1hZ2VzL2Nzcy5zdmdcIjtcbmltcG9ydCBodG1sSWNvbiBmcm9tIFwiLi9pbWFnZXMvaHRtbC5zdmdcIjtcbmltcG9ydCBnaXRJY29uIGZyb20gXCIuL2ltYWdlcy9naXQuc3ZnXCI7XG5pbXBvcnQgZ2l0SHViSWNvbiBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IG5wbUljb24gZnJvbSBcIi4vaW1hZ2VzL25wbS5zdmdcIjtcbmltcG9ydCBiYWJlbEljb24gZnJvbSBcIi4vaW1hZ2VzL2JhYmVsLnN2Z1wiO1xuaW1wb3J0IENMSWNvbiBmcm9tIFwiLi9pbWFnZXMvY29tbWFuZExpbmUuc3ZnXCI7XG5pbXBvcnQgZXNsaW50SWNvbiBmcm9tIFwiLi9pbWFnZXMvZXNsaW50LnN2Z1wiO1xuaW1wb3J0IHByZXR0aWVySWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJldHRpZXIuc3ZnXCI7XG5pbXBvcnQgdnNjb2RlSWNvbiBmcm9tIFwiLi9pbWFnZXMvdnNjb2RlLnN2Z1wiO1xuaW1wb3J0IHdlYnBhY2tJY29uIGZyb20gXCIuL2ltYWdlcy93ZWJwYWNrLnN2Z1wiO1xuaW1wb3J0IHdlYXRoZXJMSWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvd2VhdGhlci1saWdodC5wbmdcIjtcbmltcG9ydCB3ZWF0aGVyREljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3dlYXRoZXItZGFyay5wbmdcIjtcbmltcG9ydCB0b2RvTEljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3RvZG8tbGlnaHQucG5nXCI7XG5pbXBvcnQgdG9kb0RJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy90b2RvLWRhcmsucG5nXCI7XG5pbXBvcnQgcmVzdGFyYXVudExJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy9yZXN0YXJhdW50LWxpZ2h0LnBuZ1wiO1xuaW1wb3J0IHJlc3RhcmF1bnRESWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvcmVzdHJhdW50LWRhcmsucG5nXCI7XG5pbXBvcnQgdGljdGFjdG9lTEljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3RpY3RhY3RvZS1saWdodC5wbmdcIjtcbmltcG9ydCB0aWN0YWN0b2VESWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvdGljdGFjdG9lLWRhcmsucG5nXCI7XG5pbXBvcnQgbGlicmFyeUxJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy9saWJyYXJ5LWxpZ2h0LnBuZ1wiO1xuaW1wb3J0IGxpYnJhcnlESWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvbGlicmFyeS1kYXJrLnBuZ1wiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIC8vIFB1dHRpbmcgc3JjIGF0dHJpYnV0ZSBvbiBldmVyeSBpbWFnZVxuICBmdW5jdGlvbiBzaG93UGljdHVyZXMoKSB7XG4gICAgY29uc3Qgc21hbGxMb2dvSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbG9nb1wiKTtcbiAgICBzbWFsbExvZ29JbWcuc3JjID0gc21hbGxMb2dvO1xuXG4gICAgY29uc3QgYmlnTG9nb0ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlnLWxvZ29cIik7XG4gICAgYmlnTG9nb0ltZy5zcmMgPSBiaWdMb2dvO1xuXG4gICAgY29uc3QgcG9ydHJpYXRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRyaWF0XCIpO1xuICAgIHBvcnRyaWF0SW1nLnNyYyA9IHBvcnRyaWF0O1xuICB9XG5cbiAgLy8gbWFrZSBkcm9wLWRvd24gbWVudSBub3QgdG8gZGlzYXBwZWFyIHdoZW4geW91IGNsaWNrIG9uIGl0XG4gIC8vIChhbmQgYWxzbyBpbmNsdWRlIHRvZ2dsZSBvZiBhY3RpdmUgY2xhc3MgaWYgeW91bGwgaGF2ZSBtYW55IG1lbnUgYnV0dG9ucylcbiAgZnVuY3Rpb24gZHJvcERvd25VSSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlzRHJvcGRvd25CdG4gPSBlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtZHJvcGRvd24tYnRuXVwiKTtcbiAgICAgIGlmICghaXNEcm9wZG93bkJ0biAmJiBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtZHJvcGRvd25dXCIpICE9IG51bGwpIHJldHVybjtcblxuICAgICAgbGV0IGN1cnJlbnREcm9wZG93bjtcbiAgICAgIGlmIChpc0Ryb3Bkb3duQnRuKSB7XG4gICAgICAgIGN1cnJlbnREcm9wZG93biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1kcm9wZG93bl1cIik7XG4gICAgICAgIGN1cnJlbnREcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRyb3Bkb3duXS5hY3RpdmVcIilcbiAgICAgICAgLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgaWYgKGRyb3Bkb3duID09PSBjdXJyZW50RHJvcGRvd24pIHJldHVybjtcbiAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZUFib3V0TWVDb250ZW50KCkge1xuICAgIGNvbnN0IGFib3V0TWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LW1lLXRleHRcIik7XG5cbiAgICBjb25zdCBteVN0b3J5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1zdG9yeVwiKTtcbiAgICBjb25zdCBlZHVjYXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhdGlvblwiKTtcbiAgICBjb25zdCBza2lsbHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxsc1wiKTtcblxuICAgIG15U3RvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgXCJIZWxsbyB0aGVyZSE8YnIvPjxici8+SSdtIEVrYXRlcmluYSBWZWxhenF1ZXosIGEgcGFzc2lvbmF0ZSBGcm9udGVuZCBEZXZlbG9wZXIgYmFzZWRpbiB0aGUgVUsuIEluIGVhcmx5IDIwMjIsIEkgZGlzY292ZXJlZCBteSBsb3ZlIGZvciBjb2RpbmcsIGFuZCBzaW5jZSB0aGVuLCBJJ3ZlIGJlZW4gb24gYW4gZXhjaXRpbmcgam91cm5leSwgZGVkaWNhdGVkbHkgc3R1ZHlpbmcgYW5kIGltcHJvdmluZyBteSBza2lsbHMgdG8gdGhpcyBkYXkuPGJyLz48YnIvPkFzIGEgc2VsZi10YXVnaHQgZW50aHVzaWFzdCwgSSBmaW5kIGltbWVuc2Ugam95IGluIG92ZXJjb21pbmcgY29kaW5nIGNoYWxsZW5nZXMgYW5kIGNyZWF0aW5nIHZpc3VhbGx5IGNhcHRpdmF0aW5nIHdlYnNpdGVzLiBJIGZpcm1seSBiZWxpZXZlIHRoYXQgcGVyc2lzdGVuY2UgYW5kIGRlZGljYXRpb24gaG9sZCB0aGUga2V5IHRvY29ucXVlcmluZyBhbnkgb2JzdGFjbGUuIEknbSBjb21taXR0ZWQgdG8gZGVsaXZlcmluZyBzZWFtbGVzcyB1c2VyIGV4cGVyaWVuY2VzIHRocm91Z2ggc2ltcGxlIGFuZCBlbGVnYW50IGNvZGUuIExldCdzIGNvbGxhYm9yYXRlIGFuZCBlbWJhcmsgb24gZXhjaXRpbmcgZW5kZWF2b3JzIHRvZ2V0aGVyIVwiO1xuICAgIH0pO1xuXG4gICAgZWR1Y2F0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhYm91dE1lQ29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgICc8bGk+XCJGdWxsLVN0YWNrIEphdmFTY3JpcHRcIiBjb3Vyc2UgYXQgVGhlIE9kaW4gUHJvamVjdDwvbGk+PC9icj48bGk+QmFjaGVsb3JzIGRlZ3JlZSBpbiBDb21wdXRlciBTY2llbmNlLCBNb3Njb3cgVW5pdmVyc2l0eSBuYW1lZCBhZnRlciBTLiBVLiBXaXR0ZSAoMjAyMiAtIHRvIHRoaXMgZGF5LCBvbmxpbmUgc3R1ZHlpbmcpPC9saT48L2JyPjxsaT5CYWNoZWxvcnMgZGVncmVlIGluIFBvbGl0aWNhbCBTY2llbmNlLCBNb3Njb3cgU3RhdGUgVW5pdmVyc2l0eSBuYW1lZCBhZnRlciBNLiBWLiBMb21vbm9zb3YgKDIwMTgtMjAyMik8L2xpPic7XG4gICAgfSk7XG5cbiAgICBza2lsbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2pzSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkpTXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkpTPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aHRtbEljb259XCIgYWx0PVwiXCIgaWQ9XCJIVE1MXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkhUTUw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjc3NJY29ufVwiIGFsdD1cIlwiIGlkPVwiQ1NTXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkNTUzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2dpdEljb259XCIgYWx0PVwiXCIgaWQ9XCJHaXRcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+R2l0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Z2l0SHViSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkdpdEh1YlwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5HaXRodWI8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt3ZWJwYWNrSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIldlYnBhY2tcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+V2VicGFjazwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2JhYmVsSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkJhYmVsXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkJhYmVsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZXNsaW50SWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkxpbnRcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+RVNMaW50PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJldHRpZXJJY29ufVwiIGFsdD1cIlwiIGlkPVwiUHJldHRpZXJcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+UHJldHRpZXI8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtucG1JY29ufVwiIGFsdD1cIlwiIGlkPVwibnBtXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPk5wbTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke0NMSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkNMXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkNvbW1hbmQgTGluZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ZzY29kZUljb259XCIgYWx0PVwiXCIgaWQ9XCJWc2NvZGVcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+VlMgQ29kZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC10cmFja1wiKTtcblxuICAgIHByb2plY3RzU2VjdGlvbi5pbm5lckhUTUwgKz0gYFxuICAgIDx1bCBjbGFzcz0nY2Fyb3VzZWwtdWwnPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaXRlbVwiIGlkPScxJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt3ZWF0aGVyTEljb259XCIgYWx0PVwicHJvamVjdCBtb2NrdXBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJvamVjdC10ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPldlYXRoZXItQXBwPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXRcbiAgICAgICAgICAgICAgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzXG4gICAgICAgICAgICAgIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2otYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VrYXQtdmVsYXovd2VhdGhlci1hcHBcIj5Db2RlPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj48YSBocmVmPVwiaHR0cHM6Ly9la2F0LXZlbGF6LmdpdGh1Yi5pby93ZWF0aGVyLWFwcC9cIj5EZW1vPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaXRlbVwiIGlkPScyJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt0b2RvTEljb259XCIgYWx0PVwicHJvamVjdCBtb2NrdXBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJvamVjdC10ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPlRvLURvIExpc3Q8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdFxuICAgICAgICAgICAgICBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcbiAgICAgICAgICAgICAgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvai1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZWthdC12ZWxhei90by1kby1saXN0XCI+Q29kZTwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+PGEgaHJlZj1cImh0dHBzOi8vZWthdC12ZWxhei5naXRodWIuaW8vdG8tZG8tbGlzdC9cIj5EZW1vPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaXRlbVwiIGlkPSczJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXN0YXJhdW50TEljb259XCIgYWx0PVwicHJvamVjdCBtb2NrdXBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJvamVjdC10ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPlJlc3RhcmF1bnQgcGFnZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XG4gICAgICAgICAgICAgIGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3Jpc1xuICAgICAgICAgICAgICBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6L3Jlc3RhdXJhdW50X3BhZ2VcIj5Db2RlPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj48YSBocmVmPVwiaHR0cHM6Ly9la2F0LXZlbGF6LmdpdGh1Yi5pby9yZXN0YXVyYXVudF9wYWdlL1wiPkRlbW88L2E+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pdGVtXCIgaWQ9JzQnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3RpY3RhY3RvZUxJY29ufVwiIGFsdD1cInByb2plY3QgbW9ja3VwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Byb2plY3QtdGV4dC1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5UaWMtVGFjLVRvZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XG4gICAgICAgICAgICAgIGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3Jpc1xuICAgICAgICAgICAgICBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6L3RpYy10YWMtdG9lXCI+Q29kZTwvYT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VrYXQtdmVsYXouZ2l0aHViLmlvL3RpYy10YWMtdG9lL1wiPkRlbW88L2E+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pdGVtXCIgaWQ9JzUnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2xpYnJhcnlMSWNvbn1cIiBhbHQ9XCJwcm9qZWN0IG1vY2t1cFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdwcm9qZWN0LXRleHQtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+TXkgTGlicmFyeTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XG4gICAgICAgICAgICAgIGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3Jpc1xuICAgICAgICAgICAgICBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6L2xpYnJhcnlcIj5Db2RlPC9hPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZWthdC12ZWxhei5naXRodWIuaW8vbGlicmFyeS9cIj5EZW1vPC9hPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgPC91bD5cbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsUHJvaigpIHtcbiAgICBsZXQgc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC11bFwiKTtcbiAgICBsZXQgYmFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWxlZnRcIik7XG4gICAgbGV0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1yaWdodFwiKTtcbiAgICBsZXQgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaXRlbVwiKTtcblxuICAgIHNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwic21vb3RoXCI7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCArPSBlLmRlbHRhWTtcbiAgICB9KTtcblxuICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCBpdGVtU2l6ZSA9IHByb2plY3RJdGVtLm9mZnNldFdpZHRoO1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJzbW9vdGhcIjtcbiAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IGl0ZW1TaXplO1xuICAgICAgaWYgKHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ICUgaXRlbVNpemUgIT09IDApIHtcbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgPVxuICAgICAgICAgIE1hdGguZmxvb3Ioc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgLyBpdGVtU2l6ZSkgKiBpdGVtU2l6ZSArXG4gICAgICAgICAgaXRlbVNpemU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgaXRlbVNpemUgPSBwcm9qZWN0SXRlbS5vZmZzZXRXaWR0aDtcbiAgICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwic21vb3RoXCI7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAtPSBpdGVtU2l6ZTtcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAlIGl0ZW1TaXplICE9PSAwKSB7XG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID1cbiAgICAgICAgICBNYXRoLmZsb29yKHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0IC8gaXRlbVNpemUpICogaXRlbVNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIik7XG5cbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGVrYXQtdmVsYXpgO1xuICAgIGNvcHlyaWdodC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvcHlyaWdodFwiKTtcblxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2l0aHViLWxpbmtcIik7XG4gICAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vZWthdC12ZWxhelwiO1xuXG4gICAgY29weXJpZ2h0LmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gICAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbiAgfVxuXG4gIHNob3dQaWN0dXJlcygpO1xuICBkcm9wRG93blVJKCk7XG4gIGNoYW5nZUFib3V0TWVDb250ZW50KCk7XG4gIGNyZWF0ZVByb2plY3RzKCk7XG4gIHNjcm9sbFByb2ooKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vVUlcIjtcblxuVUkoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9QbGF5ZmFpckRpc3BsYXktSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktQm9sZEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFJlc2V0ICovXG5cbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5idXR0b24sXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBpbmhlcml0O1xufVxuXG5hIHtcbiAgYWxsOiB1bnNldDtcbn1cblxuLyogR2VuZXJhbCBzcGFjZSBzdHlsaW5nICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXJEaXNwbGF5XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cblxuOnJvb3Qge1xuICAtLXBpbms6ICNmZGU1ZWM7XG4gIC0tcGVhY2g6ICNmY2JhYWQ7XG4gIC0tZGFya1BlYWNoOiAjZTQ4NTg2O1xuICAtLXB1cnBsZTogIzkxNmRiMztcbiAgLS10cmFzcGFyZW50UGluazogI2ZkZTVlYztcbiAgLS10cmFuc3BhcmVudFBlYWNoOiAjZmNiYWFkO1xuICAtLXRyYW5zcGFyZW50RGFya1BlYWNoOiAjZTQ4NTg2O1xuXG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheVwiO1xuXG4gIC8qIFN0ZXAgLTI6IDEyLjUwcHgg4oaSIDEyLjgwcHggKi9cbiAgLS1zdGVwLS0yOiBjbGFtcCgwLjc4cmVtLCBjYWxjKDAuNzdyZW0gKyAwLjAzdncpLCAwLjhyZW0pO1xuXG4gIC8qIFN0ZXAgLTE6IDE1LjAwcHgg4oaSIDE2LjAwcHggKi9cbiAgLS1zdGVwLS0xOiBjbGFtcCgwLjk0cmVtLCBjYWxjKDAuOTJyZW0gKyAwLjExdncpLCAxcmVtKTtcblxuICAvKiBTdGVwIDA6IDE4LjAwcHgg4oaSIDIwLjAwcHggKi9cbiAgLS1zdGVwLTA6IGNsYW1wKDEuMTNyZW0sIGNhbGMoMS4wOHJlbSArIDAuMjJ2dyksIDEuMjVyZW0pO1xuXG4gIC8qIFN0ZXAgMTogMjEuNjBweCDihpIgMjUuMDBweCAqL1xuICAtLXN0ZXAtMTogY2xhbXAoMS4zNXJlbSwgY2FsYygxLjI4cmVtICsgMC4zN3Z3KSwgMS41NnJlbSk7XG5cbiAgLyogU3RlcCAyOiAyNS45MnB4IOKGkiAzMS4yNXB4ICovXG4gIC0tc3RlcC0yOiBjbGFtcCgxLjYycmVtLCBjYWxjKDEuNXJlbSArIDAuNTh2dyksIDEuOTVyZW0pO1xuXG4gIC8qIFN0ZXAgMzogMzEuMTBweCDihpIgMzkuMDZweCAqL1xuICAtLXN0ZXAtMzogY2xhbXAoMS45NHJlbSwgY2FsYygxLjc3cmVtICsgMC44N3Z3KSwgMi40NHJlbSk7XG5cbiAgLyogU3RlcCA0OiAzNy4zMnB4IOKGkiA0OC44M3B4ICovXG4gIC0tc3RlcC00OiBjbGFtcCgyLjMzcmVtLCBjYWxjKDIuMDhyZW0gKyAxLjI1dncpLCAzLjA1cmVtKTtcblxuICAvKiBTdGVwIDU6IDQ0Ljc5cHgg4oaSIDYxLjA0cHggKi9cbiAgLS1zdGVwLTU6IGNsYW1wKDIuOHJlbSwgY2FsYygyLjQ1cmVtICsgMS43N3Z3KSwgMy44MnJlbSk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbiNjb250ZW50IHtcbiAgLyogaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTsgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLyogI2hlYWRlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0gKi9cblxuLyogTmF2aWdhdGlvbiBzdHlsaW5nICovXG5cbiNuYXYtY29udGFpbmVyLW1haW4ge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBwYWRkaW5nOiAxcmVtIG1heCg2dncsIDJyZW0pO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdhcDogbWF4KDR2dywgMnJlbSk7XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogbWF4KDR2dywgMnJlbSk7XG59XG5cbiNuYXYtbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLm5hdi1pdGVtLFxuLmRyb3AtZG93bi1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dCwgcGFkZGluZy1ib3R0b20gMXMgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy1sZWZ0IDFzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDFzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctdG9wIDFzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXJpZ2h0IDFzIGVhc2UtaW4tb3V0O1xufVxuXG4ubmF2LWl0ZW06aG92ZXIsXG4ubmF2LWl0ZW06Zm9jdXMsXG4uZHJvcC1kb3duLWl0ZW06aG92ZXIsXG4uZHJvcC1kb3duLWl0ZW06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLyogU3dpdGNoIGRhcmsgbW9kZSBidG4gc3R5bGluZyAqL1xuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBpbmspO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDAgMCAwIC8gNTAlKTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XG4gIGNvbnRlbnQ6IFwiXFxcXGYxODVcIjtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rKTtcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcXFxmMTg2XCI7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIERyb3AgZG93biBtZW51IHN0eWxpbmcgKi9cblxuI2Ryb3AtZG93bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wLWRvd24tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5kcm9wLWRvd24tYnRuOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwYzlcIjtcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcbn1cbi5kcm9wLWRvd24tYnRuOmhvdmVyLFxuLmRyb3AtZG93bi1jb250YWluZXIuYWN0aXZlID4gLmRyb3AtZG93bi1idG4sXG4ubmF2LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG59XG5cbiNkcm9wLWRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogY2FsYygxMDAlICsgMC4yNXJlbSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlYWNoKTtcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yMzgpO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbiNkcm9wLWRvd24tY29udGFpbmVyLmFjdGl2ZSA+IC5kcm9wLWRvd24tYnRuICsgI2Ryb3AtZG93bi1tZW51IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmRyb3AtZG93bi1pdGVtIHtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG59XG5cbi8qIEhlcm8gc3R5bGluZyAqL1xuXG4jaGVybyB7XG4gIGhlaWdodDogOTB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbiAgcGFkZGluZzogMnJlbSBtYXgoNXZ3LCAycmVtKTtcbiAgLyoganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjsgKi9cbn1cblxuI2JpZy1sb2dvIHtcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgLyogbWluLXdpZHRoOiAzMDBweDsgKi9cbn1cblxuI2hlcm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC00KTtcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwIDJyZW07XG4gIHdpZHRoOiBtYXgoNDV2dywgMjgwcHgpO1xuICAvKiBsaW5lLWhlaWdodDogNHJlbTsgKi9cbn1cblxuLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXG5cbiNhYm91dC1tZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA2MHB4O1xuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuI2Fib3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjBweDtcbiAgd2lkdGg6IG1heCg0NXZ3LCAzNTBweCk7XG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xufVxuXG4jYWJvdXQtbWUtbmF2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFib3V0LW5hdi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dCwgcGFkZGluZy1ib3R0b20gMXMgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy1sZWZ0IDFzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDFzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctdG9wIDFzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXJpZ2h0IDFzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWJvdXQtbmF2LWl0ZW06aG92ZXIsXG4uYWJvdXQtbmF2LWl0ZW06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuI2Fib3V0LW1lLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cblxuI3BvcnRyaWF0IHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMTBweCAtOHB4IHZhcigtLXB1cnBsZSk7XG4gIHdpZHRoOiBtYXgoMzB2dywgMzAwcHgpO1xufVxuXG4vKiBTa2lsbHMgc3R5bGluZyAqL1xuXG4uc2tpbGxzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE1cHg7XG4gIHJvdy1nYXA6IDUwcHg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg4MHB4LCAxZnIpKTtcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg2MHB4LCAxZnIpKTsgKi9cbn1cblxuLnNraWxscy1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbn1cblxuLnNraWxsLXBpYyB7XG4gIHdpZHRoOiA1MHB4O1xuICBmaWx0ZXI6IGludmVydCg1OCUpIHNlcGlhKDg5JSkgc2F0dXJhdGUoNDAzJSkgaHVlLXJvdGF0ZSgzMDlkZWcpXG4gICAgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg0JSk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2tpbGwtcGljOmhvdmVyIHtcbiAgZmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSgxOCUpIHNhdHVyYXRlKDEwODElKSBodWUtcm90YXRlKDIyOGRlZylcbiAgICBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoOTAlKTtcbn1cblxuLnNraWxsLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFByb2plY3RzIHNlY3Rpb24gKi9cblxuI3Byb2plY3RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuLnByb2plY3RzLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbGFzcy1oZWFkZXIge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvamVjdHMtY2Fyb3VzZWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuXG4uY2Fyb3VzZWwtdWwge1xuICAtLXNsaWRlci1pbmRleDogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogbWF4KDYwdncsIDQwMHB4KTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3ItaW5saW5lOiBjb250YWluO1xufVxuXG4uY2Fyb3VzZWwtdWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3QtaXRlbSA+IGltZyB7XG4gIGlubGluZS1zaXplOiA3MCU7XG4gIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogOTAlO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG5cbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xufVxuXG4ucHJvai1idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuXG4ucHJvai1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy10b3AgMXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctcmlnaHQgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9qLWJ0bjpob3Zlcixcbi5wcm9qLWJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4jYnRuLWxlZnQ6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCJcXFxcZjA1M1wiO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbiNidG4tcmlnaHQ6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCJcXFxcZjA1NFwiO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLyogQ29udGFjdHMgc2VjdGlvbiBzdHlsaW5nICovXG5cbiNjb250YWN0cyB7XG4gIGhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBnYXA6IDYwcHg7XG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG59XG5cbi5jb250YWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDUwcHg7XG4gIHdpZHRoOiBtYXgoNDB2dywgMzUwcHgpO1xufVxuXG4uY29udGFjdHMtaGVybyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tbGluIHtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuLmJ0bi1lbWFpbCxcbi5idG4tZ2l0aHViIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5jb250LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XG4gIHRleHQtYWxpZ246IGVuZDtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctbGVmdCAxcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLXRvcCAxcyBlYXNlLWluLW91dCwgcGFkZGluZy1yaWdodCAxcyBlYXNlLWluLW91dDtcbn1cblxuLmNvbnQtYnRuOmhvdmVyLFxuLmNvbnQtYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5idG4tZW1haWw6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCJcXFxcZjBlMFwiO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5idG4tbGluOjpiZWZvcmUge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnRBd2Vzb21lXCI7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOGNcIjtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uYnRuLWdpdGh1Yjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LWZhbWlseTogXCJmb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIlxcXFxmMDliXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLyogRm9vdGVyIHN0eWxpbmcgKi9cblxuI2Zvb3RlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4jZ2l0aHViLWxpbms6OmFmdGVyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LWZhbWlseTogXCJmb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIlxcXFxmMDliXCI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLyogTW9iaWxlIHZlcnNpb24gc3R5bGluZyAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLyogTmF2IHRvIGRyb3AtZG93biAqL1xuICAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Ryb3AtZG93bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogSGVybyBhdHlsaW5nICovXG4gICNoZWFkZXIge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAjaGVybyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICNoZXJvLXRleHQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cblxuICAvKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cbiAgI2Fib3V0LW1lIHtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAjYWJvdXQtY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxufVxuXG4vKiBUYWJsZXQgc3R5bGluZyAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLyogTmF2IHRvIGRyb3AtZG93biAqL1xuICAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Ryb3AtZG93bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogSGVybyBzdHlsaW5nICovXG4gICNoZWFkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgfVxuXG4gICNiaWctbG9nbyB7XG4gICAgd2lkdGg6IG1heCg0MHZ3LCA0MDBweCk7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIH1cblxuICAjaGVyby10ZXh0IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICB9XG5cbiAgI2hlcm8ge1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXG4gICNhYm91dC1tZSB7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgfVxuXG4gICNhYm91dC1jb250YWluZXIge1xuICAgIHdpZHRoOiBtYXgoODB2dywgNTAwcHgpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgfVxuXG4gIC5za2lsbHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgfVxuXG4gIC8qICNwb3J0cmlhdCB7XG4gICAgd2lkdGg6IG1heCg1MHZ3LCA1MDBweCk7XG4gIH0gKi9cbn1cblxuLyogVGFibGV0IHNtYWxsIGhlaWdodCAqL1xuQG1lZGlhIChtYXgtaGVpZ2h0OiA3NTBweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICNoZWFkZXIsXG4gICNhYm91dC1tZSB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVU7O0FBRVY7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUs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RUFDRSxxQkFBcUI7RUFDckI7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBLGlCQUFpQjtFQUNqQjtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtFQUN2Qjs7RUFFQSw2QkFBNkI7RUFDN0I7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwyREFBMkQ7RUFDN0Q7O0VBRUE7O0tBRUc7QUFDTDs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRTs7SUFFRSxtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCAqL1xcblxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuYSB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG4vKiBHZW5lcmFsIHNwYWNlIHN0eWxpbmcgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXJEaXNwbGF5XFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9QbGF5ZmFpckRpc3BsYXktVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9QbGF5ZmFpckRpc3BsYXktSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkLnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkSXRhbGljLnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcGluazogI2ZkZTVlYztcXG4gIC0tcGVhY2g6ICNmY2JhYWQ7XFxuICAtLWRhcmtQZWFjaDogI2U0ODU4NjtcXG4gIC0tcHVycGxlOiAjOTE2ZGIzO1xcbiAgLS10cmFzcGFyZW50UGluazogI2ZkZTVlYztcXG4gIC0tdHJhbnNwYXJlbnRQZWFjaDogI2ZjYmFhZDtcXG4gIC0tdHJhbnNwYXJlbnREYXJrUGVhY2g6ICNlNDg1ODY7XFxuXFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyRGlzcGxheVxcXCI7XFxuXFxuICAvKiBTdGVwIC0yOiAxMi41MHB4IOKGkiAxMi44MHB4ICovXFxuICAtLXN0ZXAtLTI6IGNsYW1wKDAuNzhyZW0sIGNhbGMoMC43N3JlbSArIDAuMDN2dyksIDAuOHJlbSk7XFxuXFxuICAvKiBTdGVwIC0xOiAxNS4wMHB4IOKGkiAxNi4wMHB4ICovXFxuICAtLXN0ZXAtLTE6IGNsYW1wKDAuOTRyZW0sIGNhbGMoMC45MnJlbSArIDAuMTF2dyksIDFyZW0pO1xcblxcbiAgLyogU3RlcCAwOiAxOC4wMHB4IOKGkiAyMC4wMHB4ICovXFxuICAtLXN0ZXAtMDogY2xhbXAoMS4xM3JlbSwgY2FsYygxLjA4cmVtICsgMC4yMnZ3KSwgMS4yNXJlbSk7XFxuXFxuICAvKiBTdGVwIDE6IDIxLjYwcHgg4oaSIDI1LjAwcHggKi9cXG4gIC0tc3RlcC0xOiBjbGFtcCgxLjM1cmVtLCBjYWxjKDEuMjhyZW0gKyAwLjM3dncpLCAxLjU2cmVtKTtcXG5cXG4gIC8qIFN0ZXAgMjogMjUuOTJweCDihpIgMzEuMjVweCAqL1xcbiAgLS1zdGVwLTI6IGNsYW1wKDEuNjJyZW0sIGNhbGMoMS41cmVtICsgMC41OHZ3KSwgMS45NXJlbSk7XFxuXFxuICAvKiBTdGVwIDM6IDMxLjEwcHgg4oaSIDM5LjA2cHggKi9cXG4gIC0tc3RlcC0zOiBjbGFtcCgxLjk0cmVtLCBjYWxjKDEuNzdyZW0gKyAwLjg3dncpLCAyLjQ0cmVtKTtcXG5cXG4gIC8qIFN0ZXAgNDogMzcuMzJweCDihpIgNDguODNweCAqL1xcbiAgLS1zdGVwLTQ6IGNsYW1wKDIuMzNyZW0sIGNhbGMoMi4wOHJlbSArIDEuMjV2dyksIDMuMDVyZW0pO1xcblxcbiAgLyogU3RlcCA1OiA0NC43OXB4IOKGkiA2MS4wNHB4ICovXFxuICAtLXN0ZXAtNTogY2xhbXAoMi44cmVtLCBjYWxjKDIuNDVyZW0gKyAxLjc3dncpLCAzLjgycmVtKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgLyogaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogI2hlYWRlciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAqL1xcblxcbi8qIE5hdmlnYXRpb24gc3R5bGluZyAqL1xcblxcbiNuYXYtY29udGFpbmVyLW1haW4ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogMXJlbSBtYXgoNnZ3LCAycmVtKTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IG1heCg0dncsIDJyZW0pO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcXG59XFxuXFxuI25hdi1sb2dvIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLm5hdi1pdGVtLFxcbi5kcm9wLWRvd24taXRlbSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAxcyBlYXNlLWluLW91dCxcXG4gICAgcGFkZGluZy1sZWZ0IDFzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLXRvcCAxcyBlYXNlLWluLW91dCwgcGFkZGluZy1yaWdodCAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5hdi1pdGVtOmhvdmVyLFxcbi5uYXYtaXRlbTpmb2N1cyxcXG4uZHJvcC1kb3duLWl0ZW06aG92ZXIsXFxuLmRyb3AtZG93bi1pdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLyogU3dpdGNoIGRhcmsgbW9kZSBidG4gc3R5bGluZyAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDAgMCAwIC8gNTAlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODVcXFwiO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXBpbmspO1xcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg2XFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLnNlY3Rpb24taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBEcm9wIGRvd24gbWVudSBzdHlsaW5nICovXFxuXFxuI2Ryb3AtZG93bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyb3AtZG93bi1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5kcm9wLWRvd24tYnRuOjpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xcbn1cXG4uZHJvcC1kb3duLWJ0bjpob3ZlcixcXG4uZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0bixcXG4ubmF2LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4jZHJvcC1kb3duLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGNhbGMoMTAwJSArIDAuMjVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVhY2gpO1xcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yMzgpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE1cHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4jZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0biArICNkcm9wLWRvd24tbWVudSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4uZHJvcC1kb3duLWl0ZW0ge1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi8qIEhlcm8gc3R5bGluZyAqL1xcblxcbiNoZXJvIHtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbiAgcGFkZGluZzogMnJlbSBtYXgoNXZ3LCAycmVtKTtcXG4gIC8qIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyOyAqL1xcbn1cXG5cXG4jYmlnLWxvZ28ge1xcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICAvKiBtaW4td2lkdGg6IDMwMHB4OyAqL1xcbn1cXG5cXG4jaGVyby10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC00KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICB3aWR0aDogbWF4KDQ1dncsIDI4MHB4KTtcXG4gIC8qIGxpbmUtaGVpZ2h0OiA0cmVtOyAqL1xcbn1cXG5cXG4vKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cXG5cXG4jYWJvdXQtbWUge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNjBweDtcXG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XFxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuI2Fib3V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IG1heCg0NXZ3LCAzNTBweCk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuI2Fib3V0LW1lLW5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFib3V0LW5hdi1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctdG9wIDFzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXJpZ2h0IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWJvdXQtbmF2LWl0ZW06aG92ZXIsXFxuLmFib3V0LW5hdi1pdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuI2Fib3V0LW1lLXRleHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuXFxuI3BvcnRyaWF0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IC04cHggdmFyKC0tcHVycGxlKTtcXG4gIHdpZHRoOiBtYXgoMzB2dywgMzAwcHgpO1xcbn1cXG5cXG4vKiBTa2lsbHMgc3R5bGluZyAqL1xcblxcbi5za2lsbHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTVweDtcXG4gIHJvdy1nYXA6IDUwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg4MHB4LCAxZnIpKTtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNjBweCwgMWZyKSk7ICovXFxufVxcblxcbi5za2lsbHMtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uc2tpbGwtcGljIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoNTglKSBzZXBpYSg4OSUpIHNhdHVyYXRlKDQwMyUpIGh1ZS1yb3RhdGUoMzA5ZGVnKVxcbiAgICBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODQlKTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2tpbGwtcGljOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoMTglKSBzYXR1cmF0ZSgxMDgxJSkgaHVlLXJvdGF0ZSgyMjhkZWcpXFxuICAgIGJyaWdodG5lc3MoODclKSBjb250cmFzdCg5MCUpO1xcbn1cXG5cXG4uc2tpbGwtbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFByb2plY3RzIHNlY3Rpb24gKi9cXG5cXG4jcHJvamVjdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbGFzcy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0cy1jYXJvdXNlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLmNhcm91c2VsLXVsIHtcXG4gIC0tc2xpZGVyLWluZGV4OiAwO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgd2lkdGg6IG1heCg2MHZ3LCA0MDBweCk7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWF1dG8tY29sdW1uczogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZTogY29udGFpbjtcXG59XFxuXFxuLmNhcm91c2VsLXVsOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtID4gaW1nIHtcXG4gIGlubGluZS1zaXplOiA3MCU7XFxuICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRleHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbn1cXG5cXG4ucHJvai1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucHJvai1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dCwgcGFkZGluZy1ib3R0b20gMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctbGVmdCAxcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAxcyBlYXNlLWluLW91dCxcXG4gICAgcGFkZGluZy10b3AgMXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctcmlnaHQgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qLWJ0bjpob3ZlcixcXG4ucHJvai1idG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4jYnRuLWxlZnQ6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LWZhbWlseTogXFxcImZvbnRBd2Vzb21lXFxcIjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1M1xcXCI7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNidG4tcmlnaHQ6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LWZhbWlseTogXFxcImZvbnRBd2Vzb21lXFxcIjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NFxcXCI7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLyogQ29udGFjdHMgc2VjdGlvbiBzdHlsaW5nICovXFxuXFxuI2NvbnRhY3RzIHtcXG4gIGhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA2MHB4O1xcbiAgcGFkZGluZzogMnJlbSBtYXgoMnZ3LCAycmVtKTtcXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbn1cXG5cXG4uY29udGFjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDUwcHg7XFxuICB3aWR0aDogbWF4KDQwdncsIDM1MHB4KTtcXG59XFxuXFxuLmNvbnRhY3RzLWhlcm8ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4tbGluIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5idG4tZW1haWwsXFxuLmJ0bi1naXRodWIge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5jb250LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAxcyBlYXNlLWluLW91dCxcXG4gICAgcGFkZGluZy1sZWZ0IDFzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLXRvcCAxcyBlYXNlLWluLW91dCwgcGFkZGluZy1yaWdodCAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNvbnQtYnRuOmhvdmVyLFxcbi5jb250LWJ0bjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5idG4tZW1haWw6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LWZhbWlseTogXFxcImZvbnRBd2Vzb21lXFxcIjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMFxcXCI7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5idG4tbGluOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJmb250QXdlc29tZVxcXCI7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOGNcXFwiO1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4uYnRuLWdpdGh1Yjo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZm9udEF3ZXNvbWVcXFwiO1xcbiAgY29udGVudDogXFxcIlxcXFxmMDliXFxcIjtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG4jZm9vdGVyIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnaXRodWItbGluazo6YWZ0ZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJmb250QXdlc29tZVxcXCI7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWJcXFwiO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4vKiBNb2JpbGUgdmVyc2lvbiBzdHlsaW5nICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAvKiBOYXYgdG8gZHJvcC1kb3duICovXFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNkcm9wLWRvd24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAvKiBIZXJvIGF0eWxpbmcgKi9cXG4gICNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgI2hlcm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjaGVyby10ZXh0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICB9XFxuXFxuICAvKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cXG4gICNhYm91dC1tZSB7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuXFxuICAjYWJvdXQtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgc3R5bGluZyAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLyogTmF2IHRvIGRyb3AtZG93biAqL1xcbiAgLm5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjZHJvcC1kb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLyogSGVybyBzdHlsaW5nICovXFxuICAjaGVhZGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgfVxcblxcbiAgI2JpZy1sb2dvIHtcXG4gICAgd2lkdGg6IG1heCg0MHZ3LCA0MDBweCk7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgfVxcblxcbiAgI2hlcm8tdGV4dCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbiAgfVxcblxcbiAgI2hlcm8ge1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAvKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cXG4gICNhYm91dC1tZSB7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICB9XFxuXFxuICAjYWJvdXQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IG1heCg4MHZ3LCA1MDBweCk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbiAgfVxcblxcbiAgLnNraWxscy1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXG4gIH1cXG5cXG4gIC8qICNwb3J0cmlhdCB7XFxuICAgIHdpZHRoOiBtYXgoNTB2dywgNTAwcHgpO1xcbiAgfSAqL1xcbn1cXG5cXG4vKiBUYWJsZXQgc21hbGwgaGVpZ2h0ICovXFxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3NTBweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAjaGVhZGVyLFxcbiAgI2Fib3V0LW1lIHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsic21hbGxMb2dvIiwiYmlnTG9nbyIsInBvcnRyaWF0IiwianNJY29uIiwiY3NzSWNvbiIsImh0bWxJY29uIiwiZ2l0SWNvbiIsImdpdEh1Ykljb24iLCJucG1JY29uIiwiYmFiZWxJY29uIiwiQ0xJY29uIiwiZXNsaW50SWNvbiIsInByZXR0aWVySWNvbiIsInZzY29kZUljb24iLCJ3ZWJwYWNrSWNvbiIsIndlYXRoZXJMSWNvbiIsIndlYXRoZXJESWNvbiIsInRvZG9MSWNvbiIsInRvZG9ESWNvbiIsInJlc3RhcmF1bnRMSWNvbiIsInJlc3RhcmF1bnRESWNvbiIsInRpY3RhY3RvZUxJY29uIiwidGljdGFjdG9lREljb24iLCJsaWJyYXJ5TEljb24iLCJsaWJyYXJ5REljb24iLCJVSSIsInNob3dQaWN0dXJlcyIsInNtYWxsTG9nb0ltZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJiaWdMb2dvSW1nIiwicG9ydHJpYXRJbWciLCJkcm9wRG93blVJIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpc0Ryb3Bkb3duQnRuIiwidGFyZ2V0IiwibWF0Y2hlcyIsImNsb3Nlc3QiLCJjdXJyZW50RHJvcGRvd24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRyb3Bkb3duIiwicmVtb3ZlIiwiY2hhbmdlQWJvdXRNZUNvbnRlbnQiLCJhYm91dE1lQ29udGFpbmVyIiwibXlTdG9yeUJ0biIsImVkdWNhdGlvbkJ0biIsInNraWxsc0J0biIsImlubmVySFRNTCIsImNyZWF0ZVByb2plY3RzIiwicHJvamVjdHNTZWN0aW9uIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFByb2oiLCJzY3JvbGxDb250YWluZXIiLCJiYWNrQnRuIiwibmV4dEJ0biIsInByb2plY3RJdGVtIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsInNjcm9sbEJlaGF2aW9yIiwic2Nyb2xsTGVmdCIsImRlbHRhWSIsIml0ZW1TaXplIiwib2Zmc2V0V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJjcmVhdGVGb290ZXIiLCJmb290ZXJDb250YWluZXIiLCJjb3B5cmlnaHQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzZXRBdHRyaWJ1dGUiLCJnaXRodWJMaW5rIiwiaHJlZiIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==