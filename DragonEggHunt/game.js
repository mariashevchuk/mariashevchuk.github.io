const levels = [
// level 1
[ "egg", "animate3", "water", "water", "flower1", "tree1", "flower2", "flower1", "", "flower2", "flower2", "water", "", "", "portal",
"", "animate3", "water", "water", "", "", "", "gem", "", "", "", "water", "", "hole", "",
"animate", "animate", "bridge animate", "bridge animate", "animate", "animate", "animate", "animate", "animate", "animate", "animate", "water animate", "animate", "animate", "animate",
"", "animate3", "water", "water", "", "hole", "", "tree2", "tree1", "", "", "bridge", "", "", "",
"", "animate3", "water", "water", "", "", "", "", "", "flower2", "", "water", "", "mushroom", "",
"animate2", "animate2", "water animate2", "water animate2", "animate2", "water animate2", "animate2", "animate2", "mushroom", "animate2", "animate2", "water animate2", "animate2", "animate2", "animate2",
"tree1", "animate3", "water", "water", "", "gem", "", "", "", "", "", "water", "", "gem", "",
"tree2", "animate3", "water", "water", "", "", "gem", "mushroom", "flower2", "", "", "water", "", "hole", "",
"tree2", "animate3", "water", "water", "", "", "", "", "", "water", "", "water", "", "", "",
"dragon", "animate3", "water", "water", "", "tree1", "tree2", "gem", "", "mushroom", "", "water", "", "", "mushroom",],

// level 2
["egg", "", "water", "flower2", "", "", "", "flower1", "", "water", "", "", "", "", "",
"tree1", "animate2", "animate2", "animate2", "mushroom", "animate2", "animate2", "animate2", "animate2", "animate2", "animate2", "hole", "animate2", "animate2", "animate2",
"", "", "", "", "", "", "", "", "", "", "flower2", "", "", "", "mushroom",
"", "mushroom", "water", "", "", "tree1", "", "", "", "", "", "", "mushroom", "", "mushroom",
"", "", "gem", "", "", "", "tree1", "tree2", "", "", "", "hole", "", "", "mushroom",
"tree1", "", "", "", "", "tree2", "water", "gem", "tree1", "", "", "", "mushroom", "", "mushroom",
"tree2", "", "", "hole", "", "", "", "tree1", "", "tree1", "", "water", "", "", "",
"tree2", "", "mushroom", "", "", "", "", "", "", "", "", "", "", "hole", "",
"flower1", "", "", "", "", "", "water", "", "", "", "", "gem", "", "", "",
"portal", "animate", "animate", "animate", "flower2", "animate", "animate", "animate", "animate", "tree1 animate", "animate", "animate", "animate", "mushroom", "dragon animate"],


// level 3
["water", "portal", "water", "", "water", "tree1", "mushroom", "flower2", "flower2", "", "", "water", "", "", "egg",
"water", "gem", "water", "", "water", "", "mushroom", "tree1", "tree2", "", "", "water", "", "", "",
"water", "", "bridge", "", "water", "", "gem", "tree2", "", "animateanimate", "", "bridge", "", "hole", "",
"water", "", "water", "", "water", "animate", "animate", "animate", "hole", "animate", "animate", "water", "animate", "animate", "animate",
"water", "", "water", "", "water", "tree2", "", "", "", "", "", "water", "", "", "",
"water", "", "water", "", "water", "", "", "flower1", "flower1", "", "", "water", "", "water", "",
"water", "", "water", "", "bridge", "", "flower2", "gem", "", "", "", "water", "", "", "",
"water", "", "water", "gem", "water", "", "", "", "", "hole", "", "water", "", "", "",
"water", "", "water", "animate2", "water", "animate2", "gem", "animate2", "animate2", "animate2", "animate2", "water", "", "hole", "",
"water", "dragon", "water", "", "water", "", "mushroom", "tree1", "mushroom", "", "", "water", "", "", ""],

// level 4
["", "gem", "", "flower1", "", "", "", "mushroom", "", "", "", "", "", "", "egg",
"tree1", "animate", "animate", "animate", "animate", "animate", "animate", "animate", "animate", "animate", "animate", "animate", "animate", "tree2", "animate",
"water", "water", "water", "water", "bridge", "water", "water", "water", "water", "water", "water", "water", "bridge", "water", "water",
"", "mushroom", "", "tree2", "", "gem", "", "", "tree2", "tree1", "", "", "", "", "flower1",
"water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "bridge", "water", "water", "water", "water",
"tree1", "flower2", "", "", "", "", "", "mushroom", "", "", "", "", "", "", "tree2",
"animate2", "animate2", "flower2", "animate2", "hole", "animate2", "animate2", "animate2", "animate2", "animate2", "animate2", "animate2", "hole", "animate2", "tree2",
"gem", "", "", "", "gem", "flowe1", "flower1", "flower2", "", "", "", "", "", "", "tree1",
"water", "water", "water", "water", "water", "water", "water", "water", "bridge", "water", "water", "water", "water", "water", "water",
"flower1", "flower1", "flower2", "mushroom", "", "", "", "dragon", "", "", "", "gem", "", "", "portal"],

// level 5
["flower1", "flower2", "water", "water", "water", "water", "water", "water", "water", "bridge", "water", "water", "mushroom", "", "",
"egg", "", "water", "water", "water", "bridge", "bridge", "bridge", "water", "bridge", "water", "water", "", "hole", "",
"gem", "", "bridge", "bridge", "water", "bridge", "water", "bridge", "water", "bridge", "water", "water", "tree1", "", "",
"tree1", "", "water", "bridge", "bridge", "bridge", "water", "bridge", "bridge", "bridge", "bridge", "bridge", "", "", "",
"", "", "water", "bridge", "water", "water", "water", "bridge", "water", "water", "bridge", "water", "", "", "",
"animate", "animate", "water", "bridge", "water", "bridge", "bridge", "bridge", "bridge", "bridge", "bridge", "water", " gem", "", "tree1",
"", "mushroom", "water", "bridge", "water", "bridge", "water", "water", "water", "water", "bridge", "bridge", "animate", "animate", "animate",
"", "", "water", "bridge", "bridge", "bridge", "water", "water", "water", "water", "water", "water", "animate2", "animate2", "animate2",
"water", "", "water", "water", "bridge", "water", "water", "water", "water", "water", "water", "water", "mushroom", "", "tree1",
"dragon", "", "water", "water", "bridge", "water", "water", "water", "water", "water", "water", "water", "", "", "portal"],

]; // end of levels

