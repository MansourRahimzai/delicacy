/* Header JS Codes */
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Navbar Mobile JS Codes */

// Dropdown toggle
// Dropdown toggle
document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const parent = this.parentElement;
    parent.classList.toggle("active");
  });
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

/* Homepage  animation codes */
AOS.init({
  duration: 1000,
  once: true,
});

// Product Filter by Category
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("#bd-dt1 button");
  const productBoxes = document.querySelectorAll(".product-box");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("link-active"));
      button.classList.add("link-active");

      const filterValue = button.textContent.toLowerCase();

      productBoxes.forEach((box) => {
        const category = box.getAttribute("data-category");

        if (filterValue === "all" || category === filterValue) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });
});

/*counting numbers animation */
const counters = document.querySelectorAll(".counter");
let started = false;

function startCounting() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 200;

    const updateCount = () => {
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats");
  const sectionTop = statsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100 && !started) {
    startCounting();
    started = true;
  }
});
