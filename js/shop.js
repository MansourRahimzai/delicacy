const carousel = document.getElementById("carousel");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let scrollAmount = 0;

// Slide next
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: carousel.offsetWidth,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -carousel.offsetWidth,
    behavior: "smooth",
  });
});

// Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;
    const products = document.querySelectorAll(".product-box");

    products.forEach((product) => {
      if (category === "all" || product.dataset.category === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

    // Reset carousel scroll to start
    carousel.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  });
});

/* special offers timer*/
// Set initial countdown time (e.g. 2 hours from now)
const countdownHours = 2;
const targetTime = new Date().getTime() + countdownHours * 60 * 60 * 1000;

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetTime - now;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML =
      "<span>00</span> : <span>00</span> : <span>00</span>";
    return;
  }

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").innerText = String(seconds).padStart(
    2,
    "0"
  );
}, 1000);