const gridBoxes = document.querySelectorAll("#gameBoard div");
const noPassObstacles = ["flower1", "flower2", "tree2", "tree1", "mushroom"];
const animateBoxes = []; 

var currentAnimationNum = 0;
var currentAnimation = [];
var currentLevel = 0; // starting level
var gotEgg = false; // did the dragon get the egg?
var currentLocationOfDragon = 0; // location of dragon once on the board
var moves = 0; // number of moves allowed
var maxMoves = 0;
var widthOfBoard = 15;
var nextClass = "";
var lives = 3; // lives player has at the beginning of game
var level = 0; // level at the beginning of game
var nextLocation = 0;
gridBoxes[nextLocation].className;

// show menu at the beginning of game
if (currentLevel = 0) {
	document.getElementById("menu").style.display = "block";
} // if

function continueGame() {
	changeVisibility("welcome", "hidden"); // hides welcome menu when continue is pressed
	changeVisibility("menu", "unhidden"); // shows menu
	changeVisibility("winMenu", "hidden");
	changeVisibility("restart", "hidden");
	changeVisibility("loseMenu", "hidden");
} // continueGame()

// starts game (when start button is pressed)
function startGame() {
	var i = 0;
	while (i < currentAnimationNum) {
		clearTimeout(currentAnimation[i]);
		clearTimeout(currentAnimation[i]);
		i++;
	}
	changeVisibility("loseMenu", "hidden");
	changeVisibility("winMenu", "hidden");
	changeVisibility("menu", "hidden"); // hides menu when start is pressed
	loadLevel();
	currentLevel = 0;
	lives = 3;
	document.getElementById("lives").innerHTML = ("Lives: "  + lives + "/3");
	changeVisibility("restart", "unhidden");
} // startGame()

