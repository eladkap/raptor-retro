class Bullet {
    constructor(x, y, damage, radius, backColor, velocity) {
        this.pos = new Vector(x, y);
        this.damage = damage;
        this.radius = radius;
        this.width = 2 * radius;
        this.velocity = velocity;
        this.angle = ANGLE_OFFSET;
        this.backColor = backColor;
        this.toDestroy = false;
    }

    display() {
        ctx.fillStyle = this.backColor;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        this.pos.add(this.velocity);
        this.checkEdges();
    } 

    checkEdges() {
        // left or right
        if (this.pos.x < 0 || this.pos.x > canvas.width) {
          this.destroy();
        }
        // up or down
        else if (
          this.pos.y < 0 ||
          this.pos.y > canvas.height
        ) {
          this.destroy();
        }
    }

    destroy() {
        this.toDestroy = true;
    }  
}