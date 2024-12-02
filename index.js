// Sticky Navigation Menu JS Code
window.onscroll = function () {
    let nav=document.querySelector("nav");
  if (window.pageYOffset > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

//Sidenavbar Function
var sidenav = document.querySelector(".side-navbar");

function showNavbar() {
  sidenav.style.left = "0";
}

function closeNavbar() {
  sidenav.style.left = "-60%";
}

//about animation function
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector("#About");

  function handleScroll() {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
      aboutSection.classList.add("visible");
    } else {
      aboutSection.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleScroll);
});
