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
  function createProjects(weatherPic, todoPic, restarauntPic, tictactoePic, libraryPic) {
    const projectsSection = document.querySelector(".carousel-track");
    projectsSection.innerHTML = "";
    projectsSection.innerHTML += `
    <ul class='carousel-ul'>
          <li class="project-item" id='1'>
            <img src="${weatherPic}" alt="project mockup" />
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
            <img src="${todoPic}" alt="project mockup" />
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
            <img src="${restarauntPic}" alt="project mockup" />
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
            <img src="${tictactoePic}" alt="project mockup" />
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
            <img src="${libraryPic}" alt="project mockup" />
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
  function toggleMode() {
    const toggleBtn = document.getElementById("toggle-btn");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        createProjects(_images_projects_weather_dark_png__WEBPACK_IMPORTED_MODULE_16__, _images_projects_todo_dark_png__WEBPACK_IMPORTED_MODULE_18__, _images_projects_restraunt_dark_png__WEBPACK_IMPORTED_MODULE_20__, _images_projects_tictactoe_dark_png__WEBPACK_IMPORTED_MODULE_22__, _images_projects_library_dark_png__WEBPACK_IMPORTED_MODULE_24__);
        scrollProj();
      } else {
        createProjects(_images_projects_weather_light_png__WEBPACK_IMPORTED_MODULE_15__, _images_projects_todo_light_png__WEBPACK_IMPORTED_MODULE_17__, _images_projects_restaraunt_light_png__WEBPACK_IMPORTED_MODULE_19__, _images_projects_tictactoe_light_png__WEBPACK_IMPORTED_MODULE_21__, _images_projects_library_light_png__WEBPACK_IMPORTED_MODULE_23__);
        scrollProj();
      }
    });
  }
  function scrollAnimation() {
    const observerLeft = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-left");
        } else {
          entry.target.classList.remove("show-left");
        }
      });
    });
    const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
    hiddenElementsLeft.forEach(el => observerLeft.observe(el));
    const observerRight = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-right");
        } else {
          entry.target.classList.remove("show-right");
        }
      });
    });
    const hiddenElementsRight = document.querySelectorAll(".hidden-right");
    hiddenElementsRight.forEach(el => observerRight.observe(el));
  }
  showPictures();
  dropDownUI();
  changeAboutMeContent();
  createProjects(_images_projects_weather_light_png__WEBPACK_IMPORTED_MODULE_15__, _images_projects_todo_light_png__WEBPACK_IMPORTED_MODULE_17__, _images_projects_restaraunt_light_png__WEBPACK_IMPORTED_MODULE_19__, _images_projects_tictactoe_light_png__WEBPACK_IMPORTED_MODULE_21__, _images_projects_library_light_png__WEBPACK_IMPORTED_MODULE_23__);
  scrollProj();
  createFooter();
  toggleMode();
  scrollAnimation();
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

  --purpleFilter: invert(53%) sepia(18%) saturate(1081%) hue-rotate(228deg)
    brightness(87%) contrast(90%);
  --darkPeachFilter: invert(58%) sepia(89%) saturate(403%) hue-rotate(309deg)
    brightness(97%) contrast(84%);

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

.dark-theme {
  --pink: #916db3;
  --peach: #e48586;
  --darkPeach: #fcbaad;
  --purple: #fde5ec;
  --trasparentPink: #fde5ec;
  --transparentPeach: #fcbaad;
  --transparentDarkPeach: #e48586;

  --purpleFilter: invert(58%) sepia(89%) saturate(403%) hue-rotate(309deg)
    brightness(97%) contrast(84%);
  --darkPeachFilter: invert(86%) sepia(12%) saturate(306%) hue-rotate(297deg)
    brightness(106%) contrast(98%);
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

.section-header {
  font-size: var(--step-3);
  font-weight: bold;
}

/* Navigation styling */

#nav-container-main {
  z-index: 99999;
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
  /* background: var(--pink); */
  font-family: fontAwesome;
  content: "\\f186";
  /* color: var(--purple); */
}

input[type="checkbox"]:checked {
  /* background: var(--purple); */
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
  scroll-margin-top: 96px;
  height: 80vh;
  margin-bottom: 50px;
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

/* Animations */

.hidden-left {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: 3s;
  transition-property: transform, filter;
}

.show-left {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

/* .hidden-right {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(100%);
  transition: 3s;
  transition-property: transform, filter;
}

.show-right {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
} */

/* About me section styling */

#about-me {
  scroll-margin-top: 96px;
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
  box-shadow: 20px -8px var(--purple);
  width: max(30vw, 300px);
  transition: box-shadow 0.5s ease-in-out;
}

#portriat:hover {
  box-shadow: 20px 8px var(--darkPeach);
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
  /* filter: invert(58%) sepia(89%) saturate(403%) hue-rotate(309deg)
    brightness(97%) contrast(84%); */
  filter: var(--darkPeachFilter);
  transition: filter 0.5s ease-in-out;
}

.skill-pic:hover {
  /* filter: invert(53%) sepia(18%) saturate(1081%) hue-rotate(228deg)
    brightness(87%) contrast(90%); */
  filter: var(--purpleFilter);
}

.skill-name {
  text-align: center;
}

/* Projects section */

#projects {
  scroll-margin-top: 96px;
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
  scroll-margin-top: 96px;
  height: 70vh;
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
  color: var(--darkPeach);
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
  height: 80px;
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
    height: 100vh;
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

  /* Projects section */
  #projects {
    height: 100vh;
  }

  /* Contacts section */
  #contacts {
    height: 100vh;
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
    height: 80vh;
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

  /* Projects section */
  #projects {
    height: 80vh;
  }

  .carousel-ul {
    width: 80vw;
  }

  .project-item,
  .project-text-container {
    gap: 40px;
    font-size: var(--step-2);
  }

  .project-title,
  .proj-btn-container {
    font-size: var(--step-3);
  }

  /* Contacts section */
  #contacts {
    height: 80vh;
    font-size: var(--step-3);
  }

  .contacts-container {
    width: 70vw;
    gap: 100px;
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

@media (max-height: 1000px) and (min-width: 600px) and (max-width: 1000px) {
  #hero {
    height: 100vh;
  }

  /* #projects {
    height: 80vh;
  } */

  .carousel-ul {
    width: 60vw;
  }

  .project-item,
  .project-text-container {
    gap: 10px;
    font-size: var(--step-1);
  }

  .project-title,
  .proj-btn-container {
    font-size: var(--step-2);
  }

  /* Contacts section */
  #contacts {
    height: 70vh;
    font-size: var(--step-2);
  }

  .contacts-container {
    width: 70vw;
    gap: 50px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\na {\n  all: unset;\n}\n\n/* General space styling */\n@font-face {\n  font-family: \"PlayfairDisplay\";\n  src: url(/src/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Bold.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Regular.ttf);\n}\n\n:root {\n  --pink: #fde5ec;\n  --peach: #fcbaad;\n  --darkPeach: #e48586;\n  --purple: #916db3;\n  --trasparentPink: #fde5ec;\n  --transparentPeach: #fcbaad;\n  --transparentDarkPeach: #e48586;\n\n  --purpleFilter: invert(53%) sepia(18%) saturate(1081%) hue-rotate(228deg)\n    brightness(87%) contrast(90%);\n  --darkPeachFilter: invert(58%) sepia(89%) saturate(403%) hue-rotate(309deg)\n    brightness(97%) contrast(84%);\n\n  font-family: \"PlayfairDisplay\";\n\n  /* Step -2: 12.50px → 12.80px */\n  --step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem);\n\n  /* Step -1: 15.00px → 16.00px */\n  --step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem);\n\n  /* Step 0: 18.00px → 20.00px */\n  --step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);\n\n  /* Step 1: 21.60px → 25.00px */\n  --step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);\n\n  /* Step 2: 25.92px → 31.25px */\n  --step-2: clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);\n\n  /* Step 3: 31.10px → 39.06px */\n  --step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);\n\n  /* Step 4: 37.32px → 48.83px */\n  --step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);\n\n  /* Step 5: 44.79px → 61.04px */\n  --step-5: clamp(2.8rem, calc(2.45rem + 1.77vw), 3.82rem);\n}\n\n.dark-theme {\n  --pink: #916db3;\n  --peach: #e48586;\n  --darkPeach: #fcbaad;\n  --purple: #fde5ec;\n  --trasparentPink: #fde5ec;\n  --transparentPeach: #fcbaad;\n  --transparentDarkPeach: #e48586;\n\n  --purpleFilter: invert(58%) sepia(89%) saturate(403%) hue-rotate(309deg)\n    brightness(97%) contrast(84%);\n  --darkPeachFilter: invert(86%) sepia(12%) saturate(306%) hue-rotate(297deg)\n    brightness(106%) contrast(98%);\n}\n\nbody {\n  background-color: var(--pink);\n  font-size: var(--step-0);\n  overflow-x: hidden;\n}\n\n#content {\n  /* height: 100%;\n  width: 100%; */\n  display: grid;\n  align-content: space-between;\n}\n\n/* #header {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 6fr;\n  align-items: center;\n} */\n\n.section-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n\n/* Navigation styling */\n\n#nav-container-main {\n  z-index: 99999;\n  font-size: var(--step-1);\n  color: var(--pink);\n  font-weight: bold;\n  background-color: var(--darkPeach);\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n  padding: 1rem max(6vw, 2rem);\n  position: sticky;\n  top: 0;\n  align-self: start;\n}\n\n.nav-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: max(4vw, 2rem);\n}\n\n.nav {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  gap: max(4vw, 2rem);\n}\n\n#nav-logo {\n  width: 100px;\n}\n\n.nav-item,\n.drop-down-item {\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.nav-item:hover,\n.nav-item:focus,\n.drop-down-item:hover,\n.drop-down-item:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n/* Switch dark mode btn styling */\ninput[type=\"checkbox\"] {\n  position: relative;\n  width: 60px;\n  height: 30px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: var(--pink);\n  outline: none;\n  border-radius: 2rem;\n  cursor: pointer;\n  box-shadow: inset 0 0 5px rgb(0 0 0 / 50%);\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--purple);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.5s;\n  font-family: fontAwesome;\n  content: \"\\f185\";\n  color: var(--pink);\n  display: grid;\n  place-items: center;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: translateX(100%);\n  /* background: var(--pink); */\n  font-family: fontAwesome;\n  content: \"\\f186\";\n  /* color: var(--purple); */\n}\n\ninput[type=\"checkbox\"]:checked {\n  /* background: var(--purple); */\n}\n\n/* Drop down menu styling */\n\n#drop-down-container {\n  display: none;\n  position: relative;\n}\n\n.drop-down-btn {\n  background-color: var(--pink);\n  width: 35px;\n  height: 35px;\n  border-radius: 10px;\n}\n\n.drop-down-btn::before {\n  font-family: fontAwesome;\n  content: \"\\f0c9\";\n  color: var(--darkPeach);\n  font-size: var(--step-1);\n}\n.drop-down-btn:hover,\n.drop-down-container.active > .drop-down-btn,\n.nav-btn:hover {\n  background-color: var(--purple);\n}\n\n#drop-down-menu {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 0.25rem);\n  background-color: var(--peach);\n  color: var(--darkPeach);\n  padding: 20px;\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.238);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-10px);\n  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n  display: grid;\n  gap: 15px;\n  z-index: 9999;\n}\n\n#drop-down-container.active > .drop-down-btn + #drop-down-menu {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n  z-index: 9999;\n}\n\n.drop-down-item {\n  color: var(--purple);\n}\n\n/* Hero styling */\n\n#hero {\n  scroll-margin-top: 96px;\n  height: 80vh;\n  margin-bottom: 50px;\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  padding: 2rem max(5vw, 2rem);\n  /* justify-self: center;\n  grid-template-columns: 1fr 2fr; */\n}\n\n#big-logo {\n  width: max(30vw, 300px);\n  padding: 0 2rem;\n  /* min-width: 300px; */\n}\n\n#hero-text {\n  font-size: var(--step-4);\n  color: var(--darkPeach);\n  font-weight: bold;\n  padding: 0 2rem;\n  width: max(45vw, 280px);\n  /* line-height: 4rem; */\n}\n\n/* Animations */\n\n.hidden-left {\n  opacity: 0;\n  filter: blur(5px);\n  transform: translateX(-100%);\n  transition: 3s;\n  transition-property: transform, filter;\n}\n\n.show-left {\n  opacity: 1;\n  filter: blur(0);\n  transform: translateX(0);\n}\n\n/* .hidden-right {\n  opacity: 0;\n  filter: blur(5px);\n  transform: translateX(100%);\n  transition: 3s;\n  transition-property: transform, filter;\n}\n\n.show-right {\n  opacity: 1;\n  filter: blur(0);\n  transform: translateX(0);\n} */\n\n/* About me section styling */\n\n#about-me {\n  scroll-margin-top: 96px;\n  height: 100vh;\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  place-content: center;\n  gap: 60px;\n  padding: 2rem max(2vw, 2rem);\n  color: var(--purple);\n}\n\n#about-container {\n  display: grid;\n  gap: 20px;\n  width: max(45vw, 350px);\n  justify-items: start;\n}\n\n#about-me-nav {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 20px;\n  list-style: none;\n  font-weight: bold;\n}\n\n.about-nav-item {\n  background-color: inherit;\n  color: var(--darkPeach);\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.about-nav-item:hover,\n.about-nav-item:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n#about-me-text {\n  width: 100%;\n  line-height: 2rem;\n  padding: 2rem 0;\n}\n\n#portriat {\n  border-radius: 20px;\n  box-shadow: 20px -8px var(--purple);\n  width: max(30vw, 300px);\n  transition: box-shadow 0.5s ease-in-out;\n}\n\n#portriat:hover {\n  box-shadow: 20px 8px var(--darkPeach);\n}\n\n/* Skills styling */\n\n.skills-container {\n  width: 100%;\n  display: grid;\n  gap: 15px;\n  row-gap: 50px;\n  place-content: center;\n  place-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));\n  /* grid-template-rows: repeat(auto-fit, minmax(60px, 1fr)); */\n}\n\n.skills-item {\n  display: grid;\n  place-content: center;\n  place-items: center;\n  gap: 5px;\n}\n\n.skill-pic {\n  width: 50px;\n  /* filter: invert(58%) sepia(89%) saturate(403%) hue-rotate(309deg)\n    brightness(97%) contrast(84%); */\n  filter: var(--darkPeachFilter);\n  transition: filter 0.5s ease-in-out;\n}\n\n.skill-pic:hover {\n  /* filter: invert(53%) sepia(18%) saturate(1081%) hue-rotate(228deg)\n    brightness(87%) contrast(90%); */\n  filter: var(--purpleFilter);\n}\n\n.skill-name {\n  text-align: center;\n}\n\n/* Projects section */\n\n#projects {\n  scroll-margin-top: 96px;\n  display: grid;\n  place-content: center;\n  place-items: center;\n  padding: 2rem max(2vw, 2rem);\n  color: var(--purple);\n}\n\n.projects-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n\n.class-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n\n.projects-carousel {\n  display: grid;\n  grid-auto-flow: column;\n}\n\n.carousel-ul {\n  --slider-index: 0;\n  padding: 10px 0;\n  width: max(60vw, 400px);\n  height: fit-content;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 100%;\n  overflow-x: auto;\n  overscroll-behavior-inline: contain;\n}\n\n.carousel-ul::-webkit-scrollbar {\n  display: none;\n}\n\n.project-item > img {\n  inline-size: 70%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  padding: 5px;\n}\n\n.project-item {\n  width: 100%;\n  display: grid;\n  grid-template-rows: min-content;\n  gap: 10px;\n  padding: 15px 0;\n  justify-items: center;\n}\n\n.project-text-container {\n  display: grid;\n  grid-template-rows: min-content;\n  gap: 20px;\n  padding: 15px;\n  width: 90%;\n  justify-items: center;\n}\n\n.project-title {\n  color: var(--darkPeach);\n\n  font-size: var(--step-2);\n}\n\n.proj-btn-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 30px;\n}\n\n.proj-btn {\n  background-color: inherit;\n  color: var(--darkPeach);\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.proj-btn:hover,\n.proj-btn:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n#btn-left::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f053\";\n  padding-right: 5px;\n}\n\n#btn-right::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f054\";\n  padding-left: 5px;\n}\n\n/* Contacts section styling */\n\n#contacts {\n  scroll-margin-top: 96px;\n  height: 70vh;\n  display: grid;\n  place-items: center;\n  place-content: center;\n  gap: 60px;\n  padding: 2rem max(2vw, 2rem);\n  color: var(--purple);\n  font-size: var(--step-2);\n}\n\n.contacts-container {\n  display: grid;\n  gap: 50px;\n  width: max(40vw, 350px);\n}\n\n.contacts-hero {\n  color: var(--darkPeach);\n  font-weight: bold;\n  text-align: center;\n}\n\n.btn-lin {\n  justify-self: start;\n}\n\n.btn-email,\n.btn-github {\n  justify-self: end;\n}\n\n.cont-btn {\n  background-color: inherit;\n  color: var(--darkPeach);\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-right: 0;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n\n  transition: background-color 0.5s ease-in-out, padding-bottom 1s ease-in-out,\n    padding-left 1s ease-in-out, border-radius 1s ease-in-out,\n    padding-top 1s ease-in-out, padding-right 1s ease-in-out;\n}\n\n.cont-btn:hover,\n.cont-btn:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n.btn-email::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f0e0\";\n  padding-right: 5px;\n}\n\n.btn-lin::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f08c\";\n  padding-right: 5px;\n}\n\n.btn-github::before {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f09b\";\n  padding-right: 5px;\n}\n\n/* Footer styling */\n\n#footer {\n  height: 80px;\n  background-color: var(--purple);\n  color: var(--pink);\n  display: grid;\n  place-content: center;\n  place-items: center;\n}\n\n#github-link::after {\n  font-size: var(--step-3);\n  font-family: \"fontAwesome\";\n  content: \"\\f09b\";\n  padding-left: 10px;\n}\n\n/* Mobile version styling */\n\n@media (max-width: 600px) {\n  /* Nav to drop-down */\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n  }\n\n  /* Hero atyling */\n  #header {\n    height: fit-content;\n  }\n\n  #hero {\n    height: 100vh;\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n  }\n\n  #hero-text {\n    width: 80%;\n    line-height: 3rem;\n  }\n\n  /* About me section styling */\n  #about-me {\n    grid-auto-flow: row;\n    height: fit-content;\n  }\n\n  #about-container {\n    justify-items: center;\n    text-align: justify;\n  }\n\n  /* Projects section */\n  #projects {\n    height: 100vh;\n  }\n\n  /* Contacts section */\n  #contacts {\n    height: 100vh;\n  }\n}\n\n/* Tablet styling */\n\n@media (min-width: 600px) and (max-width: 1000px) {\n  /* Nav to drop-down */\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n  }\n\n  /* Hero styling */\n  #header {\n    align-items: start;\n  }\n\n  #big-logo {\n    width: max(40vw, 400px);\n    justify-self: end;\n  }\n\n  #hero-text {\n    width: 80%;\n    line-height: 4rem;\n  }\n\n  #hero {\n    height: 80vh;\n    grid-auto-flow: row;\n    justify-items: center;\n  }\n\n  /* About me section styling */\n  #about-me {\n    grid-auto-flow: row;\n  }\n\n  #about-container {\n    width: max(80vw, 500px);\n    justify-items: center;\n    text-align: justify;\n    font-size: var(--step-2);\n  }\n\n  .skills-container {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  }\n\n  /* Projects section */\n  #projects {\n    height: 80vh;\n  }\n\n  .carousel-ul {\n    width: 80vw;\n  }\n\n  .project-item,\n  .project-text-container {\n    gap: 40px;\n    font-size: var(--step-2);\n  }\n\n  .project-title,\n  .proj-btn-container {\n    font-size: var(--step-3);\n  }\n\n  /* Contacts section */\n  #contacts {\n    height: 80vh;\n    font-size: var(--step-3);\n  }\n\n  .contacts-container {\n    width: 70vw;\n    gap: 100px;\n  }\n  /* #portriat {\n    width: max(50vw, 500px);\n  } */\n}\n\n/* Tablet small height */\n@media (max-height: 750px) and (min-width: 600px) {\n  #header,\n  #about-me {\n    height: fit-content;\n  }\n}\n\n@media (max-height: 1000px) and (min-width: 600px) and (max-width: 1000px) {\n  #hero {\n    height: 100vh;\n  }\n\n  /* #projects {\n    height: 80vh;\n  } */\n\n  .carousel-ul {\n    width: 60vw;\n  }\n\n  .project-item,\n  .project-text-container {\n    gap: 10px;\n    font-size: var(--step-1);\n  }\n\n  .project-title,\n  .proj-btn-container {\n    font-size: var(--step-2);\n  }\n\n  /* Contacts section */\n  #contacts {\n    height: 70vh;\n    font-size: var(--step-2);\n  }\n\n  .contacts-container {\n    width: 70vw;\n    gap: 50px;\n  }\n}\n"],"sourceRoot":""}]);
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

module.exports = __webpack_require__.p + "bd370a262dc783b27602.jpg";

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

module.exports = __webpack_require__.p + "93b2b2450d428119cdc4.png";

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

module.exports = __webpack_require__.p + "83d4fd0c49e6562c5137.png";

/***/ }),

/***/ "./src/images/projects/tictactoe-dark.png":
/*!************************************************!*\
  !*** ./src/images/projects/tictactoe-dark.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1161f672b345870aa169.png";

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

module.exports = __webpack_require__.p + "8ddad0e5f52e06162ae6.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsT0FBTyxNQUFNLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksZ0JBQWdCLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxRQUFRLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE1BQU0sT0FBTyxNQUFNLFFBQVEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE1BQU0sT0FBTyxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sT0FBTyxPQUFPLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLGdCQUFnQixNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxPQUFPLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLE1BQU0sT0FBTyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLE9BQU8sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLEtBQUssTUFBTSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFP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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNtYWxsTG9nbyBmcm9tIFwiLi9pbWFnZXMvc21hbGwtbG9nby5wbmdcIjtcbmltcG9ydCBiaWdMb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IHBvcnRyaWF0IGZyb20gXCIuL2ltYWdlcy9wb3J0cmlhdC5qcGdcIjtcbmltcG9ydCBqc0ljb24gZnJvbSBcIi4vaW1hZ2VzL2pzLnN2Z1wiO1xuaW1wb3J0IGNzc0ljb24gZnJvbSBcIi4vaW1hZ2VzL2Nzcy5zdmdcIjtcbmltcG9ydCBodG1sSWNvbiBmcm9tIFwiLi9pbWFnZXMvaHRtbC5zdmdcIjtcbmltcG9ydCBnaXRJY29uIGZyb20gXCIuL2ltYWdlcy9naXQuc3ZnXCI7XG5pbXBvcnQgZ2l0SHViSWNvbiBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IG5wbUljb24gZnJvbSBcIi4vaW1hZ2VzL25wbS5zdmdcIjtcbmltcG9ydCBiYWJlbEljb24gZnJvbSBcIi4vaW1hZ2VzL2JhYmVsLnN2Z1wiO1xuaW1wb3J0IENMSWNvbiBmcm9tIFwiLi9pbWFnZXMvY29tbWFuZExpbmUuc3ZnXCI7XG5pbXBvcnQgZXNsaW50SWNvbiBmcm9tIFwiLi9pbWFnZXMvZXNsaW50LnN2Z1wiO1xuaW1wb3J0IHByZXR0aWVySWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJldHRpZXIuc3ZnXCI7XG5pbXBvcnQgdnNjb2RlSWNvbiBmcm9tIFwiLi9pbWFnZXMvdnNjb2RlLnN2Z1wiO1xuaW1wb3J0IHdlYnBhY2tJY29uIGZyb20gXCIuL2ltYWdlcy93ZWJwYWNrLnN2Z1wiO1xuaW1wb3J0IHdlYXRoZXJMSWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvd2VhdGhlci1saWdodC5wbmdcIjtcbmltcG9ydCB3ZWF0aGVyREljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3dlYXRoZXItZGFyay5wbmdcIjtcbmltcG9ydCB0b2RvTEljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3RvZG8tbGlnaHQucG5nXCI7XG5pbXBvcnQgdG9kb0RJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy90b2RvLWRhcmsucG5nXCI7XG5pbXBvcnQgcmVzdGFyYXVudExJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy9yZXN0YXJhdW50LWxpZ2h0LnBuZ1wiO1xuaW1wb3J0IHJlc3RhcmF1bnRESWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvcmVzdHJhdW50LWRhcmsucG5nXCI7XG5pbXBvcnQgdGljdGFjdG9lTEljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3RpY3RhY3RvZS1saWdodC5wbmdcIjtcbmltcG9ydCB0aWN0YWN0b2VESWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvdGljdGFjdG9lLWRhcmsucG5nXCI7XG5pbXBvcnQgbGlicmFyeUxJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy9saWJyYXJ5LWxpZ2h0LnBuZ1wiO1xuaW1wb3J0IGxpYnJhcnlESWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvbGlicmFyeS1kYXJrLnBuZ1wiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIC8vIFB1dHRpbmcgc3JjIGF0dHJpYnV0ZSBvbiBldmVyeSBpbWFnZVxuICBmdW5jdGlvbiBzaG93UGljdHVyZXMoKSB7XG4gICAgY29uc3Qgc21hbGxMb2dvSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbG9nb1wiKTtcbiAgICBzbWFsbExvZ29JbWcuc3JjID0gc21hbGxMb2dvO1xuXG4gICAgY29uc3QgYmlnTG9nb0ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlnLWxvZ29cIik7XG4gICAgYmlnTG9nb0ltZy5zcmMgPSBiaWdMb2dvO1xuXG4gICAgY29uc3QgcG9ydHJpYXRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRyaWF0XCIpO1xuICAgIHBvcnRyaWF0SW1nLnNyYyA9IHBvcnRyaWF0O1xuICB9XG5cbiAgLy8gbWFrZSBkcm9wLWRvd24gbWVudSBub3QgdG8gZGlzYXBwZWFyIHdoZW4geW91IGNsaWNrIG9uIGl0XG4gIC8vIChhbmQgYWxzbyBpbmNsdWRlIHRvZ2dsZSBvZiBhY3RpdmUgY2xhc3MgaWYgeW91bGwgaGF2ZSBtYW55IG1lbnUgYnV0dG9ucylcbiAgZnVuY3Rpb24gZHJvcERvd25VSSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlzRHJvcGRvd25CdG4gPSBlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtZHJvcGRvd24tYnRuXVwiKTtcbiAgICAgIGlmICghaXNEcm9wZG93bkJ0biAmJiBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtZHJvcGRvd25dXCIpICE9IG51bGwpIHJldHVybjtcblxuICAgICAgbGV0IGN1cnJlbnREcm9wZG93bjtcbiAgICAgIGlmIChpc0Ryb3Bkb3duQnRuKSB7XG4gICAgICAgIGN1cnJlbnREcm9wZG93biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1kcm9wZG93bl1cIik7XG4gICAgICAgIGN1cnJlbnREcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRyb3Bkb3duXS5hY3RpdmVcIilcbiAgICAgICAgLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgaWYgKGRyb3Bkb3duID09PSBjdXJyZW50RHJvcGRvd24pIHJldHVybjtcbiAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZUFib3V0TWVDb250ZW50KCkge1xuICAgIGNvbnN0IGFib3V0TWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LW1lLXRleHRcIik7XG5cbiAgICBjb25zdCBteVN0b3J5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1zdG9yeVwiKTtcbiAgICBjb25zdCBlZHVjYXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhdGlvblwiKTtcbiAgICBjb25zdCBza2lsbHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxsc1wiKTtcblxuICAgIG15U3RvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgXCJIZWxsbyB0aGVyZSE8YnIvPjxici8+SSdtIEVrYXRlcmluYSBWZWxhenF1ZXosIGEgcGFzc2lvbmF0ZSBGcm9udGVuZCBEZXZlbG9wZXIgYmFzZWRpbiB0aGUgVUsuIEluIGVhcmx5IDIwMjIsIEkgZGlzY292ZXJlZCBteSBsb3ZlIGZvciBjb2RpbmcsIGFuZCBzaW5jZSB0aGVuLCBJJ3ZlIGJlZW4gb24gYW4gZXhjaXRpbmcgam91cm5leSwgZGVkaWNhdGVkbHkgc3R1ZHlpbmcgYW5kIGltcHJvdmluZyBteSBza2lsbHMgdG8gdGhpcyBkYXkuPGJyLz48YnIvPkFzIGEgc2VsZi10YXVnaHQgZW50aHVzaWFzdCwgSSBmaW5kIGltbWVuc2Ugam95IGluIG92ZXJjb21pbmcgY29kaW5nIGNoYWxsZW5nZXMgYW5kIGNyZWF0aW5nIHZpc3VhbGx5IGNhcHRpdmF0aW5nIHdlYnNpdGVzLiBJIGZpcm1seSBiZWxpZXZlIHRoYXQgcGVyc2lzdGVuY2UgYW5kIGRlZGljYXRpb24gaG9sZCB0aGUga2V5IHRvY29ucXVlcmluZyBhbnkgb2JzdGFjbGUuIEknbSBjb21taXR0ZWQgdG8gZGVsaXZlcmluZyBzZWFtbGVzcyB1c2VyIGV4cGVyaWVuY2VzIHRocm91Z2ggc2ltcGxlIGFuZCBlbGVnYW50IGNvZGUuIExldCdzIGNvbGxhYm9yYXRlIGFuZCBlbWJhcmsgb24gZXhjaXRpbmcgZW5kZWF2b3JzIHRvZ2V0aGVyIVwiO1xuICAgIH0pO1xuXG4gICAgZWR1Y2F0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhYm91dE1lQ29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgICc8bGk+XCJGdWxsLVN0YWNrIEphdmFTY3JpcHRcIiBjb3Vyc2UgYXQgVGhlIE9kaW4gUHJvamVjdDwvbGk+PC9icj48bGk+QmFjaGVsb3JzIGRlZ3JlZSBpbiBDb21wdXRlciBTY2llbmNlLCBNb3Njb3cgVW5pdmVyc2l0eSBuYW1lZCBhZnRlciBTLiBVLiBXaXR0ZSAoMjAyMiAtIHRvIHRoaXMgZGF5LCBvbmxpbmUgc3R1ZHlpbmcpPC9saT48L2JyPjxsaT5CYWNoZWxvcnMgZGVncmVlIGluIFBvbGl0aWNhbCBTY2llbmNlLCBNb3Njb3cgU3RhdGUgVW5pdmVyc2l0eSBuYW1lZCBhZnRlciBNLiBWLiBMb21vbm9zb3YgKDIwMTgtMjAyMik8L2xpPic7XG4gICAgfSk7XG5cbiAgICBza2lsbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2pzSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkpTXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkpTPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aHRtbEljb259XCIgYWx0PVwiXCIgaWQ9XCJIVE1MXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkhUTUw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjc3NJY29ufVwiIGFsdD1cIlwiIGlkPVwiQ1NTXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkNTUzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2dpdEljb259XCIgYWx0PVwiXCIgaWQ9XCJHaXRcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+R2l0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Z2l0SHViSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkdpdEh1YlwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5HaXRodWI8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt3ZWJwYWNrSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIldlYnBhY2tcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+V2VicGFjazwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2JhYmVsSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkJhYmVsXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkJhYmVsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZXNsaW50SWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkxpbnRcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+RVNMaW50PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJldHRpZXJJY29ufVwiIGFsdD1cIlwiIGlkPVwiUHJldHRpZXJcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+UHJldHRpZXI8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtucG1JY29ufVwiIGFsdD1cIlwiIGlkPVwibnBtXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPk5wbTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke0NMSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkNMXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkNvbW1hbmQgTGluZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ZzY29kZUljb259XCIgYWx0PVwiXCIgaWQ9XCJWc2NvZGVcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+VlMgQ29kZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMoXG4gICAgd2VhdGhlclBpYyxcbiAgICB0b2RvUGljLFxuICAgIHJlc3RhcmF1bnRQaWMsXG4gICAgdGljdGFjdG9lUGljLFxuICAgIGxpYnJhcnlQaWNcbiAgKSB7XG4gICAgY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC10cmFja1wiKTtcblxuICAgIHByb2plY3RzU2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgcHJvamVjdHNTZWN0aW9uLmlubmVySFRNTCArPSBgXG4gICAgPHVsIGNsYXNzPSdjYXJvdXNlbC11bCc+XG4gICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pdGVtXCIgaWQ9JzEnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3dlYXRoZXJQaWN9XCIgYWx0PVwicHJvamVjdCBtb2NrdXBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJvamVjdC10ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPldlYXRoZXItQXBwPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXRcbiAgICAgICAgICAgICAgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzXG4gICAgICAgICAgICAgIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2otYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VrYXQtdmVsYXovd2VhdGhlci1hcHBcIj5Db2RlPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj48YSBocmVmPVwiaHR0cHM6Ly9la2F0LXZlbGF6LmdpdGh1Yi5pby93ZWF0aGVyLWFwcC9cIj5EZW1vPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaXRlbVwiIGlkPScyJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt0b2RvUGljfVwiIGFsdD1cInByb2plY3QgbW9ja3VwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Byb2plY3QtdGV4dC1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5Uby1EbyBMaXN0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXRcbiAgICAgICAgICAgICAgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzXG4gICAgICAgICAgICAgIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2otYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VrYXQtdmVsYXovdG8tZG8tbGlzdFwiPkNvZGU8L2E+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPjxhIGhyZWY9XCJodHRwczovL2VrYXQtdmVsYXouZ2l0aHViLmlvL3RvLWRvLWxpc3QvXCI+RGVtbzwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWl0ZW1cIiBpZD0nMyc+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzdGFyYXVudFBpY31cIiBhbHQ9XCJwcm9qZWN0IG1vY2t1cFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdwcm9qZWN0LXRleHQtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+UmVzdGFyYXVudCBwYWdlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXRcbiAgICAgICAgICAgICAgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzXG4gICAgICAgICAgICAgIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2otYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VrYXQtdmVsYXovcmVzdGF1cmF1bnRfcGFnZVwiPkNvZGU8L2E+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPjxhIGhyZWY9XCJodHRwczovL2VrYXQtdmVsYXouZ2l0aHViLmlvL3Jlc3RhdXJhdW50X3BhZ2UvXCI+RGVtbzwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWl0ZW1cIiBpZD0nNCc+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7dGljdGFjdG9lUGljfVwiIGFsdD1cInByb2plY3QgbW9ja3VwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Byb2plY3QtdGV4dC1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5UaWMtVGFjLVRvZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XG4gICAgICAgICAgICAgIGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3Jpc1xuICAgICAgICAgICAgICBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6L3RpYy10YWMtdG9lXCI+Q29kZTwvYT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VrYXQtdmVsYXouZ2l0aHViLmlvL3RpYy10YWMtdG9lL1wiPkRlbW88L2E+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pdGVtXCIgaWQ9JzUnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2xpYnJhcnlQaWN9XCIgYWx0PVwicHJvamVjdCBtb2NrdXBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJvamVjdC10ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPk15IExpYnJhcnk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdFxuICAgICAgICAgICAgICBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcbiAgICAgICAgICAgICAgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvai1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZWthdC12ZWxhei9saWJyYXJ5XCI+Q29kZTwvYT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VrYXQtdmVsYXouZ2l0aHViLmlvL2xpYnJhcnkvXCI+RGVtbzwvYT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgIDwvdWw+XG4gICAgYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFByb2ooKSB7XG4gICAgbGV0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtdWxcIik7XG4gICAgbGV0IGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1sZWZ0XCIpO1xuICAgIGxldCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcmlnaHRcIik7XG4gICAgbGV0IHByb2plY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWl0ZW1cIik7XG5cbiAgICBzY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzY3JvbGxDb250YWluZXIuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInNtb290aFwiO1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gZS5kZWx0YVk7XG4gICAgfSk7XG5cbiAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgaXRlbVNpemUgPSBwcm9qZWN0SXRlbS5vZmZzZXRXaWR0aDtcbiAgICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwic21vb3RoXCI7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCArPSBpdGVtU2l6ZTtcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAlIGl0ZW1TaXplICE9PSAwKSB7XG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID1cbiAgICAgICAgICBNYXRoLmZsb29yKHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0IC8gaXRlbVNpemUpICogaXRlbVNpemUgK1xuICAgICAgICAgIGl0ZW1TaXplO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IGl0ZW1TaXplID0gcHJvamVjdEl0ZW0ub2Zmc2V0V2lkdGg7XG4gICAgICBzY3JvbGxDb250YWluZXIuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInNtb290aFwiO1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgLT0gaXRlbVNpemU7XG4gICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgJSBpdGVtU2l6ZSAhPT0gMCkge1xuICAgICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCA9XG4gICAgICAgICAgTWF0aC5mbG9vcihzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAvIGl0ZW1TaXplKSAqIGl0ZW1TaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBla2F0LXZlbGF6YDtcbiAgICBjb3B5cmlnaHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb3B5cmlnaHRcIik7XG5cbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdpdGh1Yi1saW5rXCIpO1xuICAgIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2VrYXQtdmVsYXpcIjtcblxuICAgIGNvcHlyaWdodC5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICAgIHJldHVybiBmb290ZXJDb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVNb2RlKCkge1xuICAgIGNvbnN0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLWJ0blwiKTtcblxuICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcbiAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmstdGhlbWVcIikpIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdHMoXG4gICAgICAgICAgd2VhdGhlckRJY29uLFxuICAgICAgICAgIHRvZG9ESWNvbixcbiAgICAgICAgICByZXN0YXJhdW50REljb24sXG4gICAgICAgICAgdGljdGFjdG9lREljb24sXG4gICAgICAgICAgbGlicmFyeURJY29uXG4gICAgICAgICk7XG4gICAgICAgIHNjcm9sbFByb2ooKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZVByb2plY3RzKFxuICAgICAgICAgIHdlYXRoZXJMSWNvbixcbiAgICAgICAgICB0b2RvTEljb24sXG4gICAgICAgICAgcmVzdGFyYXVudExJY29uLFxuICAgICAgICAgIHRpY3RhY3RvZUxJY29uLFxuICAgICAgICAgIGxpYnJhcnlMSWNvblxuICAgICAgICApO1xuICAgICAgICBzY3JvbGxQcm9qKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxBbmltYXRpb24oKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXJMZWZ0ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2hvdy1sZWZ0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1sZWZ0XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGlkZGVuLWxlZnRcIik7XG4gICAgaGlkZGVuRWxlbWVudHNMZWZ0LmZvckVhY2goKGVsKSA9PiBvYnNlcnZlckxlZnQub2JzZXJ2ZShlbCkpO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXJSaWdodCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNob3ctcmlnaHRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LXJpZ2h0XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpZGRlbi1yaWdodFwiKTtcbiAgICBoaWRkZW5FbGVtZW50c1JpZ2h0LmZvckVhY2goKGVsKSA9PiBvYnNlcnZlclJpZ2h0Lm9ic2VydmUoZWwpKTtcbiAgfVxuXG4gIHNob3dQaWN0dXJlcygpO1xuICBkcm9wRG93blVJKCk7XG4gIGNoYW5nZUFib3V0TWVDb250ZW50KCk7XG4gIGNyZWF0ZVByb2plY3RzKFxuICAgIHdlYXRoZXJMSWNvbixcbiAgICB0b2RvTEljb24sXG4gICAgcmVzdGFyYXVudExJY29uLFxuICAgIHRpY3RhY3RvZUxJY29uLFxuICAgIGxpYnJhcnlMSWNvblxuICApO1xuICBzY3JvbGxQcm9qKCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xuICB0b2dnbGVNb2RlKCk7XG4gIHNjcm9sbEFuaW1hdGlvbigpO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL1VJXCI7XG5cblVJKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvUGxheWZhaXJEaXNwbGF5LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LUJvbGRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBSZXNldCAqL1xuXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogaW5oZXJpdDtcbn1cblxuYSB7XG4gIGFsbDogdW5zZXQ7XG59XG5cbi8qIEdlbmVyYWwgc3BhY2Ugc3R5bGluZyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG5cbjpyb290IHtcbiAgLS1waW5rOiAjZmRlNWVjO1xuICAtLXBlYWNoOiAjZmNiYWFkO1xuICAtLWRhcmtQZWFjaDogI2U0ODU4NjtcbiAgLS1wdXJwbGU6ICM5MTZkYjM7XG4gIC0tdHJhc3BhcmVudFBpbms6ICNmZGU1ZWM7XG4gIC0tdHJhbnNwYXJlbnRQZWFjaDogI2ZjYmFhZDtcbiAgLS10cmFuc3BhcmVudERhcmtQZWFjaDogI2U0ODU4NjtcblxuICAtLXB1cnBsZUZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoMTglKSBzYXR1cmF0ZSgxMDgxJSkgaHVlLXJvdGF0ZSgyMjhkZWcpXG4gICAgYnJpZ2h0bmVzcyg4NyUpIGNvbnRyYXN0KDkwJSk7XG4gIC0tZGFya1BlYWNoRmlsdGVyOiBpbnZlcnQoNTglKSBzZXBpYSg4OSUpIHNhdHVyYXRlKDQwMyUpIGh1ZS1yb3RhdGUoMzA5ZGVnKVxuICAgIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4NCUpO1xuXG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheVwiO1xuXG4gIC8qIFN0ZXAgLTI6IDEyLjUwcHgg4oaSIDEyLjgwcHggKi9cbiAgLS1zdGVwLS0yOiBjbGFtcCgwLjc4cmVtLCBjYWxjKDAuNzdyZW0gKyAwLjAzdncpLCAwLjhyZW0pO1xuXG4gIC8qIFN0ZXAgLTE6IDE1LjAwcHgg4oaSIDE2LjAwcHggKi9cbiAgLS1zdGVwLS0xOiBjbGFtcCgwLjk0cmVtLCBjYWxjKDAuOTJyZW0gKyAwLjExdncpLCAxcmVtKTtcblxuICAvKiBTdGVwIDA6IDE4LjAwcHgg4oaSIDIwLjAwcHggKi9cbiAgLS1zdGVwLTA6IGNsYW1wKDEuMTNyZW0sIGNhbGMoMS4wOHJlbSArIDAuMjJ2dyksIDEuMjVyZW0pO1xuXG4gIC8qIFN0ZXAgMTogMjEuNjBweCDihpIgMjUuMDBweCAqL1xuICAtLXN0ZXAtMTogY2xhbXAoMS4zNXJlbSwgY2FsYygxLjI4cmVtICsgMC4zN3Z3KSwgMS41NnJlbSk7XG5cbiAgLyogU3RlcCAyOiAyNS45MnB4IOKGkiAzMS4yNXB4ICovXG4gIC0tc3RlcC0yOiBjbGFtcCgxLjYycmVtLCBjYWxjKDEuNXJlbSArIDAuNTh2dyksIDEuOTVyZW0pO1xuXG4gIC8qIFN0ZXAgMzogMzEuMTBweCDihpIgMzkuMDZweCAqL1xuICAtLXN0ZXAtMzogY2xhbXAoMS45NHJlbSwgY2FsYygxLjc3cmVtICsgMC44N3Z3KSwgMi40NHJlbSk7XG5cbiAgLyogU3RlcCA0OiAzNy4zMnB4IOKGkiA0OC44M3B4ICovXG4gIC0tc3RlcC00OiBjbGFtcCgyLjMzcmVtLCBjYWxjKDIuMDhyZW0gKyAxLjI1dncpLCAzLjA1cmVtKTtcblxuICAvKiBTdGVwIDU6IDQ0Ljc5cHgg4oaSIDYxLjA0cHggKi9cbiAgLS1zdGVwLTU6IGNsYW1wKDIuOHJlbSwgY2FsYygyLjQ1cmVtICsgMS43N3Z3KSwgMy44MnJlbSk7XG59XG5cbi5kYXJrLXRoZW1lIHtcbiAgLS1waW5rOiAjOTE2ZGIzO1xuICAtLXBlYWNoOiAjZTQ4NTg2O1xuICAtLWRhcmtQZWFjaDogI2ZjYmFhZDtcbiAgLS1wdXJwbGU6ICNmZGU1ZWM7XG4gIC0tdHJhc3BhcmVudFBpbms6ICNmZGU1ZWM7XG4gIC0tdHJhbnNwYXJlbnRQZWFjaDogI2ZjYmFhZDtcbiAgLS10cmFuc3BhcmVudERhcmtQZWFjaDogI2U0ODU4NjtcblxuICAtLXB1cnBsZUZpbHRlcjogaW52ZXJ0KDU4JSkgc2VwaWEoODklKSBzYXR1cmF0ZSg0MDMlKSBodWUtcm90YXRlKDMwOWRlZylcbiAgICBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODQlKTtcbiAgLS1kYXJrUGVhY2hGaWx0ZXI6IGludmVydCg4NiUpIHNlcGlhKDEyJSkgc2F0dXJhdGUoMzA2JSkgaHVlLXJvdGF0ZSgyOTdkZWcpXG4gICAgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCg5OCUpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jY29udGVudCB7XG4gIC8qIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7ICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qICNoZWFkZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59ICovXG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIE5hdmlnYXRpb24gc3R5bGluZyAqL1xuXG4jbmF2LWNvbnRhaW5lci1tYWluIHtcbiAgei1pbmRleDogOTk5OTk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmc6IDFyZW0gbWF4KDZ2dywgMnJlbSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcbn1cblxuI25hdi1sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4ubmF2LWl0ZW0sXG4uZHJvcC1kb3duLWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy10b3AgMXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctcmlnaHQgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5uYXYtaXRlbTpob3Zlcixcbi5uYXYtaXRlbTpmb2N1cyxcbi5kcm9wLWRvd24taXRlbTpob3Zlcixcbi5kcm9wLWRvd24taXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4vKiBTd2l0Y2ggZGFyayBtb2RlIGJ0biBzdHlsaW5nICovXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoMCAwIDAgLyA1MCUpO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcbiAgY29udGVudDogXCJcXFxcZjE4NVwiO1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIC8qIGJhY2tncm91bmQ6IHZhcigtLXBpbmspOyAqL1xuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XG4gIGNvbnRlbnQ6IFwiXFxcXGYxODZcIjtcbiAgLyogY29sb3I6IHZhcigtLXB1cnBsZSk7ICovXG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTsgKi9cbn1cblxuLyogRHJvcCBkb3duIG1lbnUgc3R5bGluZyAqL1xuXG4jZHJvcC1kb3duLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3AtZG93bi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRyb3AtZG93bi1idG46OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcbiAgY29udGVudDogXCJcXFxcZjBjOVwiO1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xufVxuLmRyb3AtZG93bi1idG46aG92ZXIsXG4uZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0bixcbi5uYXYtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuI2Ryb3AtZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjI1cmVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVhY2gpO1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIzOCk7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTVweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuI2Ryb3AtZG93bi1jb250YWluZXIuYWN0aXZlID4gLmRyb3AtZG93bi1idG4gKyAjZHJvcC1kb3duLW1lbnUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uZHJvcC1kb3duLWl0ZW0ge1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuLyogSGVybyBzdHlsaW5nICovXG5cbiNoZXJvIHtcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDk2cHg7XG4gIGhlaWdodDogODB2aDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbiAgcGFkZGluZzogMnJlbSBtYXgoNXZ3LCAycmVtKTtcbiAgLyoganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjsgKi9cbn1cblxuI2JpZy1sb2dvIHtcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgLyogbWluLXdpZHRoOiAzMDBweDsgKi9cbn1cblxuI2hlcm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC00KTtcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwIDJyZW07XG4gIHdpZHRoOiBtYXgoNDV2dywgMjgwcHgpO1xuICAvKiBsaW5lLWhlaWdodDogNHJlbTsgKi9cbn1cblxuLyogQW5pbWF0aW9ucyAqL1xuXG4uaGlkZGVuLWxlZnQge1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogM3M7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgZmlsdGVyO1xufVxuXG4uc2hvdy1sZWZ0IHtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBibHVyKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi8qIC5oaWRkZW4tcmlnaHQge1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2l0aW9uOiAzcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBmaWx0ZXI7XG59XG5cbi5zaG93LXJpZ2h0IHtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBibHVyKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59ICovXG5cbi8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xuXG4jYWJvdXQtbWUge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogOTZweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBnYXA6IDYwcHg7XG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4jYWJvdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyMHB4O1xuICB3aWR0aDogbWF4KDQ1dncsIDM1MHB4KTtcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XG59XG5cbiNhYm91dC1tZS1uYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWJvdXQtbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy10b3AgMXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctcmlnaHQgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hYm91dC1uYXYtaXRlbTpob3Zlcixcbi5hYm91dC1uYXYtaXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4jYWJvdXQtbWUtdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuXG4jcG9ydHJpYXQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAyMHB4IC04cHggdmFyKC0tcHVycGxlKTtcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluLW91dDtcbn1cblxuI3BvcnRyaWF0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMjBweCA4cHggdmFyKC0tZGFya1BlYWNoKTtcbn1cblxuLyogU2tpbGxzIHN0eWxpbmcgKi9cblxuLnNraWxscy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNXB4O1xuICByb3ctZ2FwOiA1MHB4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoODBweCwgMWZyKSk7XG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNjBweCwgMWZyKSk7ICovXG59XG5cbi5za2lsbHMtaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5za2lsbC1waWMge1xuICB3aWR0aDogNTBweDtcbiAgLyogZmlsdGVyOiBpbnZlcnQoNTglKSBzZXBpYSg4OSUpIHNhdHVyYXRlKDQwMyUpIGh1ZS1yb3RhdGUoMzA5ZGVnKVxuICAgIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4NCUpOyAqL1xuICBmaWx0ZXI6IHZhcigtLWRhcmtQZWFjaEZpbHRlcik7XG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2tpbGwtcGljOmhvdmVyIHtcbiAgLyogZmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSgxOCUpIHNhdHVyYXRlKDEwODElKSBodWUtcm90YXRlKDIyOGRlZylcbiAgICBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoOTAlKTsgKi9cbiAgZmlsdGVyOiB2YXIoLS1wdXJwbGVGaWx0ZXIpO1xufVxuXG4uc2tpbGwtbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogUHJvamVjdHMgc2VjdGlvbiAqL1xuXG4jcHJvamVjdHMge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogOTZweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuLnByb2plY3RzLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbGFzcy1oZWFkZXIge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvamVjdHMtY2Fyb3VzZWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuXG4uY2Fyb3VzZWwtdWwge1xuICAtLXNsaWRlci1pbmRleDogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogbWF4KDYwdncsIDQwMHB4KTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3ItaW5saW5lOiBjb250YWluO1xufVxuXG4uY2Fyb3VzZWwtdWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3QtaXRlbSA+IGltZyB7XG4gIGlubGluZS1zaXplOiA3MCU7XG4gIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogOTAlO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG5cbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xufVxuXG4ucHJvai1idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuXG4ucHJvai1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy10b3AgMXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctcmlnaHQgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9qLWJ0bjpob3Zlcixcbi5wcm9qLWJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4jYnRuLWxlZnQ6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCJcXFxcZjA1M1wiO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbiNidG4tcmlnaHQ6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCJcXFxcZjA1NFwiO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLyogQ29udGFjdHMgc2VjdGlvbiBzdHlsaW5nICovXG5cbiNjb250YWN0cyB7XG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA5NnB4O1xuICBoZWlnaHQ6IDcwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA2MHB4O1xuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xufVxuXG4uY29udGFjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA1MHB4O1xuICB3aWR0aDogbWF4KDQwdncsIDM1MHB4KTtcbn1cblxuLmNvbnRhY3RzLWhlcm8ge1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1saW4ge1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xufVxuXG4uYnRuLWVtYWlsLFxuLmJ0bi1naXRodWIge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmNvbnQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dCwgcGFkZGluZy1ib3R0b20gMXMgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy1sZWZ0IDFzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDFzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctdG9wIDFzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXJpZ2h0IDFzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29udC1idG46aG92ZXIsXG4uY29udC1idG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLmJ0bi1lbWFpbDo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LWZhbWlseTogXCJmb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIlxcXFxmMGUwXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmJ0bi1saW46OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCJcXFxcZjA4Y1wiO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5idG4tZ2l0aHViOjpiZWZvcmUge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnRBd2Vzb21lXCI7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwOWJcIjtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4vKiBGb290ZXIgc3R5bGluZyAqL1xuXG4jZm9vdGVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuI2dpdGh1Yi1saW5rOjphZnRlciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCJcXFxcZjA5YlwiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi8qIE1vYmlsZSB2ZXJzaW9uIHN0eWxpbmcgKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC8qIE5hdiB0byBkcm9wLWRvd24gKi9cbiAgLm5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNkcm9wLWRvd24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC8qIEhlcm8gYXR5bGluZyAqL1xuICAjaGVhZGVyIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG5cbiAgI2hlcm8ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICNoZXJvLXRleHQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cblxuICAvKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cbiAgI2Fib3V0LW1lIHtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAjYWJvdXQtY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4gIC8qIFByb2plY3RzIHNlY3Rpb24gKi9cbiAgI3Byb2plY3RzIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLyogQ29udGFjdHMgc2VjdGlvbiAqL1xuICAjY29udGFjdHMge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cblxuLyogVGFibGV0IHN0eWxpbmcgKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC8qIE5hdiB0byBkcm9wLWRvd24gKi9cbiAgLm5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNkcm9wLWRvd24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC8qIEhlcm8gc3R5bGluZyAqL1xuICAjaGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cblxuICAjYmlnLWxvZ28ge1xuICAgIHdpZHRoOiBtYXgoNDB2dywgNDAwcHgpO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICB9XG5cbiAgI2hlcm8tdGV4dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgfVxuXG4gICNoZXJvIHtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAvKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cbiAgI2Fib3V0LW1lIHtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICB9XG5cbiAgI2Fib3V0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1heCg4MHZ3LCA1MDBweCk7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xuICB9XG5cbiAgLnNraWxscy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICB9XG5cbiAgLyogUHJvamVjdHMgc2VjdGlvbiAqL1xuICAjcHJvamVjdHMge1xuICAgIGhlaWdodDogODB2aDtcbiAgfVxuXG4gIC5jYXJvdXNlbC11bCB7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cblxuICAucHJvamVjdC1pdGVtLFxuICAucHJvamVjdC10ZXh0LWNvbnRhaW5lciB7XG4gICAgZ2FwOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgfVxuXG4gIC5wcm9qZWN0LXRpdGxlLFxuICAucHJvai1idG4tY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XG4gIH1cblxuICAvKiBDb250YWN0cyBzZWN0aW9uICovXG4gICNjb250YWN0cyB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgfVxuXG4gIC5jb250YWN0cy1jb250YWluZXIge1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGdhcDogMTAwcHg7XG4gIH1cbiAgLyogI3BvcnRyaWF0IHtcbiAgICB3aWR0aDogbWF4KDUwdncsIDUwMHB4KTtcbiAgfSAqL1xufVxuXG4vKiBUYWJsZXQgc21hbGwgaGVpZ2h0ICovXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc1MHB4KSBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgI2hlYWRlcixcbiAgI2Fib3V0LW1lIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogMTAwMHB4KSBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgI2hlcm8ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAvKiAjcHJvamVjdHMge1xuICAgIGhlaWdodDogODB2aDtcbiAgfSAqL1xuXG4gIC5jYXJvdXNlbC11bCB7XG4gICAgd2lkdGg6IDYwdnc7XG4gIH1cblxuICAucHJvamVjdC1pdGVtLFxuICAucHJvamVjdC10ZXh0LWNvbnRhaW5lciB7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcbiAgfVxuXG4gIC5wcm9qZWN0LXRpdGxlLFxuICAucHJvai1idG4tY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG4gIH1cblxuICAvKiBDb250YWN0cyBzZWN0aW9uICovXG4gICNjb250YWN0cyB7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgfVxuXG4gIC5jb250YWN0cy1jb250YWluZXIge1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGdhcDogNTBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVU7O0FBRVY7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLDhCQUE4QjtFQUM5Qiw0Q0FBcUU7RUFDckUsNENBQTRFO0VBQzVFLDRDQUErRDtFQUMvRCw0Q0FBcUU7RUFDckUsNENBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsK0JBQStCOztFQUUvQjtpQ0FDK0I7RUFDL0I7aUNBQytCOztFQUUvQiw4QkFBOEI7O0VBRTlCLCtCQUErQjtFQUMvQix5REFBeUQ7O0VBRXpELCtCQUErQjtFQUMvQix1REFBdUQ7O0VBRXZELDhCQUE4QjtFQUM5Qix5REFBeUQ7O0VBRXpELDhCQUE4QjtFQUM5Qix5REFBeUQ7O0VBRXpELDhCQUE4QjtFQUM5Qix3REFBd0Q7O0VBRXhELDhCQUE4QjtFQUM5Qix5REFBeUQ7O0VBRXpELDhCQUE4QjtFQUM5Qix5REFBeUQ7O0VBRXpELDhCQUE4QjtFQUM5Qix3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwrQkFBK0I7O0VBRS9CO2lDQUMrQjtFQUMvQjtrQ0FDZ0M7QUFDbEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO2dCQUNjO0VBQ2QsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZjs7NERBRTBEO0FBQzVEOztBQUVBOzs7O0VBSUUsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjtBQUNBOzs7RUFHRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLGtFQUFrRTtFQUNsRSxhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUI7bUNBQ2lDO0FBQ25DOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSCw2QkFBNkI7O0FBRTdCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsU0FBUztFQUNULDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGVBQWU7O0VBRWY7OzREQUUwRDtBQUM1RDs7QUFFQTs7RUFFRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiwwREFBMEQ7RUFDMUQsNkRBQTZEO0FBQy9EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYO29DQUNrQztFQUNsQyw4QkFBOEI7RUFDOUIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0U7b0NBQ2tDO0VBQ2xDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixTQUFTO0VBQ1QsYUFBYTtFQUNiLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7O0VBRXZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGVBQWU7O0VBRWY7OzREQUUwRDtBQUM1RDs7QUFFQTs7RUFFRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBLDZCQUE2Qjs7QUFFN0I7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGVBQWU7O0VBRWY7OzREQUUwRDtBQUM1RDs7QUFFQTs7RUFFRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UscUJBQXFCO0VBQ3JCO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQSxpQkFBaUI7RUFDakI7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBLDZCQUE2QjtFQUM3QjtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCOztFQUVBLHFCQUFxQjtFQUNyQjtJQUNFLGFBQWE7RUFDZjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UscUJBQXFCO0VBQ3JCO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQSxpQkFBaUI7RUFDakI7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0VBQ3ZCOztFQUVBLDZCQUE2QjtFQUM3QjtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDJEQUEyRDtFQUM3RDs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsU0FBUztJQUNULHdCQUF3QjtFQUMxQjs7RUFFQTs7SUFFRSx3QkFBd0I7RUFDMUI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7RUFDQTs7S0FFRztBQUNMOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFOztJQUVFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7O0tBRUc7O0VBRUg7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsU0FBUztJQUNULHdCQUF3QjtFQUMxQjs7RUFFQTs7SUFFRSx3QkFBd0I7RUFDMUI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCAqL1xcblxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuYSB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG4vKiBHZW5lcmFsIHNwYWNlIHN0eWxpbmcgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXJEaXNwbGF5XFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9QbGF5ZmFpckRpc3BsYXktVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9QbGF5ZmFpckRpc3BsYXktSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkLnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkSXRhbGljLnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcGluazogI2ZkZTVlYztcXG4gIC0tcGVhY2g6ICNmY2JhYWQ7XFxuICAtLWRhcmtQZWFjaDogI2U0ODU4NjtcXG4gIC0tcHVycGxlOiAjOTE2ZGIzO1xcbiAgLS10cmFzcGFyZW50UGluazogI2ZkZTVlYztcXG4gIC0tdHJhbnNwYXJlbnRQZWFjaDogI2ZjYmFhZDtcXG4gIC0tdHJhbnNwYXJlbnREYXJrUGVhY2g6ICNlNDg1ODY7XFxuXFxuICAtLXB1cnBsZUZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoMTglKSBzYXR1cmF0ZSgxMDgxJSkgaHVlLXJvdGF0ZSgyMjhkZWcpXFxuICAgIGJyaWdodG5lc3MoODclKSBjb250cmFzdCg5MCUpO1xcbiAgLS1kYXJrUGVhY2hGaWx0ZXI6IGludmVydCg1OCUpIHNlcGlhKDg5JSkgc2F0dXJhdGUoNDAzJSkgaHVlLXJvdGF0ZSgzMDlkZWcpXFxuICAgIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4NCUpO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpckRpc3BsYXlcXFwiO1xcblxcbiAgLyogU3RlcCAtMjogMTIuNTBweCDihpIgMTIuODBweCAqL1xcbiAgLS1zdGVwLS0yOiBjbGFtcCgwLjc4cmVtLCBjYWxjKDAuNzdyZW0gKyAwLjAzdncpLCAwLjhyZW0pO1xcblxcbiAgLyogU3RlcCAtMTogMTUuMDBweCDihpIgMTYuMDBweCAqL1xcbiAgLS1zdGVwLS0xOiBjbGFtcCgwLjk0cmVtLCBjYWxjKDAuOTJyZW0gKyAwLjExdncpLCAxcmVtKTtcXG5cXG4gIC8qIFN0ZXAgMDogMTguMDBweCDihpIgMjAuMDBweCAqL1xcbiAgLS1zdGVwLTA6IGNsYW1wKDEuMTNyZW0sIGNhbGMoMS4wOHJlbSArIDAuMjJ2dyksIDEuMjVyZW0pO1xcblxcbiAgLyogU3RlcCAxOiAyMS42MHB4IOKGkiAyNS4wMHB4ICovXFxuICAtLXN0ZXAtMTogY2xhbXAoMS4zNXJlbSwgY2FsYygxLjI4cmVtICsgMC4zN3Z3KSwgMS41NnJlbSk7XFxuXFxuICAvKiBTdGVwIDI6IDI1LjkycHgg4oaSIDMxLjI1cHggKi9cXG4gIC0tc3RlcC0yOiBjbGFtcCgxLjYycmVtLCBjYWxjKDEuNXJlbSArIDAuNTh2dyksIDEuOTVyZW0pO1xcblxcbiAgLyogU3RlcCAzOiAzMS4xMHB4IOKGkiAzOS4wNnB4ICovXFxuICAtLXN0ZXAtMzogY2xhbXAoMS45NHJlbSwgY2FsYygxLjc3cmVtICsgMC44N3Z3KSwgMi40NHJlbSk7XFxuXFxuICAvKiBTdGVwIDQ6IDM3LjMycHgg4oaSIDQ4LjgzcHggKi9cXG4gIC0tc3RlcC00OiBjbGFtcCgyLjMzcmVtLCBjYWxjKDIuMDhyZW0gKyAxLjI1dncpLCAzLjA1cmVtKTtcXG5cXG4gIC8qIFN0ZXAgNTogNDQuNzlweCDihpIgNjEuMDRweCAqL1xcbiAgLS1zdGVwLTU6IGNsYW1wKDIuOHJlbSwgY2FsYygyLjQ1cmVtICsgMS43N3Z3KSwgMy44MnJlbSk7XFxufVxcblxcbi5kYXJrLXRoZW1lIHtcXG4gIC0tcGluazogIzkxNmRiMztcXG4gIC0tcGVhY2g6ICNlNDg1ODY7XFxuICAtLWRhcmtQZWFjaDogI2ZjYmFhZDtcXG4gIC0tcHVycGxlOiAjZmRlNWVjO1xcbiAgLS10cmFzcGFyZW50UGluazogI2ZkZTVlYztcXG4gIC0tdHJhbnNwYXJlbnRQZWFjaDogI2ZjYmFhZDtcXG4gIC0tdHJhbnNwYXJlbnREYXJrUGVhY2g6ICNlNDg1ODY7XFxuXFxuICAtLXB1cnBsZUZpbHRlcjogaW52ZXJ0KDU4JSkgc2VwaWEoODklKSBzYXR1cmF0ZSg0MDMlKSBodWUtcm90YXRlKDMwOWRlZylcXG4gICAgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg0JSk7XFxuICAtLWRhcmtQZWFjaEZpbHRlcjogaW52ZXJ0KDg2JSkgc2VwaWEoMTIlKSBzYXR1cmF0ZSgzMDYlKSBodWUtcm90YXRlKDI5N2RlZylcXG4gICAgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCg5OCUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAvKiBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiAjaGVhZGVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICovXFxuXFxuLnNlY3Rpb24taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBOYXZpZ2F0aW9uIHN0eWxpbmcgKi9cXG5cXG4jbmF2LWNvbnRhaW5lci1tYWluIHtcXG4gIHotaW5kZXg6IDk5OTk5O1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogMXJlbSBtYXgoNnZ3LCAycmVtKTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IG1heCg0dncsIDJyZW0pO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcXG59XFxuXFxuI25hdi1sb2dvIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLm5hdi1pdGVtLFxcbi5kcm9wLWRvd24taXRlbSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAxcyBlYXNlLWluLW91dCxcXG4gICAgcGFkZGluZy1sZWZ0IDFzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLXRvcCAxcyBlYXNlLWluLW91dCwgcGFkZGluZy1yaWdodCAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5hdi1pdGVtOmhvdmVyLFxcbi5uYXYtaXRlbTpmb2N1cyxcXG4uZHJvcC1kb3duLWl0ZW06aG92ZXIsXFxuLmRyb3AtZG93bi1pdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLyogU3dpdGNoIGRhcmsgbW9kZSBidG4gc3R5bGluZyAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDAgMCAwIC8gNTAlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODVcXFwiO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIC8qIGJhY2tncm91bmQ6IHZhcigtLXBpbmspOyAqL1xcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg2XFxcIjtcXG4gIC8qIGNvbG9yOiB2YXIoLS1wdXJwbGUpOyAqL1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTsgKi9cXG59XFxuXFxuLyogRHJvcCBkb3duIG1lbnUgc3R5bGluZyAqL1xcblxcbiNkcm9wLWRvd24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kcm9wLWRvd24tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZHJvcC1kb3duLWJ0bjo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjOVxcXCI7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcXG59XFxuLmRyb3AtZG93bi1idG46aG92ZXIsXFxuLmRyb3AtZG93bi1jb250YWluZXIuYWN0aXZlID4gLmRyb3AtZG93bi1idG4sXFxuLm5hdi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuI2Ryb3AtZG93bi1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjI1cmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlYWNoKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjM4KTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxNXB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuI2Ryb3AtZG93bi1jb250YWluZXIuYWN0aXZlID4gLmRyb3AtZG93bi1idG4gKyAjZHJvcC1kb3duLW1lbnUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLmRyb3AtZG93bi1pdGVtIHtcXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4vKiBIZXJvIHN0eWxpbmcgKi9cXG5cXG4jaGVybyB7XFxuICBzY3JvbGwtbWFyZ2luLXRvcDogOTZweDtcXG4gIGhlaWdodDogODB2aDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG4gIHBhZGRpbmc6IDJyZW0gbWF4KDV2dywgMnJlbSk7XFxuICAvKiBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjsgKi9cXG59XFxuXFxuI2JpZy1sb2dvIHtcXG4gIHdpZHRoOiBtYXgoMzB2dywgMzAwcHgpO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgLyogbWluLXdpZHRoOiAzMDBweDsgKi9cXG59XFxuXFxuI2hlcm8tdGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtNCk7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgd2lkdGg6IG1heCg0NXZ3LCAyODBweCk7XFxuICAvKiBsaW5lLWhlaWdodDogNHJlbTsgKi9cXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcblxcbi5oaWRkZW4tbGVmdCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgdHJhbnNpdGlvbjogM3M7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGZpbHRlcjtcXG59XFxuXFxuLnNob3ctbGVmdCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZmlsdGVyOiBibHVyKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG5cXG4vKiAuaGlkZGVuLXJpZ2h0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIHRyYW5zaXRpb246IDNzO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBmaWx0ZXI7XFxufVxcblxcbi5zaG93LXJpZ2h0IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBmaWx0ZXI6IGJsdXIoMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufSAqL1xcblxcbi8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xcblxcbiNhYm91dC1tZSB7XFxuICBzY3JvbGwtbWFyZ2luLXRvcDogOTZweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDYwcHg7XFxuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbiNhYm91dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiBtYXgoNDV2dywgMzUwcHgpO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVxcblxcbiNhYm91dC1tZS1uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hYm91dC1uYXYtaXRlbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAxcyBlYXNlLWluLW91dCxcXG4gICAgcGFkZGluZy1sZWZ0IDFzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLXRvcCAxcyBlYXNlLWluLW91dCwgcGFkZGluZy1yaWdodCAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFib3V0LW5hdi1pdGVtOmhvdmVyLFxcbi5hYm91dC1uYXYtaXRlbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbiNhYm91dC1tZS10ZXh0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBwYWRkaW5nOiAycmVtIDA7XFxufVxcblxcbiNwb3J0cmlhdCB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMjBweCAtOHB4IHZhcigtLXB1cnBsZSk7XFxuICB3aWR0aDogbWF4KDMwdncsIDMwMHB4KTtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3BvcnRyaWF0OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDIwcHggOHB4IHZhcigtLWRhcmtQZWFjaCk7XFxufVxcblxcbi8qIFNraWxscyBzdHlsaW5nICovXFxuXFxuLnNraWxscy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcm93LWdhcDogNTBweDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDgwcHgsIDFmcikpO1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg2MHB4LCAxZnIpKTsgKi9cXG59XFxuXFxuLnNraWxscy1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5za2lsbC1waWMge1xcbiAgd2lkdGg6IDUwcHg7XFxuICAvKiBmaWx0ZXI6IGludmVydCg1OCUpIHNlcGlhKDg5JSkgc2F0dXJhdGUoNDAzJSkgaHVlLXJvdGF0ZSgzMDlkZWcpXFxuICAgIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4NCUpOyAqL1xcbiAgZmlsdGVyOiB2YXIoLS1kYXJrUGVhY2hGaWx0ZXIpO1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5za2lsbC1waWM6aG92ZXIge1xcbiAgLyogZmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSgxOCUpIHNhdHVyYXRlKDEwODElKSBodWUtcm90YXRlKDIyOGRlZylcXG4gICAgYnJpZ2h0bmVzcyg4NyUpIGNvbnRyYXN0KDkwJSk7ICovXFxuICBmaWx0ZXI6IHZhcigtLXB1cnBsZUZpbHRlcik7XFxufVxcblxcbi5za2lsbC1uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogUHJvamVjdHMgc2VjdGlvbiAqL1xcblxcbiNwcm9qZWN0cyB7XFxuICBzY3JvbGwtbWFyZ2luLXRvcDogOTZweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbSBtYXgoMnZ3LCAycmVtKTtcXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xhc3MtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdHMtY2Fyb3VzZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbi5jYXJvdXNlbC11bCB7XFxuICAtLXNsaWRlci1pbmRleDogMDtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIHdpZHRoOiBtYXgoNjB2dywgNDAwcHgpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwMCU7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci1pbmxpbmU6IGNvbnRhaW47XFxufVxcblxcbi5jYXJvdXNlbC11bDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSA+IGltZyB7XFxuICBpbmxpbmUtc2l6ZTogNzAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10ZXh0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG59XFxuXFxuLnByb2otYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLnByb2otYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctdG9wIDFzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXJpZ2h0IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvai1idG46aG92ZXIsXFxuLnByb2otYnRuOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuI2J0bi1sZWZ0OjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJmb250QXdlc29tZVxcXCI7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTNcXFwiO1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4jYnRuLXJpZ2h0OjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJmb250QXdlc29tZVxcXCI7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTRcXFwiO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi8qIENvbnRhY3RzIHNlY3Rpb24gc3R5bGluZyAqL1xcblxcbiNjb250YWN0cyB7XFxuICBzY3JvbGwtbWFyZ2luLXRvcDogOTZweDtcXG4gIGhlaWdodDogNzB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA2MHB4O1xcbiAgcGFkZGluZzogMnJlbSBtYXgoMnZ3LCAycmVtKTtcXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbn1cXG5cXG4uY29udGFjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDUwcHg7XFxuICB3aWR0aDogbWF4KDQwdncsIDM1MHB4KTtcXG59XFxuXFxuLmNvbnRhY3RzLWhlcm8ge1xcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1saW4ge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmJ0bi1lbWFpbCxcXG4uYnRuLWdpdGh1YiB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmNvbnQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctdG9wIDFzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXJpZ2h0IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY29udC1idG46aG92ZXIsXFxuLmNvbnQtYnRuOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmJ0bi1lbWFpbDo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZm9udEF3ZXNvbWVcXFwiO1xcbiAgY29udGVudDogXFxcIlxcXFxmMGUwXFxcIjtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLmJ0bi1saW46OmJlZm9yZSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LWZhbWlseTogXFxcImZvbnRBd2Vzb21lXFxcIjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4Y1xcXCI7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5idG4tZ2l0aHViOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJmb250QXdlc29tZVxcXCI7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWJcXFwiO1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4vKiBGb290ZXIgc3R5bGluZyAqL1xcblxcbiNmb290ZXIge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2l0aHViLWxpbms6OmFmdGVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZm9udEF3ZXNvbWVcXFwiO1xcbiAgY29udGVudDogXFxcIlxcXFxmMDliXFxcIjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLyogTW9iaWxlIHZlcnNpb24gc3R5bGluZyAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLyogTmF2IHRvIGRyb3AtZG93biAqL1xcbiAgLm5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjZHJvcC1kb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLyogSGVybyBhdHlsaW5nICovXFxuICAjaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gICNoZXJvIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI2hlcm8tdGV4dCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgfVxcblxcbiAgLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXFxuICAjYWJvdXQtbWUge1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgI2Fib3V0LWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIH1cXG5cXG4gIC8qIFByb2plY3RzIHNlY3Rpb24gKi9cXG4gICNwcm9qZWN0cyB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuXFxuICAvKiBDb250YWN0cyBzZWN0aW9uICovXFxuICAjY29udGFjdHMge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgc3R5bGluZyAqL1xcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLyogTmF2IHRvIGRyb3AtZG93biAqL1xcbiAgLm5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjZHJvcC1kb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLyogSGVybyBzdHlsaW5nICovXFxuICAjaGVhZGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgfVxcblxcbiAgI2JpZy1sb2dvIHtcXG4gICAgd2lkdGg6IG1heCg0MHZ3LCA0MDBweCk7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgfVxcblxcbiAgI2hlcm8tdGV4dCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbiAgfVxcblxcbiAgI2hlcm8ge1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xcbiAgI2Fib3V0LW1lIHtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIH1cXG5cXG4gICNhYm91dC1jb250YWluZXIge1xcbiAgICB3aWR0aDogbWF4KDgwdncsIDUwMHB4KTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxuICB9XFxuXFxuICAuc2tpbGxzLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcbiAgfVxcblxcbiAgLyogUHJvamVjdHMgc2VjdGlvbiAqL1xcbiAgI3Byb2plY3RzIHtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgfVxcblxcbiAgLmNhcm91c2VsLXVsIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICB9XFxuXFxuICAucHJvamVjdC1pdGVtLFxcbiAgLnByb2plY3QtdGV4dC1jb250YWluZXIge1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRpdGxlLFxcbiAgLnByb2otYnRuLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIH1cXG5cXG4gIC8qIENvbnRhY3RzIHNlY3Rpb24gKi9cXG4gICNjb250YWN0cyB7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgfVxcblxcbiAgLmNvbnRhY3RzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgfVxcbiAgLyogI3BvcnRyaWF0IHtcXG4gICAgd2lkdGg6IG1heCg1MHZ3LCA1MDBweCk7XFxuICB9ICovXFxufVxcblxcbi8qIFRhYmxldCBzbWFsbCBoZWlnaHQgKi9cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc1MHB4KSBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICNoZWFkZXIsXFxuICAjYWJvdXQtbWUge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDEwMDBweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAjaGVybyB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuXFxuICAvKiAjcHJvamVjdHMge1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICB9ICovXFxuXFxuICAuY2Fyb3VzZWwtdWwge1xcbiAgICB3aWR0aDogNjB2dztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWl0ZW0sXFxuICAucHJvamVjdC10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGl0bGUsXFxuICAucHJvai1idG4tY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbiAgfVxcblxcbiAgLyogQ29udGFjdHMgc2VjdGlvbiAqL1xcbiAgI2NvbnRhY3RzIHtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxuICB9XFxuXFxuICAuY29udGFjdHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGdhcDogNTBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsic21hbGxMb2dvIiwiYmlnTG9nbyIsInBvcnRyaWF0IiwianNJY29uIiwiY3NzSWNvbiIsImh0bWxJY29uIiwiZ2l0SWNvbiIsImdpdEh1Ykljb24iLCJucG1JY29uIiwiYmFiZWxJY29uIiwiQ0xJY29uIiwiZXNsaW50SWNvbiIsInByZXR0aWVySWNvbiIsInZzY29kZUljb24iLCJ3ZWJwYWNrSWNvbiIsIndlYXRoZXJMSWNvbiIsIndlYXRoZXJESWNvbiIsInRvZG9MSWNvbiIsInRvZG9ESWNvbiIsInJlc3RhcmF1bnRMSWNvbiIsInJlc3RhcmF1bnRESWNvbiIsInRpY3RhY3RvZUxJY29uIiwidGljdGFjdG9lREljb24iLCJsaWJyYXJ5TEljb24iLCJsaWJyYXJ5REljb24iLCJVSSIsInNob3dQaWN0dXJlcyIsInNtYWxsTG9nb0ltZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJiaWdMb2dvSW1nIiwicG9ydHJpYXRJbWciLCJkcm9wRG93blVJIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpc0Ryb3Bkb3duQnRuIiwidGFyZ2V0IiwibWF0Y2hlcyIsImNsb3Nlc3QiLCJjdXJyZW50RHJvcGRvd24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRyb3Bkb3duIiwicmVtb3ZlIiwiY2hhbmdlQWJvdXRNZUNvbnRlbnQiLCJhYm91dE1lQ29udGFpbmVyIiwibXlTdG9yeUJ0biIsImVkdWNhdGlvbkJ0biIsInNraWxsc0J0biIsImlubmVySFRNTCIsImNyZWF0ZVByb2plY3RzIiwid2VhdGhlclBpYyIsInRvZG9QaWMiLCJyZXN0YXJhdW50UGljIiwidGljdGFjdG9lUGljIiwibGlicmFyeVBpYyIsInByb2plY3RzU2VjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxQcm9qIiwic2Nyb2xsQ29udGFpbmVyIiwiYmFja0J0biIsIm5leHRCdG4iLCJwcm9qZWN0SXRlbSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJzY3JvbGxCZWhhdmlvciIsInNjcm9sbExlZnQiLCJkZWx0YVkiLCJpdGVtU2l6ZSIsIm9mZnNldFdpZHRoIiwiTWF0aCIsImZsb29yIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyQ29udGFpbmVyIiwiY29weXJpZ2h0IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic2V0QXR0cmlidXRlIiwiZ2l0aHViTGluayIsImhyZWYiLCJhcHBlbmRDaGlsZCIsInRvZ2dsZU1vZGUiLCJ0b2dnbGVCdG4iLCJib2R5IiwiY29udGFpbnMiLCJzY3JvbGxBbmltYXRpb24iLCJvYnNlcnZlckxlZnQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYWRkIiwiaGlkZGVuRWxlbWVudHNMZWZ0IiwiZWwiLCJvYnNlcnZlIiwib2JzZXJ2ZXJSaWdodCIsImhpZGRlbkVsZW1lbnRzUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9