// displays win menu when final game is reached
function winGame() {
	changeVisibility("winMenu", "unhidden");
	changeVisibility("restart", "hidden");
	currentLevel = 0;
	var i = 0;
	while (i < currentAnimationNum) {
		clearTimeout(currentAnimation[i]);
		i++;
	}
	currentAnimationNum = 0;
	level = 0;
	lives = 3;
} // winGame()

// displays a 'lose menu', when game is lost,
function loseGame() {
	setTimeout(function(){
		changeVisibility("loseMenu", "unhidden");
		changeVisibility("restart", "hidden");
		currentLevel = 0;
		level = 0;
		var i = 0;
		while (i < currentAnimationNum) {
			clearTimeout(currentAnimation[i]);
			i++;
		}
	currentAnimationNum = 0;
	lives = 3;
	}, 2000);
} // loseGame()

// restarts current level
function restart() {
	var i = 0;
	while (i < currentAnimationNum) {
		clearTimeout(currentAnimation[i]);
		i++;
	}
	currentAnimationNum = 0;
	lives = 3;
	document.getElementById("level").innerHTML = ("Level: "  + level + "/5");
	document.getElementById("lives").innerHTML = ("Lives: "  + lives + "/3");
	animate = 0;
	level = 0;
	loadLevel();
} // restart()

// move dragon
document.addEventListener("keydown", function (e) {

	switch (e.keyCode) {
		case 37: // left arrow
			if (currentLocationOfDragon % widthOfBoard !== 0) {
				tryToMove("left");
				moves--;
				document.getElementById("moves").innerHTML = ("Moves left: "  + moves + "/" + maxMoves);
			} // if
		break;
		case 38: // up arrow
			if (currentLocationOfDragon - widthOfBoard >= 0) {
				tryToMove("up");
				moves--;
				document.getElementById("moves").innerHTML = ("Moves left: "  + moves + "/" + maxMoves);
			} // if
			break;
		case 39: // right arrow
			if (currentLocationOfDragon % widthOfBoard < widthOfBoard - 1) {
				tryToMove("right");
				moves--;
				console.log(moves, maxMoves);
				document.getElementById("moves").innerHTML = ("Moves left: "  + moves + "/" + maxMoves);
			} // if
			break;
		case 40: // down arrow
			if (currentLocationOfDragon + widthOfBoard < widthOfBoard * widthOfBoard) {
				tryToMove("down");
				moves--;
				document.getElementById("moves").innerHTML = ("Moves left: "  + moves + "/" + maxMoves);
			} // if
			break;
	} // switch
}); // key event listener

