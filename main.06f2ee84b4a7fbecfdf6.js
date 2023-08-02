"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_small_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/small-logo.png */ "./src/images/small-logo.png");


const smallLogoImg = document.getElementById("nav-logo");
smallLogoImg.src = _images_small_logo_png__WEBPACK_IMPORTED_MODULE_1__;

// make drop-down menu not to disappear when you click on it
// (and also include toggle of active class if youll have many menu buttons)

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

.about-me-header {
  font-size: var(--step-3);
  font-weight: bold;
}
#portriat {
  border-radius: 20px;
  box-shadow: 10px -8px var(--purple);
  width: max(30vw, 300px);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\na {\n  all: unset;\n}\n\n/* General space styling */\n@font-face {\n  font-family: \"PlayfairDisplay\";\n  src: url(/src/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Bold.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Regular.ttf);\n}\n\n:root {\n  --pink: #fde5ec;\n  --peach: #fcbaad;\n  --darkPeach: #e48586;\n  --purple: #916db3;\n  --trasparentPink: #fde5ec;\n  --transparentPeach: #fcbaad;\n  --transparentDarkPeach: #e48586;\n\n  font-family: \"PlayfairDisplay\";\n\n  /* Step -2: 12.50px → 12.80px */\n  --step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem);\n\n  /* Step -1: 15.00px → 16.00px */\n  --step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem);\n\n  /* Step 0: 18.00px → 20.00px */\n  --step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);\n\n  /* Step 1: 21.60px → 25.00px */\n  --step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);\n\n  /* Step 2: 25.92px → 31.25px */\n  --step-2: clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);\n\n  /* Step 3: 31.10px → 39.06px */\n  --step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);\n\n  /* Step 4: 37.32px → 48.83px */\n  --step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);\n\n  /* Step 5: 44.79px → 61.04px */\n  --step-5: clamp(2.8rem, calc(2.45rem + 1.77vw), 3.82rem);\n}\n\nbody {\n  background-color: var(--pink);\n  font-size: var(--step-0);\n}\n\n#content {\n  /* height: 100%;\n  width: 100%; */\n  display: grid;\n  align-content: space-between;\n}\n\n#header {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 6fr;\n  align-items: center;\n}\n\n/* Navigation styling */\n\n#nav-container-main {\n  font-size: var(--step-1);\n  color: var(--pink);\n  font-weight: bold;\n  background-color: var(--darkPeach);\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n  padding: 1rem max(6vw, 2rem);\n  position: sticky;\n  top: 0;\n  align-self: start;\n}\n\n.nav-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: max(4vw, 2rem);\n}\n\n.nav {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  gap: max(4vw, 2rem);\n}\n\n#nav-logo {\n  width: 100px;\n}\n\n.nav-item,\n.drop-down-item {\n  padding-bottom: 10px;\n  padding-left: 15px;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n  transition: background-color 0.3s ease-in-out, padding-bottom 0.3s ease-in-out,\n    padding-left 0.3s ease-in-out, border-radius 0.5s ease-in-out;\n}\n\n.nav-item:hover,\n.nav-item:focus,\n.drop-down-item:hover,\n.drop-down-item:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n/* Switch dark mode btn styling */\ninput[type=\"checkbox\"] {\n  position: relative;\n  width: 60px;\n  height: 30px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: var(--pink);\n  outline: none;\n  border-radius: 2rem;\n  cursor: pointer;\n  box-shadow: inset 0 0 5px rgb(0 0 0 / 50%);\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--purple);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.5s;\n  font-family: fontAwesome;\n  content: \"\\f185\";\n  color: var(--pink);\n  display: grid;\n  place-items: center;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: translateX(100%);\n  background: var(--pink);\n  font-family: fontAwesome;\n  content: \"\\f186\";\n  color: var(--purple);\n}\n\ninput[type=\"checkbox\"]:checked {\n  background: var(--purple);\n}\n\n/* Drop down menu styling */\n\n#drop-down-container {\n  display: none;\n  position: relative;\n}\n\n.drop-down-btn {\n  background-color: var(--pink);\n  width: 35px;\n  height: 35px;\n  border-radius: 10px;\n}\n\n.drop-down-btn::before {\n  font-family: fontAwesome;\n  content: \"\\f0c9\";\n  color: var(--darkPeach);\n  font-size: var(--step-1);\n}\n.drop-down-btn:hover,\n.drop-down-container.active > .drop-down-btn,\n.nav-btn:hover {\n  background-color: var(--purple);\n}\n\n#drop-down-menu {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 0.25rem);\n  background-color: var(--peach);\n  color: var(--darkPeach);\n  padding: 20px;\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.238);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-10px);\n  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n  display: grid;\n  gap: 15px;\n  z-index: 9999;\n}\n\n#drop-down-container.active > .drop-down-btn + #drop-down-menu {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n  z-index: 9999;\n}\n\n.drop-down-item {\n  color: var(--purple);\n}\n\n/* Hero styling */\n\n#hero {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  padding: 2rem max(5vw, 2rem);\n  /* justify-self: center;\n  grid-template-columns: 1fr 2fr; */\n}\n\n#big-logo {\n  width: max(30vw, 300px);\n  padding: 0 2rem;\n  /* min-width: 300px; */\n}\n\n#hero-text {\n  font-size: var(--step-4);\n  color: var(--darkPeach);\n  font-weight: bold;\n  padding: 0 2rem;\n  width: max(45vw, 280px);\n  /* line-height: 4rem; */\n}\n\n/* About me section styling */\n\n#about-me {\n  height: 100vh;\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  place-content: center;\n  gap: 60px;\n  padding: 2rem max(2vw, 2rem);\n  color: var(--purple);\n}\n\n#about-container {\n  display: grid;\n  gap: 20px;\n  width: max(45vw, 350px);\n  justify-items: start;\n}\n\n#about-me-nav {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 20px;\n  list-style: none;\n  font-weight: bold;\n}\n\n.about-nav-item {\n  background-color: inherit;\n  color: var(--darkPeach);\n  padding-bottom: 10px;\n  padding-left: 15px;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n\n  transition: background-color 0.5s ease-in-out, padding-bottom 0.5s ease-in-out,\n    padding-left 0.5s ease-in-out, border-radius 0.5s ease-in-out;\n}\n\n.about-nav-item:hover,\n.about-nav-item:focus {\n  background-color: var(--purple);\n  color: var(--pink);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n  text-align: start;\n}\n\n.about-me-header {\n  font-size: var(--step-3);\n  font-weight: bold;\n}\n#portriat {\n  border-radius: 20px;\n  box-shadow: 10px -8px var(--purple);\n  width: max(30vw, 300px);\n}\n\n/* Mobile version styling */\n\n@media (max-width: 600px) {\n  /* Nav to drop-down */\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n  }\n\n  /* Hero atyling */\n  #header {\n    height: fit-content;\n  }\n\n  #hero {\n    display: grid;\n    grid-auto-flow: row;\n    justify-items: center;\n  }\n\n  #hero-text {\n    width: 80%;\n    line-height: 3rem;\n  }\n\n  /* About me section styling */\n  #about-me {\n    grid-auto-flow: row;\n    height: fit-content;\n  }\n\n  #about-container {\n    justify-items: center;\n    text-align: justify;\n  }\n}\n\n/* Tablet styling */\n\n@media (min-width: 600px) and (max-width: 1000px) {\n  /* Nav to drop-down */\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n  }\n\n  /* Hero styling */\n  #header {\n    align-items: start;\n  }\n\n  #big-logo {\n    width: max(40vw, 400px);\n    justify-self: end;\n  }\n\n  #hero-text {\n    width: 80%;\n    line-height: 4rem;\n  }\n\n  #hero {\n    grid-auto-flow: row;\n    justify-items: center;\n  }\n\n  /* About me section styling */\n  #about-me {\n    grid-auto-flow: row;\n  }\n\n  #about-container {\n    width: max(80vw, 500px);\n    justify-items: center;\n    text-align: justify;\n    font-size: var(--step-2);\n  }\n\n  /* #portriat {\n    width: max(50vw, 500px);\n  } */\n}\n\n/* Tablet small height */\n@media (max-height: 750px) and (min-width: 600px) {\n  #header,\n  #about-me {\n    height: fit-content;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/images/small-logo.png":
/*!***********************************!*\
  !*** ./src/images/small-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d16a1264ef4b1a2b2414.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNmYyZWU4NGI0YTdmYmVjZmRmNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUI7QUFDMkI7QUFFaEQsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUM7QUFDeERGLFlBQVksQ0FBQ0csR0FBRyxHQUFHSixtREFBUzs7QUFFNUI7QUFDQTs7QUFFQUUsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUN4QyxNQUFNQyxhQUFhLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMscUJBQXFCLENBQUM7RUFDN0QsSUFBSSxDQUFDRixhQUFhLElBQUlELENBQUMsQ0FBQ0UsTUFBTSxDQUFDRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLEVBQUU7RUFFbkUsSUFBSUMsZUFBZTtFQUNuQixJQUFJSixhQUFhLEVBQUU7SUFDakJJLGVBQWUsR0FBR0wsQ0FBQyxDQUFDRSxNQUFNLENBQUNFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUNyREMsZUFBZSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDNUM7RUFFQVgsUUFBUSxDQUFDWSxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDQyxPQUFPLENBQUVDLFFBQVEsSUFBSztJQUN4RSxJQUFJQSxRQUFRLEtBQUtMLGVBQWUsRUFBRTtJQUNsQ0ssUUFBUSxDQUFDSixTQUFTLENBQUNLLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRjtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw4TUFBOEU7QUFDMUgsNENBQTRDLDROQUFxRjtBQUNqSSw0Q0FBNEMsa01BQXdFO0FBQ3BILDRDQUE0Qyw4TUFBOEU7QUFDMUgsNENBQTRDLHdNQUEyRTtBQUN2SCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNGQUFzRixPQUFPLE1BQU0scUZBQXFGLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLFFBQVEsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLE9BQU8sUUFBUSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksS0FBSyxPQUFPLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFB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QUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHNtYWxsTG9nbyBmcm9tIFwiLi9pbWFnZXMvc21hbGwtbG9nby5wbmdcIjtcblxuY29uc3Qgc21hbGxMb2dvSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbG9nb1wiKTtcbnNtYWxsTG9nb0ltZy5zcmMgPSBzbWFsbExvZ287XG5cbi8vIG1ha2UgZHJvcC1kb3duIG1lbnUgbm90IHRvIGRpc2FwcGVhciB3aGVuIHlvdSBjbGljayBvbiBpdFxuLy8gKGFuZCBhbHNvIGluY2x1ZGUgdG9nZ2xlIG9mIGFjdGl2ZSBjbGFzcyBpZiB5b3VsbCBoYXZlIG1hbnkgbWVudSBidXR0b25zKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgaXNEcm9wZG93bkJ0biA9IGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1kcm9wZG93bi1idG5dXCIpO1xuICBpZiAoIWlzRHJvcGRvd25CdG4gJiYgZS50YXJnZXQuY2xvc2VzdChcIltkYXRhLWRyb3Bkb3duXVwiKSAhPSBudWxsKSByZXR1cm47XG5cbiAgbGV0IGN1cnJlbnREcm9wZG93bjtcbiAgaWYgKGlzRHJvcGRvd25CdG4pIHtcbiAgICBjdXJyZW50RHJvcGRvd24gPSBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtZHJvcGRvd25dXCIpO1xuICAgIGN1cnJlbnREcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRyb3Bkb3duXS5hY3RpdmVcIikuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICBpZiAoZHJvcGRvd24gPT09IGN1cnJlbnREcm9wZG93bikgcmV0dXJuO1xuICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pO1xufSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvUGxheWZhaXJEaXNwbGF5LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LUJvbGRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBSZXNldCAqL1xuXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogaW5oZXJpdDtcbn1cblxuYSB7XG4gIGFsbDogdW5zZXQ7XG59XG5cbi8qIEdlbmVyYWwgc3BhY2Ugc3R5bGluZyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyRGlzcGxheVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG5cbjpyb290IHtcbiAgLS1waW5rOiAjZmRlNWVjO1xuICAtLXBlYWNoOiAjZmNiYWFkO1xuICAtLWRhcmtQZWFjaDogI2U0ODU4NjtcbiAgLS1wdXJwbGU6ICM5MTZkYjM7XG4gIC0tdHJhc3BhcmVudFBpbms6ICNmZGU1ZWM7XG4gIC0tdHJhbnNwYXJlbnRQZWFjaDogI2ZjYmFhZDtcbiAgLS10cmFuc3BhcmVudERhcmtQZWFjaDogI2U0ODU4NjtcblxuICBmb250LWZhbWlseTogXCJQbGF5ZmFpckRpc3BsYXlcIjtcblxuICAvKiBTdGVwIC0yOiAxMi41MHB4IOKGkiAxMi44MHB4ICovXG4gIC0tc3RlcC0tMjogY2xhbXAoMC43OHJlbSwgY2FsYygwLjc3cmVtICsgMC4wM3Z3KSwgMC44cmVtKTtcblxuICAvKiBTdGVwIC0xOiAxNS4wMHB4IOKGkiAxNi4wMHB4ICovXG4gIC0tc3RlcC0tMTogY2xhbXAoMC45NHJlbSwgY2FsYygwLjkycmVtICsgMC4xMXZ3KSwgMXJlbSk7XG5cbiAgLyogU3RlcCAwOiAxOC4wMHB4IOKGkiAyMC4wMHB4ICovXG4gIC0tc3RlcC0wOiBjbGFtcCgxLjEzcmVtLCBjYWxjKDEuMDhyZW0gKyAwLjIydncpLCAxLjI1cmVtKTtcblxuICAvKiBTdGVwIDE6IDIxLjYwcHgg4oaSIDI1LjAwcHggKi9cbiAgLS1zdGVwLTE6IGNsYW1wKDEuMzVyZW0sIGNhbGMoMS4yOHJlbSArIDAuMzd2dyksIDEuNTZyZW0pO1xuXG4gIC8qIFN0ZXAgMjogMjUuOTJweCDihpIgMzEuMjVweCAqL1xuICAtLXN0ZXAtMjogY2xhbXAoMS42MnJlbSwgY2FsYygxLjVyZW0gKyAwLjU4dncpLCAxLjk1cmVtKTtcblxuICAvKiBTdGVwIDM6IDMxLjEwcHgg4oaSIDM5LjA2cHggKi9cbiAgLS1zdGVwLTM6IGNsYW1wKDEuOTRyZW0sIGNhbGMoMS43N3JlbSArIDAuODd2dyksIDIuNDRyZW0pO1xuXG4gIC8qIFN0ZXAgNDogMzcuMzJweCDihpIgNDguODNweCAqL1xuICAtLXN0ZXAtNDogY2xhbXAoMi4zM3JlbSwgY2FsYygyLjA4cmVtICsgMS4yNXZ3KSwgMy4wNXJlbSk7XG5cbiAgLyogU3RlcCA1OiA0NC43OXB4IOKGkiA2MS4wNHB4ICovXG4gIC0tc3RlcC01OiBjbGFtcCgyLjhyZW0sIGNhbGMoMi40NXJlbSArIDEuNzd2dyksIDMuODJyZW0pO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbn1cblxuI2NvbnRlbnQge1xuICAvKiBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlOyAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBOYXZpZ2F0aW9uIHN0eWxpbmcgKi9cblxuI25hdi1jb250YWluZXItbWFpbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmc6IDFyZW0gbWF4KDZ2dywgMnJlbSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcbn1cblxuI25hdi1sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4ubmF2LWl0ZW0sXG4uZHJvcC1kb3duLWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDAuM3MgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy1sZWZ0IDAuM3MgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLm5hdi1pdGVtOmhvdmVyLFxuLm5hdi1pdGVtOmZvY3VzLFxuLmRyb3AtZG93bi1pdGVtOmhvdmVyLFxuLmRyb3AtZG93bi1pdGVtOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi8qIFN3aXRjaCBkYXJrIG1vZGUgYnRuIHN0eWxpbmcgKi9cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYigwIDAgMCAvIDUwJSk7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcXFxmMTg1XCI7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcbiAgY29udGVudDogXCJcXFxcZjE4NlwiO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4vKiBEcm9wIGRvd24gbWVudSBzdHlsaW5nICovXG5cbiNkcm9wLWRvd24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcC1kb3duLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZHJvcC1kb3duLWJ0bjo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcXFxmMGM5XCI7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMSk7XG59XG4uZHJvcC1kb3duLWJ0bjpob3Zlcixcbi5kcm9wLWRvd24tY29udGFpbmVyLmFjdGl2ZSA+IC5kcm9wLWRvd24tYnRuLFxuLm5hdi1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4jZHJvcC1kb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IGNhbGMoMTAwJSArIDAuMjVyZW0pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZWFjaCk7XG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjM4KTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4jZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0biArICNkcm9wLWRvd24tbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5kcm9wLWRvd24taXRlbSB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4vKiBIZXJvIHN0eWxpbmcgKi9cblxuI2hlcm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xuICBwYWRkaW5nOiAycmVtIG1heCg1dncsIDJyZW0pO1xuICAvKiBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyOyAqL1xufVxuXG4jYmlnLWxvZ28ge1xuICB3aWR0aDogbWF4KDMwdncsIDMwMHB4KTtcbiAgcGFkZGluZzogMCAycmVtO1xuICAvKiBtaW4td2lkdGg6IDMwMHB4OyAqL1xufVxuXG4jaGVyby10ZXh0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTQpO1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgd2lkdGg6IG1heCg0NXZ3LCAyODBweCk7XG4gIC8qIGxpbmUtaGVpZ2h0OiA0cmVtOyAqL1xufVxuXG4vKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cblxuI2Fib3V0LW1lIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBnYXA6IDYwcHg7XG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4jYWJvdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyMHB4O1xuICB3aWR0aDogbWF4KDQ1dncsIDM1MHB4KTtcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XG59XG5cbiNhYm91dC1tZS1uYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWJvdXQtbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XG4gIHRleHQtYWxpZ246IGVuZDtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDAuNXMgZWFzZS1pbi1vdXQsXG4gICAgcGFkZGluZy1sZWZ0IDAuNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1yYWRpdXMgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmFib3V0LW5hdi1pdGVtOmhvdmVyLFxuLmFib3V0LW5hdi1pdGVtOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5hYm91dC1tZS1oZWFkZXIge1xuICBmb250LXNpemU6IHZhcigtLXN0ZXAtMyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3BvcnRyaWF0IHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMTBweCAtOHB4IHZhcigtLXB1cnBsZSk7XG4gIHdpZHRoOiBtYXgoMzB2dywgMzAwcHgpO1xufVxuXG4vKiBNb2JpbGUgdmVyc2lvbiBzdHlsaW5nICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAvKiBOYXYgdG8gZHJvcC1kb3duICovXG4gIC5uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjZHJvcC1kb3duLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvKiBIZXJvIGF0eWxpbmcgKi9cbiAgI2hlYWRlciB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG4gICNoZXJvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2hlcm8tdGV4dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxuXG4gIC8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xuICAjYWJvdXQtbWUge1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG4gICNhYm91dC1jb250YWluZXIge1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG59XG5cbi8qIFRhYmxldCBzdHlsaW5nICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAvKiBOYXYgdG8gZHJvcC1kb3duICovXG4gIC5uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjZHJvcC1kb3duLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvKiBIZXJvIHN0eWxpbmcgKi9cbiAgI2hlYWRlciB7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB9XG5cbiAgI2JpZy1sb2dvIHtcbiAgICB3aWR0aDogbWF4KDQwdncsIDQwMHB4KTtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgfVxuXG4gICNoZXJvLXRleHQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIH1cblxuICAjaGVybyB7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAvKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cbiAgI2Fib3V0LW1lIHtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICB9XG5cbiAgI2Fib3V0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1heCg4MHZ3LCA1MDBweCk7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTIpO1xuICB9XG5cbiAgLyogI3BvcnRyaWF0IHtcbiAgICB3aWR0aDogbWF4KDUwdncsIDUwMHB4KTtcbiAgfSAqL1xufVxuXG4vKiBUYWJsZXQgc21hbGwgaGVpZ2h0ICovXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc1MHB4KSBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgI2hlYWRlcixcbiAgI2Fib3V0LW1lIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFFVjs7O0NBR0M7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QUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtFQUN2Qjs7RUFFQSw2QkFBNkI7RUFDN0I7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix3QkFBd0I7RUFDMUI7O0VBRUE7O0tBRUc7QUFDTDs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRTs7SUFFRSxtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCAqL1xcblxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuYSB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG4vKiBHZW5lcmFsIHNwYWNlIHN0eWxpbmcgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXJEaXNwbGF5XFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9QbGF5ZmFpckRpc3BsYXktVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG4gIHNyYzogdXJsKC9zcmMvUGxheWZhaXJfRGlzcGxheS9QbGF5ZmFpckRpc3BsYXktSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkLnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkSXRhbGljLnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcGluazogI2ZkZTVlYztcXG4gIC0tcGVhY2g6ICNmY2JhYWQ7XFxuICAtLWRhcmtQZWFjaDogI2U0ODU4NjtcXG4gIC0tcHVycGxlOiAjOTE2ZGIzO1xcbiAgLS10cmFzcGFyZW50UGluazogI2ZkZTVlYztcXG4gIC0tdHJhbnNwYXJlbnRQZWFjaDogI2ZjYmFhZDtcXG4gIC0tdHJhbnNwYXJlbnREYXJrUGVhY2g6ICNlNDg1ODY7XFxuXFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyRGlzcGxheVxcXCI7XFxuXFxuICAvKiBTdGVwIC0yOiAxMi41MHB4IOKGkiAxMi44MHB4ICovXFxuICAtLXN0ZXAtLTI6IGNsYW1wKDAuNzhyZW0sIGNhbGMoMC43N3JlbSArIDAuMDN2dyksIDAuOHJlbSk7XFxuXFxuICAvKiBTdGVwIC0xOiAxNS4wMHB4IOKGkiAxNi4wMHB4ICovXFxuICAtLXN0ZXAtLTE6IGNsYW1wKDAuOTRyZW0sIGNhbGMoMC45MnJlbSArIDAuMTF2dyksIDFyZW0pO1xcblxcbiAgLyogU3RlcCAwOiAxOC4wMHB4IOKGkiAyMC4wMHB4ICovXFxuICAtLXN0ZXAtMDogY2xhbXAoMS4xM3JlbSwgY2FsYygxLjA4cmVtICsgMC4yMnZ3KSwgMS4yNXJlbSk7XFxuXFxuICAvKiBTdGVwIDE6IDIxLjYwcHgg4oaSIDI1LjAwcHggKi9cXG4gIC0tc3RlcC0xOiBjbGFtcCgxLjM1cmVtLCBjYWxjKDEuMjhyZW0gKyAwLjM3dncpLCAxLjU2cmVtKTtcXG5cXG4gIC8qIFN0ZXAgMjogMjUuOTJweCDihpIgMzEuMjVweCAqL1xcbiAgLS1zdGVwLTI6IGNsYW1wKDEuNjJyZW0sIGNhbGMoMS41cmVtICsgMC41OHZ3KSwgMS45NXJlbSk7XFxuXFxuICAvKiBTdGVwIDM6IDMxLjEwcHgg4oaSIDM5LjA2cHggKi9cXG4gIC0tc3RlcC0zOiBjbGFtcCgxLjk0cmVtLCBjYWxjKDEuNzdyZW0gKyAwLjg3dncpLCAyLjQ0cmVtKTtcXG5cXG4gIC8qIFN0ZXAgNDogMzcuMzJweCDihpIgNDguODNweCAqL1xcbiAgLS1zdGVwLTQ6IGNsYW1wKDIuMzNyZW0sIGNhbGMoMi4wOHJlbSArIDEuMjV2dyksIDMuMDVyZW0pO1xcblxcbiAgLyogU3RlcCA1OiA0NC43OXB4IOKGkiA2MS4wNHB4ICovXFxuICAtLXN0ZXAtNTogY2xhbXAoMi44cmVtLCBjYWxjKDIuNDVyZW0gKyAxLjc3dncpLCAzLjgycmVtKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgLyogaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gc3R5bGluZyAqL1xcblxcbiNuYXYtY29udGFpbmVyLW1haW4ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogMXJlbSBtYXgoNnZ3LCAycmVtKTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IG1heCg0dncsIDJyZW0pO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcXG59XFxuXFxuI25hdi1sb2dvIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLm5hdi1pdGVtLFxcbi5kcm9wLWRvd24taXRlbSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1wdXJwbGUpO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAwLjNzIGVhc2UtaW4tb3V0LFxcbiAgICBwYWRkaW5nLWxlZnQgMC4zcyBlYXNlLWluLW91dCwgYm9yZGVyLXJhZGl1cyAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2LWl0ZW06aG92ZXIsXFxuLm5hdi1pdGVtOmZvY3VzLFxcbi5kcm9wLWRvd24taXRlbTpob3ZlcixcXG4uZHJvcC1kb3duLWl0ZW06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4vKiBTd2l0Y2ggZGFyayBtb2RlIGJ0biBzdHlsaW5nICovXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoMCAwIDAgLyA1MCUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4NVxcXCI7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XFxuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODZcXFwiO1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4vKiBEcm9wIGRvd24gbWVudSBzdHlsaW5nICovXFxuXFxuI2Ryb3AtZG93bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyb3AtZG93bi1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5kcm9wLWRvd24tYnRuOjpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xcbn1cXG4uZHJvcC1kb3duLWJ0bjpob3ZlcixcXG4uZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0bixcXG4ubmF2LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4jZHJvcC1kb3duLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGNhbGMoMTAwJSArIDAuMjVyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVhY2gpO1xcbiAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yMzgpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE1cHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4jZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0biArICNkcm9wLWRvd24tbWVudSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4uZHJvcC1kb3duLWl0ZW0ge1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi8qIEhlcm8gc3R5bGluZyAqL1xcblxcbiNoZXJvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbiAgcGFkZGluZzogMnJlbSBtYXgoNXZ3LCAycmVtKTtcXG4gIC8qIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyOyAqL1xcbn1cXG5cXG4jYmlnLWxvZ28ge1xcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICAvKiBtaW4td2lkdGg6IDMwMHB4OyAqL1xcbn1cXG5cXG4jaGVyby10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC00KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICB3aWR0aDogbWF4KDQ1dncsIDI4MHB4KTtcXG4gIC8qIGxpbmUtaGVpZ2h0OiA0cmVtOyAqL1xcbn1cXG5cXG4vKiBBYm91dCBtZSBzZWN0aW9uIHN0eWxpbmcgKi9cXG5cXG4jYWJvdXQtbWUge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNjBweDtcXG4gIHBhZGRpbmc6IDJyZW0gbWF4KDJ2dywgMnJlbSk7XFxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuI2Fib3V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IG1heCg0NXZ3LCAzNTBweCk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuI2Fib3V0LW1lLW5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFib3V0LW5hdi1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQsIHBhZGRpbmctYm90dG9tIDAuNXMgZWFzZS1pbi1vdXQsXFxuICAgIHBhZGRpbmctbGVmdCAwLjVzIGVhc2UtaW4tb3V0LCBib3JkZXItcmFkaXVzIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hYm91dC1uYXYtaXRlbTpob3ZlcixcXG4uYWJvdXQtbmF2LWl0ZW06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uYWJvdXQtbWUtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0zKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jcG9ydHJpYXQge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJveC1zaGFkb3c6IDEwcHggLThweCB2YXIoLS1wdXJwbGUpO1xcbiAgd2lkdGg6IG1heCgzMHZ3LCAzMDBweCk7XFxufVxcblxcbi8qIE1vYmlsZSB2ZXJzaW9uIHN0eWxpbmcgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC8qIE5hdiB0byBkcm9wLWRvd24gKi9cXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI2Ryb3AtZG93bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC8qIEhlcm8gYXR5bGluZyAqL1xcbiAgI2hlYWRlciB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuXFxuICAjaGVybyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNoZXJvLXRleHQge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gIH1cXG5cXG4gIC8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xcbiAgI2Fib3V0LW1lIHtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gICNhYm91dC1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICB9XFxufVxcblxcbi8qIFRhYmxldCBzdHlsaW5nICovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAvKiBOYXYgdG8gZHJvcC1kb3duICovXFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNkcm9wLWRvd24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAvKiBIZXJvIHN0eWxpbmcgKi9cXG4gICNoZWFkZXIge1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICB9XFxuXFxuICAjYmlnLWxvZ28ge1xcbiAgICB3aWR0aDogbWF4KDQwdncsIDQwMHB4KTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB9XFxuXFxuICAjaGVyby10ZXh0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICB9XFxuXFxuICAjaGVybyB7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC8qIEFib3V0IG1lIHNlY3Rpb24gc3R5bGluZyAqL1xcbiAgI2Fib3V0LW1lIHtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIH1cXG5cXG4gICNhYm91dC1jb250YWluZXIge1xcbiAgICB3aWR0aDogbWF4KDgwdncsIDUwMHB4KTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBmb250LXNpemU6IHZhcigtLXN0ZXAtMik7XFxuICB9XFxuXFxuICAvKiAjcG9ydHJpYXQge1xcbiAgICB3aWR0aDogbWF4KDUwdncsIDUwMHB4KTtcXG4gIH0gKi9cXG59XFxuXFxuLyogVGFibGV0IHNtYWxsIGhlaWdodCAqL1xcbkBtZWRpYSAobWF4LWhlaWdodDogNzUwcHgpIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgI2hlYWRlcixcXG4gICNhYm91dC1tZSB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbInNtYWxsTG9nbyIsInNtYWxsTG9nb0ltZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImlzRHJvcGRvd25CdG4iLCJ0YXJnZXQiLCJtYXRjaGVzIiwiY2xvc2VzdCIsImN1cnJlbnREcm9wZG93biIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJvcGRvd24iLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9