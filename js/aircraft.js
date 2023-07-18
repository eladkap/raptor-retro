class Aircraft {
    constructor(x, y, altitude, speed, heading, health, imageUrl) {
        this.pos = new Vector(x, y);
        this.altitude = altitude;
        this.velocity = Vector.fromAngle(heading, speed);
        this.heading = heading;
        this.speed = speed;
        this.health = health;
        this.img = new Image();
        this.setImage(imageUrl);
    }

    display() {
        ctx.drawImage(this.img, this.pos.x, this.pos.y);
    }

    update() {
        this.pos.add(this.velocity);
    }

    setImage(imageUrl) {
        this.img.src = imageUrl;
    }

    damage(amount) {
        this.health -= amount;
        this.health = max(health, 0);
    }

    destroy() {

    }
}