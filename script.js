let hiddenNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

document.getElementById("submit").addEventListener("click", guess);

function guess() {
    const userGuess = parseInt(document.getElementById("guess").value);
	
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Please enter a valid number between 1 and 100!");
        return;
    }

    attempts--;

    if (userGuess < hiddenNumber) {
        document.getElementById("result").innerHTML = `Your guess is too low! You have ${attempts} attempts left.`;
    } else if (userGuess > hiddenNumber) {
        document.getElementById("result").innerHTML = `Your guess is too high! You have ${attempts} attempts left.`;
    } else {
        document.getElementById("result").innerHTML = `Congratulations! You guessed the number in ${3 - attempts} attempts.`;
    }

    if (attempts === 0) {
        document.getElementById("result").innerHTML = `Game over! The hidden number was ${hiddenNumber}.`;
    }
}
