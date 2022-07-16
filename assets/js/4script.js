/* Var*/
let section1 = document.querySelector("#section1");
section1.style.backgroundColor = "blueviolet";
let section2 = document.querySelector("#section2");
section2.style.backgroundColor = "aqua";
let section3 = document.querySelector("#section3");
section3.style.backgroundColor = "gold";
let section4 = document.querySelector("#section4");
section4.style.backgroundColor = "blue";

let changeColor = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    changeColor = "purple";
  } else if (event.key === "s") {
    changeColor = "orange";
  } else if (event.key === "d") {
    changeColor = "pink";
  }
  console.log(event.key);
  changeClick(section1, changeColor);
  changeClick(section2, changeColor);
  changeClick(section3, changeColor);
  changeClick(section4, changeColor);
});

let changeClick = (element, color) => {
  element.addEventListener("click", (e) => {
    element.style.backgroundColor = color;
  });
};
