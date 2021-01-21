const levels = [
	// level 0
	[ "flag", "lava",  "", "power", "",
	"hole", "lava", "", "hole", "",
	"", "bridge", "", "", "",
	"rock", "lava", "animate", "animate", "animate",
	"oil", "lava", "", "", "robot"],

	// level 1
	[ "flag", "",  "hole", "", "",
	 "lava", "lava",  "lava", "bridge", "lava",
	"", "", "oil", "", "",
	"animate", "animate", "animate", "animate", "animate",
	"robot", "", "", "rock", "power"],
	
	// level 2
	[ "power", "hole",  "", "", "",
	"animate", "animate", "animate", "animate", "animate",
	"lava", "bridge",  "lava", "lava", "lava",
	"", "", "", "robot", "",
	"rock", "rock", "rock", "flag", "rock"]

]; // end of levels

const gridBoxes = document.querySelectorAll("#gameBoard div");
const noPassObstacles = ["rock", "lava", "oil"];

var currentLevel = 0; // startin level
var gotPower = false; // did the robot get the power?
var currentLocationOfRobot = 0;
var currentAnimation; // allows 1 animation per level, more animations -> more variables
var widthOfBoard = 5;

// start game
window.addEventListener("load", function () {
	loadLevel();
});

// move robot
document.addEventListener("keydown", function (e) {

	switch (e.keyCode) {
		case 37: // left arrow
			if (currentLocationOfRobot % widthOfBoard !== 0) {
				tryToMove("left");
			} // if
			break;
		case 38: // up arrow
			if (currentLocationOfRobot - widthOfBoard >= 0) {
				tryToMove("up");
			} // if
			break;
		case 39: // right arrow
			if (currentLocationOfRobot % widthOfBoard < widthOfBoard - 1) {
				tryToMove("right");
			} // if
			break;
		case 40: // down arrow
			if (currentLocationOfRobot + widthOfBoard < widthOfBoard * widthOfBoard) {
				tryToMove("down");
			} // if
			break;
	} // switch
}); // key event listener

