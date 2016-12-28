// VARIABLES
// ===============================================
// chosenWord is the word the user is trying to guess
// currentProgress shows the word as the user guess with unguessed letters as _
// allGuesses are all the unique letters the user has guessed
// guessesRemaining is how many guesses the user has left
var currentProgress = [];
var allGuesses = [];
var guessesRemaining = 0;
	
// create array with possible word choices
var possibleWords = ['coding', 'html', 'running'];
// choose a word at random
var chosenWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
console.log(chosenWord);
// tell user how many guesses he has left
guessesRemaining = chosenWord.length + 10;
$('#guessesLeft').append(guessesRemaining);

// currentProgress _ equal to the number of letters in the chosen word
for (var i = 0; i < chosenWord.length; i++) {
	chosenWord[i] = currentProgress.push("_ ");
}
// console.log(currentProgress);
// append _ word to the page
$('#currentProgress').append(currentProgress);

// LOG USER INPUT
// ===============================================
$(document).keydown(function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// check allGuesses array to see if userGuess exists. If not, add it to the array
	// and display to the user
	if (allGuesses.indexOf(userGuess) == -1 && chosenWord.indexOf(userGuess) == -1) {
		allGuesses.push(userGuess);			
	}
	$('#lettersGuessed').empty();
	$('#lettersGuessed').append(allGuesses);
	// check if userGuess is in the chosenWord. If so, replace _ with letter.
	// and display to the user
	if (chosenWord.indexOf(userGuess) > -1) {
		var chosenWordIndex = chosenWord.indexOf(userGuess);
		currentProgress[chosenWordIndex] = userGuess;
		$('#currentProgress').empty();
		$('#currentProgress').append(currentProgress);
	}
});

    
    





































// $(document).ready(function() {
// });