export function SliderFunctionality() {
  // Selecting DOM elements and ensuring they are not null using type assertions
  const list = document.querySelector(".slider .list") as HTMLElement;
  const items = document.querySelectorAll(
    ".slider .list .item"
  ) as NodeListOf<HTMLElement>;
  const dots = document.querySelectorAll(
    ".slider .dots li"
  ) as NodeListOf<HTMLElement>;
  const prev = document.querySelector(".prev") as HTMLElement;
  const next = document.querySelector(".next") as HTMLElement;

  let active = 0;
  const lengthItems = items.length - 1;

  // Add null check before adding event listeners
  if (next && prev) {
    next.onclick = function () {
      if (active + 1 > lengthItems) {
        active = 0;
      } else {
        active = active + 1;
      }
      reloadSlider();
    };

    prev.onclick = function () {
      if (active - 1 < 0) {
        active = lengthItems;
      } else {
        active = active - 1;
      }
      reloadSlider();
    };
  }

  // Setting interval for slider refresh
  let refreshSlider = setInterval(() => {
    next.click();
  }, 4000);

  // Function to reload slider
  function reloadSlider() {
    const checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";

    const lastActiveDot = document.querySelector(
      ".slider .dots li.active"
    ) as HTMLElement;
    if (lastActiveDot) {
      lastActiveDot.classList.remove("active");
    }
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
      next.click();
    }, 5000);
  }

  // Adding event listeners to dots
  dots.forEach((li, key) => {
    li.addEventListener("click", function () {
      active = key;
      reloadSlider();
    });
  });
}