// try to move robot
function tryToMove(direction) {

	// location before move
	let oldLocation = currentLocationOfRobot;

	// class of location before move
	let oldClassName = gridBoxes[oldLocation].className;

	let nextLocation = 0; // location we wish to move to
	let nextClass = ""; // class of location we wish to move to

	let nextLocation2 = 0;
	let nextClass2 = "";
	
	let newClass = ""; // new class to switch to if move successful

	switch (direction) {
		case "left":
			nextLocation = currentLocationOfRobot - 1;
			console.log("left");
			break;
		case "right":
			nextLocation = currentLocationOfRobot + 1;
			console.log("right");
			break;
		case "up":
			nextLocation = currentLocationOfRobot - widthOfBoard;
			console.log("up");
			break;
		case "down":
			nextLocation = currentLocationOfRobot + widthOfBoard;
			console.log("down");
			break;
	} // switch

	nextClass = gridBoxes[nextLocation].className;

	// if the obstacle is not passable, don't move
	if (noPassObstacles.includes(nextClass)) { return; }

	// if it's a hole, and the robot has not power, don't move
	if (!gotPower && nextClass.includes("hole")) { return; }

	// when there is a flag and the robot has no power, don't move
	if (!gotPower && nextClass.includes("flag")) { return; }
	
	// if there is a hole, move two spaces with animation
	if (nextClass.includes("hole")) {
		
		// robot must have power to jump
		if (gotPower) {
			gridBoxes[currentLocationOfRobot].className = ""; // bug if there is a bridge after/before a jump
			oldClassName = 	gridBoxes[currentLocationOfRobot].className;

			// set values according to direction
			if (direction == "left"){
				nextClass = "rShootleft";
				nextClass2 = "rPointleft"; // once finished jumping and still going left, picture of robot
				nextLocation2 = nextLocation - 1;
			} else if (direction == "right"){
				nextClass = "rShootright";
				nextClass2 = "rPointright"; // once finished jumping and still going left, picture of robot
				nextLocation2 = nextLocation + 1;
			} else if (direction == "up"){
				nextClass = "rShootup";
				nextClass2 = "rPointup"; // once finished jumping and still going left, picture of robot
				nextLocation2 = nextLocation - widthOfBoard;
			} else if (direction == "down"){
				nextClass = "rShootdown";
				nextClass2 = "rPointdown"; // once finished jumping and still going left, picture of robot
				nextLocation2 = nextLocation + widthOfBoard;
			}
			
			// show robot jumping
			gridBoxes[nextLocation].className = nextClass;
			
			setTimeout(function () { 
				
				// set jump back to just a hole
				gridBoxes[nextLocation].className = oldClassName;

				// update current location of robot to be 2 spaces past take off'
				currentLocationOfRobot = nextLocation2;
				
				// get class of box after jump
				nextClass = gridBoxes[currentLocationOfRobot].className; // if the hole is infront of a no passable obstacle, it will land on it 
				
				// show horse and rider after landing
				gridBoxes[currentLocationOfRobot].className = nextClass2;
				
				// if next box is a flag, level up
				levelUp(nextClass);
				
			}, 350);
			return;
			
		} // gotPower
	} // if class has hole
	
	// if there is power, add power
	if (nextClass == "power") {
		gotPower = true;
	} // if

	// if there is a bridge on the old location, keep it
	if (oldClassName.includes("bridge")) {
		gridBoxes[oldLocation].className = "bridge";
	} else {
		gridBoxes[oldLocation].className = "";
	} // else

	// build name of new class
	newClass = (gotPower) ? "rPoint" : "robot";
	newClass += direction;

	// if there is a bridge in the next location, keep it
	if (gridBoxes[nextLocation].classList.contains("bridge")) {
		newClass += " bridge";
	} // if

	// move 1 space
	currentLocationOfRobot = nextLocation;
	gridBoxes[currentLocationOfRobot].className = newClass;

	// if it is an enemy
	if (nextClass.includes("dLeft") || nextClass.includes("dRight")) {
		document.getElementById("lose").style.display = "block";
		return;
	} // if

	// move up to next level
	levelUp(nextClass);
	
} // tryToMove()

// move up a level
function levelUp(nextClass) {
	if (nextClass == "flag" && gotPower) {
		document.getElementById("levelup").style.display = "block";
		clearTimeout(currentAnimation);
		setTimeout (function() {
			document.getElementById("levelup").style.display = "none";
			currentLevel++; // add if statement, not incrementing levels if there aren't any
			loadLevel(); // loads the next level
		}, 1000);
	} // if
	
} // levelUp()

// load levels 0 - max levels
function loadLevel() {
	let levelMap = levels[currentLevel];
	let animateBoxes;
	gotPower = false; // resets to false every level

	// load board
	for (i = 0; i < gridBoxes.length; i++) {
		gridBoxes[i].className = levelMap[i];
		if (levelMap[i].includes("robot")) currentLocationOfRobot = i;
	} // for

	animateBoxes = document.querySelectorAll(".animate");

	animateEnemy(animateBoxes, 0, "right");

} // loadLevel()

// animate dinosaur  left to right (could add up and down)
// boxes - array of grid boxes that include animation
// index - current location of animation
// direction - current direction of animation
function animateEnemy(boxes, index, direction) {

	// exit if function if no animation
	if (boxes.length <= 0) { return; }

	// update images
	if (direction == "right") {
		boxes[index].classList.add("dRight"); // dinosaur right when get icon
	} else {
		boxes[index].classList.add("dLeft"); // dinosaur left (usually)
	} // else

	// remove images from other boxes
	for (i = 0; i < boxes.length; i++) {
		if (i != index) {
			boxes[i].classList.remove("dRight"); // dinosaur right
			boxes[i].classList.remove("dLeft"); // dinosair left
		} // if
	} // for

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
	} else {
		// turn around if hit left side
		if (index == 0) {
			index++;
			direction = "right";
		} else {
			index--;
		} // else
	} // else

	currentAnimation = setTimeout(function () {
	animateEnemy(boxes, index, direction);
	}, 750);

} // animateEnemy()