document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("registrationForm");
    const errorsMessages = document.getElementById("errorMessages");

    form.addEventListener("submit", function (event){
        event.preventDefault();
        errorsMessages.innerHTHM = "";

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (username === "") {
            messageError("Username cannot be empty!");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            messageError("Invalid email address");
            return;
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            messageError("Password must contain 8 characters, one uppercase letter, one lowercase letter, one number, and one symbol");
            return;
        }

        form.requestFullscreen();
       alert("Regustration is successful");
     });

     function messageError(message) {
        const errorsMessage = document.createElement("div");
        errorsMessage.textContent = message;
        errorsMessage.style.color = "red";
        errorsMessages.appendChild(errorsMessage);
     }
});