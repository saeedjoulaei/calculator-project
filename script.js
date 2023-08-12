let displayBox = document.querySelector(".display");

function showDisplay(event) {
  const x = event.target.innerText;
  if (displayBox.innerHTML == 0) {
    return (displayBox.innerHTML = x);
  }
  displayBox.innerHTML += x;
}
function calculate() {
  let result = displayBox.innerText;
  displayBox.innerHTML = eval(result);
}
function allClear() {
  displayBox.innerHTML = 0;
}

function clearLast() {
  let text = displayBox.innerHTML;
  if (text.length == 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = text.substring(0, text.length - 1);
  }
}
document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clearLast);
let list = document.querySelectorAll(".show-display");

list.forEach((item) => item.addEventListener("click", showDisplay));
