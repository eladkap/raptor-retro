var canvas = document.getElementById('gameplay-canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* GLOBALS */
var level;
var raptor;
var bullets;
var rockets;
var enemies = [];

/* KEYBOARD EVENTS */
window.addEventListener("keypress", KeyPressed);
window.addEventListener("keydown", KeyDown);
window.addEventListener("keyup", KeyReleased);

function KeyPressed(event) {
    if (event.key == ' ') {
      raptor.fireBullet(ANGLE_OFFSET);
    }
    if (event.key == 'e') {
      raptor.fireRocket(ANGLE_OFFSET, 'R');
    }
    if (event.key == 'q') {
      raptor.fireRocket(ANGLE_OFFSET, 'L');
    }

}

function KeyDown(event) {
    if (event.key == "ArrowLeft") {
        raptor.steerLeft();
        raptor.setAcceleration(true);
      }
      if (event.key == "ArrowRight") {
        raptor.steerRight();
        raptor.setAcceleration(true);
      }
      if (event.key == "ArrowUp") {
        raptor.forward();
        raptor.setAcceleration(true);
      }
      if (event.key == "ArrowDown") {
        raptor.reverse();
        raptor.setAcceleration(true);
      }
      if (event.key == " ") {
        // raptor.fireBullet(ANGLE_OFFSET);
        // Sleep(BULLET_INTERVAL);
      }
}

function KeyReleased() {
  raptor.setAcceleration(false);
  raptor.stop();
}

/* Keyboard Events */

function createRaptor() {
  raptor = new Raptor(RAPTOR_POS_X, RAPTOR_POS_Y, RAPTOR_ALTITUDE, 0, 0, RAPTOR_HEALTH, RAPTOR_IMAGE_SOURCE, RAPTOR_SHIELD);
}

function createEnemy(enemyObj) {
  let enemyImageUrl = ENEMY_IMAGE_MAP[enemyObj.type];
  let enemy = new Aircraft(enemyObj.x, enemyObj.y, 1,enemyObj.speed, ANGLE_OFFSET_REVERSED, enemyObj.health, enemyImageUrl);
  return enemy;
}

function createEnemies() {
  for (let enemyObj of level.enemyObjects) {
    let enemy = createEnemy(enemyObj);
    enemies.push(enemy);
  }
}

function createBullets() {
  bullets = [];
}

function createRockets() {
  rockets = [];
}

function updateLevel() {
  level.display();
  level.update();
}

function updateRaptor() {
  raptor.display();
  raptor.update();
}

function updateEnemies() {
  for (let enemy of enemies) {
    enemy.display();
    enemy.update();
  }
}

function updateBullets() {
  for (let bullet of bullets) {
    bullet.display();
    bullet.update();
  }
}

function updateRockets() {
  for (let rocket of rockets) {
    rocket.display();
    rocket.update();
  }
}

function removeBulletsOffScreen() {
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].toDestroy) {
      bullets.splice(i, 1);
    }
  }
}

function removeRocketsOffScreen() {
  for (let i = 0; i < rockets.length; i++) {
    if (rockets[i].toDestroy) {
      rockets.splice(i, 1);
    }
  }
}

function checkRaptorInScreenEdges() {
  if (raptor.pos.x > canvas.width - raptor.width) {
    raptor.pos.x = canvas.width - raptor.width;
  }
  if (raptor.pos.x < 0) {
    raptor.pos.x = 0;
  } 
  if (raptor.pos.y > canvas.height - raptor.height) {
    raptor.pos.y = canvas.height - raptor.height;
  }
  if (raptor.pos.y < 0) {
    raptor.pos.y = 0;
  }
}

async function readLevelFile(url) {
  console.log('Reading level data');
  const response = await fetch(url);
  const levelData = await response.json();
  return levelData;
}

function showLoading() {
  ctx.font = `${FONTS_SIZE_L}px ${FONT_FAMILY}`;
  ctx.fillStyle = 'white';
  ctx.fillText('LOADING...', window.innerWidth / 2, window.innerHeight / 2);
}

async function preload(callback) {
  console.log('preload started.');
  showLoading();
  readLevelFile('../assets/data/levels/level_1.json')
    .then(levelData => {
      level = new Level(levelData, GAME_SPEED, canvas.width, canvas.height);
      callback();
    });
  console.log('preload finished.');
} 

function setup() {
  console.log('setup started.');
  createRaptor();
  createEnemies();
  createBullets();
  console.log(level);
  console.log('setup finished.');  
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateLevel();
  updateRaptor();
  checkRaptorInScreenEdges();
  updateEnemies();
  updateBullets();
  removeBulletsOffScreen();
  requestAnimationFrame(update);
}

function runGame() {
  setup();
  requestAnimationFrame(update);
}

preload(runGame);


