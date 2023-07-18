class Raptor extends Aircraft {
    constructor(x, y, altitude, speed, heading, health, imageUrl, shield) {
        super(x, y, altitude, speed, heading, health, imageUrl);
        this.steer = new Vector(0, 0);
        this.shield = shield;
        this.acceleration = 0;
        this.maxSpeed = RAPTOR_MAX_SPEED;
        this.boostMaxSpeed = RAPTOR_MAX_BOOST_SPEED;
    }

    display() {
        ctx.drawImage(this.img, this.pos.x, this.pos.y, this.img.naturalWidth * this.scale, this.img.naturalHeight * this.scale);
    }

    update() {
        this.pos.add(this.velocity);
    }

    steerLeft() {
        // this.SetAngle(-0.5 * Math.PI);
        this.steer.x = -1;
    }

    steerRight() {
        // this.SetAngle(0.5 * Math.PI);
        this.steer.x = 1;
    }

    forward() {
        // this.SetAngle(2 * Math.PI);
        this.steer.y = -1;
    }

    reverse() {
        // this.SetAngle(Math.PI);
        this.steer.y = 1;
    }
}