// try to move dragon
function tryToMove(direction) {

	// location before move
	let oldLocation = currentLocationOfDragon;

	// class of location before move
	let oldClassName = gridBoxes[oldLocation].className;

	let nextLocation = 0; // location we wish to move to
	let nextClass = ""; // class of location we wish to move to

	let nextLocation2 = 0;
	let nextClass2 = "";

	let newClass = ""; // new class to switch to if move successful

	switch (direction) {
		case "left":
			nextLocation = currentLocationOfDragon - 1;
			break;
		case "right":
			nextLocation = currentLocationOfDragon + 1;
			break;
		case "up":
			nextLocation = currentLocationOfDragon - widthOfBoard;
			break;
		case "down":
			nextLocation = currentLocationOfDragon + widthOfBoard;
			break;
	} // switch

	nextClass = gridBoxes[nextLocation].className;

	// if the obstacle is not passable, don't move
	if (noPassObstacles.includes(nextClass)) { moves++; return; }

	// if it's a hole, and the dragon has not egg, don't move
	if (!gotEgg && nextClass.includes("hole")) { moves++; return; }

	// when there is a portal and the dragon has no egg, don't move
	if (!gotEgg && nextClass.includes("portal")) { moves++; return; }

	// if there aren't anymore moves left, you lose
	if (moves == 1) {
	document.getElementById("movesLost").style.display = "block";
		var i = 0;
		while (i < currentAnimationNum) {
			clearTimeout(currentAnimation[i]);
			i++;
		}
		setTimeout (function() {
			document.getElementById("movesLost").style.display = "none";
		}, 2000);
		lives = 0;
		loseGame();
		return;
	}

	// if there is a hole, move two spaces with animation
	if (nextClass.includes("hole")) {

		// dragon must have egg to jump
		if (gotEgg) {
			gridBoxes[currentLocationOfDragon].className = "";
			oldClassName = gridBoxes[currentLocationOfDragon].className;

			// set values according to direction
			if (direction == "left"){
				nextClass = "dEggleft";
				nextClass2 = "dEggleft";
				nextLocation2 = nextLocation - 1;
			} else if (direction == "right"){
				nextClass = "dEggright";
				nextClass2 = "dEggright";
				nextLocation2 = nextLocation + 1;
			} else if (direction == "up"){
				nextClass = "dEgg";
				nextClass2 = "dEgg";
				nextLocation2 = nextLocation - widthOfBoard;
			} else if (direction == "down"){
				nextClass = "dEgg";
				nextClass2 = "dEgg";
				nextLocation2 = nextLocation + widthOfBoard;
			} // else

			// show dragon jumping
			gridBoxes[nextLocation].className = nextClass;

			setTimeout(function () {
				// set jump back to just a hole
				gridBoxes[nextLocation].className = "hole";

				// update current location of dragon to be 2 spaces past take off'
				currentLocationOfDragon = nextLocation2;

				// get class of box after jump
				nextClass = gridBoxes[currentLocationOfDragon].className;

				// show dragon with egg after landing
				gridBoxes[currentLocationOfDragon].className = nextClass2;

				// if next box is a portal, level up
				levelUp(nextClass);
				
			}, 200);
			return;
		} // gotEgg
	} // if (class has hole)

	// if there is egg, add egg
	if (nextClass == "egg") {
		gotEgg = true;
	} // if

	// collects gems if player has <3 lives
	if (nextClass == "gem") {
		if (lives >= 3) {
			moves++;
			return;
		} else {
			lives++;
			document.getElementById("lives").innerHTML = ("Lives: "  + lives + "/3");
		}
	}

	// if there is a bridge on the old location, keep it
	if (oldClassName.includes("bridge")) {
		gridBoxes[oldLocation].className = "bridge";
	} else {
		gridBoxes[oldLocation].className = "";
	} // else

	// build name of new class
	newClass = (gotEgg) ? ("dEgg"): "dragon";
	newClass += direction;

	// if there is a bridge in the next location, keep it
	if (gridBoxes[nextLocation].classList.contains("bridge")) {
		newClass += " bridge";
	} // if

	// move 1 space
	currentLocationOfDragon = nextLocation;
	gridBoxes[currentLocationOfDragon].className = newClass;

	// if enemy is in the box that dragon moves to, lives are lost, or game is lost (if there aren't any lives left)
	if (nextClass.includes("evilLeft") || nextClass.includes("evilRight")) {
		if (lives == 1) {
			document.getElementById("evilKill").style.display = "block";
			var i = 0;
			while (i < currentAnimationNum) {
				clearTimeout(currentAnimation[i]);
				i++;
			}
			setTimeout (function() {
				document.getElementById("evilKill").style.display = "none";
			}, 2000);
			loseGame();
		} else {
			lives--;
			document.getElementById("lives").innerHTML = ("Lives: "  + lives + "/3");
		} // if
		return;
	} // if

	// if water is touched
	if (nextClass.includes("water")) {
		document.getElementById("drowned").style.display = "block";
		gridBoxes[currentLocationOfDragon].className = "water";
		var i = 0;
		while (i < currentAnimationNum) {
			clearTimeout(currentAnimation[i]);
			i++;
		}
		setTimeout (function() {
			document.getElementById("drowned").style.display = "none";
		}, 2000);
		lives = 0;
		document.getElementById("lives").innerHTML = ("Lives: "  + lives + "/3");
		loseGame();
		return;
	} // if
	
	// move up to next level
	levelUp(nextClass);

} // tryToMove()

// move up a level
function levelUp(nextClass) {
	if (nextClass == "portal" && gotEgg) {
		if (currentLevel >= 4) {
			winGame();
		} else {
			document.getElementById("levelup").style.display = "block";
			var i = 0;
			while (i < currentAnimationNum) {
				clearTimeout(currentAnimation[i]);
				i++;
			}
			setTimeout (function() {
				document.getElementById("levelup").style.display = "none";
				currentLevel++;
				loadLevel(); // loads the next level
			}, 2000);
		} // else
	} // if
} // levelUp()

