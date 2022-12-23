// selecting html elements
let emailElement = document.querySelector("#email");
let messageElement = document.querySelector("#message");
let submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    let emailValue = emailElement.value;
    let messageValue = messageElement.value;
    
    if (emailValue.includes("@")) {
        alert("Thank you for your message.");
    }
    else {
        alert("Oh no. That does not look like a valid email address. Please try again.");
    }

})