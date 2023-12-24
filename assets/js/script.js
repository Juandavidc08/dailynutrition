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
    // Get the main container
    const mainContainer = document.querySelector(".flex-container");

    // Create a div for question what is your age?
    const ageTextDiv = document.createElement("div");
    ageTextDiv.classList.add("age-text");

    // Create a paragraph asking for the user's age
    const ageParagraph = document.createElement("p");
    ageParagraph.textContent = "What is your age?";
    ageTextDiv.appendChild(ageParagraph);

    // Create a div for buttons
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("age-buttons");

    // Define age ranges
    const ageRanges = ["18-25", "25-35", "35-45", "45+"];

    // Create buttons for each age range
    ageRanges.forEach(function (range) {
        const button = document.createElement("button");
        button.textContent = range;
        button.addEventListener("click", function () {
            // this will change to go to your goal 
            alert("You selected: " + range);
        });
        buttonDiv.appendChild(button);
    });

    // Append the new content and button div to the main container
    ageTextDiv.appendChild(buttonDiv);
    mainContainer.replaceChild(ageTextDiv, document.querySelector(".question-area"));
}