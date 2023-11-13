let rating = document.querySelector(".rating");
let submit = document.querySelector(".form__submit");
let buttons = Array.from(rating.children);
let previousButton = null;
let selectedButton = null;

buttons.forEach((button, i) => {
    button.ratingValue = i + 1;
});

rating.addEventListener("click", function (event) {
    if (event.target.tagName == "BUTTON") {
        previousButton = selectedButton;

        selectedButton = event.target;
        highlight(selectedButton, previousButton);
    }
});

submit.addEventListener("click", function () {
    if (selectedButton && selectedButton.classList.contains("rating__button--active")) {
        let container = document.createElement("div");

        container.className = "container container--flex";
        container.innerHTML = `<img src="./images/illustration-thank-you.svg" alt="" />
        <p class="selected-rating">You selected ${selectedButton.ratingValue} out of 5</p>
    
        <p class="title">Thank you!</p>
    
        <p class="message message--center">
          We appreciate you taking the time to give a rating. If you ever need more support,
          don't hesitate to get in touch!
        </p>`;

        document.querySelector(".container").replaceWith(container);
    }
});

function highlight(selectedButton, previousButton) {
    if (previousButton && previousButton != selectedButton) {
        previousButton.classList.remove("rating__button--active");
    }

    selectedButton.classList.toggle("rating__button--active");
}