function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector(".change-color");
const bodyBackground = document.querySelector("body");
const spanColor = document.querySelector(".color");

btnColor.addEventListener("click", () => {
  bodyBackground.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = bodyBackground.style.backgroundColor;
})