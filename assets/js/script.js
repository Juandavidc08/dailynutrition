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

// Age range function
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
    const ageRanges = ["18 - 25", "25 - 35", "35 - 45", "45   +"];

    // Create buttons for each age range
    ageRanges.forEach(function (range) {
        const button = document.createElement("button");
        button.textContent = range;
        button.classList.add("age-btn"); 
        button.addEventListener("click", function () {
            // this will change to go to your goal 
            replaceAgeWithGoal();
        });
        buttonDiv.appendChild(button);
    });


    // Append the new content and button div to the main container
    ageTextDiv.appendChild(buttonDiv);
    mainContainer.replaceChild(ageTextDiv, document.querySelector(".question-area"));

}
// Next question what is your goal function will work the same as the age range function
// Goal selection function
function replaceAgeWithGoal() {
    // Get the main container again
    const mainContainer = document.querySelector(".flex-container");

    // Create a div for the question "What is your goal?"
    const goalTextDiv = document.createElement("div");
    goalTextDiv.classList.add("goal-text");

    const goalParagraph = document.createElement("p");
    goalParagraph.textContent = "What is your goal?";

    // Create a div for goal buttons
    goalTextDiv.appendChild(goalParagraph);
    const goalButtonDiv = document.createElement("div");
    goalButtonDiv.classList.add("goal-buttons");

    // Create buttons for each goal option
    const goalOptions = ["Muscle Gain", "Loss Weight", "Control Calories"];

    goalOptions.forEach(function (range) {
        const goalButton = document.createElement("button");
        goalButton.textContent = range;
        goalButton.classList.add("goal-btn");
        goalButton.addEventListener("click", function () {
            // Redirect to lifestyle question
            replaceGoalWithLifeStyle() 
        });
        goalButtonDiv.appendChild(goalButton);
    });

    // Append the new content and button div to the main container, and change the age range question to the goal options
    goalTextDiv.appendChild(goalButtonDiv);
    mainContainer.replaceChild(goalTextDiv, document.querySelector(".age-text"));
}

// LifeStyle Selection fuction
function replaceGoalWithLifeStyle() {

    // Get the main container again
    const mainContainer = document.querySelector(".flex-container");

    // Create a div for the question "how do you describe your lifestyle?"
    const lifeStyleTextDiv = document.createElement("div");
    lifeStyleTextDiv.classList.add("lifestyle-text");

    const lifeStyleParagraph = document.createElement("p");
    lifeStyleParagraph.textContent = "How do you describe your lifestyle?";

    // Create a div for lifestyle buttons
    lifeStyleTextDiv.appendChild(lifeStyleParagraph);
    const lifeStyleButtonDiv = document.createElement("div");
    lifeStyleButtonDiv.classList.add("lifestyle-buttons");

    // Create buttons for each goal option
    const lifeStyleOptions = ["Active", "Average", "Lazy"];

    lifeStyleOptions.forEach(function (option) {
        const lifeStyleButton = document.createElement("button");
        lifeStyleButton.textContent = option;
        lifeStyleButton.classList.add("lifestyle-btn");
        lifeStyleButton.addEventListener("click", function () {
            // Redirect to result page  
            alert("User selected lifestyle: " + option);

        });
        lifeStyleButtonDiv.appendChild(lifeStyleButton);
    });


    lifeStyleTextDiv.appendChild(lifeStyleButtonDiv);
    mainContainer.replaceChild(lifeStyleTextDiv, document.querySelector(".goal-text"));
}

