function countMinus(n) {
  if (parseInt(n.value) > 0) {
    n.value = parseInt(n.value) - 1;
  }
}

function countPlus(n) {
    n.value = parseInt(n.value) + 1;
}

function initInputNumber(inputNumber) {
  var inputMinus = inputNumber.querySelector(".booking__input-number-minus");
  var inputPlus = inputNumber.querySelector(".booking__input-number-plus");
  var numberCount = inputNumber.querySelector(".input-number-count");

  inputMinus.addEventListener("click", function() {
    countMinus(numberCount);
  });
  inputPlus.addEventListener("click", function() {
    countPlus(numberCount);
  });
}

var inputNumber = document.querySelectorAll(".booking__input-number");
for (var i = 0; i < inputNumber.length; i++) {
  initInputNumber(inputNumber[i]);
}

var buttonElement = document.querySelector(".booking__form-button");
var formContain = document.querySelector(".booking__form-dates-choose");
buttonElement.addEventListener("click", function(event) {
    formContain.classList.toggle("booking__form--active");
})
