var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var direction = document.querySelector(".direction");
var body = document.querySelector("body");

color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);
direction.addEventListener("input", colorChange);

function colorChange() {
  body.style.background = "linear-gradient(" + direction.value + "deg, " + color1.value + ", " + color2.value;
  css.textContent = body.style.background + ";";
}
