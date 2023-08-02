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
  showPictures();
  dropDownUI();
  changeAboutMeContent();
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
  border-bottom: solid 2px var(--purple);
  text-align: end;
  transition: background-color 0.3s ease-in-out, padding-bottom 0.3s ease-in-out,
    padding-left 0.3s ease-in-out, border-radius 0.5s ease-in-out;
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
  border-bottom: solid 2px var(--purple);
  text-align: end;

  transition: background-color 0.5s ease-in-out, padding-bottom 0.5s ease-in-out,
    padding-left 0.5s ease-in-out, border-radius 0.5s ease-in-out;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\na {\n  all: unset;\n}\n\n/* General space styling */\n@font-face {\n  font-family: \"PlayfairDisplay\";\n  src: url(/src/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Bold.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Regular.ttf);\n}\n\n:root {\n  --pink: #fde5ec;\n  --peach: #fcbaad;\n  --darkPeach: #e48586;\n  --purple: #916db3;\n  --trasparentPink: #fde5ec;\n  --transparentPeach: #fcbaad;\n  --transparentDarkPeach: #e48586;\n\n  font-family: \"PlayfairDisplay\";\n\n  /* Step -2: 12.50px → 12.80px */\n  --step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem);\n\n  /* Step -1: 15.00px → 16.00px */\n  --step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem);\n\n  /* Step 0: 18.00px → 20.00px */\n  --step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);\n\n  /* Step 1: 21.60px → 25.00px */\n  --step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);\n\n  /* Step 2: 25.92px → 31.25px */\n  --step-2: clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);\n\n  /* Step 3: 31.10px → 39.06px */\n  --step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);\n\n  /* Step 4: 37.32px → 48.83px */\n  --step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);\n\n  /* Step 5: 44.79px → 61.04px */\n  --step-5: clamp(2.8rem, calc(2.45rem + 1.77vw), 3.82rem);\n}\n\nbody {\n  background-color: var(--pink);\n  font-size: var(--step-0);\n}\n\n#content {\n  /* height: 100%;\n  width: 100%; */\n  display: grid;\n  align-content: space-between;\n}\n\n#header {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 6fr;\n  align-items: center;\n}\n\n/* Navigation styling */\n\n#nav-container-main {\n  font-size: var(--step-1);\n  color: var(--pink);\n  font-weight: bold;\n  background-color: var(--darkPeach);\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n  padding: 1rem max(6vw, 2rem);\n  position: sticky;\n  top: 0;\n  align-self: start;\n}\n\n.nav-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: max(4vw, 2rem);\n}\n\n.nav {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  gap: max(4vw, 2rem);\n}\n\n#nav-logo {\n  width: 100px;\n}\n\n.nav-item,\n.drop-down-item {\n  padding-bottom: 10px;\n  padding-left: 15px;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n  transition: background-color 0.3s ease-in-out, padding-bottom 0.3s ease-in-out,\n    padding-left 0.3s ease-in-out, border-radius 0.5s ease-in-out;\n}\n\n.nav-item:hover,\n.nav-item:focus,\n.drop-down-item:hover,\n.drop-down-item:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n/* Switch dark mode btn styling */\ninput[type=\"checkbox\"] {\n  position: relative;\n  width: 60px;\n  height: 30px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: var(--pink);\n  outline: none;\n  border-radius: 2rem;\n  cursor: pointer;\n  box-shadow: inset 0 0 5px rgb(0 0 0 / 50%);\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--purple);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.5s;\n  font-family: fontAwesome;\n  content: \"\\f185\";\n  color: var(--pink);\n  display: grid;\n  place-items: center;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: translateX(100%);\n  background: var(--pink);\n  font-family: fontAwesome;\n  content: \"\\f186\";\n  color: var(--purple);\n}\n\ninput[type=\"checkbox\"]:checked {\n  background: var(--purple);\n}\n\n/* Drop down menu styling */\n\n#drop-down-container {\n  display: none;\n  position: relative;\n}\n\n.drop-down-btn {\n  background-color: var(--pink);\n  width: 35px;\n  height: 35px;\n  border-radius: 10px;\n}\n\n.drop-down-btn::before {\n  font-family: fontAwesome;\n  content: \"\\f0c9\";\n  color: var(--darkPeach);\n  font-size: var(--step-1);\n}\n.drop-down-btn:hover,\n.drop-down-container.active > .drop-down-btn,\n.nav-btn:hover {\n  background-color: var(--purple);\n}\n\n#drop-down-menu {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 0.25rem);\n  background-color: var(--peach);\n  color: var(--darkPeach);\n  padding: 20px;\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.238);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-10px);\n  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n  display: grid;\n  gap: 15px;\n  z-index: 9999;\n}\n\n#drop-down-container.active > .drop-down-btn + #drop-down-menu {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n  z-index: 9999;\n}\n\n.drop-down-item {\n  color: var(--purple);\n}\n\n/* Hero styling */\n\n#hero {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  padding: 2rem max(5vw, 2rem);\n  /* justify-self: center;\n  grid-template-columns: 1fr 2fr; */\n}\n\n#big-logo {\n  width: max(30vw, 300px);\n  padding: 0 2rem;\n  /* min-width: 300px; */\n}\n\n#hero-text {\n  font-size: var(--step-4);\n  color: var(--darkPeach);\n  font-weight: bold;\n  padding: 0 2rem;\n  width: max(45vw, 280px);\n  /* line-height: 4rem; */\n}\n\n/* About me section styling */\n\n#about-me {\n  height: 100vh;\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  place-content: center;\n  gap: 60px;\n  padding: 2rem max(2vw, 2rem);\n  color: var(--purple);\n}\n\n#about-container {\n  display: grid;\n  gap: 20px;\n  width: max(45vw, 350px);\n  justify-items: start;\n}\n\n#about-me-nav {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 20px;\n  list-style: none;\n  font-weight: bold;\n}\n\n.about-nav-item {\n  background-color: inherit;\n  color: var(--darkPeach);\n  padding-bottom: 10px;\n  padding-left: 15px;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n\n  transition: background-color 0.5s ease-in-out, padding-bottom 0.5s ease-in-out,\n    padding-left 0.5s ease-in-out, border-radius 0.5s ease-in-out;\n}\n\n.about-nav-item:hover,\n.about-nav-item:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n#about-me-text {\n  width: 100%;\n  line-height: 2rem;\n  padding: 2rem 0;\n}\n\n.about-me-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n\n/* .about-me-header > li {\n  list-style: ;\n} */\n\n#portriat {\n  border-radius: 20px;\n  box-shadow: 10px -8px var(--purple);\n  width: max(30vw, 300px);\n}\n\n/* Skills styling */\n\n.skills-container {\n  width: 100%;\n  display: grid;\n  gap: 15px;\n  row-gap: 50px;\n  place-content: center;\n  place-items: center;\n  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));\n  /* grid-template-rows: repeat(auto-fit, minmax(60px, 1fr)); */\n}\n\n.skills-item {\n  display: grid;\n  place-content: center;\n  place-items: center;\n  gap: 5px;\n}\n\n.skill-pic {\n  width: 50px;\n  filter: invert(58%) sepia(89%) saturate(403%) hue-rotate(309deg)\n    brightness(97%) contrast(84%);\n  transition: filter 0.5s ease-in-out;\n}\n\n.skill-pic:hover {\n  filter: invert(53%) sepia(18%) saturate(1081%) hue-rotate(228deg)\n    brightness(87%) contrast(90%);\n}\n\n.skill-name {\n  text-align: center;\n}\n\n/* Mobile version styling */\n\n@media (max-width: 600px) {\n  /* Nav to drop-down */\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n  }\n\n  /* Hero atyling */\n  #header {\n    height: fit-content;\n  }\n\n  #hero {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n  }\n\n  #hero-text {\n    width: 80%;\n    line-height: 3rem;\n  }\n\n  /* About me section styling */\n  #about-me {\n    grid-auto-flow: row;\n    height: fit-content;\n  }\n\n  #about-container {\n    justify-items: center;\n    text-align: justify;\n  }\n}\n\n/* Tablet styling */\n\n@media (min-width: 600px) and (max-width: 1000px) {\n  /* Nav to drop-down */\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n  }\n\n  /* Hero styling */\n  #header {\n    align-items: start;\n  }\n\n  #big-logo {\n    width: max(40vw, 400px);\n    justify-self: end;\n  }\n\n  #hero-text {\n    width: 80%;\n    line-height: 4rem;\n  }\n\n  #hero {\n    grid-auto-flow: row;\n    justify-items: center;\n  }\n\n  /* About me section styling */\n  #about-me {\n    grid-auto-flow: row;\n  }\n\n  #about-container {\n    width: max(80vw, 500px);\n    justify-items: center;\n    text-align: justify;\n    font-size: var(--step-2);\n  }\n\n  .skills-container {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  }\n\n  /* #portriat {\n    width: max(50vw, 500px);\n  } */\n}\n\n/* Tablet small height */\n@media (max-height: 750px) and (min-width: 600px) {\n  #header,\n  #about-me {\n    height: fit-content;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLE9BQU8sTUFBTSxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGdCQUFnQixVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLE9BQU8sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxh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QTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNtYWxsTG9nbyBmcm9tIFwiLi9pbWFnZXMvc21hbGwtbG9nby5wbmdcIjtcbmltcG9ydCBiaWdMb2dvIGZyb20gXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IHBvcnRyaWF0IGZyb20gXCIuL2ltYWdlcy9wb3J0cmlhdC5qcGdcIjtcbmltcG9ydCBqc0ljb24gZnJvbSBcIi4vaW1hZ2VzL2pzLnN2Z1wiO1xuaW1wb3J0IGNzc0ljb24gZnJvbSBcIi4vaW1hZ2VzL2Nzcy5zdmdcIjtcbmltcG9ydCBodG1sSWNvbiBmcm9tIFwiLi9pbWFnZXMvaHRtbC5zdmdcIjtcbmltcG9ydCBnaXRJY29uIGZyb20gXCIuL2ltYWdlcy9naXQuc3ZnXCI7XG5pbXBvcnQgZ2l0SHViSWNvbiBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IG5wbUljb24gZnJvbSBcIi4vaW1hZ2VzL25wbS5zdmdcIjtcbmltcG9ydCBiYWJlbEljb24gZnJvbSBcIi4vaW1hZ2VzL2JhYmVsLnN2Z1wiO1xuaW1wb3J0IENMSWNvbiBmcm9tIFwiLi9pbWFnZXMvY29tbWFuZExpbmUuc3ZnXCI7XG5pbXBvcnQgZXNsaW50SWNvbiBmcm9tIFwiLi9pbWFnZXMvZXNsaW50LnN2Z1wiO1xuaW1wb3J0IHByZXR0aWVySWNvbiBmcm9tIFwiLi9pbWFnZXMvcHJldHRpZXIuc3ZnXCI7XG5pbXBvcnQgdnNjb2RlSWNvbiBmcm9tIFwiLi9pbWFnZXMvdnNjb2RlLnN2Z1wiO1xuaW1wb3J0IHdlYnBhY2tJY29uIGZyb20gXCIuL2ltYWdlcy93ZWJwYWNrLnN2Z1wiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIC8vIFB1dHRpbmcgc3JjIGF0dHJpYnV0ZSBvbiBldmVyeSBpbWFnZVxuICBmdW5jdGlvbiBzaG93UGljdHVyZXMoKSB7XG4gICAgY29uc3Qgc21hbGxMb2dvSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbG9nb1wiKTtcbiAgICBzbWFsbExvZ29JbWcuc3JjID0gc21hbGxMb2dvO1xuXG4gICAgY29uc3QgYmlnTG9nb0ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlnLWxvZ29cIik7XG4gICAgYmlnTG9nb0ltZy5zcmMgPSBiaWdMb2dvO1xuXG4gICAgY29uc3QgcG9ydHJpYXRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRyaWF0XCIpO1xuICAgIHBvcnRyaWF0SW1nLnNyYyA9IHBvcnRyaWF0O1xuICB9XG5cbiAgLy8gbWFrZSBkcm9wLWRvd24gbWVudSBub3QgdG8gZGlzYXBwZWFyIHdoZW4geW91IGNsaWNrIG9uIGl0XG4gIC8vIChhbmQgYWxzbyBpbmNsdWRlIHRvZ2dsZSBvZiBhY3RpdmUgY2xhc3MgaWYgeW91bGwgaGF2ZSBtYW55IG1lbnUgYnV0dG9ucylcbiAgZnVuY3Rpb24gZHJvcERvd25VSSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlzRHJvcGRvd25CdG4gPSBlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtZHJvcGRvd24tYnRuXVwiKTtcbiAgICAgIGlmICghaXNEcm9wZG93bkJ0biAmJiBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtZHJvcGRvd25dXCIpICE9IG51bGwpIHJldHVybjtcblxuICAgICAgbGV0IGN1cnJlbnREcm9wZG93bjtcbiAgICAgIGlmIChpc0Ryb3Bkb3duQnRuKSB7XG4gICAgICAgIGN1cnJlbnREcm9wZG93biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1kcm9wZG93bl1cIik7XG4gICAgICAgIGN1cnJlbnREcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRyb3Bkb3duXS5hY3RpdmVcIilcbiAgICAgICAgLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgaWYgKGRyb3Bkb3duID09PSBjdXJyZW50RHJvcGRvd24pIHJldHVybjtcbiAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZUFib3V0TWVDb250ZW50KCkge1xuICAgIGNvbnN0IGFib3V0TWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LW1lLXRleHRcIik7XG5cbiAgICBjb25zdCBteVN0b3J5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1zdG9yeVwiKTtcbiAgICBjb25zdCBlZHVjYXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhdGlvblwiKTtcbiAgICBjb25zdCBza2lsbHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraWxsc1wiKTtcblxuICAgIG15U3RvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgXCJIZWxsbyB0aGVyZSE8YnIvPjxici8+SSdtIEVrYXRlcmluYSBWZWxhenF1ZXosIGEgcGFzc2lvbmF0ZSBGcm9udGVuZCBEZXZlbG9wZXIgYmFzZWRpbiB0aGUgVUsuIEluIGVhcmx5IDIwMjIsIEkgZGlzY292ZXJlZCBteSBsb3ZlIGZvciBjb2RpbmcsIGFuZCBzaW5jZSB0aGVuLCBJJ3ZlIGJlZW4gb24gYW4gZXhjaXRpbmcgam91cm5leSwgZGVkaWNhdGVkbHkgc3R1ZHlpbmcgYW5kIGltcHJvdmluZyBteSBza2lsbHMgdG8gdGhpcyBkYXkuPGJyLz48YnIvPkFzIGEgc2VsZi10YXVnaHQgZW50aHVzaWFzdCwgSSBmaW5kIGltbWVuc2Ugam95IGluIG92ZXJjb21pbmcgY29kaW5nIGNoYWxsZW5nZXMgYW5kIGNyZWF0aW5nIHZpc3VhbGx5IGNhcHRpdmF0aW5nIHdlYnNpdGVzLiBJIGZpcm1seSBiZWxpZXZlIHRoYXQgcGVyc2lzdGVuY2UgYW5kIGRlZGljYXRpb24gaG9sZCB0aGUga2V5IHRvY29ucXVlcmluZyBhbnkgb2JzdGFjbGUuIEknbSBjb21taXR0ZWQgdG8gZGVsaXZlcmluZyBzZWFtbGVzcyB1c2VyIGV4cGVyaWVuY2VzIHRocm91Z2ggc2ltcGxlIGFuZCBlbGVnYW50IGNvZGUuIExldCdzIGNvbGxhYm9yYXRlIGFuZCBlbWJhcmsgb24gZXhjaXRpbmcgZW5kZWF2b3JzIHRvZ2V0aGVyIVwiO1xuICAgIH0pO1xuXG4gICAgZWR1Y2F0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhYm91dE1lQ29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgICc8bGk+XCJGdWxsLVN0YWNrIEphdmFTY3JpcHRcIiBjb3Vyc2UgYXQgVGhlIE9kaW4gUHJvamVjdDwvbGk+PC9icj48bGk+QmFjaGVsb3JzIGRlZ3JlZSBpbiBDb21wdXRlciBTY2llbmNlLCBNb3Njb3cgVW5pdmVyc2l0eSBuYW1lZCBhZnRlciBTLiBVLiBXaXR0ZSAoMjAyMiAtIHRvIHRoaXMgZGF5LCBvbmxpbmUgc3R1ZHlpbmcpPC9saT48L2JyPjxsaT5CYWNoZWxvcnMgZGVncmVlIGluIFBvbGl0aWNhbCBTY2llbmNlLCBNb3Njb3cgU3RhdGUgVW5pdmVyc2l0eSBuYW1lZCBhZnRlciBNLiBWLiBMb21vbm9zb3YgKDIwMTgtMjAyMik8L2xpPic7XG4gICAgfSk7XG5cbiAgICBza2lsbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGFib3V0TWVDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2pzSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkpTXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkpTPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aHRtbEljb259XCIgYWx0PVwiXCIgaWQ9XCJIVE1MXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkhUTUw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjc3NJY29ufVwiIGFsdD1cIlwiIGlkPVwiQ1NTXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkNTUzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2dpdEljb259XCIgYWx0PVwiXCIgaWQ9XCJHaXRcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+R2l0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Z2l0SHViSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkdpdEh1YlwiIGNsYXNzPVwic2tpbGwtcGljXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLW5hbWVcIj5HaXRodWI8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt3ZWJwYWNrSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIldlYnBhY2tcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+V2VicGFjazwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2JhYmVsSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkJhYmVsXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkJhYmVsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZXNsaW50SWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkxpbnRcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+RVNMaW50PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtaXRlbVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJldHRpZXJJY29ufVwiIGFsdD1cIlwiIGlkPVwiUHJldHRpZXJcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+UHJldHRpZXI8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtucG1JY29ufVwiIGFsdD1cIlwiIGlkPVwibnBtXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPk5wbTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke0NMSWNvbn1cIiBhbHQ9XCJcIiBpZD1cIkNMXCIgY2xhc3M9XCJza2lsbC1waWNcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtbmFtZVwiPkNvbW1hbmQgTGluZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ZzY29kZUljb259XCIgYWx0PVwiXCIgaWQ9XCJWc2NvZGVcIiBjbGFzcz1cInNraWxsLXBpY1wiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1uYW1lXCI+VlMgQ29kZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1BpY3R1cmVzKCk7XG4gIGRyb3BEb3duVUkoKTtcbiAgY2hhbmdlQWJvdXRNZUNvbnRlbnQoKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9VSVwiO1xuXG5VSSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9QbGF5ZmFpckRpc3BsYXktVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogUmVzZXQgKi9cblxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmJ1dHRvbixcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IGluaGVyaXQ7XG59XG5cbmEge1xuICBhbGw6IHVuc2V0O1xufVxuXG4vKiBHZW5lcmFsIHNwYWNlIHN0eWxpbmcgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpckRpc3BsYXlcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xufVxuXG46cm9vdCB7XG4gIC0tcGluazogI2ZkZTVlYztcbiAgLS1wZWFjaDogI2ZjYmFhZDtcbiAgLS1kYXJrUGVhY2g6ICNlNDg1ODY7XG4gIC0tcHVycGxlOiAjOTE2ZGIzO1xuICAtLXRyYXNwYXJlbnRQaW5rOiAjZmRlNWVjO1xuICAtLXRyYW5zcGFyZW50UGVhY2g6ICNmY2JhYWQ7XG4gIC0tdHJhbnNwYXJlbnREYXJrUGVhY2g6ICNlNDg1ODY7XG5cbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXJEaXNwbGF5XCI7XG5cbiAgLyogU3RlcCAtMjogMTIuNTBweCDihpIgMTIuODBweCAqL1xuICAtLXN0ZXAtLTI6IGNsYW1wKDAuNzhyZW0sIGNhbGMoMC43N3JlbSArIDAuMDN2dyksIDAuOHJlbSk7XG5cbiAgLyogU3RlcCAtMTogMTUuMDBweCDihpIgMTYuMDBweCAqL1xuICAtLXN0ZXAtLTE6IGNsYW1wKDAuOTRyZW0sIGNhbGMoMC45MnJlbSArIDAuMTF2dyksIDFyZW0pO1xuXG4gIC8qIFN0ZXAgMDogMTguMDBweCDihpIgMjAuMDBweCAqL1xuICAtLXN0ZXAtMDogY2xhbXAoMS4xM3JlbSwgY2FsYygxLjA4cmVtICsgMC4yMnZ3KSwgMS4yNXJlbSk7XG5cbiAgLyogU3RlcCAxOiAyMS42MHB4IOKGkiAyNS4wMHB4ICovXG4gIC0tc3RlcC0xOiBjbGFtcCgxLjM1cmVtLCBjYWxjKDEuMjhyZW0gKyAwLjM3dncpLCAxLjU2cmVtKTtcblxuICAvKiBTdGVwIDI6IDI1LjkycHgg4oaSIDMxLjI1cHggKi9cbiAgLS1zdGVwLTI6IGNsYW1wKDEuNjJyZW0sIGNhbGMoMS41cmVtICsgMC41OHZ3KSwgMS45NXJlbSk7XG5cbiAgLyogU3RlcCAzOiAzMS4xMHB4IOKGkiAzOS4wNnB4ICovXG4gIC0tc3RlcC0zOiBjbGFtcCgxLjk0cmVtLCBjYWxjKDEuNzdyZW0gKyAwLjg3dncpLCAyLjQ0cmVtKTtcblxuICAvKiBTdGVwIDQ6IDM3LjMycHgg4oaSIDQ4LjgzcHggKi9cbiAgLS1zdGVwLTQ6IGNsYW1wKDIuMzNyZW0sIGNhbGMoMi4wOHJlbSArIDEuMjV2dyksIDMuMDVyZW0pO1xuXG4gIC8qIFN0ZXAgNTogNDQuNzlweCDihpIgNjEuMDRweCAqL1xuICAtLXN0ZXAtNTogY2xhbXAoMi44cmVtLCBjYWxjKDIuNDVyZW0gKyAxLjc3dncpLCAzLjgycmVtKTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XG59XG5cbiNjb250ZW50IHtcbiAgLyogaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTsgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2hlYWRlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogTmF2aWdhdGlvbiBzdHlsaW5nICovXG5cbiNuYXYtY29udGFpbmVyLW1haW4ge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBwYWRkaW5nOiAxcmVtIG1heCg2dncsIDJyZW0pO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdhcDogbWF4KDR2dywgMnJlbSk7XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogbWF4KDR2dywgMnJlbSk7XG59XG5cbiNuYXYtbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLm5hdi1pdGVtLFxuLmRyb3AtZG93bi1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAwLjNzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctbGVmdCAwLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5uYXYtaXRlbTpob3Zlcixcbi5uYXYtaXRlbTpmb2N1cyxcbi5kcm9wLWRvd24taXRlbTpob3Zlcixcbi5kcm9wLWRvd24taXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4vKiBTd2l0Y2ggZGFyayBtb2RlIGJ0biBzdHlsaW5nICovXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoMCAwIDAgLyA1MCUpO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcbiAgY29udGVudDogXCJcXFxcZjE4NVwiO1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBpbmspO1xuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XG4gIGNvbnRlbnQ6IFwiXFxcXGYxODZcIjtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcbn1cblxuLyogRHJvcCBkb3duIG1lbnUgc3R5bGluZyAqL1xuXG4jZHJvcC1kb3duLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3AtZG93bi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRyb3AtZG93bi1idG46OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcbiAgY29udGVudDogXCJcXFxcZjBjOVwiO1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xufVxuLmRyb3AtZG93bi1idG46aG92ZXIsXG4uZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0bixcbi5uYXYtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuI2Ryb3AtZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjI1cmVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVhY2gpO1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIzOCk7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTVweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuI2Ryb3AtZG93bi1jb250YWluZXIuYWN0aXZlID4gLmRyb3AtZG93bi1idG4gKyAjZHJvcC1kb3duLW1lbnUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uZHJvcC1kb3duLWl0ZW0ge1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuLyogSGVybyBzdHlsaW5nICovXG5cbiNoZXJvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbiAgcGFkZGluZzogMnJlbSBtYXgoNXZ3LCAycmVtKTtcbiAgLyoganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjsgKi9cbn1cblxuI2JpZy1sb2dvIHtcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgLyogbWluLXdpZHRoOiAzMDBweDsgKi9cbn1cblxuI2hlcm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC00KTtcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwIDJyZW07XG4gIHdpZHRoOiBtYXgoNDV2dywgMjgwcHgpO1xuICAvKiBsaW5lLWhlaWdodDogNHJlbTsgKi9cbn1cblxuLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXG5cbiNhYm91dC1tZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA2MHB4O1xuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuI2Fib3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjBweDtcbiAgd2lkdGg6IG1heCg0NXZ3LCAzNTBweCk7XG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xufVxuXG4jYWJvdXQtbWUtbmF2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFib3V0LW5hdi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAwLjVzIGVhc2UtaW4tb3V0LFxuICAgIHBhZGRpbmctbGVmdCAwLjVzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hYm91dC1uYXYtaXRlbTpob3Zlcixcbi5hYm91dC1uYXYtaXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4jYWJvdXQtbWUtdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuXG4uYWJvdXQtbWUtaGVhZGVyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTMpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogLmFib3V0LW1lLWhlYWRlciA+IGxpIHtcbiAgbGlzdC1zdHlsZTogO1xufSAqL1xuXG4jcG9ydHJpYXQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IC04cHggdmFyKC0tcHVycGxlKTtcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XG59XG5cbi8qIFNraWxscyBzdHlsaW5nICovXG5cbi5za2lsbHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTVweDtcbiAgcm93LWdhcDogNTBweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDgwcHgsIDFmcikpO1xuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDYwcHgsIDFmcikpOyAqL1xufVxuXG4uc2tpbGxzLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuXG4uc2tpbGwtcGljIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDU4JSkgc2VwaWEoODklKSBzYXR1cmF0ZSg0MDMlKSBodWUtcm90YXRlKDMwOWRlZylcbiAgICBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODQlKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5za2lsbC1waWM6aG92ZXIge1xuICBmaWx0ZXI6IGludmVydCg1MyUpIHNlcGlhKDE4JSkgc2F0dXJhdGUoMTA4MSUpIGh1ZS1yb3RhdGUoMjI4ZGVnKVxuICAgIGJyaWdodG5lc3MoODclKSBjb250cmFzdCg5MCUpO1xufVxuXG4uc2tpbGwtbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogTW9iaWxlIHZlcnNpb24gc3R5bGluZyAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLyogTmF2IHRvIGRyb3AtZG93biAqL1xuICAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Ryb3AtZG93bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogSGVybyBhdHlsaW5nICovXG4gICNoZWFkZXIge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAjaGVybyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICNoZXJvLXRleHQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIH1cblxuICAvKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cbiAgI2Fib3V0LW1lIHtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAjYWJvdXQtY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxufVxuXG4vKiBUYWJsZXQgc3R5bGluZyAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLyogTmF2IHRvIGRyb3AtZG93biAqL1xuICAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Ryb3AtZG93bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogSGVybyBzdHlsaW5nICovXG4gICNoZWFkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgfVxuXG4gICNiaWctbG9nbyB7XG4gICAgd2lkdGg6IG1heCg0MHZ3LCA0MDBweCk7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIH1cblxuICAjaGVyby10ZXh0IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICB9XG5cbiAgI2hlcm8ge1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXG4gICNhYm91dC1tZSB7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgfVxuXG4gICNhYm91dC1jb250YWluZXIge1xuICAgIHdpZHRoOiBtYXgoODB2dywgNTAwcHgpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0yKTtcbiAgfVxuXG4gIC5za2lsbHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgfVxuXG4gIC8qICNwb3J0cmlhdCB7XG4gICAgd2lkdGg6IG1heCg1MHZ3LCA1MDBweCk7XG4gIH0gKi9cbn1cblxuLyogVGFibGV0IHNtYWxsIGhlaWdodCAqL1xuQG1lZGlhIChtYXgtaGVpZ2h0OiA3NTBweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICNoZWFkZXIsXG4gICNhYm91dC1tZSB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVU7O0FBRVY7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLDhCQUE4QjtFQUM5Qiw0Q0FBcUU7RUFDckUs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QixtQkFBbUI7SUFDbkIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsMkRBQTJEO0VBQzdEOztFQUVBOztLQUVHO0FBQ0w7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0U7O0lBRUUsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgKi9cXG5cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbmEge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuLyogR2VuZXJhbCBzcGFjZSBzdHlsaW5nICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyRGlzcGxheVxcXCI7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvUGxheWZhaXJEaXNwbGF5LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbiAgc3JjOiB1cmwoL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktQm9sZC50dGYpO1xcbiAgc3JjOiB1cmwoL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktQm9sZEl0YWxpYy50dGYpO1xcbiAgc3JjOiB1cmwoL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktUmVndWxhci50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXBpbms6ICNmZGU1ZWM7XFxuICAtLXBlYWNoOiAjZmNiYWFkO1xcbiAgLS1kYXJrUGVhY2g6ICNlNDg1ODY7XFxuICAtLXB1cnBsZTogIzkxNmRiMztcXG4gIC0tdHJhc3BhcmVudFBpbms6ICNmZGU1ZWM7XFxuICAtLXRyYW5zcGFyZW50UGVhY2g6ICNmY2JhYWQ7XFxuICAtLXRyYW5zcGFyZW50RGFya1BlYWNoOiAjZTQ4NTg2O1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpckRpc3BsYXlcXFwiO1xcblxcbiAgLyogU3RlcCAtMjogMTIuNTBweCDihpIgMTIuODBweCAqL1xcbiAgLS1zdGVwLS0yOiBjbGFtcCgwLjc4cmVtLCBjYWxjKDAuNzdyZW0gKyAwLjAzdncpLCAwLjhyZW0pO1xcblxcbiAgLyogU3RlcCAtMTogMTUuMDBweCDihpIgMTYuMDBweCAqL1xcbiAgLS1zdGVwLS0xOiBjbGFtcCgwLjk0cmVtLCBjYWxjKDAuOTJyZW0gKyAwLjExdncpLCAxcmVtKTtcXG5cXG4gIC8qIFN0ZXAgMDogMTguMDBweCDihpIgMjAuMDBweCAqL1xcbiAgLS1zdGVwLTA6IGNsYW1wKDEuMTNyZW0sIGNhbGMoMS4wOHJlbSArIDAuMjJ2dyksIDEuMjVyZW0pO1xcblxcbiAgLyogU3RlcCAxOiAyMS42MHB4IOKGkiAyNS4wMHB4ICovXFxuICAtLXN0ZXAtMTogY2xhbXAoMS4zNXJlbSwgY2FsYygxLjI4cmVtICsgMC4zN3Z3KSwgMS41NnJlbSk7XFxuXFxuICAvKiBTdGVwIDI6IDI1LjkycHgg4oaSIDMxLjI1cHggKi9cXG4gIC0tc3RlcC0yOiBjbGFtcCgxLjYycmVtLCBjYWxjKDEuNXJlbSArIDAuNTh2dyksIDEuOTVyZW0pO1xcblxcbiAgLyogU3RlcCAzOiAzMS4xMHB4IOKGkiAzOS4wNnB4ICovXFxuICAtLXN0ZXAtMzogY2xhbXAoMS45NHJlbSwgY2FsYygxLjc3cmVtICsgMC44N3Z3KSwgMi40NHJlbSk7XFxuXFxuICAvKiBTdGVwIDQ6IDM3LjMycHgg4oaSIDQ4LjgzcHggKi9cXG4gIC0tc3RlcC00OiBjbGFtcCgyLjMzcmVtLCBjYWxjKDIuMDhyZW0gKyAxLjI1dncpLCAzLjA1cmVtKTtcXG5cXG4gIC8qIFN0ZXAgNTogNDQuNzlweCDihpIgNjEuMDRweCAqL1xcbiAgLS1zdGVwLTU6IGNsYW1wKDIuOHJlbSwgY2FsYygyLjQ1cmVtICsgMS43N3Z3KSwgMy44MnJlbSk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMCk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIC8qIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNoZWFkZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBOYXZpZ2F0aW9uIHN0eWxpbmcgKi9cXG5cXG4jbmF2LWNvbnRhaW5lci1tYWluIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG4gIHBhZGRpbmc6IDFyZW0gbWF4KDZ2dywgMnJlbSk7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogbWF4KDR2dywgMnJlbSk7XFxufVxcblxcbiNuYXYtbG9nbyB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5uYXYtaXRlbSxcXG4uZHJvcC1kb3duLWl0ZW0ge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dCwgcGFkZGluZy1ib3R0b20gMC4zcyBlYXNlLWluLW91dCxcXG4gICAgcGFkZGluZy1sZWZ0IDAuM3MgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5hdi1pdGVtOmhvdmVyLFxcbi5uYXYtaXRlbTpmb2N1cyxcXG4uZHJvcC1kb3duLWl0ZW06aG92ZXIsXFxuLmRyb3AtZG93bi1pdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLyogU3dpdGNoIGRhcmsgbW9kZSBidG4gc3R5bGluZyAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDAgMCAwIC8gNTAlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODVcXFwiO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXBpbmspO1xcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg2XFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLyogRHJvcCBkb3duIG1lbnUgc3R5bGluZyAqL1xcblxcbiNkcm9wLWRvd24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kcm9wLWRvd24tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZHJvcC1kb3duLWJ0bjo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjOVxcXCI7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcXG59XFxuLmRyb3AtZG93bi1idG46aG92ZXIsXFxuLmRyb3AtZG93bi1jb250YWluZXIuYWN0aXZlID4gLmRyb3AtZG93bi1idG4sXFxuLm5hdi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuI2Ryb3AtZG93bi1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjI1cmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlYWNoKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjM4KTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxNXB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuI2Ryb3AtZG93bi1jb250YWluZXIuYWN0aXZlID4gLmRyb3AtZG93bi1idG4gKyAjZHJvcC1kb3duLW1lbnUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuLmRyb3AtZG93bi1pdGVtIHtcXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4vKiBIZXJvIHN0eWxpbmcgKi9cXG5cXG4jaGVybyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG4gIHBhZGRpbmc6IDJyZW0gbWF4KDV2dywgMnJlbSk7XFxuICAvKiBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjsgKi9cXG59XFxuXFxuI2JpZy1sb2dvIHtcXG4gIHdpZHRoOiBtYXgoMzB2dywgMzAwcHgpO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgLyogbWluLXdpZHRoOiAzMDBweDsgKi9cXG59XFxuXFxuI2hlcm8tdGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtNCk7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgd2lkdGg6IG1heCg0NXZ3LCAyODBweCk7XFxuICAvKiBsaW5lLWhlaWdodDogNHJlbTsgKi9cXG59XFxuXFxuLyogQWJvdXQgbWUgc2VjdGlvbiBzdHlsaW5nICovXFxuXFxuI2Fib3V0LW1lIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDYwcHg7XFxuICBwYWRkaW5nOiAycmVtIG1heCgydncsIDJyZW0pO1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbiNhYm91dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiBtYXgoNDV2dywgMzUwcHgpO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVxcblxcbiNhYm91dC1tZS1uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hYm91dC1uYXYtaXRlbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAwLjVzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLWxlZnQgMC41cyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWJvdXQtbmF2LWl0ZW06aG92ZXIsXFxuLmFib3V0LW5hdi1pdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuI2Fib3V0LW1lLXRleHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuXFxuLmFib3V0LW1lLWhlYWRlciB7XFxuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogLmFib3V0LW1lLWhlYWRlciA+IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IDtcXG59ICovXFxuXFxuI3BvcnRyaWF0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IC04cHggdmFyKC0tcHVycGxlKTtcXG4gIHdpZHRoOiBtYXgoMzB2dywgMzAwcHgpO1xcbn1cXG5cXG4vKiBTa2lsbHMgc3R5bGluZyAqL1xcblxcbi5za2lsbHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTVweDtcXG4gIHJvdy1nYXA6IDUwcHg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg4MHB4LCAxZnIpKTtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNjBweCwgMWZyKSk7ICovXFxufVxcblxcbi5za2lsbHMtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uc2tpbGwtcGljIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoNTglKSBzZXBpYSg4OSUpIHNhdHVyYXRlKDQwMyUpIGh1ZS1yb3RhdGUoMzA5ZGVnKVxcbiAgICBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODQlKTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2tpbGwtcGljOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoMTglKSBzYXR1cmF0ZSgxMDgxJSkgaHVlLXJvdGF0ZSgyMjhkZWcpXFxuICAgIGJyaWdodG5lc3MoODclKSBjb250cmFzdCg5MCUpO1xcbn1cXG5cXG4uc2tpbGwtbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE1vYmlsZSB2ZXJzaW9uIHN0eWxpbmcgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC8qIE5hdiB0byBkcm9wLWRvd24gKi9cXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI2Ryb3AtZG93bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC8qIEhlcm8gYXR5bGluZyAqL1xcbiAgI2hlYWRlciB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuXFxuICAjaGVybyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNoZXJvLXRleHQge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gIH1cXG5cXG4gIC8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xcbiAgI2Fib3V0LW1lIHtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gICNhYm91dC1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICB9XFxufVxcblxcbi8qIFRhYmxldCBzdHlsaW5nICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAvKiBOYXYgdG8gZHJvcC1kb3duICovXFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNkcm9wLWRvd24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAvKiBIZXJvIHN0eWxpbmcgKi9cXG4gICNoZWFkZXIge1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB9XFxuXFxuICAjYmlnLWxvZ28ge1xcbiAgICB3aWR0aDogbWF4KDQwdncsIDQwMHB4KTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB9XFxuXFxuICAjaGVyby10ZXh0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICB9XFxuXFxuICAjaGVybyB7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xcbiAgI2Fib3V0LW1lIHtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIH1cXG5cXG4gICNhYm91dC1jb250YWluZXIge1xcbiAgICB3aWR0aDogbWF4KDgwdncsIDUwMHB4KTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxuICB9XFxuXFxuICAuc2tpbGxzLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcbiAgfVxcblxcbiAgLyogI3BvcnRyaWF0IHtcXG4gICAgd2lkdGg6IG1heCg1MHZ3LCA1MDBweCk7XFxuICB9ICovXFxufVxcblxcbi8qIFRhYmxldCBzbWFsbCBoZWlnaHQgKi9cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc1MHB4KSBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICNoZWFkZXIsXFxuICAjYWJvdXQtbWUge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJzbWFsbExvZ28iLCJiaWdMb2dvIiwicG9ydHJpYXQiLCJqc0ljb24iLCJjc3NJY29uIiwiaHRtbEljb24iLCJnaXRJY29uIiwiZ2l0SHViSWNvbiIsIm5wbUljb24iLCJiYWJlbEljb24iLCJDTEljb24iLCJlc2xpbnRJY29uIiwicHJldHRpZXJJY29uIiwidnNjb2RlSWNvbiIsIndlYnBhY2tJY29uIiwiVUkiLCJzaG93UGljdHVyZXMiLCJzbWFsbExvZ29JbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwiYmlnTG9nb0ltZyIsInBvcnRyaWF0SW1nIiwiZHJvcERvd25VSSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaXNEcm9wZG93bkJ0biIsInRhcmdldCIsIm1hdGNoZXMiLCJjbG9zZXN0IiwiY3VycmVudERyb3Bkb3duIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkcm9wZG93biIsInJlbW92ZSIsImNoYW5nZUFib3V0TWVDb250ZW50IiwiYWJvdXRNZUNvbnRhaW5lciIsIm15U3RvcnlCdG4iLCJlZHVjYXRpb25CdG4iLCJza2lsbHNCdG4iLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9