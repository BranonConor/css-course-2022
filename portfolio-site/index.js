// get the hamburger button
const hamburgerButton = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobileNav");
hamburgerButton.addEventListener("click", () => {
  //add classes to the different bars of the hamburger
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  //add classes to the drawerMenu
  mobileNav.classList.toggle("openMobileNav");
});
