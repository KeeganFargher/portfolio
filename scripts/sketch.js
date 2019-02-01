let drops = [];
const rainCount = 200;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    canvas.style('display', 'block');

    // canvas.mousePressed(mousePressed);
    // canvas.mouseReleased(mouseReleased);
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
    drops = [];
}

// function mousePressed() {
//     for (let drop of drops) {
//         drop.speedDivider = 0.1;
//     }

// }

// function mouseReleased() {
//     for (let drop of drops) {
//         drop.speedDivider = 1;
//     }
// }