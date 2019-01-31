class Drop {

    constructor(width, height) {
        this.x = this.getRandomInt(0, width);
        this.y = this.getRandomInt(height, 0);

        this.z = this.getRandomInt(0, 20);
        this.length = map(this.z, 0, 20, 10, 20);
        this.ySpeed = map(this.z, 0, 20, 4, 10);

    }

    fall() {
        this.y += this.ySpeed;

        if (this.y > height) {
            this.y = 0;
            this.x = this.getRandomInt(0, width);
            this.ySpeed = map(this.z, 0, 20, 4, 10);
        }
    }

    show() {
        let thickness = map(this.z, 0, 20, 1, 3);
        strokeWeight(thickness);
        stroke(180, 180, 180);
        line(this.x, this.y, this.x, this.y + this.length);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}