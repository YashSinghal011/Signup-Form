function validateForm(event) {
    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const confirmPassword = document.querySelector('.confirm-password').value;
    const submitButton = document.querySelector('.button-nex[type="submit"]');

    // Basic validation checks
    if (!username || !email || !password || !confirmPassword) {
        alert("All fields must be filled out.");
        event.preventDefault(); // Prevent form submission
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault(); // Prevent form submission
        return;
    }
    // Enable the submit button if all validations pass
    submitButton.disabled = false;
}

// Attach the validation function to the form's submit event
document.querySelector('form').addEventListener('submit', validateForm);