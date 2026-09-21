const admissionForm = document.getElementById("admissionForm");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const termsInput = document.getElementById("terms");
const termsError = document.getElementById("termsError");
const message = document.getElementById("message");

function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

admissionForm.addEventListener("submit", function (event) {
	event.preventDefault();

	emailError.textContent = "";
	ageError.textContent = "";
	phoneError.textContent = "";
	termsError.textContent = "";
	message.textContent = "";

	const age = Number(ageInput.value);
	const phone = phoneInput.value.replace(/\D/g, "");
	let isValid = true;

	if (!isValidEmail(emailInput.value.trim())) {
		emailError.textContent = "Please enter a valid email address.";
		isValid = false;
	}

	if (!Number.isInteger(age) || age < 16 || age > 70) {
		ageError.textContent = "Age must be between 16 and 70 years.";
		isValid = false;
	}

	if (phone.length < 10 || phone.length > 15) {
		phoneError.textContent = "Please enter a valid phone number.";
		isValid = false;
	}

	if (!termsInput.checked) {
		termsError.textContent = "Please agree to the membership terms to continue.";
		isValid = false;
	}

	if (!admissionForm.checkValidity()) {
		isValid = false;
	}

	if (isValid) {
		message.textContent = "Admission form submitted successfully!";
		admissionForm.reset();
	}
});
