//create initial vars and arrarys
var wins = 0;
var guessesLeft = 10;
var guessedLetters = [];

//Create an array of hangman content
var songs = ["cemetary gates", "master of puppets", "chaos ad", "south of heaven", "breaking the law",
"the drapery falls", "paranoid", "hallowed be thy name"];

//Randomly select an array index
var randomSong = songs[Math.floor(Math.random()
	* songs.length)];

//Convert the string to an array of individual letters
var split = randomSong.split('');

//Convert random selections to underscores
var answerArray =[];
for (var j = 0; j < randomSong.length; j++) {
	answerArray[j] = "_"; 
}

//Recognize user input
 document.onkeyup = function() {

//Capture user input and set to lower case
var userGuess = String.fromCharCode(event.keyCode).
 	toLowerCase();

//Dump all the user guesses into an array to keep track of guesses
guessedLetters.push(userGuess);

//Don't allow repitition of guessed letters
var filter = guessedLetters.filter(function (value, index, array) { return array.indexOf(value) == index; });

//For loop to find equal letters and increment wins if all letters are guessed
var allLettersGuessed = true;
for(var k = 0; k < split.length; k++) {
	if (guessedLetters.indexOf(split[k]) === -1){
		allLettersGuessed = false;
	}
}
if (allLettersGuessed){
	wins++;
	guessesLeft = 10;
	guessedLetters.length = 0;
	filter.length = 0;
	songs[Math.floor(Math.random()
	* songs.length)];
}

//For loop to check if letters were missed
for(var h = 0; h < split.length; h++){
	var match = split.indexOf(userGuess) > -1;	
}
if(!match) {
		guessesLeft--;
	}


//Check for and display correctly guessed letters
	for (var i = 0; i < randomSong.length; i++){
		if (userGuess == randomSong[i]){
			answerArray[i] = randomSong[i]
		}	
	}

//Update the target div with real-time results
	var html = "" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Guesses Left: " + guessesLeft + 
	"<p>Letters chosen: " + filter + "</p>";

	document.querySelector('#game').innerHTML = html;

	//Display underscores for words on the page and take out the commas
	document.querySelector('#letters').innerHTML = answerArray.join("");

// If guesses left is 0, reset the game and display Game Over 
	var over = "<h1>GAME OVER</h1>" +
	"<p>Refresh the page to play again. </p>";

	if (guessesLeft < 1) {
	   guessesLeft = 10;
	   guessedLetters = [];
	   document.querySelector('#board').innerHTML = over;
	}
}