
let currentPlayer = "X";
let gameStatus = ""; // "" - continue game, "Tie", "X wins", "O wins"
let numTurns = 0;
let idNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// reset board and all variables
function newGame() {
	
	// reset board
	for (var i = 0; i < idNames.length; i++) {
		document.getElementById(idNames[i]).innerHTML = "";
	} // for

	numTurns = 0;
	gameStatus = "";
	currentPlayer = "X";

	changeVisibility("controls");

} // newGame()

// randomly chooses a free box for computer
function computerTakeTurn() {
	let idName = "";
	let cb = []; // current board

	cb[0] = ""; // not going to use
	cb[1] = document.getElementById("one").innerHTML;
	cb[2] = document.getElementById("two").innerHTML;
	cb[3] = document.getElementById("three").innerHTML;
	cb[4] = document.getElementById("four").innerHTML;
	cb[5] = document.getElementById("five").innerHTML;
	cb[6] = document.getElementById("six").innerHTML
	cb[7] = document.getElementById("seven").innerHTML;
	cb[8] = document.getElementById("eight").innerHTML;
	cb[9] = document.getElementById("nine").innerHTML;

	// choose random boxes until an empty box is found
	do {
		let rand = parseInt(Math.random()*9) + 1;
		idName = idNames[rand-1];

		// top row
		if (cb[1] != "" && cb[1] == cb[2] && cb[3] == "") {
			document.getElementById("three").innerHTML = currentPlayer;
			break;
		} else if (cb[2] != "" && cb[2] == cb[3] && cb[1] == "") {
			document.getElementById("one").innerHTML = currentPlayer;
			break;
		} else if (cb[1] != "" && cb[1] == cb[3] && cb[2] == "") {
			document.getElementById("two").innerHTML = currentPlayer;
			break;
		} // if
	
		// middle row
		if (cb[4] != "" && cb[4] == cb[5] && cb[6] == "") {
			document.getElementById("six").innerHTML = currentPlayer;
			break;
		} else if (cb[5] != "" && cb[5] == cb[6] && cb[4] == "") {
			document.getElementById("four").innerHTML = currentPlayer;
			break;
		} else if (cb[4] != "" && cb[4] == cb[6] && cb[5] == "") {
			document.getElementById("five").innerHTML = currentPlayer;
			break;
		} // if

		// bottom row
		if (cb[7] != "" && cb[7] == cb[8] && cb[9] == "") {
			document.getElementById("nine").innerHTML = currentPlayer;
			break;
		} else if (cb[7] != "" && cb[7] == cb[9] && cb[8] == "") {
			document.getElementById("eight").innerHTML = currentPlayer;
			break;
		} else if (cb[8] != "" && cb[8] == cb[9] && cb[7] == "") {
			document.getElementById("seven").innerHTML = currentPlayer;
			break;
		} // if

		// left colomn
		if (cb[1] != "" && cb[1] == cb[4] && cb[7] == "") {
			document.getElementById("seven").innerHTML = currentPlayer;
			break;
		} else if (cb[4] != "" && cb[4] == cb[7] && cb[1] == "") {
			document.getElementById("one").innerHTML = currentPlayer;
			break;
		} else if (cb[1] != "" && cb[1] == cb[7] && cb[4] == "") {
			document.getElementById("four").innerHTML = currentPlayer;
			break;
		} // if

		// middle colomn
		if (cb[2] != "" && cb[2] == cb[5] && cb[8] == "") {
			document.getElementById("eight").innerHTML = currentPlayer;
			break;
		} else if (cb[5] != "" && cb[5] == cb[8] && cb[2] == "") {
			document.getElementById("two").innerHTML = currentPlayer;
			break;
		} else if (cb[2] != "" && cb[2] == cb[8] && cb[5] == "") {
			document.getElementById("five").innerHTML = currentPlayer;
			break;
		} // if

		// right colomn
		if (cb[3] != "" && cb[3] == cb[6] && cb[9] == "") {
			document.getElementById("nine").innerHTML = currentPlayer;
			break;
		} else if (cb[6] != "" && cb[6] == cb[9] && cb[3] == "") {
			document.getElementById("three").innerHTML = currentPlayer;
			break;
		} else if (cb[3] != "" && cb[3] == cb[9] && cb[6] == "") {
			document.getElementById("six").innerHTML = currentPlayer;
			break;
		} // if

		// top left to bottom right diagonal
		if (cb[1] != "" && cb[1] == cb[5] && cb[9] == "") {
			document.getElementById("nine").innerHTML = currentPlayer;
			break;
		} else if (cb[5] != "" && cb[5] == cb[9] && cb[1] == "") {
			document.getElementById("one").innerHTML = currentPlayer;
			break;
		} else if (cb[1] != "" && cb[1] == cb[9] && cb[5] == "") {
			document.getElementById("five").innerHTML = currentPlayer;
			break;
		} // if

		// top right to bottom left diagonal
		if (cb[7] != "" && cb[7] == cb[3] && cb[5] == "") {
			document.getElementById("five").innerHTML = currentPlayer;
			break;
		} else if (cb[3] != "" && cb[3] == cb[5] && cb[7] == "") {
			document.getElementById("seven").innerHTML = currentPlayer;
			break;
		} else if (cb[7] != "" && cb[7] == cb[5] && cb[3] == "") {
			document.getElementById("three").innerHTML = currentPlayer;
			break;
		} // if

		// check if div tag is empty 
		if (document.getElementById(idName).innerHTML == "") {
			document.getElementById(idName).innerHTML = currentPlayer;
			break;
		} // if

	} while(true);

} // computerTakeTurn()

