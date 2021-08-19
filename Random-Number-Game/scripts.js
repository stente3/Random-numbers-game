// Variables
const numberAssumption = document.querySelector("#numberAssumption");
const summitAssumption = document.querySelector("#summitAssumption");
const helpTheUser = document.querySelector(".help-the-user");
const containerHelpTheUser = document.querySelectorAll(".help-the-user p");
const textLowOrhig = document.querySelector(".low-or-hig");
const textPreviousAttempt = document.querySelector(".previous-attempt");
const yesOrNot = document.querySelector(".yes-or-not");
const errorAlert = document.querySelector("#errorAlert");
const alertText = document.querySelector(".alert-text");
const buttonPlayAgain = document.querySelector("#playAgain");
let userLives = 0;

let randomNumber = parseInt(Math.random() * 100 + 1);
// Functions

/* Shows the user if the random number is less or more */
function lowOrhig() {
	if (numberAssumption.value < randomNumber) {
		textLowOrhig.textContent = "El número es más alto";
	} else if (numberAssumption.value > randomNumber) {
		textLowOrhig.textContent = "El número es más bajo";
	} else {
		textLowOrhig.textContent = "";
	}
}
/* Shows the previous attempts of the users */
function previousAttempts() {
	if (userLives === 1) {
		helpTheUser.classList.remove("d-none");
		textPreviousAttempt.textContent =
			"Intentos anteriores =" + " " + numberAssumption.value;
	} else {
		textPreviousAttempt.textContent += "  " + numberAssumption.value;
	}
}
/* Shows the user if the assumption if correct or not */
function correctOrnot() {
	if (numberAssumption.value == randomNumber) {
		yesOrNot.textContent = "¡Felicidades!";
		yesOrNot.classList.remove("bg-danger");
		yesOrNot.classList.add("bg-primary");
		opportunityToRepeat();
	} else {
		yesOrNot.textContent = "¡Fallaste!";
		yesOrNot.classList.add("bg-danger");
	}
}
/* Check user life */
function livesLimit() {
	if (userLives > 10) {
		yesOrNot.textContent = "¡Perdiste todas tus vidas!";
		opportunityToRepeat();
	}
}
/* Reset the game */
function resetGame() {
	let helpTheUseLength = containerHelpTheUser.length;
	helpTheUser.classList.add("d-none");
	for (let i = 0; i < helpTheUseLength; i++) {
		containerHelpTheUser[i].textContent = "";
	}
	userLives = 0;
	summitAssumption.classList.add("d-none");
	buttonPlayAgain.classList.remove("d-none");
}
/* let users play again */
function playAgain() {
	resetGame();
	summitAssumption.classList.remove("d-none");
	buttonPlayAgain.classList.add("d-none");
	numberAssumption.value = "";
}
/* gives the user the opportunity to replay the game */
function opportunityToRepeat() {
	buttonPlayAgain.classList.remove("d-none");
	summitAssumption.classList.add("d-none");
	randomNumber = parseInt(Math.random() * 100 + 1);
}
/* Check user assumptions */
function checkAnswer() {
	if (numberAssumption.value == "") {
		alertText.textContent =
			"Tienes que ingresar un número en el campo de texto";
		errorAlert.classList.remove("d-none");
	} else if (numberAssumption.value <= 0) {
		alertText.textContent = "El número siempre será superior a 0";
		errorAlert.classList.remove("d-none");
	} else {
		userLives++;
		errorAlert.classList.add("d-none");
		previousAttempts();
		lowOrhig();
		correctOrnot();
		livesLimit();
	}
}

summitAssumption.addEventListener("click", checkAnswer);
buttonPlayAgain.addEventListener("click", playAgain);
