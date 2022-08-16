// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address inside the input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // Danger: Do Not Verify email password on the client side
    // step 4: verify email and password
    if(email === 'khalid@gmail.com' && password === 'khalid'){
        window.location.href = 'bank.html';
    }
    else {
        alert('Toke ami tejjo sontan ghosona korlam. beda tui password vule gechos');
    }
})