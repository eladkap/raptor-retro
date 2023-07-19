class Level {
    episode
    mission
    enemyObjects

    constructor(levelData) {
        this.loadFromJsonFile(levelData);
    }

    loadFromJsonFile(levelData) {
        this.episode = levelData.episode;
        this.mission = levelData.mission;
        this.enemyObjects = levelData.enemies;
    }
}