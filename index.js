const colorMode = document.getElementById("color-mode");
const colorBox = document.querySelector(".color-box");
const colorPicker = document.getElementById("color-picker");
const colorForm = document.querySelector(".color-picker-nav");
const colorBtn = document.querySelector(".color-btn");
const colorNum = document.querySelector(".color-num");
let colorsArray = [];

colorForm.addEventListener("submit", function (e) {
  e.preventDefault();
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(
      1
    )}&mode=${colorMode.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      colorsArray = data.colors;
      renderColors();
    });
});

function renderColors() {
  let htmlColor = "";
  colorsArray.forEach(
    (color) =>
      (htmlColor += ` <div class="color" style="background-color:${color.hex.value}">
 <p class="color-num">${color.hex.value}</p></div>`)
  );

  colorBox.innerHTML = htmlColor;
}

