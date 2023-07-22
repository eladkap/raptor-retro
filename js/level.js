class Level {

    constructor(levelData) {
        this.episode = 1;
        this.mission = 1;
        this.enemyObjects = [];
        this.loadFromJsonFile(levelData);
    }

    loadFromJsonFile(levelData) {
        this.episode = levelData.episode;
        this.mission = levelData.mission;
        this.enemyObjects = levelData.enemies;
    }
}