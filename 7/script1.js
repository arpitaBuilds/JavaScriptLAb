// Getting the form using DOM method getElementById()
let form = document.getElementById("registrationForm");

let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let website = document.getElementById("website");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let terms = document.getElementById("terms");
for (let i = 1; i <= 31; i++) {

    let option = document.createElement("option");

    option.value = i;
    option.textContent = i;

    day.add(option);
}
for (let i = 2026; i >= 1950; i--) {

    let option = document.createElement("option");

    option.value = i;
    option.textContent = i;

    year.add(option);
}
firstname.addEventListener("focus", function () {

    firstname.style.backgroundColor = "#fffacd";
    firstname.style.border = "2px solid blue";

});
username.addEventListener("focus", function () {

    username.style.backgroundColor = "#fffacd";
    username.style.border = "2px solid blue";

});

email.addEventListener("focus", function () {

    email.style.backgroundColor = "#fffacd";
    email.style.border = "2px solid blue";

});

password.addEventListener("focus", function () {

    password.style.backgroundColor = "#fffacd";
    password.style.border = "2px solid blue";

});


day.addEventListener("change", function () {

    day.style.backgroundColor = "#e8f5e9";

});

month.addEventListener("change", function () {

    month.style.backgroundColor = "#e8f5e9";

});

year.addEventListener("change", function () {

    year.style.backgroundColor = "#e8f5e9";

});


terms.addEventListener("change", function () {

    if (terms.checked) {

        terms.style.accentColor = "green";

    } else {

        terms.style.accentColor = "red";

    }

});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let firstnameError = document.getElementById("firstnameError");
    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let repasswordError = document.getElementById("repasswordError");
    let termsError = document.getElementById("termsError");
    let successMessage = document.getElementById("successMessage");
    firstnameError.textContent = "";
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    repasswordError.textContent = "";
    termsError.textContent = "";
    successMessage.textContent = "";
    let valid = true;  

    if (firstname.value.trim() === "") {

        firstnameError.textContent = "Firstname is required.";
        valid = false;

    }
    if (username.value.trim() === "") {

        usernameError.textContent = "Username is required.";
        valid = false;

    }

    if (password.value.trim() === "") {

        passwordError.textContent = "Password is required.";
        valid = false;

    }
    if (repassword.value.trim() === "") {

        repasswordError.textContent = "Please re-enter password.";
        valid = false;

    }
    else if (password.value !== repassword.value) {

        repasswordError.textContent = "Passwords do not match.";
        valid = false;

    }
    if (email.value.trim() !== "") {

        if (!email.value.includes("@") || !email.value.includes(".")) {
            emailError.textContent = "Enter a valid email.";
            valid = false;

        }

    }
    if (!terms.checked) {

        termsError.textContent = "Please accept the terms and conditions.";
        valid = false;

    }
    if (valid) {
        successMessage.textContent = "Registration Successful!";
        successMessage.style.color = "green";

    }

});