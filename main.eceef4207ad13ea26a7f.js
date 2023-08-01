"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


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
  /* --fs-xl: clamp(3.5rem, 12vw + 1rem, 12rem);
  --fs-600: 2rem;
  --fs-400: 1rem; */
  /* Step -2: 9.72px → 7.11px */
  --step--2: clamp(0.44rem, calc(0.66rem + -0.28vw), 0.61rem);

  /* Step -1: 11.67px → 10.67px */
  --step--1: clamp(0.67rem, calc(0.75rem + -0.11vw), 0.73rem);

  /* Step 0: 14.00px → 16.00px */
  --step-0: clamp(0.88rem, calc(0.83rem + 0.22vw), 1rem);

  /* Step 1: 16.80px → 24.00px */
  --step-1: clamp(1.05rem, calc(0.89rem + 0.78vw), 1.5rem);

  /* Step 2: 20.16px → 36.00px */
  --step-2: clamp(1.26rem, calc(0.92rem + 1.72vw), 2.25rem);

  /* Step 3: 24.19px → 54.00px */
  --step-3: clamp(1.51rem, calc(0.86rem + 3.24vw), 3.38rem);

  /* Step 4: 29.03px → 81.00px */
  --step-4: clamp(1.81rem, calc(0.68rem + 5.65vw), 5.06rem);

  /* Step 5: 34.84px → 121.50px */
  --step-5: clamp(2.18rem, calc(0.29rem + 9.42vw), 7.59rem);
}

body {
  height: 100vh;
  background-color: var(--pink);
  font-size: var(--step-0);
}

#content {
  height: 100%;
  display: grid;
  align-content: space-between;
  /* background-color: var(--lightBlue); */
}

img {
  width: 100px;
}

#header {
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

.nav-item,
.drop-down-item {
  padding-bottom: 10px;
  padding-left: 15px;
  border-bottom: solid 2px var(--purple);
  text-align: end;
}

.nav-item:hover,
.nav-item:focus,
.drop-down-item:hover,
.drop-down-item:focus {
  animation: 0.3s forwards change-color;
}

/* .nav-item:active,
.nav-item:focus {
  background-color: var(--purple);
  padding-bottom: 3px;
  padding-top: 10px;
  padding-right: 15px;
  padding-left: 5px;
  border-radius: 5px;
} */

@keyframes change-color {
  from {
    background-color: var(--darkPeach);
    padding-bottom: 10px;
    padding-left: 15px;
  }
  to {
    background-color: var(--purple);
    color: var(--pink);
    padding-bottom: 3px;
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 5px;
    border-radius: 5px;
    text-align: start;
  }
}

#drop-down-container {
  display: none;
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

/* Mobile version styling */

