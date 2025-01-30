// Sticky Navigation Menu JS Code
window.onscroll = function () {
    let nav=document.querySelector("nav");
  if (window.pageYOffset > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

//Sidenavbar Function
var sidenav = document.querySelector(".side-navbar");
var sidenavlinks = document.querySelectorAll(".side-navbar p a")

function showNavbar() {
  sidenav.style.left = "0";
}

function closeNavbar() {
  sidenav.style.left = "-60%";
}
sidenavlinks.forEach((link) => {
  link.addEventListener("click",closeNavbar);
});

//about animation function
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector("#About");
  let animationTriggered=false;

  function handleScroll() {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (!animationTriggered && sectionPosition < screenPosition) {
      aboutSection.classList.add("visible");
      animationTriggered=true;
    } 
  }

  window.addEventListener("scroll", handleScroll);
});




