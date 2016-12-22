// VARIABLES
// ===============================================
// chosenWord is the word the user is trying to guess
// currentProgress shows the word as the user guess with unguessed letters as _
// allGuesses are all the unique letters the user has guessed
var currentProgress = [];
var allGuesses = [];
	
// create array with possible word choices
var possibleWords = ['coding', 'html', 'running'];
// choose a word at random
var chosenWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
console.log(chosenWord);

// currentProgress _ equal to the number of letters in the chosen word
for (var i = 0; i < chosenWord.length; i++) {
	chosenWord[i] = currentProgress.push("_ ");
}
console.log(currentProgress);
// append _ word to the page
$('#word').append(currentProgress);

// log user input
$(document).keydown(function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	allGuesses.push(userGuess);
	console.log(allGuesses);
	$('#wordTwo').empty();
	$('#wordTwo').append(allGuesses);
	if (chosenWord.indexOf(userGuess) > -1) {
		var index = chosenWord.indexOf(userGuess);
		currentProgress[index] = userGuess;
		$('#word').empty();
		$('#word').append(currentProgress);
	}
});

    
    





































// $(document).ready(function() {
// });