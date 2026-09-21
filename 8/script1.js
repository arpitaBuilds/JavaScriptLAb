const gymForm = document.getElementById("gymForm");
const nameInput = document.getElementById("name");
const eyeColorInput = document.getElementById("eyeColor");
const abilityInput = document.getElementById("ability");
const message = document.getElementById("message");
const genderInputs = document.querySelectorAll('input[name="gender"]');
const formControls = gymForm.querySelectorAll("input, select, textarea");

function showMessage(text, color) {
	message.textContent = text;
	message.style.color = color;
}

formControls.forEach(function (control) {
	control.addEventListener("focus", function () {
		control.classList.add("focus");
	});

	control.addEventListener("blur", function () {
		control.classList.remove("focus");
	});
});

gymForm.addEventListener("submit", function (event) {
	event.preventDefault();
	showMessage("", "");

	const selectedGender = document.querySelector('input[name="gender"]:checked');
	const name = nameInput.value.trim();
	const ability = abilityInput.value.trim();

	if (name.length < 2) {
		showMessage("Please enter your name.", "#b3261e");
		nameInput.focus();
		return;
	}

	if (!selectedGender) {
		showMessage("Please select your sex.", "#b3261e");
		genderInputs[0].focus();
		return;
	}

	if (!eyeColorInput.value) {
		showMessage("Please select your eye color.", "#b3261e");
		eyeColorInput.focus();
		return;
	}

	if (ability.length < 10) {
		showMessage("Please describe your athletic ability in a little more detail.", "#b3261e");
		abilityInput.focus();
		return;
	}

	const selectedHeight = document.getElementById("height").checked;
	const selectedWeight = document.getElementById("weight").checked;
	const bodyDetails = [];

	if (selectedHeight) bodyDetails.push("over 6 feet tall");
	if (selectedWeight) bodyDetails.push("over 200 pounds");

	showMessage(
		`Thanks, ${name}! Your ${selectedGender.value.toLowerCase()} profile has been submitted.`,
		"#17613d"
	);

	console.log({
		name,
		gender: selectedGender.value,
		eyeColor: eyeColorInput.value,
		bodyDetails,
		athleticAbility: ability
	});
});
