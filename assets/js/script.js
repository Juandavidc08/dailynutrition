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
// Goal #1 selection function
function replaceAgeWithGoal() {
    // Get the main container again
    const mainContainer = document.querySelector(".flex-container");

    // Create a div for the question "What is your goal #1?"
    const goalTextDiv = document.createElement("div"); 
    goalTextDiv.classList.add("goal-text");

    const goalParagraph = document.createElement("p");
    goalParagraph.textContent = "Which of this describes you better?";

    // Create a div for goal buttons
    goalTextDiv.appendChild(goalParagraph);
    const goalButtonDiv = document.createElement("div");
    goalButtonDiv.classList.add("goal-buttons");

    // Create buttons for each goal option
    const goalOptions = ["Get in shape", "Eat Healtier", "Expert meal preping"];

    goalOptions.forEach(function (range) {
        const goalButton = document.createElement("button");
        goalButton.textContent = range;
        goalButton.classList.add("goal-btn");
        goalButton.addEventListener("click", function () {
            // Redirect to lifestyle question
            replaceGoalWithLifeStyle();
        
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
            // Redirect to last question page  
            lastGoal();

        });
        lifeStyleButtonDiv.appendChild(lifeStyleButton);
    });


    lifeStyleTextDiv.appendChild(lifeStyleButtonDiv);
    mainContainer.replaceChild(lifeStyleTextDiv, document.querySelector(".goal-text"));
}

// Final Goal selection function
function lastGoal() {
    // Get the main container again
    const mainContainer = document.querySelector(".flex-container");

    // Create a div for the question "What is your goal #1?"
    const lastGoalTextDiv = document.createElement("div"); 
    lastGoalTextDiv.classList.add("lgoal-text");

    const lastGoalParagraph = document.createElement("p");
    lastGoalParagraph.textContent = "What is your goal?";

    // Create a div for goal buttons
    lastGoalTextDiv.appendChild(lastGoalParagraph);
    const lastGoalButtonDiv = document.createElement("div");
    lastGoalButtonDiv.classList.add("lgoal-buttons");

    // Create buttons for each goal option
    const lastGoalOptions = ["Gain Muscle", "Loss Weight", "Count Calories"];

    lastGoalOptions.forEach(function (range) {
        const lastGoalButton = document.createElement("button");
        lastGoalButton.textContent = range;
        lastGoalButton.classList.add("lgoal-btn");
        lastGoalButton.addEventListener("click", function () {
            // Redirect to resuly page
            redirectToResult(range);
        
        });
        lastGoalButtonDiv.appendChild(lastGoalButton);
    });

    // Append the new content and button div to the main container, and change the age range question to the goal options
    lastGoalTextDiv.appendChild(lastGoalButtonDiv);
    mainContainer.replaceChild(lastGoalTextDiv, document.querySelector(".lifestyle-text"));
}

// Function to redirect to a new page according on the selected goal
function redirectToResult(selectedGoal) {
    
    let redirectUrl;
// switch function learned properly in https://www.shecodes.io/athena/11461-how-to-make-a-div-redirect-to-another-page-using-javascript#:~:text=To%20make%20a%20div%20element,redirect%20to%20the%20desired%20page.
// and in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

    switch (selectedGoal) {
        case "Gain Muscle":
            redirectUrl = "muscle-gain.html";
            break;
        case "Loss Weight":
            redirectUrl = "loss-weight.html";
            break;
        case "Control Calories":
            redirectUrl = "control-calories.html";
            break;
        default:
            // Handle default case or error
            redirectUrl = "index.html";
            break;
    }

    
    window.location.href = redirectUrl;
}

// Modal Function in Result pages


function runModal(){

    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".btn-open");
    const closeModalBtn = document.querySelector(".btn-close");

    // Function to close the modal

    const closeBtn = function() {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };

    //Add event listener for when click close the modal

    closeModalBtn.addEventListener("click", closeBtn);
    overlay.addEventListener("click", closeBtn);

    //Function to Open modal

    const openModal = function() {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    // Event listener to open modal
    openModalBtn.addEventListener("click", openModal);

}

//Function call to enable modal function
runModal();