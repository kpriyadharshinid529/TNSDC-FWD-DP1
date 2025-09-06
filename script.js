// Smooth scrolling for navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))

      .scrollIntoView({ behavior: "smooth" });

  });

});

// Scroll animations

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach(sec => {

    const rect = sec.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {

      sec.classList.add("show");

    }

  });

});

// Active menu highlight

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(sec => {

    const sectionTop = sec.offsetTop - 100;

    if (window.scrollY >= sectionTop) {

      current = sec.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});