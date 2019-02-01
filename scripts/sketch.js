let drops = [];
const rainCount = 200;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    canvas.style('display', 'block');

    canvas.mousePressed(mousePressed);
    canvas.mouseReleased(mouseReleased);

    // for (let index = 0; index < rainCount; index++) {
    //     drops.push(new Drop(windowWidth, windowHeight));
    // }
}

function draw() {
    background(37, 41, 52);

    for (let drop of drops) {
        drop.fall();
        drop.show();
    }

    if (random() > 0.3 && drops.length < rainCount) {
        drops.push(new Drop(windowWidth, windowHeight));
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    for (let index = 0; index < rainCount; index++) {
        drops[index] = new Drop(windowWidth, windowHeight);
    }
}

function mousePressed() {
    for (let drop of drops) {
        drop.speedDivider = 0.1;
    }

}

function mouseReleased() {
    for (let drop of drops) {
        drop.speedDivider = 1;
    }
}