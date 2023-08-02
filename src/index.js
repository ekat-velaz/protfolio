import "./style.css";
import smallLogo from "./images/small-logo.png";
import bigLogo from "./images/logo.png";
import portriat from "./images/portriat.jpg";

const smallLogoImg = document.getElementById("nav-logo");
smallLogoImg.src = smallLogo;

const bigLogoImg = document.getElementById("big-logo");
bigLogoImg.src = bigLogo;

const portriatImg = document.getElementById("portriat");
portriatImg.src = portriat;

// make drop-down menu not to disappear when you click on it
// (and also include toggle of active class if youll have many menu buttons)

document.addEventListener("click", (e) => {
  const isDropdownBtn = e.target.matches("[data-dropdown-btn]");
  if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownBtn) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
