const levels = [
// level 0
[ "flag", "lava",  "", "power", "",
"oil", "lava", "", "hole", "",
"", "bridge", "", "", "",
"obstacle", "lava", "animate", "animate", "animate",
"", "lava", "", "", "robot",
],

// level 1
[ "", "lava",  "", "power", "",
"", "lava", "", "", "",
"animate", "bridge animate", "animate", "animate", "animate",
"", "lava", "", "", "",
"flag", "lava", "", "", "robot",
]

]; // end of levels

const gridBoxes = document.querySelectorAll("#gameBoard div");
var currentLevel = 0; // startin level
var gotPower = false; // did the alien get the power?
var currentLocationOfRobot = 0;
var currentAnimation; // allows 1 animation per level, more animations, more variables

// start game
window.addEventListener("load", function () {
	loadLevel();
});

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

animateEnemy(animateBoxes, 0, "dRight");

} // loadLevel()

// animate fire left to right (could add up and down)
// boxes - array of grid boxes that include animation
// index - current location of animation
// direction - current direction of animation
function animateEnemy(boxes, index, direction) {

// exit if function if no animation
if (boxes.length <= 0) { return;}

// update images
if (direction == "right") {
  	boxes[index].classList.add("dRight"); // fire right when get icon
} else {
	boxes[index].classList.add("dLeft"); // fire left (usually)
} // else

// remove images from other boxes
for (i = 0; i < boxes.length; i++) {
	if (i != index) {
		boxes[i].classList.remove("dRight"); // fire right
		boxes[i].classList.remove("dLeft"); // fire right
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

