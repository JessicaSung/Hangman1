// VARIABLES
// ===============================================
// chosenWord is the word the user is trying to guess
// currentProgress shows the word as the user guess with unguessed letters as _
// allGuesses are all the unique letters the user has guessed
// guessesRemaining is how many guesses the user has left
var currentProgress = [];
var allGuesses = [];
var chosenWord = "";
var guessesRemaining = 0;
var wins = 0;
var losses = 0;

function start() {	
	// create array with possible word choices
	var possibleWords = ['seax', 'warseax', 'shortseax', 'zweihander', 'claymore', 'flamberge', 'falchion', 'scimitar', 'katana', 'wakizashi', 'nodachi', 'longseax', 'rapier', 'sabre', 'foil', 'nikana', 'broadseax', 'cutlass', 'messer', 'guillotine', 'kris', 'scimitar', 'dao', 'jian', 'hwandudaedo', 'tachi', 'tsurugi', 'katzbalger', 'machete', 'kirpan', 'khanda'];
	// choose a word at random
	chosenWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
	console.log(chosenWord);
	// tell user how many guesses he has left
	guessesRemaining = chosenWord.length + 5;
	$('#guessesLeft').append(guessesRemaining);
	// show user how many WINS he has
	$('#wins').empty();
	$('#wins').append(wins);
	// show user how many LOSSES he has
	$('#losses').empty();
	$('#losses').append(losses);

	// Guess This Word
	// show user currentProgress (and how many letters are in the chosenWord)
	// currentProgress _ equal to the number of letters in the chosenWord
	for (var i = 0; i < chosenWord.length; i++) {
		chosenWord[i] = currentProgress.push("_");
	}
	// append _ word to the page
	$('#currentProgress').empty();
	$('#currentProgress').append(currentProgress.join(" "));
}

// reset current after user wins or loses.
function reset() {
	currentProgress = [];
	allGuesses = [];
	guessesRemaining = 0;
	$('#currentProgress').empty();
	$('#guessesLeft').empty();
	$('#lettersGuessed').empty();
	start();
}

// LOG USER INPUT
// ===============================================
$(document).keydown(function(event) {
	// grabs user input and makes it lower case
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// if user input is not a letter, alert.
	// if user input is a letter, continue.
	var letter = /^[a-z]+$/; 
	if (!userGuess.match(letter)) {
		alert('Please input letters only.')
	}else{	

		// User Guesses Correctly
		// check if userGuess is in the chosenWord. If so, replace _ with letter.
		// and display currentProgress to the user
		// if (chosenWord.indexOf(userGuess) > -1) {
		// 	var chosenWordIndex = chosenWord.indexOf(userGuess);
		// 	currentProgress[chosenWordIndex] = userGuess;
		// 	$('#currentProgress').empty();
		// 	$('#currentProgress').append(currentProgress.join(" "));
		// }

		for (var i = 0; i < chosenWord.length; i++) {			
			if (chosenWord.charAt(i) == userGuess) {
				currentProgress[i] = userGuess;
				$('#currentProgress').empty();
				$('#currentProgress').append(currentProgress.join(" "));
			}
		}

		// User Guesses Incorrectly
		// check allGuesses array to see if userGuess exists. If not, add it to the array
		if (allGuesses.indexOf(userGuess) == -1 && chosenWord.indexOf(userGuess) == -1) {
			allGuesses.push(userGuess);
			// decrement the number of guesses remaining
			// show guessesRemaining to the user
			guessesRemaining -= 1;
			$('#guessesLeft').empty();
			$('#guessesLeft').append(guessesRemaining);			
		}
		// show lettersGuessed to the user
		$('#lettersGuessed').empty();
		$('#lettersGuessed').append(allGuesses);

		// User Wins
		// if user has replaced all _ with the correct letter
		// increment the number of wins and ask user to play again
		if (currentProgress.indexOf("_") == -1) {
			wins += 1;
			$('#wins').empty();
			$('#wins').append(wins);
			setTimeout(function() { 
				var again = confirm("Congratulations! You won.\n\nPlay again?");
				if (again == true) {
					reset();
				}
			}, 250);
		}

		// User Loses
		// if user has run out of guesses
		if (guessesRemaining == 0) {
			losses += 1;
			$('#losses').empty();
			$('#losses').append(losses);
			setTimeout(function() {
				var again = confirm("You lost!\n\nPlay again?");
				if (again == true) {
					reset();
				}
			}, 250);
		}
	}
});

   
start();