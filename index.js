if (document.getElementById("regbtn")) {
    let uName = document.getElementById("userName");
    let uEmail = document.getElementById("email");
    let uPswd = document.getElementById("pswd");

    let registerBtn = document.getElementById("regbtn");

    registerBtn.addEventListener("click", (e) => {
        let nameValue = uName.value;
        let emailValue = uEmail.value;
        let pswdValue = uPswd.value;

        localStorage.setItem("uName", nameValue);
        localStorage.setItem("uEmail", emailValue);
        localStorage.setItem("uPswd", pswdValue);

        alert("Registration Successful!");
        window.location.href = "login.html"; // Redirect to login page
    });
}

 
if (document.getElementById("loginBtn")) {
    let logBtn = document.getElementById("loginBtn");

    logBtn.addEventListener("click", () => {
        let storageEmail = localStorage.getItem("uEmail");
        let storagePswd = localStorage.getItem("uPswd");

        let inputLgnEmail = document.getElementById("uEmail").value;
        let inputLgnPswd = document.getElementById("uPswd").value;

        if (storageEmail === inputLgnEmail && storagePswd === inputLgnPswd) {
            alert("Login successful!");
            window.location.href = "home.html"; // Redirect to home page
        } else {
            alert("Invalid credentials. Please check your email and password.");
        }
    });
}




