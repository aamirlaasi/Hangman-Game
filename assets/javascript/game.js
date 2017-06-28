// Create all the variables needed for the game
//--------------------------------------------------------------------------

// List of words to choose from. All lowercase as letters entered will also
// be lower case.
var countries = ["afghanistan", "albania", "bahamas","bahrain","cambodia",
				"cameroon","denmark","djibouti","ecuador","egypt","fiji", 
				"finland","gabon","germany","haiti", "honduras","iceland",
				"india","jamaica","jordan","kazakhstan","kenya","laos",
				"latvia","macedonia","madagascar","namibia","nauru","oman",
				"pakistan","palau","qatar","romania","russia","senegal",
				"serbia", "tajikistan","thailand","uganda","ukraine",
				"vanuatu","vietnam","yemen","zambia","zimbabwe"];

// randomly selected country from array
var randomCountry = "randomly selected country";

// letter selected by user
var guessedLetter = "";

// This array holds the country randomly selected as a series of blanks.
// As letters are guessed the blanks are updated as required.
var updateWord = [""];

// This is the number of wins counter
var wins = 0;

// This array holds the letters already guessed
var lettersGuessed = [""];

// This variable counts the number of guesses remaing. The player is
// allotted 8 guesses to complete a word.
var guessesRemaining = 8;

// Create boolean to check if new word is needed
var newWord;

// Create all the functions that will be used for the game.
//-------------------------------------------------------------------------

// Function to tell computer to randomly select a word and store it.
// Also, create initial array of the word and store updatedWord as blanks
// to be shown in html. Set all initial conditions. Clear out letters
// guessed. Set # remaining guesses to 8.

function selectWord() {
	randomCountry = countries[Math.floor(Math.random()*countries.length)];
	updateWord.length = randomCountry.length;
	updateWord.fill("_");
	document.querySelector("#word").innerHTML = updateWord.join(' ');
	guessesRemaining = 8;
	lettersGuessed = [""];
}

// Function to check and update updateWord array 
function checkEntry() {

	// Then check if letter has already been guessed
	for (var i = 0; i < lettersGuessed.length; i++) {
		if ((guessedLetter == lettersGuessed[i]) && (repeat !==true)) {
			// record false in the array if letter has been guessed
			var repeat = true;
		} 
	}
	console.log("true/false" + repeat);
	// If the guessed letter has been guessed already then create alert
	if (repeat === true) {
		alert ("You have already guessed this letter");
	}

	// For loop to cycle through all letters in the word
	for(var i = 0; i < updateWord.length; i++) {
		// check if letter exists in word,
		// or guessed incorrectly and replace it
		if (guessedLetter == randomCountry[i]){
			updateWord[i] = guessedLetter;
		} else {
			// create a random variable to see if letter is missing from
			// the entire word
			var miss = parseInt(miss) || 0;
			miss = miss + 1;
		}
	}
	// Add missed letter guesses and change number of tries remaining
	// if guessed letter is missing from entire word.
	if ((miss == updateWord.length) && (repeat !== true))  {
	lettersGuessed.push(guessedLetter);
	guessesRemaining = guessesRemaining - 1;
	}
}

// Function to check if all letters have been guessed
function checkGameOver() {
	// For loop to cycle through the entire updateWord array
	for(var i = 0; i < updateWord.length; i++ ) {
		// check if all letters have been guessed
		if (updateWord[i] !== "_") {
			// create a variable to see if all letters have been guessed
			var filled = parseInt(filled) || 0;
			filled = filled + 1;
		} 
	}
	// if yes then increase wins number and write to html
	// and select new word
	if (filled == updateWord.length) {	
		wins = wins + 1;
		document.querySelector("#noOfWins").innerHTML = wins;
		newWord = true;
	}
	// Check if number of tries is 0. End game if it is.
	if (guessesRemaining == 0) {
		newWord = true;
		alert("Sorry! Try again!");
	}
}

// Function to write everything to html after each keystroke
function writeHtml() {
	// Put the updated word after every key selection
	document.querySelector("#word").innerHTML = updateWord.join(' ');
	// Update number of guesses remaining
	document.querySelector("#remaining").innerHTML = guessesRemaining;
	// Update the letters guessed 
	document.querySelector("#guessed").innerHTML = lettersGuessed.join('');
}

// Test for functions used during initial development
//selectWord();
//checkEntry();
//checkGameOver();
//writeHtml();

// Main code that executes the game
//-------------------------------------------------------------------------

// Generate computer guess initially
if (updateWord = [""]) {
	selectWord();
}

//Testing. See what the variables are initially
console.log("selected country: " + randomCountry);
console.log("user guess: " + guessedLetter);
console.log("check updated word to be shown in html: " + updateWord.join(' '));
console.log("number of wins: " + wins);
console.log("letters guessed so far: " + lettersGuessed.join(''));
console.log("number of guesses remaing: " + guessesRemaining);


// Game starts whenever a letter is pressed on the keyboard

document.onkeypress = function(event) {

	// Get the character code of the key pressed and check it
	var charStr = String.fromCharCode(event.keyCode).toLowerCase();
	if (!/[a-z]/.test(charStr)) {
		alert ("Please select a letter");
	} 
	else {
	// Determine which key was pressed
	guessedLetter = event.key;
	// Convert it to lower case because array letters are in lower case
	guessedLetter = guessedLetter.toLowerCase();
	// check letter entry
	checkEntry();
	// See if all letters have been guessed
	checkGameOver();
	}
	console.log("check: " + newWord);
	// Check if it's necessary to make new word
	if (newWord === true) {
		selectWord();
		writeHtml();
	}
	else {
		// Write results to html
		writeHtml();
	}
	// clear newWord
	newWord = "";

	//Testing. See how variables change with each key stroke
	//-------------------------------------------------------------------
	console.log("selected country: " + randomCountry);
	console.log("user guess: " + guessedLetter);
	console.log("check updated word to be shown in html: " + updateWord.join(' '));
	console.log("number of wins: " + wins);
	console.log("letters guessed so far: " + lettersGuessed.join(''));
	console.log("number of guesses remaing: " + guessesRemaining);

}






















