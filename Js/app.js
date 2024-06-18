let header = document.querySelector(".header");
let toggleBtn = document.querySelector(".header__btn-hamburger");
let headerList = document.querySelector(".header__list");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("header__list-show");
})

document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');

  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    nextButton.click();
  }, 5000);
});
