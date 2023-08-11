class Level {
    constructor(levelData, gameSpeed, mapWidth, mapHeight) {
        this.backgroundImage = new Image();
        this.backgroundImage.src = BACKGROUND_IMAGE_LEVEL1;
        this.stars = [];
        this.episode = 1;
        this.mission = 1;
        this.waves = [];
        this.enemyObjects = [];
        this.speed = gameSpeed;
        this.loadFromJsonFile(levelData);
        this.width = mapWidth;
        this.height = mapHeight;
        this.createStars();
    }

    loadFromJsonFile(levelData) {
        this.episode = levelData.episode;
        this.mission = levelData.mission;
        this.waves = levelData.waves;
        for (let wave of this.waves) {
            this.enemyObjects = this.enemyObjects.concat(wave.enemies);
        }
    }

    createStars() {
        for (let i = 0; i < STARS_NUMBER; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let r = 2 + Math.random() * 2;
            let speed = Math.random() * 0.2;
            let star = new Star(x, y, r, speed, 'rgb(250, 250, 250, 1)');
            this.stars.push(star);
        }
    }

    display() {
        ctx.drawImage(this.backgroundImage, 0, 0, this.width, this.height);
    }

    update() {
        for (let star of this.stars) {
            star.display();
            star.update();
        }
    }
}