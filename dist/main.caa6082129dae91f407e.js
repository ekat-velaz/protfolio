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
  showPictures();
  dropDownUI();
  changeAboutMeContent();
  createProjects();
  scrollProj();
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

#header {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 6fr;
  align-items: center;
}

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

.about-me-header {
  font-size: var(--step-3);
  font-weight: bold;
}

/* .about-me-header > li {
  list-style: ;
} */

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
  inline-size: 90%;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\na {\n  all: unset;\n}\n\n/* General space styling */\n@font-face {\n  font-family: \"PlayfairDisplay\";\n  src: url(/src/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Bold.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Regular.ttf);\n}\n\n:root {\n  --pink: #fde5ec;\n  --peach: #fcbaad;\n  --darkPeach: #e48586;\n  --purple: #916db3;\n  --trasparentPink: #fde5ec;\n  --transparentPeach: #fcbaad;\n  --transparentDarkPeach: #e48586;\n\n  font-family: \"PlayfairDisplay\";\n\n  /* Step -2: 12.50px → 12.80px */\n  --step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem);\n\n  /* Step -1: 15.00px → 16.00px */\n  --step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem);\n\n  /* Step 0: 18.00px → 20.00px */\n  --step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);\n\n  /* Step 1: 21.60px → 25.00px */\n  --step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);\n\n  /* Step 2: 25.92px → 31.25px */\n  --step-2: clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);\n\n  /* Step 3: 31.10px → 39.06px */\n  --step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);\n\n  /* Step 4: 37.32px → 48.83px */\n  --step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);\n\n  /* Step 5: 44.79px → 61.04px */\n  --step-5: clamp(2.8rem, calc(2.45rem + 1.77vw), 3.82rem);\n}\n\nbody {\n  background-color: var(--pink);\n  font-size: var(--step-0);\n  overflow-x: hidden;\n}\n\n#content {\n  /* height: 100%;\n  width: 100%; */\n  display: grid;\n  align-content: space-between;\n}\n\n#header {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 6fr;\n  align-items: center;\n}\n\n/* Navigation styling */\n\n#nav-container-main {\n  font-size: var(--step-1);\n  color: var(--pink);\n  font-weight: bold;\n  background-color: var(--darkPeach);\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n  padding: 1rem max(6vw, 2rem);\n  position: sticky;\n  top: 0;\n  align-self: start;\n}\n\n.nav-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: max(4vw, 2rem);\n}\n\n.nav {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  gap: max(4vw, 2rem);\n}\n\n#nav-logo {\n  width: 100px;\n}\n\n.nav-item,\n.drop-down-item {\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.nav-item:hover,\n.nav-item:focus,\n.drop-down-item:hover,\n.drop-down-item:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n/* Switch dark mode btn styling */\ninput[type=\"checkbox\"] {\n  position: relative;\n  width: 60px;\n  height: 30px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: var(--pink);\n  outline: none;\n  border-radius: 2rem;\n  cursor: pointer;\n  box-shadow: inset 0 0 5px rgb(0 0 0 / 50%);\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--purple);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.5s;\n  font-family: fontAwesome;\n  content: \"\\f185\";\n  color: var(--pink);\n  display: grid;\n  place-items: center;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: translateX(100%);\n  background: var(--pink);\n  font-family: fontAwesome;\n  content: \"\\f186\";\n  color: var(--purple);\n}\n\ninput[type=\"checkbox\"]:checked {\n  background: var(--purple);\n}\n\n/* Drop down menu styling */\n\n#drop-down-container {\n  display: none;\n  position: relative;\n}\n\n.drop-down-btn {\n  background-color: var(--pink);\n  width: 35px;\n  height: 35px;\n  border-radius: 10px;\n}\n\n.drop-down-btn::before {\n  font-family: fontAwesome;\n  content: \"\\f0c9\";\n  color: var(--darkPeach);\n  font-size: var(--step-1);\n}\n.drop-down-btn:hover,\n.drop-down-container.active > .drop-down-btn,\n.nav-btn:hover {\n  background-color: var(--purple);\n}\n\n#drop-down-menu {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 0.25rem);\n  background-color: var(--peach);\n  color: var(--darkPeach);\n  padding: 20px;\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.238);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-10px);\n  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n  display: grid;\n  gap: 15px;\n  z-index: 9999;\n}\n\n#drop-down-container.active > .drop-down-btn + #drop-down-menu {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n  z-index: 9999;\n}\n\n.drop-down-item {\n  color: var(--purple);\n}\n\n/* Hero styling */\n\n#hero {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  padding: 2rem max(5vw, 2rem);\n  /* justify-self: center;\n  grid-template-columns: 1fr 2fr; */\n}\n\n#big-logo {\n  width: max(30vw, 300px);\n  padding: 0 2rem;\n  /* min-width: 300px; */\n}\n\n#hero-text {\n  font-size: var(--step-4);\n  color: var(--darkPeach);\n  font-weight: bold;\n  padding: 0 2rem;\n  width: max(45vw, 280px);\n  /* line-height: 4rem; */\n}\n\n/* About me section styling */\n\n#about-me {\n  height: 100vh;\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  place-content: center;\n  gap: 60px;\n  padding: 2rem max(2vw, 2rem);\n  color: var(--purple);\n}\n\n#about-container {\n  display: grid;\n  gap: 20px;\n  width: max(45vw, 350px);\n  justify-items: start;\n}\n\n#about-me-nav {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 20px;\n  list-style: none;\n  font-weight: bold;\n}\n\n.about-nav-item {\n  background-color: inherit;\n  color: var(--darkPeach);\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.about-nav-item:hover,\n.about-nav-item:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n#about-me-text {\n  width: 100%;\n  line-height: 2rem;\n  padding: 2rem 0;\n}\n\n.about-me-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n\n/* .about-me-header > li {\n  list-style: ;\n} */\n\n#portriat {\n  border-radius: 20px;\n  box-shadow: 10px -8px var(--purple);\n  width: max(30vw, 300px);\n}\n\n/* Skills styling */\n\n.skills-container {\n  width: 100%;\n  display: grid;\n  gap: 15px;\n  row-gap: 50px;\n  place-content: center;\n  place-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));\n  /* grid-template-rows: repeat(auto-fit, minmax(60px, 1fr)); */\n}\n\n.skills-item {\n  display: grid;\n  place-content: center;\n  place-items: center;\n  gap: 5px;\n}\n\n.skill-pic {\n  width: 50px;\n  filter: invert(58%) sepia(89%) saturate(403%) hue-rotate(309deg)\n    brightness(97%) contrast(84%);\n  transition: filter 0.5s ease-in-out;\n}\n\n.skill-pic:hover {\n  filter: invert(53%) sepia(18%) saturate(1081%) hue-rotate(228deg)\n    brightness(87%) contrast(90%);\n}\n\n.skill-name {\n  text-align: center;\n}\n\n/* Projects section */\n\n#projects {\n  display: grid;\n  place-content: center;\n  place-items: center;\n  padding: 2rem max(2vw, 2rem);\n  color: var(--purple);\n}\n\n.projects-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n\n.class-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n\n.projects-carousel {\n  display: grid;\n  grid-auto-flow: column;\n}\n\n.carousel-ul {\n  --slider-index: 0;\n  padding: 10px 0;\n  width: max(60vw, 400px);\n  height: fit-content;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 100%;\n  overflow-x: auto;\n  overscroll-behavior-inline: contain;\n}\n\n.carousel-ul::-webkit-scrollbar {\n  display: none;\n}\n\n.project-item > img {\n  inline-size: 90%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  padding: 5px;\n}\n\n.project-item {\n  width: 100%;\n  display: grid;\n  grid-template-rows: min-content;\n  gap: 10px;\n  padding: 15px 0;\n  justify-items: center;\n}\n\n.project-text-container {\n  display: grid;\n  grid-template-rows: min-content;\n  gap: 20px;\n  padding: 15px;\n  width: 90%;\n  justify-items: center;\n}\n\n.project-title {\n  color: var(--darkPeach);\n\n  font-size: var(--step-2);\n}\n\n.proj-btn-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 30px;\n}\n\n.proj-btn {\n  background-color: inherit;\n  color: var(--darkPeach);\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.proj-btn:hover,\n.proj-btn:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n#btn-left::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f053\";\n  padding-right: 5px;\n}\n\n#btn-right::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f054\";\n  padding-left: 5px;\n}\n\n/* Mobile version styling */\n\n@media (max-width: 600px) {\n  /* Nav to drop-down */\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n  }\n\n  /* Hero atyling */\n  #header {\n    height: fit-content;\n  }\n\n  #hero {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n  }\n\n  #hero-text {\n    width: 80%;\n    line-height: 3rem;\n  }\n\n  /* About me section styling */\n  #about-me {\n    grid-auto-flow: row;\n    height: fit-content;\n  }\n\n  #about-container {\n    justify-items: center;\n    text-align: justify;\n  }\n}\n\n/* Tablet styling */\n\n@media (min-width: 600px) and (max-width: 1000px) {\n  /* Nav to drop-down */\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n  }\n\n  /* Hero styling */\n  #header {\n    align-items: start;\n  }\n\n  #big-logo {\n    width: max(40vw, 400px);\n    justify-self: end;\n  }\n\n  #hero-text {\n    width: 80%;\n    line-height: 4rem;\n  }\n\n  #hero {\n    grid-auto-flow: row;\n    justify-items: center;\n  }\n\n  /* About me section styling */\n  #about-me {\n    grid-auto-flow: row;\n  }\n\n  #about-container {\n    width: max(80vw, 500px);\n    justify-items: center;\n    text-align: justify;\n    font-size: var(--step-2);\n  }\n\n  .skills-container {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  }\n\n  /* #portriat {\n    width: max(50vw, 500px);\n  } */\n}\n\n/* Tablet small height */\n@media (max-height: 750px) and (min-width: 600px) {\n  #header,\n  #about-me {\n    height: fit-content;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYWE2MDgyMTI5ZGFlOTFmNDA3ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNSO0FBQ0s7QUFDUjtBQUNFO0FBQ0U7QUFDRjtBQUNNO0FBQ047QUFDSTtBQUNHO0FBQ0Q7QUFDSTtBQUNKO0FBQ0U7QUFDZ0I7QUFDRDtBQUNMO0FBQ0Q7QUFDYTtBQUNGO0FBQ0E7QUFDRDtBQUNIO0FBQ0Q7QUFFOUQsTUFBTXlCLEVBQUUsR0FBRyxDQUFDLE1BQU07RUFDaEI7RUFDQSxTQUFTQyxZQUFZQSxDQUFBLEVBQUc7SUFDdEIsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDeERGLFlBQVksQ0FBQ0csR0FBRyxHQUFHOUIsbURBQVM7SUFFNUIsTUFBTStCLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ3RERSxVQUFVLENBQUNELEdBQUcsR0FBRzdCLDZDQUFPO0lBRXhCLE1BQU0rQixXQUFXLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUN2REcsV0FBVyxDQUFDRixHQUFHLEdBQUc1QixpREFBUTtFQUM1Qjs7RUFFQTtFQUNBO0VBQ0EsU0FBUytCLFVBQVVBLENBQUEsRUFBRztJQUNwQkwsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztNQUN4QyxNQUFNQyxhQUFhLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMscUJBQXFCLENBQUM7TUFDN0QsSUFBSSxDQUFDRixhQUFhLElBQUlELENBQUMsQ0FBQ0UsTUFBTSxDQUFDRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLEVBQUU7TUFFbkUsSUFBSUMsZUFBZTtNQUNuQixJQUFJSixhQUFhLEVBQUU7UUFDakJJLGVBQWUsR0FBR0wsQ0FBQyxDQUFDRSxNQUFNLENBQUNFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUNyREMsZUFBZSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDNUM7TUFFQWQsUUFBUSxDQUNMZSxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUMxQ0MsT0FBTyxDQUFFQyxRQUFRLElBQUs7UUFDckIsSUFBSUEsUUFBUSxLQUFLTCxlQUFlLEVBQUU7UUFDbENLLFFBQVEsQ0FBQ0osU0FBUyxDQUFDSyxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3JDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNKO0VBRUEsU0FBU0Msb0JBQW9CQSxDQUFBLEVBQUc7SUFDOUIsTUFBTUMsZ0JBQWdCLEdBQUdwQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFFakUsTUFBTW9CLFVBQVUsR0FBR3JCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUN0RCxNQUFNcUIsWUFBWSxHQUFHdEIsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ3pELE1BQU1zQixTQUFTLEdBQUd2QixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFFbkRvQixVQUFVLENBQUNmLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ3pDYyxnQkFBZ0IsQ0FBQ0ksU0FBUyxHQUN4Qiw4bUJBQThtQjtJQUNsbkIsQ0FBQyxDQUFDO0lBRUZGLFlBQVksQ0FBQ2hCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQzNDYyxnQkFBZ0IsQ0FBQ0ksU0FBUyxHQUN4QixvVEFBb1Q7SUFDeFQsQ0FBQyxDQUFDO0lBRUZELFNBQVMsQ0FBQ2pCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ3hDYyxnQkFBZ0IsQ0FBQ0ksU0FBUyxHQUFHLEVBQUU7TUFDL0JKLGdCQUFnQixDQUFDSSxTQUFTLElBQUs7QUFDckM7QUFDQTtBQUNBLDBCQUEwQmpELDJDQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQkUsNkNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCRCw0Q0FBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQSwwQkFBMEJFLDRDQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQkMsK0NBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCTyxpREFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQSwwQkFBMEJMLDhDQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQkUsZ0RBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCQyxrREFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQSwwQkFBMEJKLDRDQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQkUscURBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCRyxnREFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0lBQ0gsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxTQUFTd0MsY0FBY0EsQ0FBQSxFQUFHO0lBQ3hCLE1BQU1DLGVBQWUsR0FBRzFCLFFBQVEsQ0FBQzJCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUVqRUQsZUFBZSxDQUFDRixTQUFTLElBQUs7QUFDbEM7QUFDQTtBQUNBLHdCQUF3QnJDLGdFQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QkUsNkRBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCRSxtRUFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCRSxrRUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QkUsZ0VBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0VBQ0g7RUFFQSxTQUFTaUMsVUFBVUEsQ0FBQSxFQUFHO0lBQ3BCLElBQUlDLGVBQWUsR0FBRzdCLFFBQVEsQ0FBQzJCLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDNUQsSUFBSUcsT0FBTyxHQUFHOUIsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ2pELElBQUk4QixPQUFPLEdBQUcvQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFDbEQsSUFBSStCLFdBQVcsR0FBR2hDLFFBQVEsQ0FBQzJCLGFBQWEsQ0FBQyxlQUFlLENBQUM7SUFFekRFLGVBQWUsQ0FBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO01BQy9DQSxDQUFDLENBQUMwQixjQUFjLENBQUMsQ0FBQztNQUNsQkosZUFBZSxDQUFDSyxLQUFLLENBQUNDLGNBQWMsR0FBRyxRQUFRO01BQy9DTixlQUFlLENBQUNPLFVBQVUsSUFBSTdCLENBQUMsQ0FBQzhCLE1BQU07SUFDeEMsQ0FBQyxDQUFDO0lBRUZOLE9BQU8sQ0FBQ3pCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ3RDLElBQUlnQyxRQUFRLEdBQUdOLFdBQVcsQ0FBQ08sV0FBVztNQUN0Q1YsZUFBZSxDQUFDSyxLQUFLLENBQUNDLGNBQWMsR0FBRyxRQUFRO01BQy9DTixlQUFlLENBQUNPLFVBQVUsSUFBSUUsUUFBUTtNQUN0QyxJQUFJVCxlQUFlLENBQUNPLFVBQVUsR0FBR0UsUUFBUSxLQUFLLENBQUMsRUFBRTtRQUMvQ1QsZUFBZSxDQUFDTyxVQUFVLEdBQ3hCSSxJQUFJLENBQUNDLEtBQUssQ0FBQ1osZUFBZSxDQUFDTyxVQUFVLEdBQUdFLFFBQVEsQ0FBQyxHQUFHQSxRQUFRLEdBQzVEQSxRQUFRO01BQ1o7SUFDRixDQUFDLENBQUM7SUFFRlIsT0FBTyxDQUFDeEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDdEMsSUFBSWdDLFFBQVEsR0FBR04sV0FBVyxDQUFDTyxXQUFXO01BQ3RDVixlQUFlLENBQUNLLEtBQUssQ0FBQ0MsY0FBYyxHQUFHLFFBQVE7TUFDL0NOLGVBQWUsQ0FBQ08sVUFBVSxJQUFJRSxRQUFRO01BQ3RDLElBQUlULGVBQWUsQ0FBQ08sVUFBVSxHQUFHRSxRQUFRLEtBQUssQ0FBQyxFQUFFO1FBQy9DVCxlQUFlLENBQUNPLFVBQVUsR0FDeEJJLElBQUksQ0FBQ0MsS0FBSyxDQUFDWixlQUFlLENBQUNPLFVBQVUsR0FBR0UsUUFBUSxDQUFDLEdBQUdBLFFBQVE7TUFDaEU7SUFDRixDQUFDLENBQUM7RUFDSjtFQUVBeEMsWUFBWSxDQUFDLENBQUM7RUFDZE8sVUFBVSxDQUFDLENBQUM7RUFDWmMsb0JBQW9CLENBQUMsQ0FBQztFQUN0Qk0sY0FBYyxDQUFDLENBQUM7RUFDaEJHLFVBQVUsQ0FBQyxDQUFDO0FBQ2QsQ0FBQyxFQUFFLENBQUM7QUFFSixpRUFBZS9CLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNqUkk7QUFDQztBQUV0QkEsK0NBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hKO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDhNQUE4RTtBQUMxSCw0Q0FBNEMsNE5BQXFGO0FBQ2pJLDRDQUE0QyxrTUFBd0U7QUFDcEgsNENBQTRDLDhNQUE4RTtBQUMxSCw0Q0FBNEMsd01BQTJFO0FBQ3ZILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLE9BQU8sTUFBTSxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGdCQUFnQixVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxPQUFPLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFB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QUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbWFsbExvZ28gZnJvbSBcIi4vaW1hZ2VzL3NtYWxsLWxvZ28ucG5nXCI7XG5pbXBvcnQgYmlnTG9nbyBmcm9tIFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcbmltcG9ydCBwb3J0cmlhdCBmcm9tIFwiLi9pbWFnZXMvcG9ydHJpYXQuanBnXCI7XG5pbXBvcnQganNJY29uIGZyb20gXCIuL2ltYWdlcy9qcy5zdmdcIjtcbmltcG9ydCBjc3NJY29uIGZyb20gXCIuL2ltYWdlcy9jc3Muc3ZnXCI7XG5pbXBvcnQgaHRtbEljb24gZnJvbSBcIi4vaW1hZ2VzL2h0bWwuc3ZnXCI7XG5pbXBvcnQgZ2l0SWNvbiBmcm9tIFwiLi9pbWFnZXMvZ2l0LnN2Z1wiO1xuaW1wb3J0IGdpdEh1Ykljb24gZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yi5zdmdcIjtcbmltcG9ydCBucG1JY29uIGZyb20gXCIuL2ltYWdlcy9ucG0uc3ZnXCI7XG5pbXBvcnQgYmFiZWxJY29uIGZyb20gXCIuL2ltYWdlcy9iYWJlbC5zdmdcIjtcbmltcG9ydCBDTEljb24gZnJvbSBcIi4vaW1hZ2VzL2NvbW1hbmRMaW5lLnN2Z1wiO1xuaW1wb3J0IGVzbGludEljb24gZnJvbSBcIi4vaW1hZ2VzL2VzbGludC5zdmdcIjtcbmltcG9ydCBwcmV0dGllckljb24gZnJvbSBcIi4vaW1hZ2VzL3ByZXR0aWVyLnN2Z1wiO1xuaW1wb3J0IHZzY29kZUljb24gZnJvbSBcIi4vaW1hZ2VzL3ZzY29kZS5zdmdcIjtcbmltcG9ydCB3ZWJwYWNrSWNvbiBmcm9tIFwiLi9pbWFnZXMvd2VicGFjay5zdmdcIjtcbmltcG9ydCB3ZWF0aGVyTEljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3dlYXRoZXItbGlnaHQucG5nXCI7XG5pbXBvcnQgd2VhdGhlckRJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy93ZWF0aGVyLWRhcmsucG5nXCI7XG5pbXBvcnQgdG9kb0xJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy90b2RvLWxpZ2h0LnBuZ1wiO1xuaW1wb3J0IHRvZG9ESWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvdG9kby1kYXJrLnBuZ1wiO1xuaW1wb3J0IHJlc3RhcmF1bnRMSWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvcmVzdGFyYXVudC1saWdodC5wbmdcIjtcbmltcG9ydCByZXN0YXJhdW50REljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3Jlc3RyYXVudC1kYXJrLnBuZ1wiO1xuaW1wb3J0IHRpY3RhY3RvZUxJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy90aWN0YWN0b2UtbGlnaHQucG5nXCI7XG5pbXBvcnQgdGljdGFjdG9lREljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3RpY3RhY3RvZS1kYXJrLnBuZ1wiO1xuaW1wb3J0IGxpYnJhcnlMSWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvbGlicmFyeS1saWdodC5wbmdcIjtcbmltcG9ydCBsaWJyYXJ5REljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL2xpYnJhcnktZGFyay5wbmdcIjtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICAvLyBQdXR0aW5nIHNyYyBhdHRyaWJ1dGUgb24gZXZlcnkgaW1hZ2VcbiAgZnVuY3Rpb24gc2hvd1BpY3R1cmVzKCkge1xuICAgIGNvbnN0IHNtYWxsTG9nb0ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWxvZ29cIik7XG4gICAgc21hbGxMb2dvSW1nLnNyYyA9IHNtYWxsTG9nbztcblxuICAgIGNvbnN0IGJpZ0xvZ29JbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpZy1sb2dvXCIpO1xuICAgIGJpZ0xvZ29JbWcuc3JjID0gYmlnTG9nbztcblxuICAgIGNvbnN0IHBvcnRyaWF0SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0cmlhdFwiKTtcbiAgICBwb3J0cmlhdEltZy5zcmMgPSBwb3J0cmlhdDtcbiAgfVxuXG4gIC8vIG1ha2UgZHJvcC1kb3duIG1lbnUgbm90IHRvIGRpc2FwcGVhciB3aGVuIHlvdSBjbGljayBvbiBpdFxuICAvLyAoYW5kIGFsc28gaW5jbHVkZSB0b2dnbGUgb2YgYWN0aXZlIGNsYXNzIGlmIHlvdWxsIGhhdmUgbWFueSBtZW51IGJ1dHRvbnMpXG4gIGZ1bmN0aW9uIGRyb3BEb3duVUkoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBpc0Ryb3Bkb3duQnRuID0gZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWRyb3Bkb3duLWJ0bl1cIik7XG4gICAgICBpZiAoIWlzRHJvcGRvd25CdG4gJiYgZS50YXJnZXQuY2xvc2VzdChcIltkYXRhLWRyb3Bkb3duXVwiKSAhPSBudWxsKSByZXR1cm47XG5cbiAgICAgIGxldCBjdXJyZW50RHJvcGRvd247XG4gICAgICBpZiAoaXNEcm9wZG93bkJ0bikge1xuICAgICAgICBjdXJyZW50RHJvcGRvd24gPSBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtZHJvcGRvd25dXCIpO1xuICAgICAgICBjdXJyZW50RHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kcm9wZG93bl0uYWN0aXZlXCIpXG4gICAgICAgIC5mb3JFYWNoKChkcm9wZG93bikgPT4ge1xuICAgICAgICAgIGlmIChkcm9wZG93biA9PT0gY3VycmVudERyb3Bkb3duKSByZXR1cm47XG4gICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VBYm91dE1lQ29udGVudCgpIHtcbiAgICBjb25zdCBhYm91dE1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1tZS10ZXh0XCIpO1xuXG4gICAgY29uc3QgbXlTdG9yeUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXktc3RvcnlcIik7XG4gICAgY29uc3QgZWR1Y2F0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZHVjYXRpb25cIik7XG4gICAgY29uc3Qgc2tpbGxzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2lsbHNcIik7XG5cbiAgICBteVN0b3J5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhYm91dE1lQ29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgIFwiSGVsbG8gdGhlcmUhPGJyLz48YnIvPkknbSBFa2F0ZXJpbmEgVmVsYXpxdWV6LCBhIHBhc3Npb25hdGUgRnJvbnRlbmQgRGV2ZWxvcGVyIGJhc2VkaW4gdGhlIFVLLiBJbiBlYXJseSAyMDIyLCBJIGRpc2NvdmVyZWQgbXkgbG92ZSBmb3IgY29kaW5nLCBhbmQgc2luY2UgdGhlbiwgSSd2ZSBiZWVuIG9uIGFuIGV4Y2l0aW5nIGpvdXJuZXksIGRlZGljYXRlZGx5IHN0dWR5aW5nIGFuZCBpbXByb3ZpbmcgbXkgc2tpbGxzIHRvIHRoaXMgZGF5Ljxici8+PGJyLz5BcyBhIHNlbGYtdGF1Z2h0IGVudGh1c2lhc3QsIEkgZmluZCBpbW1lbnNlIGpveSBpbiBvdmVyY29taW5nIGNvZGluZyBjaGFsbGVuZ2VzIGFuZCBjcmVhdGluZyB2aXN1YWxseSBjYXB0aXZhdGluZyB3ZWJzaXRlcy4gSSBmaXJtbHkgYmVsaWV2ZSB0aGF0IHBlcnNpc3RlbmNlIGFuZCBkZWRpY2F0aW9uIGhvbGQgdGhlIGtleSB0b2NvbnF1ZXJpbmcgYW55IG9ic3RhY2xlLiBJJ20gY29tbWl0dGVkIHRvIGRlbGl2ZXJpbmcgc2VhbWxlc3MgdXNlciBleHBlcmllbmNlcyB0aHJvdWdoIHNpbXBsZSBhbmQgZWxlZ2FudCBjb2RlLiBMZXQncyBjb2xsYWJvcmF0ZSBhbmQgZW1iYXJrIG9uIGV4Y2l0aW5nIGVuZGVhdm9ycyB0b2dldGhlciFcIjtcbiAgICB9KTtcblxuICAgIGVkdWNhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWJvdXRNZUNvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgICAgICAnPGxpPlwiRnVsbC1TdGFjayBKYXZhU2NyaXB0XCIgY291cnNlIGF0IFRoZSBPZGluIFByb2plY3Q8L2xpPjwvYnI+PGxpPkJhY2hlbG9ycyBkZWdyZWUgaW4gQ29tcHV0ZXIgU2NpZW5jZSwgTW9zY293IFVuaXZlcnNpdHkgbmFtZWQgYWZ0ZXIgUy4gVS4gV2l0dGUgKDIwMjIgLSB0byB0aGlzIGRheSwgb25saW5lIHN0dWR5aW5nKTwvbGk+PC9icj48bGk+QmFjaGVsb3JzIGRlZ3JlZSBpbiBQb2xpdGljYWwgU2NpZW5jZSwgTW9zY293IFN0YXRlIFVuaXZlcnNpdHkgbmFtZWQgYWZ0ZXIgTS4gVi4gTG9tb25vc292ICgyMDE4LTIwMjIpPC9saT4nO1xuICAgIH0pO1xuXG4gICAgc2tpbGxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhYm91dE1lQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBhYm91dE1lQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtqc0ljb259XCIgYWx0PVwiXCIgaWQ9XCJKU1wiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5KUzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2h0bWxJY29ufVwiIGFsdD1cIlwiIGlkPVwiSFRNTFwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5IVE1MPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y3NzSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkNTU1wiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5DU1M8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtnaXRJY29ufVwiIGFsdD1cIlwiIGlkPVwiR2l0XCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkdpdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2dpdEh1Ykljb259XCIgYWx0PVwiXCIgaWQ9XCJHaXRIdWJcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+R2l0aHViPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7d2VicGFja0ljb259XCIgYWx0PVwiXCIgaWQ9XCJXZWJwYWNrXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPldlYnBhY2s8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtiYWJlbEljb259XCIgYWx0PVwiXCIgaWQ9XCJCYWJlbFwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5CYWJlbDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2VzbGludEljb259XCIgYWx0PVwiXCIgaWQ9XCJMaW50XCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkVTTGludDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ByZXR0aWVySWNvbn1cIiBhbHQ9XCJcIiBpZD1cIlByZXR0aWVyXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPlByZXR0aWVyPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bnBtSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIm5wbVwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5OcG08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtDTEljb259XCIgYWx0PVwiXCIgaWQ9XCJDTFwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5Db21tYW5kIExpbmU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt2c2NvZGVJY29ufVwiIGFsdD1cIlwiIGlkPVwiVnNjb2RlXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPlZTIENvZGU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtdHJhY2tcIik7XG5cbiAgICBwcm9qZWN0c1NlY3Rpb24uaW5uZXJIVE1MICs9IGBcbiAgICA8dWwgY2xhc3M9J2Nhcm91c2VsLXVsJz5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWl0ZW1cIiBpZD0nMSc+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7d2VhdGhlckxJY29ufVwiIGFsdD1cInByb2plY3QgbW9ja3VwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Byb2plY3QtdGV4dC1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5XZWF0aGVyLUFwcDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XG4gICAgICAgICAgICAgIGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3Jpc1xuICAgICAgICAgICAgICBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6L3dlYXRoZXItYXBwXCI+Q29kZTwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+PGEgaHJlZj1cImh0dHBzOi8vZWthdC12ZWxhei5naXRodWIuaW8vd2VhdGhlci1hcHAvXCI+RGVtbzwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWl0ZW1cIiBpZD0nMic+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7dG9kb0xJY29ufVwiIGFsdD1cInByb2plY3QgbW9ja3VwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Byb2plY3QtdGV4dC1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5Uby1EbyBMaXN0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXRcbiAgICAgICAgICAgICAgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzXG4gICAgICAgICAgICAgIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2otYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VrYXQtdmVsYXovdG8tZG8tbGlzdFwiPkNvZGU8L2E+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPjxhIGhyZWY9XCJodHRwczovL2VrYXQtdmVsYXouZ2l0aHViLmlvL3RvLWRvLWxpc3QvXCI+RGVtbzwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWl0ZW1cIiBpZD0nMyc+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzdGFyYXVudExJY29ufVwiIGFsdD1cInByb2plY3QgbW9ja3VwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Byb2plY3QtdGV4dC1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5SZXN0YXJhdW50IHBhZ2U8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdFxuICAgICAgICAgICAgICBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcbiAgICAgICAgICAgICAgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvai1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZWthdC12ZWxhei9yZXN0YXVyYXVudF9wYWdlXCI+Q29kZTwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+PGEgaHJlZj1cImh0dHBzOi8vZWthdC12ZWxhei5naXRodWIuaW8vcmVzdGF1cmF1bnRfcGFnZS9cIj5EZW1vPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaXRlbVwiIGlkPSc0Jz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt0aWN0YWN0b2VMSWNvbn1cIiBhbHQ9XCJwcm9qZWN0IG1vY2t1cFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdwcm9qZWN0LXRleHQtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+VGljLVRhYy1Ub2U8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdFxuICAgICAgICAgICAgICBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcbiAgICAgICAgICAgICAgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvai1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZWthdC12ZWxhei90aWMtdGFjLXRvZVwiPkNvZGU8L2E+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9la2F0LXZlbGF6LmdpdGh1Yi5pby90aWMtdGFjLXRvZS9cIj5EZW1vPC9hPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaXRlbVwiIGlkPSc1Jz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtsaWJyYXJ5TEljb259XCIgYWx0PVwicHJvamVjdCBtb2NrdXBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJvamVjdC10ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPk15IExpYnJhcnk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdFxuICAgICAgICAgICAgICBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcbiAgICAgICAgICAgICAgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvai1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZWthdC12ZWxhei9saWJyYXJ5XCI+Q29kZTwvYT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VrYXQtdmVsYXouZ2l0aHViLmlvL2xpYnJhcnkvXCI+RGVtbzwvYT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgIDwvdWw+XG4gICAgYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFByb2ooKSB7XG4gICAgbGV0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtdWxcIik7XG4gICAgbGV0IGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1sZWZ0XCIpO1xuICAgIGxldCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcmlnaHRcIik7XG4gICAgbGV0IHByb2plY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1cIik7XG5cbiAgICBzY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzY3JvbGxDb250YWluZXIuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInNtb290aFwiO1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gZS5kZWx0YVk7XG4gICAgfSk7XG5cbiAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgaXRlbVNpemUgPSBwcm9qZWN0SXRlbS5vZmZzZXRXaWR0aDtcbiAgICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwic21vb3RoXCI7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCArPSBpdGVtU2l6ZTtcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAlIGl0ZW1TaXplICE9PSAwKSB7XG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID1cbiAgICAgICAgICBNYXRoLmZsb29yKHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0IC8gaXRlbVNpemUpICogaXRlbVNpemUgK1xuICAgICAgICAgIGl0ZW1TaXplO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IGl0ZW1TaXplID0gcHJvamVjdEl0ZW0ub2Zmc2V0V2lkdGg7XG4gICAgICBzY3JvbGxDb250YWluZXIuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInNtb290aFwiO1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgLT0gaXRlbVNpemU7XG4gICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgJSBpdGVtU2l6ZSAhPT0gMCkge1xuICAgICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCA9XG4gICAgICAgICAgTWF0aC5mbG9vcihzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAvIGl0ZW1TaXplKSAqIGl0ZW1TaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1BpY3R1cmVzKCk7XG4gIGRyb3BEb3duVUkoKTtcbiAgY2hhbmdlQWJvdXRNZUNvbnRlbnQoKTtcbiAgY3JlYXRlUHJvamVjdHMoKTtcbiAgc2Nyb2xsUHJvaigpO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL1VJXCI7XG5cblVJKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvUGxheWZhaXJEaXNwbGF5LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LUJvbGRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBSZXNldCAqL1xuXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogaW5oZXJpdDtcbn1cblxuYSB7XG4gIGFsbDogdW5zZXQ7XG59XG5cbi8qIEdlbmVyYWwgc3BhY2Ugc3R5bGluZyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG5cbjpyb290IHtcbiAgLS1waW5rOiAjZmRlNWVjO1xuICAtLXBlYWNoOiAjZmNiYWFkO1xuICAtLWRhcmtQZWFjaDogI2U0ODU4NjtcbiAgLS1wdXJwbGU6ICM5MTZkYjM7XG4gIC0tdHJhc3BhcmVudFBpbms6ICNmZGU1ZWM7XG4gIC0tdHJhbnNwYXJlbnRQZWFjaDogI2ZjYmFhZDtcbiAgLS10cmFuc3BhcmVudERhcmtQZWFjaDogI2U0ODU4NjtcblxuICBmb250LWZhbWlseTogXCJQbGF5ZmFpckRpc3BsYXlcIjtcblxuICAvKiBTdGVwIC0yOiAxMi41MHB4IOKGkiAxMi44MHB4ICovXG4gIC0tc3RlcC0tMjogY2xhbXAoMC43OHJlbSwgY2FsYygwLjc3cmVtICsgMC4wM3Z3KSwgMC44cmVtKTtcblxuICAvKiBTdGVwIC0xOiAxNS4wMHB4IOKGkiAxNi4wMHB4ICovXG4gIC0tc3RlcC0tMTogY2xhbXAoMC45NHJlbSwgY2FsYygwLjkycmVtICsgMC4xMXZ3KSwgMXJlbSk7XG5cbiAgLyogU3RlcCAwOiAxOC4wMHB4IOKGkiAyMC4wMHB4ICovXG4gIC0tc3RlcC0wOiBjbGFtcCgxLjEzcmVtLCBjYWxjKDEuMDhyZW0gKyAwLjIydncpLCAxLjI1cmVtKTtcblxuICAvKiBTdGVwIDE6IDIxLjYwcHgg4oaSIDI1LjAwcHggKi9cbiAgLS1zdGVwLTE6IGNsYW1wKDEuMzVyZW0sIGNhbGMoMS4yOHJlbSArIDAuMzd2dyksIDEuNTZyZW0pO1xuXG4gIC8qIFN0ZXAgMjogMjUuOTJweCDihpIgMzEuMjVweCAqL1xuICAtLXN0ZXAtMjogY2xhbXAoMS42MnJlbSwgY2FsYygxLjVyZW0gKyAwLjU4dncpLCAxLjk1cmVtKTtcblxuICAvKiBTdGVwIDM6IDMxLjEwcHgg4oaSIDM5LjA2cHggKi9cbiAgLS1zdGVwLTM6IGNsYW1wKDEuOTRyZW0sIGNhbGMoMS43N3JlbSArIDAuODd2dyksIDIuNDRyZW0pO1xuXG4gIC8qIFN0ZXAgNDogMzcuMzJweCDihpIgNDguODNweCAqL1xuICAtLXN0ZXAtNDogY2xhbXAoMi4zM3JlbSwgY2FsYygyLjA4cmVtICsgMS4yNXZ3KSwgMy4wNXJlbSk7XG5cbiAgLyogU3RlcCA1OiA0NC43OXB4IOKGkiA2MS4wNHB4ICovXG4gIC0tc3RlcC01OiBjbGFtcCgyLjhyZW0sIGNhbGMoMi40NXJlbSArIDEuNzd2dyksIDMuODJyZW0pO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jY29udGVudCB7XG4gIC8qIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7ICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNoZWFkZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIE5hdmlnYXRpb24gc3R5bGluZyAqL1xuXG4jbmF2LWNvbnRhaW5lci1tYWluIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgcGFkZGluZzogMXJlbSBtYXgoNnZ3LCAycmVtKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBnYXA6IG1heCg0dncsIDJyZW0pO1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IG1heCg0dncsIDJyZW0pO1xufVxuXG4jbmF2LWxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5uYXYtaXRlbSxcbi5kcm9wLWRvd24taXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctbGVmdCAxcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLXRvcCAxcyBlYXNlLWluLW91dCwgcGFkZGluZy1yaWdodCAxcyBlYXNlLWluLW91dDtcbn1cblxuLm5hdi1pdGVtOmhvdmVyLFxuLm5hdi1pdGVtOmZvY3VzLFxuLmRyb3AtZG93bi1pdGVtOmhvdmVyLFxuLmRyb3AtZG93bi1pdGVtOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi8qIFN3aXRjaCBkYXJrIG1vZGUgYnRuIHN0eWxpbmcgKi9cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYigwIDAgMCAvIDUwJSk7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcXFxmMTg1XCI7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcbiAgY29udGVudDogXCJcXFxcZjE4NlwiO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4vKiBEcm9wIGRvd24gbWVudSBzdHlsaW5nICovXG5cbiNkcm9wLWRvd24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcC1kb3duLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZHJvcC1kb3duLWJ0bjo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcXFxmMGM5XCI7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMSk7XG59XG4uZHJvcC1kb3duLWJ0bjpob3Zlcixcbi5kcm9wLWRvd24tY29udGFpbmVyLmFjdGl2ZSA+IC5kcm9wLWRvd24tYnRuLFxuLm5hdi1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4jZHJvcC1kb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IGNhbGMoMTAwJSArIDAuMjVyZW0pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZWFjaCk7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjM4KTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4jZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0biArICNkcm9wLWRvd24tbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5kcm9wLWRvd24taXRlbSB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4vKiBIZXJvIHN0eWxpbmcgKi9cblxuI2hlcm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xuICBwYWRkaW5nOiAycmVtIG1heCg1dncsIDJyZW0pO1xuICAvKiBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyOyAqL1xufVxuXG4jYmlnLWxvZ28ge1xuICB3aWR0aDogbWF4KDMwdncsIDMwMHB4KTtcbiAgcGFkZGluZzogMCAycmVtO1xuICAvKiBtaW4td2lkdGg6IDMwMHB4OyAqL1xufVxuXG4jaGVyby10ZXh0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTQpO1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgd2lkdGg6IG1heCg0NXZ3LCAyODBweCk7XG4gIC8qIGxpbmUtaGVpZ2h0OiA0cmVtOyAqL1xufVxuXG4vKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cblxuI2Fib3V0LW1lIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBnYXA6IDYwcHg7XG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4jYWJvdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyMHB4O1xuICB3aWR0aDogbWF4KDQ1dncsIDM1MHB4KTtcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XG59XG5cbiNhYm91dC1tZS1uYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWJvdXQtbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy10b3AgMXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctcmlnaHQgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hYm91dC1uYXYtaXRlbTpob3Zlcixcbi5hYm91dC1uYXYtaXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4jYWJvdXQtbWUtdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuXG4uYWJvdXQtbWUtaGVhZGVyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogLmFib3V0LW1lLWhlYWRlciA+IGxpIHtcbiAgbGlzdC1zdHlsZTogO1xufSAqL1xuXG4jcG9ydHJpYXQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IC04cHggdmFyKC0tcHVycGxlKTtcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XG59XG5cbi8qIFNraWxscyBzdHlsaW5nICovXG5cbi5za2lsbHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTVweDtcbiAgcm93LWdhcDogNTBweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDgwcHgsIDFmcikpO1xuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDYwcHgsIDFmcikpOyAqL1xufVxuXG4uc2tpbGxzLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuXG4uc2tpbGwtcGljIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDU4JSkgc2VwaWEoODklKSBzYXR1cmF0ZSg0MDMlKSBodWUtcm90YXRlKDMwOWRlZylcbiAgICBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODQlKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5za2lsbC1waWM6aG92ZXIge1xuICBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDE4JSkgc2F0dXJhdGUoMTA4MSUpIGh1ZS1yb3RhdGUoMjI4ZGVnKVxuICAgIGJyaWdodG5lc3MoODclKSBjb250cmFzdCg5MCUpO1xufVxuXG4uc2tpbGwtbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogUHJvamVjdHMgc2VjdGlvbiAqL1xuXG4jcHJvamVjdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4ucHJvamVjdHMtaGVhZGVyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsYXNzLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9qZWN0cy1jYXJvdXNlbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG59XG5cbi5jYXJvdXNlbC11bCB7XG4gIC0tc2xpZGVyLWluZGV4OiAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiBtYXgoNjB2dywgNDAwcHgpO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWF1dG8tY29sdW1uczogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci1pbmxpbmU6IGNvbnRhaW47XG59XG5cbi5jYXJvdXNlbC11bDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvamVjdC1pdGVtID4gaW1nIHtcbiAgaW5saW5lLXNpemU6IDkwJTtcbiAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9qZWN0LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtdGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcblxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG59XG5cbi5wcm9qLWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBnYXA6IDMwcHg7XG59XG5cbi5wcm9qLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XG4gIHRleHQtYWxpZ246IGVuZDtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctbGVmdCAxcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLXRvcCAxcyBlYXNlLWluLW91dCwgcGFkZGluZy1yaWdodCAxcyBlYXNlLWluLW91dDtcbn1cblxuLnByb2otYnRuOmhvdmVyLFxuLnByb2otYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbiNidG4tbGVmdDo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LWZhbWlseTogXCJmb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIlxcXFxmMDUzXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuI2J0bi1yaWdodDo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LWZhbWlseTogXCJmb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIlxcXFxmMDU0XCI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4vKiBNb2JpbGUgdmVyc2lvbiBzdHlsaW5nICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAvKiBOYXYgdG8gZHJvcC1kb3duICovXG4gIC5uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjZHJvcC1kb3duLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvKiBIZXJvIGF0eWxpbmcgKi9cbiAgI2hlYWRlciB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG4gICNoZXJvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2hlcm8tdGV4dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuXG4gIC8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xuICAjYWJvdXQtbWUge1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG4gICNhYm91dC1jb250YWluZXIge1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG59XG5cbi8qIFRhYmxldCBzdHlsaW5nICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAvKiBOYXYgdG8gZHJvcC1kb3duICovXG4gIC5uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjZHJvcC1kb3duLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvKiBIZXJvIHN0eWxpbmcgKi9cbiAgI2hlYWRlciB7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB9XG5cbiAgI2JpZy1sb2dvIHtcbiAgICB3aWR0aDogbWF4KDQwdncsIDQwMHB4KTtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgfVxuXG4gICNoZXJvLXRleHQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIH1cblxuICAjaGVybyB7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAvKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cbiAgI2Fib3V0LW1lIHtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICB9XG5cbiAgI2Fib3V0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1heCg4MHZ3LCA1MDBweCk7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xuICB9XG5cbiAgLnNraWxscy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICB9XG5cbiAgLyogI3BvcnRyaWF0IHtcbiAgICB3aWR0aDogbWF4KDUwdncsIDUwMHB4KTtcbiAgfSAqL1xufVxuXG4vKiBUYWJsZXQgc21hbGwgaGVpZ2h0ICovXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc1MHB4KSBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgI2hlYWRlcixcbiAgI2Fib3V0LW1lIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFFVjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztF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QTJCOztBQUUzQjtFQUNFLHFCQUFxQjtFQUNyQjtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBLDZCQUE2QjtFQUM3QjtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLHFCQUFxQjtFQUNyQjtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIscUJBQXFCO0VBQ3ZCOztFQUVBLDZCQUE2QjtFQUM3QjtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDJEQUEyRDtFQUM3RDs7RUFFQTs7S0FFRztBQUNMOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFOztJQUVFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJlc2V0ICovXFxuXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5hIHtcXG4gIGFsbDogdW5zZXQ7XFxufVxcblxcbi8qIEdlbmVyYWwgc3BhY2Ugc3R5bGluZyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpckRpc3BsYXlcXFwiO1xcbiAgc3JjOiB1cmwoL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbiAgc3JjOiB1cmwoL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LUJvbGQudHRmKTtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LUJvbGRJdGFsaWMudHRmKTtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1waW5rOiAjZmRlNWVjO1xcbiAgLS1wZWFjaDogI2ZjYmFhZDtcXG4gIC0tZGFya1BlYWNoOiAjZTQ4NTg2O1xcbiAgLS1wdXJwbGU6ICM5MTZkYjM7XFxuICAtLXRyYXNwYXJlbnRQaW5rOiAjZmRlNWVjO1xcbiAgLS10cmFuc3BhcmVudFBlYWNoOiAjZmNiYWFkO1xcbiAgLS10cmFuc3BhcmVudERhcmtQZWFjaDogI2U0ODU4NjtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXJEaXNwbGF5XFxcIjtcXG5cXG4gIC8qIFN0ZXAgLTI6IDEyLjUwcHgg4oaSIDEyLjgwcHggKi9cXG4gIC0tc3RlcC0tMjogY2xhbXAoMC43OHJlbSwgY2FsYygwLjc3cmVtICsgMC4wM3Z3KSwgMC44cmVtKTtcXG5cXG4gIC8qIFN0ZXAgLTE6IDE1LjAwcHgg4oaSIDE2LjAwcHggKi9cXG4gIC0tc3RlcC0tMTogY2xhbXAoMC45NHJlbSwgY2FsYygwLjkycmVtICsgMC4xMXZ3KSwgMXJlbSk7XFxuXFxuICAvKiBTdGVwIDA6IDE4LjAwcHgg4oaSIDIwLjAwcHggKi9cXG4gIC0tc3RlcC0wOiBjbGFtcCgxLjEzcmVtLCBjYWxjKDEuMDhyZW0gKyAwLjIydncpLCAxLjI1cmVtKTtcXG5cXG4gIC8qIFN0ZXAgMTogMjEuNjBweCDihpIgMjUuMDBweCAqL1xcbiAgLS1zdGVwLTE6IGNsYW1wKDEuMzVyZW0sIGNhbGMoMS4yOHJlbSArIDAuMzd2dyksIDEuNTZyZW0pO1xcblxcbiAgLyogU3RlcCAyOiAyNS45MnB4IOKGkiAzMS4yNXB4ICovXFxuICAtLXN0ZXAtMjogY2xhbXAoMS42MnJlbSwgY2FsYygxLjVyZW0gKyAwLjU4dncpLCAxLjk1cmVtKTtcXG5cXG4gIC8qIFN0ZXAgMzogMzEuMTBweCDihpIgMzkuMDZweCAqL1xcbiAgLS1zdGVwLTM6IGNsYW1wKDEuOTRyZW0sIGNhbGMoMS43N3JlbSArIDAuODd2dyksIDIuNDRyZW0pO1xcblxcbiAgLyogU3RlcCA0OiAzNy4zMnB4IOKGkiA0OC44M3B4ICovXFxuICAtLXN0ZXAtNDogY2xhbXAoMi4zM3JlbSwgY2FsYygyLjA4cmVtICsgMS4yNXZ3KSwgMy4wNXJlbSk7XFxuXFxuICAvKiBTdGVwIDU6IDQ0Ljc5cHgg4oaSIDYxLjA0cHggKi9cXG4gIC0tc3RlcC01OiBjbGFtcCgyLjhyZW0sIGNhbGMoMi40NXJlbSArIDEuNzd2dyksIDMuODJyZW0pO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAvKiBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogTmF2aWdhdGlvbiBzdHlsaW5nICovXFxuXFxuI25hdi1jb250YWluZXItbWFpbiB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBwYWRkaW5nOiAxcmVtIG1heCg2dncsIDJyZW0pO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogbWF4KDR2dywgMnJlbSk7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IG1heCg0dncsIDJyZW0pO1xcbn1cXG5cXG4jbmF2LWxvZ28ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4ubmF2LWl0ZW0sXFxuLmRyb3AtZG93bi1pdGVtIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctdG9wIDFzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXJpZ2h0IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2LWl0ZW06aG92ZXIsXFxuLm5hdi1pdGVtOmZvY3VzLFxcbi5kcm9wLWRvd24taXRlbTpob3ZlcixcXG4uZHJvcC1kb3duLWl0ZW06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4vKiBTd2l0Y2ggZGFyayBtb2RlIGJ0biBzdHlsaW5nICovXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoMCAwIDAgLyA1MCUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4NVxcXCI7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XFxuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODZcXFwiO1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4vKiBEcm9wIGRvd24gbWVudSBzdHlsaW5nICovXFxuXFxuI2Ryb3AtZG93bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyb3AtZG93bi1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5kcm9wLWRvd24tYnRuOjpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xcbn1cXG4uZHJvcC1kb3duLWJ0bjpob3ZlcixcXG4uZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0bixcXG4ubmF2LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4jZHJvcC1kb3duLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGNhbGMoMTAwJSArIDAuMjVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVhY2gpO1xcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yMzgpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE1cHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4jZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0biArICNkcm9wLWRvd24tbWVudSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4uZHJvcC1kb3duLWl0ZW0ge1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi8qIEhlcm8gc3R5bGluZyAqL1xcblxcbiNoZXJvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbiAgcGFkZGluZzogMnJlbSBtYXgoNXZ3LCAycmVtKTtcXG4gIC8qIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyOyAqL1xcbn1cXG5cXG4jYmlnLWxvZ28ge1xcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICAvKiBtaW4td2lkdGg6IDMwMHB4OyAqL1xcbn1cXG5cXG4jaGVyby10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC00KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICB3aWR0aDogbWF4KDQ1dncsIDI4MHB4KTtcXG4gIC8qIGxpbmUtaGVpZ2h0OiA0cmVtOyAqL1xcbn1cXG5cXG4vKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cXG5cXG4jYWJvdXQtbWUge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNjBweDtcXG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XFxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuI2Fib3V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IG1heCg0NXZ3LCAzNTBweCk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuI2Fib3V0LW1lLW5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFib3V0LW5hdi1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctdG9wIDFzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXJpZ2h0IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWJvdXQtbmF2LWl0ZW06aG92ZXIsXFxuLmFib3V0LW5hdi1pdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuI2Fib3V0LW1lLXRleHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuXFxuLmFib3V0LW1lLWhlYWRlciB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogLmFib3V0LW1lLWhlYWRlciA+IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IDtcXG59ICovXFxuXFxuI3BvcnRyaWF0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IC04cHggdmFyKC0tcHVycGxlKTtcXG4gIHdpZHRoOiBtYXgoMzB2dywgMzAwcHgpO1xcbn1cXG5cXG4vKiBTa2lsbHMgc3R5bGluZyAqL1xcblxcbi5za2lsbHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTVweDtcXG4gIHJvdy1nYXA6IDUwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg4MHB4LCAxZnIpKTtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNjBweCwgMWZyKSk7ICovXFxufVxcblxcbi5za2lsbHMtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uc2tpbGwtcGljIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoNTglKSBzZXBpYSg4OSUpIHNhdHVyYXRlKDQwMyUpIGh1ZS1yb3RhdGUoMzA5ZGVnKVxcbiAgICBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODQlKTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2tpbGwtcGljOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoMTglKSBzYXR1cmF0ZSgxMDgxJSkgaHVlLXJvdGF0ZSgyMjhkZWcpXFxuICAgIGJyaWdodG5lc3MoODclKSBjb250cmFzdCg5MCUpO1xcbn1cXG5cXG4uc2tpbGwtbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFByb2plY3RzIHNlY3Rpb24gKi9cXG5cXG4jcHJvamVjdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbGFzcy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0cy1jYXJvdXNlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLmNhcm91c2VsLXVsIHtcXG4gIC0tc2xpZGVyLWluZGV4OiAwO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgd2lkdGg6IG1heCg2MHZ3LCA0MDBweCk7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWF1dG8tY29sdW1uczogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZTogY29udGFpbjtcXG59XFxuXFxuLmNhcm91c2VsLXVsOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtID4gaW1nIHtcXG4gIGlubGluZS1zaXplOiA5MCU7XFxuICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRleHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbn1cXG5cXG4ucHJvai1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucHJvai1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dCwgcGFkZGluZy1ib3R0b20gMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctbGVmdCAxcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAxcyBlYXNlLWluLW91dCxcXG4gICAgcGFkZGluZy10b3AgMXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctcmlnaHQgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qLWJ0bjpob3ZlcixcXG4ucHJvai1idG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4jYnRuLWxlZnQ6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LWZhbWlseTogXFxcImZvbnRBd2Vzb21lXFxcIjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1M1xcXCI7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNidG4tcmlnaHQ6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LWZhbWlseTogXFxcImZvbnRBd2Vzb21lXFxcIjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NFxcXCI7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLyogTW9iaWxlIHZlcnNpb24gc3R5bGluZyAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLyogTmF2IHRvIGRyb3AtZG93biAqL1xcbiAgLm5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjZHJvcC1kb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLyogSGVybyBhdHlsaW5nICovXFxuICAjaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gICNoZXJvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI2hlcm8tdGV4dCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgfVxcblxcbiAgLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXFxuICAjYWJvdXQtbWUge1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgI2Fib3V0LWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIH1cXG59XFxuXFxuLyogVGFibGV0IHN0eWxpbmcgKi9cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC8qIE5hdiB0byBkcm9wLWRvd24gKi9cXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI2Ryb3AtZG93bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC8qIEhlcm8gc3R5bGluZyAqL1xcbiAgI2hlYWRlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIH1cXG5cXG4gICNiaWctbG9nbyB7XFxuICAgIHdpZHRoOiBtYXgoNDB2dywgNDAwcHgpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIH1cXG5cXG4gICNoZXJvLXRleHQge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcXG4gIH1cXG5cXG4gICNoZXJvIHtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXFxuICAjYWJvdXQtbWUge1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgfVxcblxcbiAgI2Fib3V0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBtYXgoODB2dywgNTAwcHgpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG4gIH1cXG5cXG4gIC5za2lsbHMtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxuICB9XFxuXFxuICAvKiAjcG9ydHJpYXQge1xcbiAgICB3aWR0aDogbWF4KDUwdncsIDUwMHB4KTtcXG4gIH0gKi9cXG59XFxuXFxuLyogVGFibGV0IHNtYWxsIGhlaWdodCAqL1xcbkBtZWRpYSAobWF4LWhlaWdodDogNzUwcHgpIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgI2hlYWRlcixcXG4gICNhYm91dC1tZSB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbInNtYWxsTG9nbyIsImJpZ0xvZ28iLCJwb3J0cmlhdCIsImpzSWNvbiIsImNzc0ljb24iLCJodG1sSWNvbiIsImdpdEljb24iLCJnaXRIdWJJY29uIiwibnBtSWNvbiIsImJhYmVsSWNvbiIsIkNMSWNvbiIsImVzbGludEljb24iLCJwcmV0dGllckljb24iLCJ2c2NvZGVJY29uIiwid2VicGFja0ljb24iLCJ3ZWF0aGVyTEljb24iLCJ3ZWF0aGVyREljb24iLCJ0b2RvTEljb24iLCJ0b2RvREljb24iLCJyZXN0YXJhdW50TEljb24iLCJyZXN0YXJhdW50REljb24iLCJ0aWN0YWN0b2VMSWNvbiIsInRpY3RhY3RvZURJY29uIiwibGlicmFyeUxJY29uIiwibGlicmFyeURJY29uIiwiVUkiLCJzaG93UGljdHVyZXMiLCJzbWFsbExvZ29JbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwiYmlnTG9nb0ltZyIsInBvcnRyaWF0SW1nIiwiZHJvcERvd25VSSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaXNEcm9wZG93bkJ0biIsInRhcmdldCIsIm1hdGNoZXMiLCJjbG9zZXN0IiwiY3VycmVudERyb3Bkb3duIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkcm9wZG93biIsInJlbW92ZSIsImNoYW5nZUFib3V0TWVDb250ZW50IiwiYWJvdXRNZUNvbnRhaW5lciIsIm15U3RvcnlCdG4iLCJlZHVjYXRpb25CdG4iLCJza2lsbHNCdG4iLCJpbm5lckhUTUwiLCJjcmVhdGVQcm9qZWN0cyIsInByb2plY3RzU2VjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxQcm9qIiwic2Nyb2xsQ29udGFpbmVyIiwiYmFja0J0biIsIm5leHRCdG4iLCJwcm9qZWN0SXRlbSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJzY3JvbGxCZWhhdmlvciIsInNjcm9sbExlZnQiLCJkZWx0YVkiLCJpdGVtU2l6ZSIsIm9mZnNldFdpZHRoIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZVJvb3QiOiIifQ==