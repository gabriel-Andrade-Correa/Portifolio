document.documentElement.classList.add("js-enabled");

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay;
        if (delay) {
          entry.target.style.transitionDelay = `${delay}ms`;
        }
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((el) => observer.observe(el));

const carousels = document.querySelectorAll(".carousel");
carousels.forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll("img"));
  if (slides.length < 2) return;

  let index = slides.findIndex((img) => img.classList.contains("active"));
  if (index < 0) index = 0;
  const interval = Number(carousel.dataset.interval) || 3200;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, interval);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