// load levels 0 - max levels
function loadLevel() {
	let levelMap = levels[currentLevel];
	
	level++; // increment level by one
	gotEgg = false; // resets to false every level

	document.getElementById("level").innerHTML = ("Level: "  + level + "/5");

	// load board
	for (i = 0; i < gridBoxes.length; i++) {
		gridBoxes[i].className = levelMap[i];
		if (levelMap[i].includes("dragon")) currentLocationOfDragon = i;
	} // for

	if (level == 1) {
		maxMoves = 40;
		moves = 40;
		document.getElementById("moves").innerHTML = ("Moves left: "  + moves + "/" + maxMoves);
	} else if (level == 2) {
		maxMoves = 45;
		moves = 45;
		document.getElementById("moves").innerHTML = ("Moves left: "  + moves + "/" + maxMoves);
	} else if (level == 3) {
		maxMoves = 60;
		moves = 60;
		document.getElementById("moves").innerHTML = ("Moves left: "  + moves + "/" + maxMoves);
	} else if (level == 4) {
		maxMoves = 40;
		moves = 40;
		document.getElementById("moves").innerHTML = ("Moves left: "  + moves + "/" + maxMoves);
	} else {
		maxMoves = 40;
		moves = 40;
		document.getElementById("moves").innerHTML = ("Moves left: "  + moves + "/" + maxMoves);
	}
   
	animateBoxes[0] = document.querySelectorAll(".animate");
	animateBoxes[1] = document.querySelectorAll(".animate2");
    animateBoxes[2] = document.querySelectorAll(".animate3");

	animateEnemy(animateBoxes[0], 0, "right");
    if (animateBoxes[1].length > 0 ) {
		animateEnemy(animateBoxes[1], 0, "right");
	} else if (animateBoxes[2].length > 0 ) {
		animateEnemy(animateBoxes[2], 0, "up");
	}
} // loadLevel()

// animate evil dragon left to right (could add up and down)
// boxes - array of grid boxes that include animation
// index - current location of enemy
// direction - current direction of animation
function animateEnemy(boxes, index, direction) {

	// exit if function if no animation
	if (boxes.length <= 0) { return; }

	// remove images from other boxes
	for (i = 0; i < boxes.length; i++) {
		if (i != index) {
			boxes[i].classList.remove("evilRight");
			boxes[i].classList.remove("evilLeft");
			boxes[i].classList.remove("evilUp");
			boxes[i].classList.remove("evilDown");
		} // if
	} // for

	nextClass = boxes[index].className;

	// check if there is a dragon in the box
	if (nextClass.includes("dragon") || nextClass.includes("dEgg")) {
			if (lives == 1) {
				var i = 0;
			while (i < currentAnimationNum) {
				clearTimeout(currentAnimation[i]);
				i++;
			}
			document.getElementById("evilKill").style.display = "block";
			setTimeout (function() {
				document.getElementById("evilKill").style.display = "none";
			}, 2000);
			loseGame();
		} else {
			lives--;
			document.getElementById("lives").innerHTML = ("Lives: "  + lives + "/3");
		} // if
	} // if

	// update images
	if (direction == "right") {
		boxes[index].classList.add("evilRight"); // evil dragon right when get icon
	} else if (direction == "left") {
		boxes[index].classList.add("evilLeft"); // evil dragon left (usually)
	} // else

	// moving right
	if (direction == "right") {
		// turn around if hit right side
		if (index == boxes.length - 1) {
			index --;
			direction = "left";
		} else {
			index ++;
		} // else
	// moving left
	} else if (direction == "left") {
		// turn around if hit left side
		if (index == 0) {
			index++;
			direction = "right";
		} else {
			index--;
		} // else
	} // main else

	// animates enemies
	currentAnimation[currentAnimationNum] = setTimeout(function () {
		animateEnemy(boxes, index, direction);
		currentAnimationNum++;
	}, 500);

} // animateEnemy()

// changes the visibility of divs
// divId - class name
// change - hides or unhides class depending on what the class was previously set to
function changeVisibility(divId, change){
	var element = document.getElementById(divId);

	element.className = change;
} // changeVisibility()