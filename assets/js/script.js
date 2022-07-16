/*parte 3.1 + 3.2*/
let elemento1 = document.getElementById("elemento1");
function pintar(elemento1, color) {
  elemento1.style.backgroundColor = color;
}
elemento1.addEventListener("click", function () {
  pintar(elemento1, "yellow");
});
