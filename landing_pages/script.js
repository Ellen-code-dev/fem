// script.js

// Optional: Highlight active section while scrolling (basic example)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, .container, .login-container, .signup-section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
// Highlight current section in navbar
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, .container, .contact-section, .login-container, .signup-section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentSection = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});
// Handle Login Redirect
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const role = document.getElementById("loginRole").value;
  if (role === "doctor") {
    window.open("doctor_dashboard.html", "_blank");
  } else if (role === "patient") {
    window.open("patient_dashboard.html", "_blank");
  } else {
    alert("Please select a role.");
  }
});

// Handle Signup Redirect
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const role = document.getElementById("signupRole").value;
  if (role === "doctor") {
    window.open("doctor_dashboard.html", "_blank");
  } else if (role === "patient") {
    window.open("patient_dashboard.html", "_blank");
  } else {
    alert("Please select a role.");
  }
});
