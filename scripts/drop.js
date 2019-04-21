class Drop {
	constructor(width) {
		this.ySpeedMin = 2;
		this.ySpeedMax = 7;

		this.yPositionMin = 0;
		this.yPositionMax = 0;

		this.x = this.generateXCords();
		this.y = this.generateYCords();

		this.z = this.getRandomInt(2, 18);
		this.length = map(this.z, 0, 20, 5, 15);
		this.ySpeed = this.z / 3;

		this.opacity = this.generateOpacity();

		this.speedDivider = 1;
	}

	fall() {
		this.y += this.ySpeed * this.speedDivider;

		if (this.y > height) {
			this.y = this.generateYCords();
			this.x = this.generateXCords();
			this.ySpeed = this.z / 3;
			this.opacity = this.generateOpacity();
		}

		if (this.x > width || this.x < 0) {
			this.x = this.generateXCords();
		}
	}

	show() {
		let thickness = map(this.z, 0, 20, 1, 3);

		strokeWeight(thickness);
		stroke(141, 146, 160, this.opacity);
		line(this.x, this.y, this.x, this.y + this.length);

		this.opacity /= 1.02;
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	generateYCords = () => this.getRandomInt(this.yPositionMin, this.yPositionMax);
	generateXCords = () => this.getRandomInt(0, width);
	generateOpacity = () => map(this.z, 0, 20, 100, 200);
}