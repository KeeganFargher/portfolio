class Drop {

    constructor(width, height) {
        this.x = this.getRandomInt(0, width);
        this.y = this.getRandomInt(20, 40);

        this.ySpeedMin = 2;
        this.ySpeedMax = 7;

        this.z = this.getRandomInt(2, 18);
        this.length = map(this.z, 0, 20, 5, 15);
        this.ySpeed = this.z / 2;

        this.speedDivider = 1;
    }

    fall() {
        this.y += this.ySpeed * this.speedDivider;

        if (this.y > height) {
            this.y = this.getRandomInt(0, 50);
            this.x = this.getRandomInt(0, width);
            this.ySpeed = this.z / 2;
        }

        if (this.x > width || this.x < 0) {
            this.x = this.getRandomInt(0, width);
        }

    }

    show() {
        let thickness = map(this.z, 0, 20, 1, 3);
        let opacity = map(this.z, 0, 20, 50, 200);

        strokeWeight(thickness);
        stroke(190, opacity);
        line(this.x, this.y, this.x, this.y + this.length);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}