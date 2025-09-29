//navbar
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/*custom cursor*/

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

const bgRobot = document.querySelector(".bg-robot");

// 3 lines hamburger manu

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const allLinks = navLinks.querySelectorAll("a");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});

// splash effect
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 15000);
});


