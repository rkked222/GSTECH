document.addEventListener("DOMContentLoaded", () => {
  // Image Slider Logic
  let currentSlide = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  // Function to update the slide position
  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Next slide function
  window.nextSlide = function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
  };

  // Previous slide function
  window.prevSlide = function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  };

  updateSlidePosition();

  // Mobile Menu Toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // Function to change the hero image to the third image (index 2 -> 3.png)
  function changeHeroImage() {
    currentSlide = 2;  // Set to the third slide (index 2)
    updateSlidePosition();  // Update the slide position immediately
  }

  // Event listener for the "Locations" link
  const locationsLink = document.getElementById('locations-link');  // Specific targeting of Locations link
  if (locationsLink) {
    locationsLink.addEventListener('click', (event) => {
      event.preventDefault();  // Prevent default link behavior (it won't navigate)
      changeHeroImage();  // Change the hero image to the third slide (3.png)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  const homeLink = document.getElementById('home-link');
if (homeLink) {
  homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    currentSlide = 0; // First slide (1.png)
    updateSlidePosition();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
});

document.addEventListener("DOMContentLoaded", () => {
  // Existing slider code...

  // Modal code
  const modal = document.getElementById("contact-modal");
  const openBtn = document.getElementById("open-contact-modal");
  const closeBtn = document.querySelector(".close-button");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});

