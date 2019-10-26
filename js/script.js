var buttonElement = document.querySelector(".booking__form-button");

var formContain = document.querySelector(".booking__form-dates-choose");

buttonElement.addEventListener("click", function(event) {
    formContain.classList.toggle("booking__form--active");
})

