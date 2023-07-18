class Raptor extends Aircraft {
    constructor(x, y, altitude, speed, heading, health, imageUrl, shield) {
        super(x, y, altitude, speed, heading, health, imageUrl);
        // this.steer = new Vector(0, 0);
        this.shield = shield;
        this.acceleration = 0;
        this.maxSpeed = RAPTOR_MAX_SPEED;
        this.boostMaxSpeed = RAPTOR_MAX_BOOST_SPEED;
    }

    // display() {
    //     ctx.drawImage(this.image, this.pos.x, this.pos.y);
    // }

    // setImage(imageUrl) {
    //     this.img.src = imageUrl;
    // }
}