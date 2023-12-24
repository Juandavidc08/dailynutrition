//Wait till the DOM is fully loaded

document.addEventListener("DOMContentLoaded", function () {
    // Get the input element and next button
    const nameInput = document.getElementById("name");
    const nextButton = document.getElementById("next-btn");

    // Add click event listener when press next button
    nextButton.addEventListener("click", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the user's name
        const userName = nameInput.value;

        // Check if the name is not empty
        if (userName.trim() !== "") {
            // Replace the question area with buttons
            replaceQuestionWithButtons();
        } else {
            // Alert the user to enter a name if it's empty
            alert("Please enter your name!");
        }
    });
});

function replaceQuestionWithButtons() {
    // Get the main container div that will change 
    const mainContainer = document.querySelector(".flex-container");

    // Create a div for buttons
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("age-buttons");

    //  Age ranges Array
    const ageRanges = ["18-25", "25-35", "35-45", "45+"];

    // Create buttons for each age range
    // Range function learn in https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
    ageRanges.forEach(function (range) {
        const button = document.createElement("button");
        button.textContent = range;
        button.addEventListener("click", function () {
            //This will change to go to next question
            alert("You selected: " + range);
        });
        buttonDiv.appendChild(button);
    });

    // Replace the question area with the button div
    mainContainer.replaceChild(buttonDiv, document.querySelector(".question-area"));
}