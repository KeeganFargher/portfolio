let drops = [];
let rainCount = 200;
let dropChance = 0.6;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	if (windowWidth < 576) {
		rainCount = 75;
		dropChance = 0.9;
	}

	// Move the canvas so it’s inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	canvas.style('display', 'block');
}

function draw() {
	background(37, 41, 52);

	for (let drop of drops) {
		drop.fall();
		drop.show();
	}

	if (random() > dropChance && drops.length < rainCount) {
		drops.push(new Drop(windowWidth, windowHeight));
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}