let drops = [];
let rainCount = 100;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	if (windowWidth < 576) {
		rainCount = 25;
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

	if (random() > 0.6 && drops.length < rainCount) {
		drops.push(new Drop(windowWidth, windowHeight));
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}