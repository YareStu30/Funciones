/* Var*/
let section1 = document.querySelector("#section1");
section1.style.backgroundColor = "purple";
let section2 = document.querySelector("#section2");
section1.style.backgroundColor = "aqua";
let section3 = document.querySelector("#section3");
section1.style.backgroundColor = "gold";
let section4 = document.querySelector("#section4");
section1.style.backgroundColor = "blue";

let changeColor = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    changeColor = "orange";
  } else if (event.key === "s") {
    changeColor = "green";
  } else if (event.key === "d") {
    changeColor = "pink";
  }
  console.log(event.key);
});
