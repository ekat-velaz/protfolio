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
      aboutMeContainer.innerHTML = "Hello there!<br/><br/>I'm Ekaterina Velazquez, a passionate Frontend Developer based in the UK. I discovered my love for coding in the early 2022 and since then I've been on an exciting journey, dedicatedly studying and improving my skills to this day.<br/><br/>As a self-taught enthusiast, I find immense joy in overcoming coding challenges and creating visually captivating websites. I firmly believe that persistence and dedication hold the key to conquering any obstacle. I'm committed to delivering seamless user experiences through simple and elegant code. Let's work together on exciting projects!";
    });
    educationBtn.addEventListener("click", () => {
      aboutMeContainer.innerHTML = "<li>\"Full-Stack JavaScript\" course at The Odin Project</li></br><li>Bachelor's degree in Computer Science, Moscow University named after S. U. Witte (2022 - to this day, online studying)</li></br><li>Bachelor's degree in Political Science, Moscow State University named after M. V. Lomonosov (2018-2022)</li>";
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
    scrollContainer.addEventListener("wheel", e => {
      e.preventDefault();
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += e.deltaY;
    });
    nextBtn.addEventListener("click", () => {
      const itemSize = projectItem.offsetWidth;
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += itemSize;
      if (scrollContainer.scrollLeft % itemSize !== 0) {
        scrollContainer.scrollLeft = Math.floor(scrollContainer.scrollLeft / itemSize) * itemSize + itemSize;
      }
    });
    backBtn.addEventListener("click", () => {
      const itemSize = projectItem.offsetWidth;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsT0FBTyxNQUFNLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksZ0JBQWdCLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxRQUFRLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE1BQU0sT0FBTyxNQUFNLFFBQVEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE1BQU0sT0FBTyxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sT0FBTyxPQUFPLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLGdCQUFnQixNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksTUFBTSxPQUFPLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLE1BQU0sT0FBTyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLE9BQU8sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLEtBQUssTUFBTSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFL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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNtYWxsTG9nbyBmcm9tIFwiLi9pbWFnZXMvc21hbGwtbG9nby5wbmdcIjtcbmltcG9ydCBiaWdMb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IHBvcnRyaWF0IGZyb20gXCIuL2ltYWdlcy9wb3J0cmlhdC5qcGdcIjtcbmltcG9ydCBqc0ljb24gZnJvbSBcIi4vaW1hZ2VzL2pzLnN2Z1wiO1xuaW1wb3J0IGNzc0ljb24gZnJvbSBcIi4vaW1hZ2VzL2Nzcy5zdmdcIjtcbmltcG9ydCBodG1sSWNvbiBmcm9tIFwiLi9pbWFnZXMvaHRtbC5zdmdcIjtcbmltcG9ydCBnaXRJY29uIGZyb20gXCIuL2ltYWdlcy9naXQuc3ZnXCI7XG5pbXBvcnQgZ2l0SHViSWNvbiBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IG5wbUljb24gZnJvbSBcIi4vaW1hZ2VzL25wbS5zdmdcIjtcbmltcG9ydCBiYWJlbEljb24gZnJvbSBcIi4vaW1hZ2VzL2JhYmVsLnN2Z1wiO1xuaW1wb3J0IENMSWNvbiBmcm9tIFwiLi9pbWFnZXMvY29tbWFuZExpbmUuc3ZnXCI7XG5pbXBvcnQgZXNsaW50SWNvbiBmcm9tIFwiLi9pbWFnZXMvZXNsaW50LnN2Z1wiO1xuaW1wb3J0IHByZXR0aWVySWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJldHRpZXIuc3ZnXCI7XG5pbXBvcnQgdnNjb2RlSWNvbiBmcm9tIFwiLi9pbWFnZXMvdnNjb2RlLnN2Z1wiO1xuaW1wb3J0IHdlYnBhY2tJY29uIGZyb20gXCIuL2ltYWdlcy93ZWJwYWNrLnN2Z1wiO1xuaW1wb3J0IHdlYXRoZXJMSWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvd2VhdGhlci1saWdodC5wbmdcIjtcbmltcG9ydCB3ZWF0aGVyREljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3dlYXRoZXItZGFyay5wbmdcIjtcbmltcG9ydCB0b2RvTEljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3RvZG8tbGlnaHQucG5nXCI7XG5pbXBvcnQgdG9kb0RJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy90b2RvLWRhcmsucG5nXCI7XG5pbXBvcnQgcmVzdGFyYXVudExJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy9yZXN0YXJhdW50LWxpZ2h0LnBuZ1wiO1xuaW1wb3J0IHJlc3RhcmF1bnRESWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvcmVzdHJhdW50LWRhcmsucG5nXCI7XG5pbXBvcnQgdGljdGFjdG9lTEljb24gZnJvbSBcIi4vaW1hZ2VzL3Byb2plY3RzL3RpY3RhY3RvZS1saWdodC5wbmdcIjtcbmltcG9ydCB0aWN0YWN0b2VESWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvdGljdGFjdG9lLWRhcmsucG5nXCI7XG5pbXBvcnQgbGlicmFyeUxJY29uIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0cy9saWJyYXJ5LWxpZ2h0LnBuZ1wiO1xuaW1wb3J0IGxpYnJhcnlESWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdHMvbGlicmFyeS1kYXJrLnBuZ1wiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIC8vIFB1dHRpbmcgc3JjIGF0dHJpYnV0ZSBvbiBldmVyeSBpbWFnZVxuICBmdW5jdGlvbiBzaG93UGljdHVyZXMoKSB7XG4gICAgY29uc3Qgc21hbGxMb2dvSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbG9nb1wiKTtcbiAgICBzbWFsbExvZ29JbWcuc3JjID0gc21hbGxMb2dvO1xuXG4gICAgY29uc3QgYmlnTG9nb0ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlnLWxvZ29cIik7XG4gICAgYmlnTG9nb0ltZy5zcmMgPSBiaWdMb2dvO1xuXG4gICAgY29uc3QgcG9ydHJpYXRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRyaWF0XCIpO1xuICAgIHBvcnRyaWF0SW1nLnNyYyA9IHBvcnRyaWF0O1xuICB9XG5cbiAgLy8gbWFrZSBkcm9wLWRvd24gbWVudSBub3QgdG8gZGlzYXBwZWFyIHdoZW4geW91IGNsaWNrIG9uIGl0XG4gIC8vIChhbmQgYWxzbyBpbmNsdWRlIHRvZ2dsZSBvZiBhY3RpdmUgY2xhc3MgaWYgeW91bGwgaGF2ZSBtYW55IG1lbnUgYnV0dG9ucylcbiAgZnVuY3Rpb24gZHJvcERvd25VSSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlzRHJvcGRvd25CdG4gPSBlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtZHJvcGRvd24tYnRuXVwiKTtcbiAgICAgIGlmICghaXNEcm9wZG93bkJ0biAmJiBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtZHJvcGRvd25dXCIpICE9IG51bGwpIHJldHVybjtcblxuICAgICAgbGV0IGN1cnJlbnREcm9wZG93bjtcbiAgICAgIGlmIChpc0Ryb3Bkb3duQnRuKSB7XG4gICAgICAgIGN1cnJlbnREcm9wZG93biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1kcm9wZG93bl1cIik7XG4gICAgICAgIGN1cnJlbnREcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRyb3Bkb3duXS5hY3RpdmVcIilcbiAgICAgICAgLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgaWYgKGRyb3Bkb3duID09PSBjdXJyZW50RHJvcGRvd24pIHJldHVybjtcbiAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZUFib3V0TWVDb250ZW50KCkge1xuICAgIGNvbnN0IGFib3V0TWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LW1lLXRleHRcIik7XG5cbiAgICBjb25zdCBteVN0b3J5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1zdG9yeVwiKTtcbiAgICBjb25zdCBlZHVjYXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhdGlvblwiKTtcbiAgICBjb25zdCBza2lsbHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxsc1wiKTtcblxuICAgIG15U3RvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgXCJIZWxsbyB0aGVyZSE8YnIvPjxici8+SSdtIEVrYXRlcmluYSBWZWxhenF1ZXosIGEgcGFzc2lvbmF0ZSBGcm9udGVuZCBEZXZlbG9wZXIgYmFzZWQgaW4gdGhlIFVLLiBJIGRpc2NvdmVyZWQgbXkgbG92ZSBmb3IgY29kaW5nIGluIHRoZSBlYXJseSAyMDIyIGFuZCBzaW5jZSB0aGVuIEkndmUgYmVlbiBvbiBhbiBleGNpdGluZyBqb3VybmV5LCBkZWRpY2F0ZWRseSBzdHVkeWluZyBhbmQgaW1wcm92aW5nIG15IHNraWxscyB0byB0aGlzIGRheS48YnIvPjxici8+QXMgYSBzZWxmLXRhdWdodCBlbnRodXNpYXN0LCBJIGZpbmQgaW1tZW5zZSBqb3kgaW4gb3ZlcmNvbWluZyBjb2RpbmcgY2hhbGxlbmdlcyBhbmQgY3JlYXRpbmcgdmlzdWFsbHkgY2FwdGl2YXRpbmcgd2Vic2l0ZXMuIEkgZmlybWx5IGJlbGlldmUgdGhhdCBwZXJzaXN0ZW5jZSBhbmQgZGVkaWNhdGlvbiBob2xkIHRoZSBrZXkgdG8gY29ucXVlcmluZyBhbnkgb2JzdGFjbGUuIEknbSBjb21taXR0ZWQgdG8gZGVsaXZlcmluZyBzZWFtbGVzcyB1c2VyIGV4cGVyaWVuY2VzIHRocm91Z2ggc2ltcGxlIGFuZCBlbGVnYW50IGNvZGUuIExldCdzIHdvcmsgdG9nZXRoZXIgb24gZXhjaXRpbmcgcHJvamVjdHMhXCI7XG4gICAgfSk7XG5cbiAgICBlZHVjYXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgXCI8bGk+XFxcIkZ1bGwtU3RhY2sgSmF2YVNjcmlwdFxcXCIgY291cnNlIGF0IFRoZSBPZGluIFByb2plY3Q8L2xpPjwvYnI+PGxpPkJhY2hlbG9yJ3MgZGVncmVlIGluIENvbXB1dGVyIFNjaWVuY2UsIE1vc2NvdyBVbml2ZXJzaXR5IG5hbWVkIGFmdGVyIFMuIFUuIFdpdHRlICgyMDIyIC0gdG8gdGhpcyBkYXksIG9ubGluZSBzdHVkeWluZyk8L2xpPjwvYnI+PGxpPkJhY2hlbG9yJ3MgZGVncmVlIGluIFBvbGl0aWNhbCBTY2llbmNlLCBNb3Njb3cgU3RhdGUgVW5pdmVyc2l0eSBuYW1lZCBhZnRlciBNLiBWLiBMb21vbm9zb3YgKDIwMTgtMjAyMik8L2xpPlwiO1xuICAgIH0pO1xuXG4gICAgc2tpbGxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhYm91dE1lQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBhYm91dE1lQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtqc0ljb259XCIgYWx0PVwiXCIgaWQ9XCJKU1wiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5KUzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2h0bWxJY29ufVwiIGFsdD1cIlwiIGlkPVwiSFRNTFwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5IVE1MPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y3NzSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkNTU1wiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5DU1M8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtnaXRJY29ufVwiIGFsdD1cIlwiIGlkPVwiR2l0XCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkdpdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2dpdEh1Ykljb259XCIgYWx0PVwiXCIgaWQ9XCJHaXRIdWJcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+R2l0aHViPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7d2VicGFja0ljb259XCIgYWx0PVwiXCIgaWQ9XCJXZWJwYWNrXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPldlYnBhY2s8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtiYWJlbEljb259XCIgYWx0PVwiXCIgaWQ9XCJCYWJlbFwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5CYWJlbDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2VzbGludEljb259XCIgYWx0PVwiXCIgaWQ9XCJMaW50XCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkVTTGludDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ByZXR0aWVySWNvbn1cIiBhbHQ9XCJcIiBpZD1cIlByZXR0aWVyXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPlByZXR0aWVyPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bnBtSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIm5wbVwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5OcG08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtDTEljb259XCIgYWx0PVwiXCIgaWQ9XCJDTFwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5Db21tYW5kIExpbmU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt2c2NvZGVJY29ufVwiIGFsdD1cIlwiIGlkPVwiVnNjb2RlXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPlZTIENvZGU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKFxuICAgIHdlYXRoZXJQaWMsXG4gICAgdG9kb1BpYyxcbiAgICByZXN0YXJhdW50UGljLFxuICAgIHRpY3RhY3RvZVBpYyxcbiAgICBsaWJyYXJ5UGljXG4gICkge1xuICAgIGNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtdHJhY2tcIik7XG5cbiAgICBwcm9qZWN0c1NlY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIHByb2plY3RzU2VjdGlvbi5pbm5lckhUTUwgKz0gYFxuICAgIDx1bCBjbGFzcz0nY2Fyb3VzZWwtdWwnPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaXRlbVwiIGlkPScxJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt3ZWF0aGVyUGljfVwiIGFsdD1cInByb2plY3QgbW9ja3VwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3Byb2plY3QtdGV4dC1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5XZWF0aGVyLUFwcDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIFRoaXMgV2VhdGhlciBBcHAsIGJ1aWx0IHdpdGggdmFuaWxsYSBKYXZhU2NyaXB0LCBIVE1MLCBhbmQgQ1NTLCB1c2luZyBXZWF0aGVyIEFQSSwgcHJvdmlkZXMgcmVhbC10aW1lIHdlYXRoZXIgaW5mb3JtYXRpb24gd2l0aCBhIGNsZWFuIGFuZCB1c2VyLWZyaWVuZGx5IGludGVyZmFjZSwgYWxsb3dpbmcgdXNlcnMgdG8gZWZmb3J0bGVzc2x5IGNoZWNrIGN1cnJlbnQgd2VhdGhlciBjb25kaXRpb25zIGFuZCBmb3JlY2FzdHMgZm9yIGFueSBsb2NhdGlvbiB3b3JsZHdpZGUuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6L3dlYXRoZXItYXBwXCI+Q29kZTwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+PGEgaHJlZj1cImh0dHBzOi8vZWthdC12ZWxhei5naXRodWIuaW8vd2VhdGhlci1hcHAvXCI+RGVtbzwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWl0ZW1cIiBpZD0nMic+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7dG9kb1BpY31cIiBhbHQ9XCJwcm9qZWN0IG1vY2t1cFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdwcm9qZWN0LXRleHQtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+VG8tRG8gTGlzdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIFRoaXMgVG8tRG8gQXBwLCBjcmVhdGVkIHVzaW5nIHZhbmlsbGEgSmF2YVNjcmlwdCwgSFRNTCwgYW5kIENTUywgbGV2ZXJhZ2VzIGxvY2FsIHN0b3JhZ2UgdG8gaGVscCB1c2VycyBvcmdhbml6ZSB0aGVpciB0YXNrcyBlZmZpY2llbnRseS4gSXQgb2ZmZXJzIGEgc2VhbWxlc3MgYW5kIGludHVpdGl2ZSBleHBlcmllbmNlIGZvciBhZGRpbmcsIG1hbmFnaW5nLCBhbmQgY29tcGxldGluZyB0by1kbyBpdGVtcywgZW5zdXJpbmcgdGFza3MgYXJlIGFsd2F5cyBhdCB5b3VyIGZpbmdlcnRpcHMuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6L3RvLWRvLWxpc3RcIj5Db2RlPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvai1idG5cIj48YSBocmVmPVwiaHR0cHM6Ly9la2F0LXZlbGF6LmdpdGh1Yi5pby90by1kby1saXN0L1wiPkRlbW88L2E+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pdGVtXCIgaWQ9JzMnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlc3RhcmF1bnRQaWN9XCIgYWx0PVwicHJvamVjdCBtb2NrdXBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJvamVjdC10ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPlJlc3RhcmF1bnQgcGFnZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIFRoaXMgcmVzdGF1cmFudCB3ZWJzaXRlLCBidWlsdCB3aXRoIGJhc2ljIEphdmFTY3JpcHQsIEhUTUwsIGFuZCBDU1MsIHByb3ZpZGVzIGEgdXNlci1mcmllbmRseSB3YXkgZm9yIHBlb3BsZSB0byBjaGVjayBvdXQgdGhlIHJlc3RhdXJhbnQncyBtZW51LCBjb250YWN0cywgYW5kIGxlYXJuIGFib3V0IHRoZSByZXN0YXVyYW50J3MgYXRtb3NwaGVyZS4gSXQncyBkZXNpZ25lZCB0byBiZSBzaW1wbGUgYW5kIGVhc3kgdG8gdXNlLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvai1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZWthdC12ZWxhei9yZXN0YXVyYXVudF9wYWdlXCI+Q29kZTwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+PGEgaHJlZj1cImh0dHBzOi8vZWthdC12ZWxhei5naXRodWIuaW8vcmVzdGF1cmF1bnRfcGFnZS9cIj5EZW1vPC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaXRlbVwiIGlkPSc0Jz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt0aWN0YWN0b2VQaWN9XCIgYWx0PVwicHJvamVjdCBtb2NrdXBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJvamVjdC10ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPlRpYy1UYWMtVG9lPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgVGhpcyBUaWMtVGFjLVRvZSBnYW1lLCBjcmVhdGVkIHVzaW5nIHBsYWluIEphdmFTY3JpcHQsIEhUTUwsIGFuZCBDU1MsIG9mZmVycyBhIGNsYXNzaWMgYW5kIGVudGVydGFpbmluZyBnYW1pbmcgZXhwZXJpZW5jZS4gUGxheWVycyBjYW4gZW5qb3kgZnJpZW5kbHkgY29tcGV0aXRpb25zIG9uIGEgdmlzdWFsbHkgYXBwZWFsaW5nIGFuZCBlYXN5LXRvLXVzZSBnYW1lIGJvYXJkLCBwbGF5aW5nIGFnYWluc3QgYW5vdGhlciBwbGF5ZXIgb3IgYWdhaW5zdCBjb21wdXRlci5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2otYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VrYXQtdmVsYXovdGljLXRhYy10b2VcIj5Db2RlPC9hPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qLWJ0blwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZWthdC12ZWxhei5naXRodWIuaW8vdGljLXRhYy10b2UvXCI+RGVtbzwvYT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWl0ZW1cIiBpZD0nNSc+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bGlicmFyeVBpY31cIiBhbHQ9XCJwcm9qZWN0IG1vY2t1cFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdwcm9qZWN0LXRleHQtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+TXkgTGlicmFyeTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIFRoaXMgTGlicmFyeSBBcHAsIGRldmVsb3BlZCB1c2luZyBzaW1wbGUgSmF2YVNjcmlwdCwgSFRNTCwgYW5kIENTUywgcHJvdmlkZXMgYW4gb3JnYW5pemVkIHdheSBmb3IgdXNlcnMgdG8gbWFuYWdlIHRoZWlyIGJvb2sgY29sbGVjdGlvbnMuIFdpdGggaXRzIGludHVpdGl2ZSBpbnRlcmZhY2UsIHVzZXJzIGNhbiBlYXNpbHkgYWRkLCBkZWxldGUsIGVkaXQgYW5kIG1hcmsgdGhlaXIgYm9va3MgcmVhZC91bnJlYWQuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6L2xpYnJhcnlcIj5Db2RlPC9hPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2otYnRuXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZWthdC12ZWxhei5naXRodWIuaW8vbGlicmFyeS9cIj5EZW1vPC9hPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgPC91bD5cbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsUHJvaigpIHtcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLXVsXCIpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1sZWZ0XCIpO1xuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1yaWdodFwiKTtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtXCIpO1xuXG4gICAgc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJzbW9vdGhcIjtcbiAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IGUuZGVsdGFZO1xuICAgIH0pO1xuXG4gICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbVNpemUgPSBwcm9qZWN0SXRlbS5vZmZzZXRXaWR0aDtcbiAgICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwic21vb3RoXCI7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCArPSBpdGVtU2l6ZTtcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAlIGl0ZW1TaXplICE9PSAwKSB7XG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID1cbiAgICAgICAgICBNYXRoLmZsb29yKHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0IC8gaXRlbVNpemUpICogaXRlbVNpemUgK1xuICAgICAgICAgIGl0ZW1TaXplO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbVNpemUgPSBwcm9qZWN0SXRlbS5vZmZzZXRXaWR0aDtcbiAgICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwic21vb3RoXCI7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAtPSBpdGVtU2l6ZTtcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCAlIGl0ZW1TaXplICE9PSAwKSB7XG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID1cbiAgICAgICAgICBNYXRoLmZsb29yKHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0IC8gaXRlbVNpemUpICogaXRlbVNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIik7XG5cbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGVrYXQtdmVsYXpgO1xuICAgIGNvcHlyaWdodC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvcHlyaWdodFwiKTtcblxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2l0aHViLWxpbmtcIik7XG4gICAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vZWthdC12ZWxhelwiO1xuXG4gICAgY29weXJpZ2h0LmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gICAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vZGUoKSB7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtYnRuXCIpO1xuXG4gICAgdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFyay10aGVtZVwiKSkge1xuICAgICAgICBjcmVhdGVQcm9qZWN0cyhcbiAgICAgICAgICB3ZWF0aGVyREljb24sXG4gICAgICAgICAgdG9kb0RJY29uLFxuICAgICAgICAgIHJlc3RhcmF1bnRESWNvbixcbiAgICAgICAgICB0aWN0YWN0b2VESWNvbixcbiAgICAgICAgICBsaWJyYXJ5REljb25cbiAgICAgICAgKTtcbiAgICAgICAgc2Nyb2xsUHJvaigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdHMoXG4gICAgICAgICAgd2VhdGhlckxJY29uLFxuICAgICAgICAgIHRvZG9MSWNvbixcbiAgICAgICAgICByZXN0YXJhdW50TEljb24sXG4gICAgICAgICAgdGljdGFjdG9lTEljb24sXG4gICAgICAgICAgbGlicmFyeUxJY29uXG4gICAgICAgICk7XG4gICAgICAgIHNjcm9sbFByb2ooKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbEFuaW1hdGlvbigpIHtcbiAgICBjb25zdCBvYnNlcnZlckxlZnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzaG93LWxlZnRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWxlZnRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGlkZGVuRWxlbWVudHNMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaWRkZW4tbGVmdFwiKTtcbiAgICBoaWRkZW5FbGVtZW50c0xlZnQuZm9yRWFjaCgoZWwpID0+IG9ic2VydmVyTGVmdC5vYnNlcnZlKGVsKSk7XG5cbiAgICBjb25zdCBvYnNlcnZlclJpZ2h0ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2hvdy1yaWdodFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctcmlnaHRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGlkZGVuRWxlbWVudHNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGlkZGVuLXJpZ2h0XCIpO1xuICAgIGhpZGRlbkVsZW1lbnRzUmlnaHQuZm9yRWFjaCgoZWwpID0+IG9ic2VydmVyUmlnaHQub2JzZXJ2ZShlbCkpO1xuICB9XG5cbiAgc2hvd1BpY3R1cmVzKCk7XG4gIGRyb3BEb3duVUkoKTtcbiAgY2hhbmdlQWJvdXRNZUNvbnRlbnQoKTtcbiAgY3JlYXRlUHJvamVjdHMoXG4gICAgd2VhdGhlckxJY29uLFxuICAgIHRvZG9MSWNvbixcbiAgICByZXN0YXJhdW50TEljb24sXG4gICAgdGljdGFjdG9lTEljb24sXG4gICAgbGlicmFyeUxJY29uXG4gICk7XG4gIHNjcm9sbFByb2ooKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG4gIHRvZ2dsZU1vZGUoKTtcbiAgc2Nyb2xsQW5pbWF0aW9uKCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vVUlcIjtcblxuVUkoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9QbGF5ZmFpckRpc3BsYXktSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktQm9sZEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFJlc2V0ICovXG5cbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5idXR0b24sXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBpbmhlcml0O1xufVxuXG5hIHtcbiAgYWxsOiB1bnNldDtcbn1cblxuLyogR2VuZXJhbCBzcGFjZSBzdHlsaW5nICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXJEaXNwbGF5XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cblxuOnJvb3Qge1xuICAtLXBpbms6ICNmZGU1ZWM7XG4gIC0tcGVhY2g6ICNmY2JhYWQ7XG4gIC0tZGFya1BlYWNoOiAjZTQ4NTg2O1xuICAtLXB1cnBsZTogIzkxNmRiMztcbiAgLS10cmFzcGFyZW50UGluazogI2ZkZTVlYztcbiAgLS10cmFuc3BhcmVudFBlYWNoOiAjZmNiYWFkO1xuICAtLXRyYW5zcGFyZW50RGFya1BlYWNoOiAjZTQ4NTg2O1xuXG4gIC0tcHVycGxlRmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSgxOCUpIHNhdHVyYXRlKDEwODElKSBodWUtcm90YXRlKDIyOGRlZylcbiAgICBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoOTAlKTtcbiAgLS1kYXJrUGVhY2hGaWx0ZXI6IGludmVydCg1OCUpIHNlcGlhKDg5JSkgc2F0dXJhdGUoNDAzJSkgaHVlLXJvdGF0ZSgzMDlkZWcpXG4gICAgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg0JSk7XG5cbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXJEaXNwbGF5XCI7XG5cbiAgLyogU3RlcCAtMjogMTIuNTBweCDihpIgMTIuODBweCAqL1xuICAtLXN0ZXAtLTI6IGNsYW1wKDAuNzhyZW0sIGNhbGMoMC43N3JlbSArIDAuMDN2dyksIDAuOHJlbSk7XG5cbiAgLyogU3RlcCAtMTogMTUuMDBweCDihpIgMTYuMDBweCAqL1xuICAtLXN0ZXAtLTE6IGNsYW1wKDAuOTRyZW0sIGNhbGMoMC45MnJlbSArIDAuMTF2dyksIDFyZW0pO1xuXG4gIC8qIFN0ZXAgMDogMTguMDBweCDihpIgMjAuMDBweCAqL1xuICAtLXN0ZXAtMDogY2xhbXAoMS4xM3JlbSwgY2FsYygxLjA4cmVtICsgMC4yMnZ3KSwgMS4yNXJlbSk7XG5cbiAgLyogU3RlcCAxOiAyMS42MHB4IOKGkiAyNS4wMHB4ICovXG4gIC0tc3RlcC0xOiBjbGFtcCgxLjM1cmVtLCBjYWxjKDEuMjhyZW0gKyAwLjM3dncpLCAxLjU2cmVtKTtcblxuICAvKiBTdGVwIDI6IDI1LjkycHgg4oaSIDMxLjI1cHggKi9cbiAgLS1zdGVwLTI6IGNsYW1wKDEuNjJyZW0sIGNhbGMoMS41cmVtICsgMC41OHZ3KSwgMS45NXJlbSk7XG5cbiAgLyogU3RlcCAzOiAzMS4xMHB4IOKGkiAzOS4wNnB4ICovXG4gIC0tc3RlcC0zOiBjbGFtcCgxLjk0cmVtLCBjYWxjKDEuNzdyZW0gKyAwLjg3dncpLCAyLjQ0cmVtKTtcblxuICAvKiBTdGVwIDQ6IDM3LjMycHgg4oaSIDQ4LjgzcHggKi9cbiAgLS1zdGVwLTQ6IGNsYW1wKDIuMzNyZW0sIGNhbGMoMi4wOHJlbSArIDEuMjV2dyksIDMuMDVyZW0pO1xuXG4gIC8qIFN0ZXAgNTogNDQuNzlweCDihpIgNjEuMDRweCAqL1xuICAtLXN0ZXAtNTogY2xhbXAoMi44cmVtLCBjYWxjKDIuNDVyZW0gKyAxLjc3dncpLCAzLjgycmVtKTtcbn1cblxuLmRhcmstdGhlbWUge1xuICAtLXBpbms6ICM5MTZkYjM7XG4gIC0tcGVhY2g6ICNlNDg1ODY7XG4gIC0tZGFya1BlYWNoOiAjZmNiYWFkO1xuICAtLXB1cnBsZTogI2ZkZTVlYztcbiAgLS10cmFzcGFyZW50UGluazogI2ZkZTVlYztcbiAgLS10cmFuc3BhcmVudFBlYWNoOiAjZmNiYWFkO1xuICAtLXRyYW5zcGFyZW50RGFya1BlYWNoOiAjZTQ4NTg2O1xuXG4gIC0tcHVycGxlRmlsdGVyOiBpbnZlcnQoNTglKSBzZXBpYSg4OSUpIHNhdHVyYXRlKDQwMyUpIGh1ZS1yb3RhdGUoMzA5ZGVnKVxuICAgIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4NCUpO1xuICAtLWRhcmtQZWFjaEZpbHRlcjogaW52ZXJ0KDg2JSkgc2VwaWEoMTIlKSBzYXR1cmF0ZSgzMDYlKSBodWUtcm90YXRlKDI5N2RlZylcbiAgICBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDk4JSk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTApO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbiNjb250ZW50IHtcbiAgLyogaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTsgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLyogI2hlYWRlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0gKi9cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogTmF2aWdhdGlvbiBzdHlsaW5nICovXG5cbiNuYXYtY29udGFpbmVyLW1haW4ge1xuICB6LWluZGV4OiA5OTk5OTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgcGFkZGluZzogMXJlbSBtYXgoNnZ3LCAycmVtKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBnYXA6IG1heCg0dncsIDJyZW0pO1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IG1heCg0dncsIDJyZW0pO1xufVxuXG4jbmF2LWxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5uYXYtaXRlbSxcbi5kcm9wLWRvd24taXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctbGVmdCAxcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLXRvcCAxcyBlYXNlLWluLW91dCwgcGFkZGluZy1yaWdodCAxcyBlYXNlLWluLW91dDtcbn1cblxuLm5hdi1pdGVtOmhvdmVyLFxuLm5hdi1pdGVtOmZvY3VzLFxuLmRyb3AtZG93bi1pdGVtOmhvdmVyLFxuLmRyb3AtZG93bi1pdGVtOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi8qIFN3aXRjaCBkYXJrIG1vZGUgYnRuIHN0eWxpbmcgKi9cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYigwIDAgMCAvIDUwJSk7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcXFxmMTg1XCI7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tcGluayk7ICovXG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcbiAgY29udGVudDogXCJcXFxcZjE4NlwiO1xuICAvKiBjb2xvcjogdmFyKC0tcHVycGxlKTsgKi9cbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpOyAqL1xufVxuXG4vKiBEcm9wIGRvd24gbWVudSBzdHlsaW5nICovXG5cbiNkcm9wLWRvd24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcC1kb3duLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZHJvcC1kb3duLWJ0bjo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcXFxmMGM5XCI7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMSk7XG59XG4uZHJvcC1kb3duLWJ0bjpob3Zlcixcbi5kcm9wLWRvd24tY29udGFpbmVyLmFjdGl2ZSA+IC5kcm9wLWRvd24tYnRuLFxuLm5hdi1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4jZHJvcC1kb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IGNhbGMoMTAwJSArIDAuMjVyZW0pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZWFjaCk7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjM4KTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4jZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0biArICNkcm9wLWRvd24tbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5kcm9wLWRvd24taXRlbSB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4vKiBIZXJvIHN0eWxpbmcgKi9cblxuI2hlcm8ge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogOTZweDtcbiAgaGVpZ2h0OiA4MHZoO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xuICBwYWRkaW5nOiAycmVtIG1heCg1dncsIDJyZW0pO1xuICAvKiBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyOyAqL1xufVxuXG4jYmlnLWxvZ28ge1xuICB3aWR0aDogbWF4KDMwdncsIDMwMHB4KTtcbiAgcGFkZGluZzogMCAycmVtO1xuICAvKiBtaW4td2lkdGg6IDMwMHB4OyAqL1xufVxuXG4jaGVyby10ZXh0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTQpO1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgd2lkdGg6IG1heCg0NXZ3LCAyODBweCk7XG4gIC8qIGxpbmUtaGVpZ2h0OiA0cmVtOyAqL1xufVxuXG4vKiBBbmltYXRpb25zICovXG5cbi5oaWRkZW4tbGVmdCB7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB0cmFuc2l0aW9uOiAzcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBmaWx0ZXI7XG59XG5cbi5zaG93LWxlZnQge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGJsdXIoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLyogLmhpZGRlbi1yaWdodCB7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zaXRpb246IDNzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGZpbHRlcjtcbn1cblxuLnNob3ctcmlnaHQge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGJsdXIoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn0gKi9cblxuLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXG5cbiNhYm91dC1tZSB7XG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA5NnB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNjBweDtcbiAgcGFkZGluZzogMnJlbSBtYXgoMnZ3LCAycmVtKTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG59XG5cbiNhYm91dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDIwcHg7XG4gIHdpZHRoOiBtYXgoNDV2dywgMzUwcHgpO1xuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbn1cblxuI2Fib3V0LW1lLW5hdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hYm91dC1uYXYtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XG4gIHRleHQtYWxpZ246IGVuZDtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctbGVmdCAxcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLXRvcCAxcyBlYXNlLWluLW91dCwgcGFkZGluZy1yaWdodCAxcyBlYXNlLWluLW91dDtcbn1cblxuLmFib3V0LW5hdi1pdGVtOmhvdmVyLFxuLmFib3V0LW5hdi1pdGVtOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbiNhYm91dC1tZS10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG5cbiNwb3J0cmlhdCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDIwcHggLThweCB2YXIoLS1wdXJwbGUpO1xuICB3aWR0aDogbWF4KDMwdncsIDMwMHB4KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4jcG9ydHJpYXQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAyMHB4IDhweCB2YXIoLS1kYXJrUGVhY2gpO1xufVxuXG4vKiBTa2lsbHMgc3R5bGluZyAqL1xuXG4uc2tpbGxzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE1cHg7XG4gIHJvdy1nYXA6IDUwcHg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg4MHB4LCAxZnIpKTtcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg2MHB4LCAxZnIpKTsgKi9cbn1cblxuLnNraWxscy1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbn1cblxuLnNraWxsLXBpYyB7XG4gIHdpZHRoOiA1MHB4O1xuICAvKiBmaWx0ZXI6IGludmVydCg1OCUpIHNlcGlhKDg5JSkgc2F0dXJhdGUoNDAzJSkgaHVlLXJvdGF0ZSgzMDlkZWcpXG4gICAgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg0JSk7ICovXG4gIGZpbHRlcjogdmFyKC0tZGFya1BlYWNoRmlsdGVyKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5za2lsbC1waWM6aG92ZXIge1xuICAvKiBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDE4JSkgc2F0dXJhdGUoMTA4MSUpIGh1ZS1yb3RhdGUoMjI4ZGVnKVxuICAgIGJyaWdodG5lc3MoODclKSBjb250cmFzdCg5MCUpOyAqL1xuICBmaWx0ZXI6IHZhcigtLXB1cnBsZUZpbHRlcik7XG59XG5cbi5za2lsbC1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBQcm9qZWN0cyBzZWN0aW9uICovXG5cbiNwcm9qZWN0cyB7XG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA5NnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4ucHJvamVjdHMtaGVhZGVyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsYXNzLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9qZWN0cy1jYXJvdXNlbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG59XG5cbi5jYXJvdXNlbC11bCB7XG4gIC0tc2xpZGVyLWluZGV4OiAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiBtYXgoNjB2dywgNDAwcHgpO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWF1dG8tY29sdW1uczogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci1pbmxpbmU6IGNvbnRhaW47XG59XG5cbi5jYXJvdXNlbC11bDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvamVjdC1pdGVtID4gaW1nIHtcbiAgaW5saW5lLXNpemU6IDcwJTtcbiAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9qZWN0LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtdGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcblxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG59XG5cbi5wcm9qLWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBnYXA6IDMwcHg7XG59XG5cbi5wcm9qLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XG4gIHRleHQtYWxpZ246IGVuZDtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctbGVmdCAxcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLXRvcCAxcyBlYXNlLWluLW91dCwgcGFkZGluZy1yaWdodCAxcyBlYXNlLWluLW91dDtcbn1cblxuLnByb2otYnRuOmhvdmVyLFxuLnByb2otYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbiNidG4tbGVmdDo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LWZhbWlseTogXCJmb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIlxcXFxmMDUzXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuI2J0bi1yaWdodDo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LWZhbWlseTogXCJmb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIlxcXFxmMDU0XCI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4vKiBDb250YWN0cyBzZWN0aW9uIHN0eWxpbmcgKi9cblxuI2NvbnRhY3RzIHtcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDk2cHg7XG4gIGhlaWdodDogNzB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBnYXA6IDYwcHg7XG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG59XG5cbi5jb250YWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDUwcHg7XG4gIHdpZHRoOiBtYXgoNDB2dywgMzUwcHgpO1xufVxuXG4uY29udGFjdHMtaGVybyB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWxpbiB7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG59XG5cbi5idG4tZW1haWwsXG4uYnRuLWdpdGh1YiB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uY29udC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAxcyBlYXNlLWluLW91dCxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy10b3AgMXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctcmlnaHQgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb250LWJ0bjpob3Zlcixcbi5jb250LWJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4uYnRuLWVtYWlsOjpiZWZvcmUge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnRBd2Vzb21lXCI7XG4gIGNvbnRlbnQ6IFwiXFxcXGYwZTBcIjtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uYnRuLWxpbjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LWZhbWlseTogXCJmb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIlxcXFxmMDhjXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmJ0bi1naXRodWI6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCJcXFxcZjA5YlwiO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi8qIEZvb3RlciBzdHlsaW5nICovXG5cbiNmb290ZXIge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4jZ2l0aHViLWxpbms6OmFmdGVyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LWZhbWlseTogXCJmb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIlxcXFxmMDliXCI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLyogTW9iaWxlIHZlcnNpb24gc3R5bGluZyAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLyogTmF2IHRvIGRyb3AtZG93biAqL1xuICAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Ryb3AtZG93bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogSGVybyBhdHlsaW5nICovXG4gICNoZWFkZXIge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAjaGVybyB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2hlcm8tdGV4dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuXG4gIC8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xuICAjYWJvdXQtbWUge1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG4gICNhYm91dC1jb250YWluZXIge1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG5cbiAgLyogUHJvamVjdHMgc2VjdGlvbiAqL1xuICAjcHJvamVjdHMge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAvKiBDb250YWN0cyBzZWN0aW9uICovXG4gICNjb250YWN0cyB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuXG4vKiBUYWJsZXQgc3R5bGluZyAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLyogTmF2IHRvIGRyb3AtZG93biAqL1xuICAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Ryb3AtZG93bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogSGVybyBzdHlsaW5nICovXG4gICNoZWFkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgfVxuXG4gICNiaWctbG9nbyB7XG4gICAgd2lkdGg6IG1heCg0MHZ3LCA0MDBweCk7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIH1cblxuICAjaGVyby10ZXh0IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICB9XG5cbiAgI2hlcm8ge1xuICAgIGhlaWdodDogODB2aDtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xuICAjYWJvdXQtbWUge1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gIH1cblxuICAjYWJvdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogbWF4KDgwdncsIDUwMHB4KTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XG4gIH1cblxuICAuc2tpbGxzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIH1cblxuICAvKiBQcm9qZWN0cyBzZWN0aW9uICovXG4gICNwcm9qZWN0cyB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICB9XG5cbiAgLmNhcm91c2VsLXVsIHtcbiAgICB3aWR0aDogODB2dztcbiAgfVxuXG4gIC5wcm9qZWN0LWl0ZW0sXG4gIC5wcm9qZWN0LXRleHQtY29udGFpbmVyIHtcbiAgICBnYXA6IDQwcHg7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xuICB9XG5cbiAgLnByb2plY3QtdGl0bGUsXG4gIC5wcm9qLWJ0bi1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcbiAgfVxuXG4gIC8qIENvbnRhY3RzIHNlY3Rpb24gKi9cbiAgI2NvbnRhY3RzIHtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICB9XG5cbiAgLmNvbnRhY3RzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgZ2FwOiAxMDBweDtcbiAgfVxuICAvKiAjcG9ydHJpYXQge1xuICAgIHdpZHRoOiBtYXgoNTB2dywgNTAwcHgpO1xuICB9ICovXG59XG5cbi8qIFRhYmxldCBzbWFsbCBoZWlnaHQgKi9cbkBtZWRpYSAobWF4LWhlaWdodDogNzUwcHgpIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAjaGVhZGVyLFxuICAjYWJvdXQtbWUge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDAwcHgpIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAjaGVybyB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC8qICNwcm9qZWN0cyB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICB9ICovXG5cbiAgLmNhcm91c2VsLXVsIHtcbiAgICB3aWR0aDogNjB2dztcbiAgfVxuXG4gIC5wcm9qZWN0LWl0ZW0sXG4gIC5wcm9qZWN0LXRleHQtY29udGFpbmVyIHtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xuICB9XG5cbiAgLnByb2plY3QtdGl0bGUsXG4gIC5wcm9qLWJ0bi1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgfVxuXG4gIC8qIENvbnRhY3RzIHNlY3Rpb24gKi9cbiAgI2NvbnRhY3RzIHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xuICB9XG5cbiAgLmNvbnRhY3RzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgZ2FwOiA1MHB4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFFVjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsOEJB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Q0U7O0lBRUUsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7S0FFRzs7RUFFSDtJQUNFLFdBQVc7RUFDYjs7RUFFQTs7SUFFRSxTQUFTO0lBQ1Qsd0JBQXdCO0VBQzFCOztFQUVBOztJQUVFLHdCQUF3QjtFQUMxQjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJlc2V0ICovXFxuXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5hIHtcXG4gIGFsbDogdW5zZXQ7XFxufVxcblxcbi8qIEdlbmVyYWwgc3BhY2Ugc3R5bGluZyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpckRpc3BsYXlcXFwiO1xcbiAgc3JjOiB1cmwoL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbiAgc3JjOiB1cmwoL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LUJvbGQudHRmKTtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LUJvbGRJdGFsaWMudHRmKTtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1waW5rOiAjZmRlNWVjO1xcbiAgLS1wZWFjaDogI2ZjYmFhZDtcXG4gIC0tZGFya1BlYWNoOiAjZTQ4NTg2O1xcbiAgLS1wdXJwbGU6ICM5MTZkYjM7XFxuICAtLXRyYXNwYXJlbnRQaW5rOiAjZmRlNWVjO1xcbiAgLS10cmFuc3BhcmVudFBlYWNoOiAjZmNiYWFkO1xcbiAgLS10cmFuc3BhcmVudERhcmtQZWFjaDogI2U0ODU4NjtcXG5cXG4gIC0tcHVycGxlRmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSgxOCUpIHNhdHVyYXRlKDEwODElKSBodWUtcm90YXRlKDIyOGRlZylcXG4gICAgYnJpZ2h0bmVzcyg4NyUpIGNvbnRyYXN0KDkwJSk7XFxuICAtLWRhcmtQZWFjaEZpbHRlcjogaW52ZXJ0KDU4JSkgc2VwaWEoODklKSBzYXR1cmF0ZSg0MDMlKSBodWUtcm90YXRlKDMwOWRlZylcXG4gICAgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg0JSk7XFxuXFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyRGlzcGxheVxcXCI7XFxuXFxuICAvKiBTdGVwIC0yOiAxMi41MHB4IOKGkiAxMi44MHB4ICovXFxuICAtLXN0ZXAtLTI6IGNsYW1wKDAuNzhyZW0sIGNhbGMoMC43N3JlbSArIDAuMDN2dyksIDAuOHJlbSk7XFxuXFxuICAvKiBTdGVwIC0xOiAxNS4wMHB4IOKGkiAxNi4wMHB4ICovXFxuICAtLXN0ZXAtLTE6IGNsYW1wKDAuOTRyZW0sIGNhbGMoMC45MnJlbSArIDAuMTF2dyksIDFyZW0pO1xcblxcbiAgLyogU3RlcCAwOiAxOC4wMHB4IOKGkiAyMC4wMHB4ICovXFxuICAtLXN0ZXAtMDogY2xhbXAoMS4xM3JlbSwgY2FsYygxLjA4cmVtICsgMC4yMnZ3KSwgMS4yNXJlbSk7XFxuXFxuICAvKiBTdGVwIDE6IDIxLjYwcHgg4oaSIDI1LjAwcHggKi9cXG4gIC0tc3RlcC0xOiBjbGFtcCgxLjM1cmVtLCBjYWxjKDEuMjhyZW0gKyAwLjM3dncpLCAxLjU2cmVtKTtcXG5cXG4gIC8qIFN0ZXAgMjogMjUuOTJweCDihpIgMzEuMjVweCAqL1xcbiAgLS1zdGVwLTI6IGNsYW1wKDEuNjJyZW0sIGNhbGMoMS41cmVtICsgMC41OHZ3KSwgMS45NXJlbSk7XFxuXFxuICAvKiBTdGVwIDM6IDMxLjEwcHgg4oaSIDM5LjA2cHggKi9cXG4gIC0tc3RlcC0zOiBjbGFtcCgxLjk0cmVtLCBjYWxjKDEuNzdyZW0gKyAwLjg3dncpLCAyLjQ0cmVtKTtcXG5cXG4gIC8qIFN0ZXAgNDogMzcuMzJweCDihpIgNDguODNweCAqL1xcbiAgLS1zdGVwLTQ6IGNsYW1wKDIuMzNyZW0sIGNhbGMoMi4wOHJlbSArIDEuMjV2dyksIDMuMDVyZW0pO1xcblxcbiAgLyogU3RlcCA1OiA0NC43OXB4IOKGkiA2MS4wNHB4ICovXFxuICAtLXN0ZXAtNTogY2xhbXAoMi44cmVtLCBjYWxjKDIuNDVyZW0gKyAxLjc3dncpLCAzLjgycmVtKTtcXG59XFxuXFxuLmRhcmstdGhlbWUge1xcbiAgLS1waW5rOiAjOTE2ZGIzO1xcbiAgLS1wZWFjaDogI2U0ODU4NjtcXG4gIC0tZGFya1BlYWNoOiAjZmNiYWFkO1xcbiAgLS1wdXJwbGU6ICNmZGU1ZWM7XFxuICAtLXRyYXNwYXJlbnRQaW5rOiAjZmRlNWVjO1xcbiAgLS10cmFuc3BhcmVudFBlYWNoOiAjZmNiYWFkO1xcbiAgLS10cmFuc3BhcmVudERhcmtQZWFjaDogI2U0ODU4NjtcXG5cXG4gIC0tcHVycGxlRmlsdGVyOiBpbnZlcnQoNTglKSBzZXBpYSg4OSUpIHNhdHVyYXRlKDQwMyUpIGh1ZS1yb3RhdGUoMzA5ZGVnKVxcbiAgICBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODQlKTtcXG4gIC0tZGFya1BlYWNoRmlsdGVyOiBpbnZlcnQoODYlKSBzZXBpYSgxMiUpIHNhdHVyYXRlKDMwNiUpIGh1ZS1yb3RhdGUoMjk3ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDk4JSk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiNjb250ZW50IHtcXG4gIC8qIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qICNoZWFkZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0gKi9cXG5cXG4uc2VjdGlvbi1oZWFkZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gc3R5bGluZyAqL1xcblxcbiNuYXYtY29udGFpbmVyLW1haW4ge1xcbiAgei1pbmRleDogOTk5OTk7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBwYWRkaW5nOiAxcmVtIG1heCg2dncsIDJyZW0pO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogbWF4KDR2dywgMnJlbSk7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IG1heCg0dncsIDJyZW0pO1xcbn1cXG5cXG4jbmF2LWxvZ28ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4ubmF2LWl0ZW0sXFxuLmRyb3AtZG93bi1pdGVtIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctdG9wIDFzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXJpZ2h0IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2LWl0ZW06aG92ZXIsXFxuLm5hdi1pdGVtOmZvY3VzLFxcbi5kcm9wLWRvd24taXRlbTpob3ZlcixcXG4uZHJvcC1kb3duLWl0ZW06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4vKiBTd2l0Y2ggZGFyayBtb2RlIGJ0biBzdHlsaW5nICovXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoMCAwIDAgLyA1MCUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4NVxcXCI7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tcGluayk7ICovXFxuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODZcXFwiO1xcbiAgLyogY29sb3I6IHZhcigtLXB1cnBsZSk7ICovXFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpOyAqL1xcbn1cXG5cXG4vKiBEcm9wIGRvd24gbWVudSBzdHlsaW5nICovXFxuXFxuI2Ryb3AtZG93bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyb3AtZG93bi1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5kcm9wLWRvd24tYnRuOjpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xcbn1cXG4uZHJvcC1kb3duLWJ0bjpob3ZlcixcXG4uZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0bixcXG4ubmF2LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4jZHJvcC1kb3duLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGNhbGMoMTAwJSArIDAuMjVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVhY2gpO1xcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yMzgpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE1cHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4jZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0biArICNkcm9wLWRvd24tbWVudSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4uZHJvcC1kb3duLWl0ZW0ge1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi8qIEhlcm8gc3R5bGluZyAqL1xcblxcbiNoZXJvIHtcXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA5NnB4O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbiAgcGFkZGluZzogMnJlbSBtYXgoNXZ3LCAycmVtKTtcXG4gIC8qIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyOyAqL1xcbn1cXG5cXG4jYmlnLWxvZ28ge1xcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICAvKiBtaW4td2lkdGg6IDMwMHB4OyAqL1xcbn1cXG5cXG4jaGVyby10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC00KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICB3aWR0aDogbWF4KDQ1dncsIDI4MHB4KTtcXG4gIC8qIGxpbmUtaGVpZ2h0OiA0cmVtOyAqL1xcbn1cXG5cXG4vKiBBbmltYXRpb25zICovXFxuXFxuLmhpZGRlbi1sZWZ0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB0cmFuc2l0aW9uOiAzcztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgZmlsdGVyO1xcbn1cXG5cXG4uc2hvdy1sZWZ0IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBmaWx0ZXI6IGJsdXIoMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcblxcbi8qIC5oaWRkZW4tcmlnaHQge1xcbiAgb3BhY2l0eTogMDtcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogM3M7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGZpbHRlcjtcXG59XFxuXFxuLnNob3ctcmlnaHQge1xcbiAgb3BhY2l0eTogMTtcXG4gIGZpbHRlcjogYmx1cigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59ICovXFxuXFxuLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXFxuXFxuI2Fib3V0LW1lIHtcXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA5NnB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNjBweDtcXG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XFxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuI2Fib3V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IG1heCg0NXZ3LCAzNTBweCk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuI2Fib3V0LW1lLW5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFib3V0LW5hdi1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLWxlZnQgMXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctdG9wIDFzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXJpZ2h0IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWJvdXQtbmF2LWl0ZW06aG92ZXIsXFxuLmFib3V0LW5hdi1pdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuI2Fib3V0LW1lLXRleHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuXFxuI3BvcnRyaWF0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAyMHB4IC04cHggdmFyKC0tcHVycGxlKTtcXG4gIHdpZHRoOiBtYXgoMzB2dywgMzAwcHgpO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jcG9ydHJpYXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMjBweCA4cHggdmFyKC0tZGFya1BlYWNoKTtcXG59XFxuXFxuLyogU2tpbGxzIHN0eWxpbmcgKi9cXG5cXG4uc2tpbGxzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE1cHg7XFxuICByb3ctZ2FwOiA1MHB4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoODBweCwgMWZyKSk7XFxuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDYwcHgsIDFmcikpOyAqL1xcbn1cXG5cXG4uc2tpbGxzLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnNraWxsLXBpYyB7XFxuICB3aWR0aDogNTBweDtcXG4gIC8qIGZpbHRlcjogaW52ZXJ0KDU4JSkgc2VwaWEoODklKSBzYXR1cmF0ZSg0MDMlKSBodWUtcm90YXRlKDMwOWRlZylcXG4gICAgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg0JSk7ICovXFxuICBmaWx0ZXI6IHZhcigtLWRhcmtQZWFjaEZpbHRlcik7XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNraWxsLXBpYzpob3ZlciB7XFxuICAvKiBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDE4JSkgc2F0dXJhdGUoMTA4MSUpIGh1ZS1yb3RhdGUoMjI4ZGVnKVxcbiAgICBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoOTAlKTsgKi9cXG4gIGZpbHRlcjogdmFyKC0tcHVycGxlRmlsdGVyKTtcXG59XFxuXFxuLnNraWxsLW5hbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBQcm9qZWN0cyBzZWN0aW9uICovXFxuXFxuI3Byb2plY3RzIHtcXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA5NnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbGFzcy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0cy1jYXJvdXNlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLmNhcm91c2VsLXVsIHtcXG4gIC0tc2xpZGVyLWluZGV4OiAwO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgd2lkdGg6IG1heCg2MHZ3LCA0MDBweCk7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWF1dG8tY29sdW1uczogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZTogY29udGFpbjtcXG59XFxuXFxuLmNhcm91c2VsLXVsOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtID4gaW1nIHtcXG4gIGlubGluZS1zaXplOiA3MCU7XFxuICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRleHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbn1cXG5cXG4ucHJvai1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucHJvai1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dCwgcGFkZGluZy1ib3R0b20gMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctbGVmdCAxcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAxcyBlYXNlLWluLW91dCxcXG4gICAgcGFkZGluZy10b3AgMXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctcmlnaHQgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qLWJ0bjpob3ZlcixcXG4ucHJvai1idG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4jYnRuLWxlZnQ6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LWZhbWlseTogXFxcImZvbnRBd2Vzb21lXFxcIjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1M1xcXCI7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNidG4tcmlnaHQ6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LWZhbWlseTogXFxcImZvbnRBd2Vzb21lXFxcIjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NFxcXCI7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLyogQ29udGFjdHMgc2VjdGlvbiBzdHlsaW5nICovXFxuXFxuI2NvbnRhY3RzIHtcXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA5NnB4O1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDYwcHg7XFxuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxufVxcblxcbi5jb250YWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNTBweDtcXG4gIHdpZHRoOiBtYXgoNDB2dywgMzUwcHgpO1xcbn1cXG5cXG4uY29udGFjdHMtaGVybyB7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnRuLWxpbiB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uYnRuLWVtYWlsLFxcbi5idG4tZ2l0aHViIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uY29udC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dCwgcGFkZGluZy1ib3R0b20gMXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctbGVmdCAxcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAxcyBlYXNlLWluLW91dCxcXG4gICAgcGFkZGluZy10b3AgMXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctcmlnaHQgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb250LWJ0bjpob3ZlcixcXG4uY29udC1idG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uYnRuLWVtYWlsOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJmb250QXdlc29tZVxcXCI7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTBcXFwiO1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4uYnRuLWxpbjo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZm9udEF3ZXNvbWVcXFwiO1xcbiAgY29udGVudDogXFxcIlxcXFxmMDhjXFxcIjtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLmJ0bi1naXRodWI6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LWZhbWlseTogXFxcImZvbnRBd2Vzb21lXFxcIjtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YlxcXCI7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi8qIEZvb3RlciBzdHlsaW5nICovXFxuXFxuI2Zvb3RlciB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnaXRodWItbGluazo6YWZ0ZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJmb250QXdlc29tZVxcXCI7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWJcXFwiO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4vKiBNb2JpbGUgdmVyc2lvbiBzdHlsaW5nICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAvKiBOYXYgdG8gZHJvcC1kb3duICovXFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNkcm9wLWRvd24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAvKiBIZXJvIGF0eWxpbmcgKi9cXG4gICNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgI2hlcm8ge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjaGVyby10ZXh0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICB9XFxuXFxuICAvKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cXG4gICNhYm91dC1tZSB7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuXFxuICAjYWJvdXQtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgfVxcblxcbiAgLyogUHJvamVjdHMgc2VjdGlvbiAqL1xcbiAgI3Byb2plY3RzIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG5cXG4gIC8qIENvbnRhY3RzIHNlY3Rpb24gKi9cXG4gICNjb250YWN0cyB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxufVxcblxcbi8qIFRhYmxldCBzdHlsaW5nICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAvKiBOYXYgdG8gZHJvcC1kb3duICovXFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNkcm9wLWRvd24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAvKiBIZXJvIHN0eWxpbmcgKi9cXG4gICNoZWFkZXIge1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB9XFxuXFxuICAjYmlnLWxvZ28ge1xcbiAgICB3aWR0aDogbWF4KDQwdncsIDQwMHB4KTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB9XFxuXFxuICAjaGVyby10ZXh0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICB9XFxuXFxuICAjaGVybyB7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXFxuICAjYWJvdXQtbWUge1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgfVxcblxcbiAgI2Fib3V0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBtYXgoODB2dywgNTAwcHgpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG4gIH1cXG5cXG4gIC5za2lsbHMtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxuICB9XFxuXFxuICAvKiBQcm9qZWN0cyBzZWN0aW9uICovXFxuICAjcHJvamVjdHMge1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICB9XFxuXFxuICAuY2Fyb3VzZWwtdWwge1xcbiAgICB3aWR0aDogODB2dztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWl0ZW0sXFxuICAucHJvamVjdC10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGdhcDogNDBweDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGl0bGUsXFxuICAucHJvai1idG4tY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xcbiAgfVxcblxcbiAgLyogQ29udGFjdHMgc2VjdGlvbiAqL1xcbiAgI2NvbnRhY3RzIHtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICB9XFxuXFxuICAuY29udGFjdHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGdhcDogMTAwcHg7XFxuICB9XFxuICAvKiAjcG9ydHJpYXQge1xcbiAgICB3aWR0aDogbWF4KDUwdncsIDUwMHB4KTtcXG4gIH0gKi9cXG59XFxuXFxuLyogVGFibGV0IHNtYWxsIGhlaWdodCAqL1xcbkBtZWRpYSAobWF4LWhlaWdodDogNzUwcHgpIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgI2hlYWRlcixcXG4gICNhYm91dC1tZSB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LWhlaWdodDogMTAwMHB4KSBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICNoZXJvIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG5cXG4gIC8qICNwcm9qZWN0cyB7XFxuICAgIGhlaWdodDogODB2aDtcXG4gIH0gKi9cXG5cXG4gIC5jYXJvdXNlbC11bCB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgfVxcblxcbiAgLnByb2plY3QtaXRlbSxcXG4gIC5wcm9qZWN0LXRleHQtY29udGFpbmVyIHtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMSk7XFxuICB9XFxuXFxuICAucHJvamVjdC10aXRsZSxcXG4gIC5wcm9qLWJ0bi1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxuICB9XFxuXFxuICAvKiBDb250YWN0cyBzZWN0aW9uICovXFxuICAjY29udGFjdHMge1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcXG4gIH1cXG5cXG4gIC5jb250YWN0cy1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgZ2FwOiA1MHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJzbWFsbExvZ28iLCJiaWdMb2dvIiwicG9ydHJpYXQiLCJqc0ljb24iLCJjc3NJY29uIiwiaHRtbEljb24iLCJnaXRJY29uIiwiZ2l0SHViSWNvbiIsIm5wbUljb24iLCJiYWJlbEljb24iLCJDTEljb24iLCJlc2xpbnRJY29uIiwicHJldHRpZXJJY29uIiwidnNjb2RlSWNvbiIsIndlYnBhY2tJY29uIiwid2VhdGhlckxJY29uIiwid2VhdGhlckRJY29uIiwidG9kb0xJY29uIiwidG9kb0RJY29uIiwicmVzdGFyYXVudExJY29uIiwicmVzdGFyYXVudERJY29uIiwidGljdGFjdG9lTEljb24iLCJ0aWN0YWN0b2VESWNvbiIsImxpYnJhcnlMSWNvbiIsImxpYnJhcnlESWNvbiIsIlVJIiwic2hvd1BpY3R1cmVzIiwic21hbGxMb2dvSW1nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNyYyIsImJpZ0xvZ29JbWciLCJwb3J0cmlhdEltZyIsImRyb3BEb3duVUkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImlzRHJvcGRvd25CdG4iLCJ0YXJnZXQiLCJtYXRjaGVzIiwiY2xvc2VzdCIsImN1cnJlbnREcm9wZG93biIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJvcGRvd24iLCJyZW1vdmUiLCJjaGFuZ2VBYm91dE1lQ29udGVudCIsImFib3V0TWVDb250YWluZXIiLCJteVN0b3J5QnRuIiwiZWR1Y2F0aW9uQnRuIiwic2tpbGxzQnRuIiwiaW5uZXJIVE1MIiwiY3JlYXRlUHJvamVjdHMiLCJ3ZWF0aGVyUGljIiwidG9kb1BpYyIsInJlc3RhcmF1bnRQaWMiLCJ0aWN0YWN0b2VQaWMiLCJsaWJyYXJ5UGljIiwicHJvamVjdHNTZWN0aW9uIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFByb2oiLCJzY3JvbGxDb250YWluZXIiLCJiYWNrQnRuIiwibmV4dEJ0biIsInByb2plY3RJdGVtIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsInNjcm9sbEJlaGF2aW9yIiwic2Nyb2xsTGVmdCIsImRlbHRhWSIsIml0ZW1TaXplIiwib2Zmc2V0V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJjcmVhdGVGb290ZXIiLCJmb290ZXJDb250YWluZXIiLCJjb3B5cmlnaHQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzZXRBdHRyaWJ1dGUiLCJnaXRodWJMaW5rIiwiaHJlZiIsImFwcGVuZENoaWxkIiwidG9nZ2xlTW9kZSIsInRvZ2dsZUJ0biIsImJvZHkiLCJjb250YWlucyIsInNjcm9sbEFuaW1hdGlvbiIsIm9ic2VydmVyTGVmdCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJhZGQiLCJoaWRkZW5FbGVtZW50c0xlZnQiLCJlbCIsIm9ic2VydmUiLCJvYnNlcnZlclJpZ2h0IiwiaGlkZGVuRWxlbWVudHNSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=