// wait for DOM to be ready

document.addEventListener("DOMContentLoaded", function() {
    
    //Create variables for each element

    let nameInput = document.getElementById("name");
    let nextBtn = document.getElementById("next-btn");
    // Query Selector information lern in https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    let questionArea = document.querySelector(".question-area");

    //Event listener for click event when user click NEXT button
    
    nextBtn.addEventListener("click", function(event) {
        //Prevent default form submission behavior
        event.preventDefault();

        // Name iput should be filled 
        // Trim function learn in https://www.w3schools.com/jsref/jsref_trim_string.asp
        if (nameInput.value.trim() !== "" ) {
            //ageRangeQuestion();
        } else {
            alert("Please enter your name to continue!")
        }

    })

}