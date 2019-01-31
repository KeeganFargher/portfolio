let drop = [];

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    canvas.style('display', 'block');

    canvas.mousePressed(mousePressed);
    canvas.mouseReleased(mouseReleased);

    for (let index = 0; index < windowWidth / 3; index++) {
        drop[index] = new Drop(windowWidth, windowHeight);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    background(37, 41, 52);

    for (let index = 0; index < drop.length; index++) {
        drop[index].fall();
        drop[index].show();
    }

}

function mousePressed() {
    for (let index = 0; index < drop.length; index++) {
        drop[index].ySpeed = 0;
    }
}

function mouseReleased() {
    for (let index = 0; index < drop.length; index++) {
        drop[index].ySpeed = map(drop[index].z, 0, 20, 4, 8);
    }
}