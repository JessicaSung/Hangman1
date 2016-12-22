// $(document).ready(function() {
	var display = [];
	var allGuesses = [];
	// chosenWord is the word the user is trying to guess

    // create array with possible word choices
    var possibleWords = ['coding', 'html', 'running'];
    // choose a random word
    var chosenWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
    console.log(chosenWord);

    // display _ equal to the number of letters in the chosen word
    for (var i = 0; i < chosenWord.length; i++) {
    	chosenWord[i] = display.push("_ ");
    }
    console.log(display);
    // append _ word to the page
    $('#word').append(display);
    // log user input
    $(document).keydown(function(event) {
    	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    	allGuesses.push(userGuess);
    	console.log(allGuesses);
    	$('#wordTwo').empty();
		$('#wordTwo').append(allGuesses);
		if (chosenWord.indexOf(userGuess) > -1) {
			var index = chosenWord.indexOf(userGuess);
			display[index] = userGuess;
			$('#word').empty();
			$('#word').append(display);
		}
    });

    
    






































// });