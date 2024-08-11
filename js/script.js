function applyRgbaTopNav() {
  const nav = document.querySelector(".sticky > nav");

  nav.style.backgroundColor = "rgba(255, 255, 255, 0.93)";
}

function createCarousel() {
  let index = 0;

  function carousel() {
    const slides = document.querySelectorAll(".mySlides");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    index++;

    if (index > slides.length) index = 1;

    slides[index - 1].style.display = "block";

    setTimeout(carousel, 9000);
  }

  return carousel;
}

function toggleMenu() {
  const mobileMenu = document.querySelector("#mobile-menu-2");
  const hamburguer = document.querySelector(".toggle-menu");
  const hiddenClass = "hidden";

  hamburguer.addEventListener("click", () => {
    if (mobileMenu.classList.contains(hiddenClass)) {
      mobileMenu.classList.remove(hiddenClass);
    } else {
      mobileMenu.classList.add(hiddenClass);
    }
  });
}

function linksMenu() {
  const links = document.querySelectorAll("#mobile-menu-2 li");
  const mobileMenu = document.querySelector("#mobile-menu-2");
  const hiddenClass = "hidden";

  Array.from(links).forEach((link) => {
    setTimeout(() => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add(hiddenClass);
      });
    }, 100);
  });
}

const carousel = createCarousel();

applyRgbaTopNav();
carousel();
toggleMenu();
linksMenu();