// take player turn
function playerTakeTurn(e) {
	
	if(e.innerHTML == ""){
		e.innerHTML = currentPlayer;
		checkGameStatus();

		// if game not over, computer goes
		if (gameStatus == "") {
			setTimeout(function() {
				computerTakeTurn();
				checkGameStatus(); 
				}, 500
			);
		} // if

	} else {
		showLightBox("This box is already selected.", "Please try choose another.");
		return;
	} // else
	
} // playerTakeTurn(e)

// after each turn, check for a winner, a tie, or continue playing
function checkGameStatus() {
	numTurns++; // count turn
	
	// check for a Win
	if (checkWin()) {
		gameStatus = currentPlayer + " wins!";
	} // if
	
	// check for tie
	if (numTurns == 9) {
		gameStatus = "Tie Game!";
	} // if
	
	// switch current player
	currentPlayer = (currentPlayer == "X" ? "O" : "X");
	
	// game is over
	if(gameStatus != ""){
		setTimeout(function() {showLightBox(gameStatus, "Game Over.");}, 500);
	} // if

} // checkGameStatus()

// check for a Win, there 8 win paths
function checkWin() {
	let cb = []; // current board
		
	cb[0] = ""; // not going to use
	cb[1] = document.getElementById("one").innerHTML;
	cb[2] = document.getElementById("two").innerHTML;
	cb[3] = document.getElementById("three").innerHTML;
	cb[4] = document.getElementById("four").innerHTML;
	cb[5] = document.getElementById("five").innerHTML;
	cb[6] = document.getElementById("six").innerHTML
	cb[7] = document.getElementById("seven").innerHTML;
	cb[8] = document.getElementById("eight").innerHTML;
	cb[9] = document.getElementById("nine").innerHTML;


	// top row
	if (cb[1] != "" && cb[1] == cb[2] && cb[2] == cb[3]) {
		return true;
	} // if
	
	// middle row
	if (cb[4] != "" && cb[4] == cb[5] && cb[5] == cb[6]) {
		return true;
	} // if

	// bottom row
	if (cb[7] != "" && cb[7] == cb[8] && cb[8] == cb[9]) {
		return true;
	} // if
	
	// colomn one
	if (cb[1] != "" && cb[1] == cb[4] && cb[4] == cb[7]) {
		return true;
	} // if
	
	// colomn two
	if (cb[2] != "" && cb[2] == cb[5] && cb[5] == cb[8]) {
		return true;
	} // if
	
	// colomn three
	if (cb[3] != "" && cb[3] == cb[6] && cb[6] == cb[9]) {
		return true;
	} // if
	
	// top left to bottom right diagonal
	if (cb[1] != "" && cb[1] == cb[5] && cb[5] == cb[9]) {
		return true;
	} // if
	
	// top right to bottom left diagonal
	if (cb[3] != "" && cb[3] == cb[5] && cb[5] == cb[7]) {
		return true;
	} // if

} // checkWin()

// change the visibility of Id
function changeVisibility(divId){
	var elem = document.getElementById(divId);
	
	// if elem exists, it is considered true
	if(elem){
		elem.className = (elem.className == "hidden")? "unhidden": "hidden";
	} // if
} // changeVisibility()

// display message in lightbox
function showLightBox(message, message2) {
	
	// set messages
	document.getElementById("message").innerHTML = message;
	document.getElementById("message2").innerHTML = message2;

	// show lightbox
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");
	
} // showLightBox()

// close light box
function continueGame() {
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");
	
	// if the game is over, show controls
	if (gameStatus != "") {
		changeVisibility("controls");
	} // if
	
} // continueGame()