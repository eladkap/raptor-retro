class Star {
    constructor(x, y, radius, speed, color) {
        this.pos = new Vector(x, y);
        this.radius = radius;
        this.speed = speed;
        this.color = color;
    }

    display() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, this.radius, this.radius);
    }

    update() {
        this.pos.y += this.speed;
        if (this.pos.y >= canvas.height) {
            this.pos.y = 0;
        }
    }
}