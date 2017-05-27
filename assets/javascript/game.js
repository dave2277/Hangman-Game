//create initial variables and arrarys
var wins = 0;
var guessesLeft = 10;
var guessedLetters = [];

//variables for the audio tracks
var audio0 = new Audio('assets/sounds/cemetary_gates.mp3');
var audio1 = new Audio('assets/sounds/master_of_puppets.mp3');
var audio2 = new Audio('assets/sounds/chaos_ad.mp3');
var audio3 = new Audio('assets/sounds/south_of_heaven.mp3');
var audio4 = new Audio('assets/sounds/breaking_the_law.mp3');
var audio5 = new Audio('assets/sounds/the_drapery_falls.mp3');
var audio6 = new Audio('assets/sounds/paranoid.mp3');
var audio7 = new Audio('assets/sounds/hallowed_be_thy_name.mp3');

//Create an array of hangman content
var songs = ["cemetary gates", "master of puppets", "chaos ad", "south of heaven", "breaking the law",
"the drapery falls", "paranoid", "hallowed be thy name"];

//Randomly select an array index
var randomSong = songs[Math.floor(Math.random()
	* songs.length)];

console.log(randomSong);
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


//Check for and display correctly guessed letters
	for (var i = 0; i < randomSong.length; i++){
		if (userGuess == randomSong[i]){
			answerArray[i] = randomSong[i]
		}	
	}

//Display underscores for words on the page and take out the commas
document.querySelector('#letters').innerHTML = answerArray.join("");

//For loop to find equal letters and increment wins if all letters are guessed
var allLettersGuessed = true;
for(var k = 0; k < split.length; k++) {
	if (guessedLetters.indexOf(split[k]) === -1){
		allLettersGuessed = false;
	}
}
if (allLettersGuessed){
	if (randomSong === songs[0]) {
		audio0.play();
		document.querySelector('#letters').innerHTML = "<img src=\'assets/images/cemetary_gates.jpg\'>";
		win();
	} else if (randomSong === songs[1]) {
		audio1.play();
		document.querySelector('#letters').innerHTML = "<img src=\'assets/images/master_of_puppets.jpg\'>";
		win();
	} else if (randomSong === songs[2]) {
		audio2.play();
		document.querySelector('#letters').innerHTML = "<img src=\'assets/images/chaos_ad.jpg\'>";
		win(); 
	} else if (randomSong === songs[3]) {
		audio3.play();
		document.querySelector('#letters').innerHTML = "<img src=\'assets/images/south_of_heaven.jpg\'>";
		win();
	} else if (randomSong === songs[4]) {
		audio4.play();
		document.querySelector('#letters').innerHTML = "<img src=\'assets/images/breaking_the_law.jpg\'>";
		win();
	} else if (randomSong === songs[5]) {
		audio5.play();
		document.querySelector('#letters').innerHTML = "<img src=\'assets/images/the_drapery_falls.jpg\'>";
		win();
	} else if (randomSong === songs[6]) {
		audio6.play();
		document.querySelector('#letters').innerHTML = "<img src=\'assets/images/paranoid.jpg\'>";
		win();
	} else if (randomSong === songs[7]) {
		audio7.play();
		document.querySelector('#letters').innerHTML = "<img src=\'assets/images/hallowed_be_thy_name.jpg\'>";
		win();
	}
}

//Create a function for winning
function win() {
	wins++;
	guessesLeft = 10;
	guessedLetters.length = 0;
	filter.length = 0;
	randomSong = songs[Math.floor(Math.random()* songs.length)];
}


//For loop to check if letters were missed
for(var h = 0; h < split.length; h++){
	var match = split.indexOf(userGuess) > -1;	
}
if(!match) {
		guessesLeft--;
	}


//Update the target div with real-time results
	var html = "" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Guesses Left: " + guessesLeft + 
	"<p>Letters chosen: " + filter + "</p>";

	document.querySelector('#game').innerHTML = html;

// If guesses left is 0, reset the game and display Game Over 
	var over = "<h1>GAME OVER</h1>" +
	"<p>Refresh the page to play again. </p>";

	if (guessesLeft < 1) {
	   guessesLeft = 10;
	   guessedLetters = [];
	   document.querySelector('#board').innerHTML = over;
	}
}