@media (max-width: 830px) {
  /* Mobile drop-down */

  .nav {
    display: none;
  }

  #drop-down-container {
    display: block;
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
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\na {\n  all: unset;\n}\n\n/* General space styling */\n@font-face {\n  font-family: \"PlayfairDisplay\";\n  src: url(/src/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Bold.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf);\n  src: url(/src/Playfair_Display/static/PlayfairDisplay-Regular.ttf);\n}\n\n:root {\n  --pink: #fde5ec;\n  --peach: #fcbaad;\n  --darkPeach: #e48586;\n  --purple: #916db3;\n  --trasparentPink: #fde5ec;\n  --transparentPeach: #fcbaad;\n  --transparentDarkPeach: #e48586;\n\n  font-family: \"PlayfairDisplay\";\n  /* --fs-xl: clamp(3.5rem, 12vw + 1rem, 12rem);\n  --fs-600: 2rem;\n  --fs-400: 1rem; */\n  /* Step -2: 9.72px → 7.11px */\n  --step--2: clamp(0.44rem, calc(0.66rem + -0.28vw), 0.61rem);\n\n  /* Step -1: 11.67px → 10.67px */\n  --step--1: clamp(0.67rem, calc(0.75rem + -0.11vw), 0.73rem);\n\n  /* Step 0: 14.00px → 16.00px */\n  --step-0: clamp(0.88rem, calc(0.83rem + 0.22vw), 1rem);\n\n  /* Step 1: 16.80px → 24.00px */\n  --step-1: clamp(1.05rem, calc(0.89rem + 0.78vw), 1.5rem);\n\n  /* Step 2: 20.16px → 36.00px */\n  --step-2: clamp(1.26rem, calc(0.92rem + 1.72vw), 2.25rem);\n\n  /* Step 3: 24.19px → 54.00px */\n  --step-3: clamp(1.51rem, calc(0.86rem + 3.24vw), 3.38rem);\n\n  /* Step 4: 29.03px → 81.00px */\n  --step-4: clamp(1.81rem, calc(0.68rem + 5.65vw), 5.06rem);\n\n  /* Step 5: 34.84px → 121.50px */\n  --step-5: clamp(2.18rem, calc(0.29rem + 9.42vw), 7.59rem);\n}\n\nbody {\n  height: 100vh;\n  background-color: var(--pink);\n  font-size: var(--step-0);\n}\n\n#content {\n  height: 100%;\n  display: grid;\n  align-content: space-between;\n  /* background-color: var(--lightBlue); */\n}\n\nimg {\n  width: 100px;\n}\n\n#header {\n  font-size: var(--step-1);\n  color: var(--pink);\n  font-weight: bold;\n  background-color: var(--darkPeach);\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n  padding: 1rem max(6vw, 2rem);\n}\n\n.nav-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: max(4vw, 2rem);\n}\n\n.nav {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  gap: max(4vw, 2rem);\n}\n\n.nav-item,\n.drop-down-item {\n  padding-bottom: 10px;\n  padding-left: 15px;\n  border-bottom: solid 2px var(--purple);\n  text-align: end;\n}\n\n.nav-item:hover,\n.nav-item:focus,\n.drop-down-item:hover,\n.drop-down-item:focus {\n  animation: 0.3s forwards change-color;\n}\n\n/* .nav-item:active,\n.nav-item:focus {\n  background-color: var(--purple);\n  padding-bottom: 3px;\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-left: 5px;\n  border-radius: 5px;\n} */\n\n@keyframes change-color {\n  from {\n    background-color: var(--darkPeach);\n    padding-bottom: 10px;\n    padding-left: 15px;\n  }\n  to {\n    background-color: var(--purple);\n    color: var(--pink);\n    padding-bottom: 3px;\n    padding-top: 10px;\n    padding-right: 15px;\n    padding-left: 5px;\n    border-radius: 5px;\n    text-align: start;\n  }\n}\n\n#drop-down-container {\n  display: none;\n}\n\n/* Switch dark mode btn styling */\ninput[type=\"checkbox\"] {\n  position: relative;\n  width: 60px;\n  height: 30px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: var(--pink);\n  outline: none;\n  border-radius: 2rem;\n  cursor: pointer;\n  box-shadow: inset 0 0 5px rgb(0 0 0 / 50%);\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--purple);\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.5s;\n  font-family: fontAwesome;\n  content: \"\\f185\";\n  color: var(--pink);\n  display: grid;\n  place-items: center;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: translateX(100%);\n  background: var(--pink);\n  font-family: fontAwesome;\n  content: \"\\f186\";\n  color: var(--purple);\n}\n\ninput[type=\"checkbox\"]:checked {\n  background: var(--purple);\n}\n\n/* Mobile version styling */\n\n@media (max-width: 830px) {\n  /* Mobile drop-down */\n\n  .nav {\n    display: none;\n  }\n\n  #drop-down-container {\n    display: block;\n    position: relative;\n  }\n\n  .drop-down-btn {\n    background-color: var(--pink);\n    width: 35px;\n    height: 35px;\n    border-radius: 10px;\n  }\n\n  .drop-down-btn::before {\n    font-family: fontAwesome;\n    content: \"\\f0c9\";\n    color: var(--darkPeach);\n    font-size: var(--step-1);\n  }\n  .drop-down-btn:hover,\n  .drop-down-container.active > .drop-down-btn,\n  .nav-btn:hover {\n    background-color: var(--purple);\n  }\n\n  #drop-down-menu {\n    position: absolute;\n    right: 0;\n    top: calc(100% + 0.25rem);\n    background-color: var(--peach);\n    color: var(--darkPeach);\n    padding: 20px;\n    border-radius: 0.25rem;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.238);\n    opacity: 0;\n    pointer-events: none;\n    transform: translateY(-10px);\n    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;\n    display: grid;\n    gap: 15px;\n    z-index: 9999;\n  }\n\n  #drop-down-container.active > .drop-down-btn + #drop-down-menu {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n    z-index: 9999;\n  }\n\n  .drop-down-item {\n    color: var(--purple);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lY2VlZjQyMDdhZDEzZWEyNmE3Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7QUFDQTs7QUFFQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUN4QyxNQUFNQyxhQUFhLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMscUJBQXFCLENBQUM7RUFDN0QsSUFBSSxDQUFDRixhQUFhLElBQUlELENBQUMsQ0FBQ0UsTUFBTSxDQUFDRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLEVBQUU7RUFFbkUsSUFBSUMsZUFBZTtFQUNuQixJQUFJSixhQUFhLEVBQUU7SUFDakJJLGVBQWUsR0FBR0wsQ0FBQyxDQUFDRSxNQUFNLENBQUNFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUNyREMsZUFBZSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDNUM7RUFFQVQsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDQyxPQUFPLENBQUVDLFFBQVEsSUFBSztJQUN4RSxJQUFJQSxRQUFRLEtBQUtMLGVBQWUsRUFBRTtJQUNsQ0ssUUFBUSxDQUFDSixTQUFTLENBQUNLLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRjtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw4TUFBOEU7QUFDMUgsNENBQTRDLDROQUFxRjtBQUNqSSw0Q0FBNEMsa01BQXdFO0FBQ3BILDRDQUE0Qyw4TUFBOEU7QUFDMUgsNENBQTRDLHdNQUEyRTtBQUN2SCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBtYWtlIGRyb3AtZG93biBtZW51IG5vdCB0byBkaXNhcHBlYXIgd2hlbiB5b3UgY2xpY2sgb24gaXRcbi8vIChhbmQgYWxzbyBpbmNsdWRlIHRvZ2dsZSBvZiBhY3RpdmUgY2xhc3MgaWYgeW91bGwgaGF2ZSBtYW55IG1lbnUgYnV0dG9ucylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGlzRHJvcGRvd25CdG4gPSBlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtZHJvcGRvd24tYnRuXVwiKTtcbiAgaWYgKCFpc0Ryb3Bkb3duQnRuICYmIGUudGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1kcm9wZG93bl1cIikgIT0gbnVsbCkgcmV0dXJuO1xuXG4gIGxldCBjdXJyZW50RHJvcGRvd247XG4gIGlmIChpc0Ryb3Bkb3duQnRuKSB7XG4gICAgY3VycmVudERyb3Bkb3duID0gZS50YXJnZXQuY2xvc2VzdChcIltkYXRhLWRyb3Bkb3duXVwiKTtcbiAgICBjdXJyZW50RHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kcm9wZG93bl0uYWN0aXZlXCIpLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgaWYgKGRyb3Bkb3duID09PSBjdXJyZW50RHJvcGRvd24pIHJldHVybjtcbiAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn0pO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9QbGF5ZmFpckRpc3BsYXktVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L1BsYXlmYWlyRGlzcGxheS1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvc3RhdGljL1BsYXlmYWlyRGlzcGxheS1Cb2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi9zcmMvUGxheWZhaXJfRGlzcGxheS9zdGF0aWMvUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogUmVzZXQgKi9cblxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmJ1dHRvbixcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IGluaGVyaXQ7XG59XG5cbmEge1xuICBhbGw6IHVuc2V0O1xufVxuXG4vKiBHZW5lcmFsIHNwYWNlIHN0eWxpbmcgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpckRpc3BsYXlcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xufVxuXG46cm9vdCB7XG4gIC0tcGluazogI2ZkZTVlYztcbiAgLS1wZWFjaDogI2ZjYmFhZDtcbiAgLS1kYXJrUGVhY2g6ICNlNDg1ODY7XG4gIC0tcHVycGxlOiAjOTE2ZGIzO1xuICAtLXRyYXNwYXJlbnRQaW5rOiAjZmRlNWVjO1xuICAtLXRyYW5zcGFyZW50UGVhY2g6ICNmY2JhYWQ7XG4gIC0tdHJhbnNwYXJlbnREYXJrUGVhY2g6ICNlNDg1ODY7XG5cbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXJEaXNwbGF5XCI7XG4gIC8qIC0tZnMteGw6IGNsYW1wKDMuNXJlbSwgMTJ2dyArIDFyZW0sIDEycmVtKTtcbiAgLS1mcy02MDA6IDJyZW07XG4gIC0tZnMtNDAwOiAxcmVtOyAqL1xuICAvKiBTdGVwIC0yOiA5LjcycHgg4oaSIDcuMTFweCAqL1xuICAtLXN0ZXAtLTI6IGNsYW1wKDAuNDRyZW0sIGNhbGMoMC42NnJlbSArIC0wLjI4dncpLCAwLjYxcmVtKTtcblxuICAvKiBTdGVwIC0xOiAxMS42N3B4IOKGkiAxMC42N3B4ICovXG4gIC0tc3RlcC0tMTogY2xhbXAoMC42N3JlbSwgY2FsYygwLjc1cmVtICsgLTAuMTF2dyksIDAuNzNyZW0pO1xuXG4gIC8qIFN0ZXAgMDogMTQuMDBweCDihpIgMTYuMDBweCAqL1xuICAtLXN0ZXAtMDogY2xhbXAoMC44OHJlbSwgY2FsYygwLjgzcmVtICsgMC4yMnZ3KSwgMXJlbSk7XG5cbiAgLyogU3RlcCAxOiAxNi44MHB4IOKGkiAyNC4wMHB4ICovXG4gIC0tc3RlcC0xOiBjbGFtcCgxLjA1cmVtLCBjYWxjKDAuODlyZW0gKyAwLjc4dncpLCAxLjVyZW0pO1xuXG4gIC8qIFN0ZXAgMjogMjAuMTZweCDihpIgMzYuMDBweCAqL1xuICAtLXN0ZXAtMjogY2xhbXAoMS4yNnJlbSwgY2FsYygwLjkycmVtICsgMS43MnZ3KSwgMi4yNXJlbSk7XG5cbiAgLyogU3RlcCAzOiAyNC4xOXB4IOKGkiA1NC4wMHB4ICovXG4gIC0tc3RlcC0zOiBjbGFtcCgxLjUxcmVtLCBjYWxjKDAuODZyZW0gKyAzLjI0dncpLCAzLjM4cmVtKTtcblxuICAvKiBTdGVwIDQ6IDI5LjAzcHgg4oaSIDgxLjAwcHggKi9cbiAgLS1zdGVwLTQ6IGNsYW1wKDEuODFyZW0sIGNhbGMoMC42OHJlbSArIDUuNjV2dyksIDUuMDZyZW0pO1xuXG4gIC8qIFN0ZXAgNTogMzQuODRweCDihpIgMTIxLjUwcHggKi9cbiAgLS1zdGVwLTU6IGNsYW1wKDIuMThyZW0sIGNhbGMoMC4yOXJlbSArIDkuNDJ2dyksIDcuNTlyZW0pO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcbn1cblxuI2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7ICovXG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuI2hlYWRlciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmc6IDFyZW0gbWF4KDZ2dywgMnJlbSk7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcbn1cblxuLm5hdi1pdGVtLFxuLmRyb3AtZG93bi1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXB1cnBsZSk7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLm5hdi1pdGVtOmhvdmVyLFxuLm5hdi1pdGVtOmZvY3VzLFxuLmRyb3AtZG93bi1pdGVtOmhvdmVyLFxuLmRyb3AtZG93bi1pdGVtOmZvY3VzIHtcbiAgYW5pbWF0aW9uOiAwLjNzIGZvcndhcmRzIGNoYW5nZS1jb2xvcjtcbn1cblxuLyogLm5hdi1pdGVtOmFjdGl2ZSxcbi5uYXYtaXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSAqL1xuXG5Aa2V5ZnJhbWVzIGNoYW5nZS1jb2xvciB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG59XG5cbiNkcm9wLWRvd24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU3dpdGNoIGRhcmsgbW9kZSBidG4gc3R5bGluZyAqL1xuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBpbmspO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDAgMCAwIC8gNTAlKTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XG4gIGNvbnRlbnQ6IFwiXFxcXGYxODVcIjtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rKTtcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcXFxmMTg2XCI7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XG59XG5cbi8qIE1vYmlsZSB2ZXJzaW9uIHN0eWxpbmcgKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgzMHB4KSB7XG4gIC8qIE1vYmlsZSBkcm9wLWRvd24gKi9cblxuICAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Ryb3AtZG93bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5kcm9wLWRvd24tYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIC5kcm9wLWRvd24tYnRuOjpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcbiAgICBjb250ZW50OiBcIlxcXFxmMGM5XCI7XG4gICAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdGVwLTEpO1xuICB9XG4gIC5kcm9wLWRvd24tYnRuOmhvdmVyLFxuICAuZHJvcC1kb3duLWNvbnRhaW5lci5hY3RpdmUgPiAuZHJvcC1kb3duLWJ0bixcbiAgLm5hdi1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIH1cblxuICAjZHJvcC1kb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDAuMjVyZW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlYWNoKTtcbiAgICBjb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIzOCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTVweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG5cbiAgI2Ryb3AtZG93bi1jb250YWluZXIuYWN0aXZlID4gLmRyb3AtZG93bi1idG4gKyAjZHJvcC1kb3duLW1lbnUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gIH1cblxuICAuZHJvcC1kb3duLWl0ZW0ge1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFFVjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsOEJBQThCO0VBQzlCLDRDQUFxRTtFQUNyRSw0Q0FBNEU7RUFDNUUsNENBQStEO0VBQy9ELDRDQUFxRTtFQUNyRSw0Q0FBa0U7QUFDcEU7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwrQkFBK0I7O0VBRS9CLDhCQUE4QjtFQUM5Qjs7bUJBRWlCO0VBQ2pCLDZCQUE2QjtFQUM3QiwyREFBMkQ7O0VBRTNELCtCQUErQjtFQUMvQiwyREFBMkQ7O0VBRTNELDhCQUE4QjtFQUM5QixzREFBc0Q7O0VBRXRELDhCQUE4QjtFQUM5Qix3REFBd0Q7O0VBRXhELDhCQUE4QjtFQUM5Qix5REFBeUQ7O0VBRXpELDhCQUE4QjtFQUM5Qix5REFBeUQ7O0VBRXpELDhCQUE4QjtFQUM5Qix5REFBeUQ7O0VBRXpELCtCQUErQjtFQUMvQix5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxxQ0FBcUM7QUFDdkM7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBRUg7RUFDRTtJQUNFLGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLHFCQUFxQjs7RUFFckI7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsd0JBQXdCO0VBQzFCO0VBQ0E7OztJQUdFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7SUFDNUMsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsa0VBQWtFO0lBQ2xFLGFBQWE7SUFDYixTQUFTO0lBQ1QsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgKi9cXG5cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbmEge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuLyogR2VuZXJhbCBzcGFjZSBzdHlsaW5nICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyRGlzcGxheVxcXCI7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvUGxheWZhaXJEaXNwbGF5LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxuICBzcmM6IHVybCgvc3JjL1BsYXlmYWlyX0Rpc3BsYXkvUGxheWZhaXJEaXNwbGF5LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbiAgc3JjOiB1cmwoL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktQm9sZC50dGYpO1xcbiAgc3JjOiB1cmwoL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktQm9sZEl0YWxpYy50dGYpO1xcbiAgc3JjOiB1cmwoL3NyYy9QbGF5ZmFpcl9EaXNwbGF5L3N0YXRpYy9QbGF5ZmFpckRpc3BsYXktUmVndWxhci50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXBpbms6ICNmZGU1ZWM7XFxuICAtLXBlYWNoOiAjZmNiYWFkO1xcbiAgLS1kYXJrUGVhY2g6ICNlNDg1ODY7XFxuICAtLXB1cnBsZTogIzkxNmRiMztcXG4gIC0tdHJhc3BhcmVudFBpbms6ICNmZGU1ZWM7XFxuICAtLXRyYW5zcGFyZW50UGVhY2g6ICNmY2JhYWQ7XFxuICAtLXRyYW5zcGFyZW50RGFya1BlYWNoOiAjZTQ4NTg2O1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpckRpc3BsYXlcXFwiO1xcbiAgLyogLS1mcy14bDogY2xhbXAoMy41cmVtLCAxMnZ3ICsgMXJlbSwgMTJyZW0pO1xcbiAgLS1mcy02MDA6IDJyZW07XFxuICAtLWZzLTQwMDogMXJlbTsgKi9cXG4gIC8qIFN0ZXAgLTI6IDkuNzJweCDihpIgNy4xMXB4ICovXFxuICAtLXN0ZXAtLTI6IGNsYW1wKDAuNDRyZW0sIGNhbGMoMC42NnJlbSArIC0wLjI4dncpLCAwLjYxcmVtKTtcXG5cXG4gIC8qIFN0ZXAgLTE6IDExLjY3cHgg4oaSIDEwLjY3cHggKi9cXG4gIC0tc3RlcC0tMTogY2xhbXAoMC42N3JlbSwgY2FsYygwLjc1cmVtICsgLTAuMTF2dyksIDAuNzNyZW0pO1xcblxcbiAgLyogU3RlcCAwOiAxNC4wMHB4IOKGkiAxNi4wMHB4ICovXFxuICAtLXN0ZXAtMDogY2xhbXAoMC44OHJlbSwgY2FsYygwLjgzcmVtICsgMC4yMnZ3KSwgMXJlbSk7XFxuXFxuICAvKiBTdGVwIDE6IDE2LjgwcHgg4oaSIDI0LjAwcHggKi9cXG4gIC0tc3RlcC0xOiBjbGFtcCgxLjA1cmVtLCBjYWxjKDAuODlyZW0gKyAwLjc4dncpLCAxLjVyZW0pO1xcblxcbiAgLyogU3RlcCAyOiAyMC4xNnB4IOKGkiAzNi4wMHB4ICovXFxuICAtLXN0ZXAtMjogY2xhbXAoMS4yNnJlbSwgY2FsYygwLjkycmVtICsgMS43MnZ3KSwgMi4yNXJlbSk7XFxuXFxuICAvKiBTdGVwIDM6IDI0LjE5cHgg4oaSIDU0LjAwcHggKi9cXG4gIC0tc3RlcC0zOiBjbGFtcCgxLjUxcmVtLCBjYWxjKDAuODZyZW0gKyAzLjI0dncpLCAzLjM4cmVtKTtcXG5cXG4gIC8qIFN0ZXAgNDogMjkuMDNweCDihpIgODEuMDBweCAqL1xcbiAgLS1zdGVwLTQ6IGNsYW1wKDEuODFyZW0sIGNhbGMoMC42OHJlbSArIDUuNjV2dyksIDUuMDZyZW0pO1xcblxcbiAgLyogU3RlcCA1OiAzNC44NHB4IOKGkiAxMjEuNTBweCAqL1xcbiAgLS1zdGVwLTU6IGNsYW1wKDIuMThyZW0sIGNhbGMoMC4yOXJlbSArIDkuNDJ2dyksIDcuNTlyZW0pO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0wKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEJsdWUpOyAqL1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1BlYWNoKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG4gIHBhZGRpbmc6IDFyZW0gbWF4KDZ2dywgMnJlbSk7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiBtYXgoNHZ3LCAycmVtKTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogbWF4KDR2dywgMnJlbSk7XFxufVxcblxcbi5uYXYtaXRlbSxcXG4uZHJvcC1kb3duLWl0ZW0ge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHVycGxlKTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLm5hdi1pdGVtOmhvdmVyLFxcbi5uYXYtaXRlbTpmb2N1cyxcXG4uZHJvcC1kb3duLWl0ZW06aG92ZXIsXFxuLmRyb3AtZG93bi1pdGVtOmZvY3VzIHtcXG4gIGFuaW1hdGlvbjogMC4zcyBmb3J3YXJkcyBjaGFuZ2UtY29sb3I7XFxufVxcblxcbi8qIC5uYXYtaXRlbTphY3RpdmUsXFxuLm5hdi1pdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufSAqL1xcblxcbkBrZXlmcmFtZXMgY2hhbmdlLWNvbG9yIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICBjb2xvcjogdmFyKC0tcGluayk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG59XFxuXFxuI2Ryb3AtZG93bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogU3dpdGNoIGRhcmsgbW9kZSBidG4gc3R5bGluZyAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGluayk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDAgMCAwIC8gNTAlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODVcXFwiO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXBpbmspO1xcbiAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg2XFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLyogTW9iaWxlIHZlcnNpb24gc3R5bGluZyAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xcbiAgLyogTW9iaWxlIGRyb3AtZG93biAqL1xcblxcbiAgLm5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjZHJvcC1kb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAuZHJvcC1kb3duLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcblxcbiAgLmRyb3AtZG93bi1idG46OmJlZm9yZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBmb250QXdlc29tZTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtQZWFjaCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3RlcC0xKTtcXG4gIH1cXG4gIC5kcm9wLWRvd24tYnRuOmhvdmVyLFxcbiAgLmRyb3AtZG93bi1jb250YWluZXIuYWN0aXZlID4gLmRyb3AtZG93bi1idG4sXFxuICAubmF2LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICB9XFxuXFxuICAjZHJvcC1kb3duLW1lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IGNhbGMoMTAwJSArIDAuMjVyZW0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZWFjaCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrUGVhY2gpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjM4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgfVxcblxcbiAgI2Ryb3AtZG93bi1jb250YWluZXIuYWN0aXZlID4gLmRyb3AtZG93bi1idG4gKyAjZHJvcC1kb3duLW1lbnUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgfVxcblxcbiAgLmRyb3AtZG93bi1pdGVtIHtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpc0Ryb3Bkb3duQnRuIiwidGFyZ2V0IiwibWF0Y2hlcyIsImNsb3Nlc3QiLCJjdXJyZW50RHJvcGRvd24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRyb3Bkb3duIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==