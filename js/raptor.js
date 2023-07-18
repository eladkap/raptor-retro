class Raptor extends Aircraft {
    constructor(x, y, altitude, speed, heading, health, imageUrl, shield) {
        super(x, y, altitude, speed, heading, health, imageUrl);
        this.steer = new Vector(0, 0);
        this.shield = shield;
        this.acceleration = false;
        this.maxSpeed = RAPTOR_MAX_SPEED;
        this.boostMaxSpeed = RAPTOR_MAX_BOOST_SPEED;
    }

    display() {
        ctx.drawImage(this.img, this.pos.x, this.pos.y, this.img.naturalWidth * this.scale, this.img.naturalHeight * this.scale);
    }

    update() {
        if (this.acceleration) {
            this.accelerate();
        }
        this.pos.add(this.velocity);
        this.slowDown();
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

    stop() {
        this.steer.set(0, 0);
    }

    force(a) {
        let f = new Vector(this.steer.x, this.steer.y);
        if (this.velocity.magnitude() < this.maxSpeed) {
            this.velocity.add(f);
        }
    }

    setAcceleration(b) {
        this.acceleration = b;
    }

    accelerate() {
        this.force(ANGLE_OFFSET);
    }

    slowDown() {
        if (this.velocity.magnitude() > 0) {
            this.velocity.multiply(FRICTION);
        }
    }
}