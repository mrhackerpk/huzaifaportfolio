// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

/* Smooth scroll */
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

/* Active link on scroll */
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
