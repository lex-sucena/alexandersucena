"use strict";
const navIconBtn = document.getElementById("navIconBtn");
const nav = document.getElementById("nav");
let isFirstImage = true;
navIconBtn.addEventListener("click", function toggleHeaderNav() {
  nav.classList.toggle("hidden");
  if (isFirstImage) {
    navIconBtn.src = "./assets/images/cancel-nav-menu.png";
  } else {
    navIconBtn.src = "./assets/images/nav-menu.png";
  }
  isFirstImage = !isFirstImage;
});
