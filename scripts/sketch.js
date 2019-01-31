let drop = [];

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
    canvas.style('display', 'block');

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