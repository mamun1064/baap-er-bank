document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if(userEmail=='account@bap.com' && userPassword == 'secret'){
        window.location.href='banking.html';
    }
});

