document.addEventListener("DOMContentLoaded", () => {
  // —— SLIDER ——
  let currentSlide = 0;
  const slidesEl = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  function updateSlide() {
    slidesEl.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  window.nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  };
  window.prevSlide = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
  };
  updateSlide();

  // —— MENU TOGGLE ——
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // —— SCROLL TO SERVICES ——
  document.getElementById("services-link").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("show");
  });

  // —— HOME LINK (slide 1) ——
  document.getElementById("home-link").addEventListener("click", e => {
    e.preventDefault();
    currentSlide = 0; updateSlide();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navLinks.classList.remove("show");
  });

  // —— LOCATIONS LINK (slide 3) ——
  document.getElementById("locations-link").addEventListener("click", e => {
    e.preventDefault();
    currentSlide = 2; updateSlide();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navLinks.classList.remove("show");
  });

  // —— CONTACT MODAL ——
  const modal = document.getElementById("contact-modal");
  const openModalBtn = document.getElementById("open-contact-modal");
  const closeModalBtn = document.querySelector(".close-button");

  openModalBtn.addEventListener("click", e => {
    e.preventDefault();
    modal.style.display = "block";
    navLinks.classList.remove("show");
  });
  closeModalBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});
