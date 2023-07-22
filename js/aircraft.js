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
        ctx.fillStyle = 'orange';
        ctx.drawImage(this.img, this.pos.x, this.pos.y, this.img.naturalWidth * this.scale, this.img.naturalHeight * this.scale);
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 3, 0, 2 * Math.PI);
        ctx.fill();
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