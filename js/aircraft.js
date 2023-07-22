class Aircraft {
    constructor(x, y, altitude, speed, heading, health, imageUrl) {
        this.img = new Image();
        this.setImage(imageUrl);
        this.scale = IMAGE_SCALE;
        this.width = this.img.naturalWidth * this.scale;
        this.height = this.img.naturalHeight * this.scale;
        this.pos = new Vector(x, y);
        this.altitude = altitude;
        this.velocity = Vector.fromAngle(heading, speed);
        this.heading = heading;
        this.speed = speed;
        this.health = health;
    }

    display() {
        ctx.drawImage(this.img, this.pos.x - this.width / 2, this.pos.y - this.height / 2, this.img.naturalWidth * this.scale, this.img.naturalHeight * this.scale);
    }

    update() {
        this.pos.add(this.velocity);
    }

    setImage(imageUrl) {
        this.img.src = imageUrl;
    }

    setScale(scale) {
        this.scale = scale;
    }

    damage(amount) {
        this.health -= amount;
        this.health = max(health, 0);
    }

    destroy() {

    }
}