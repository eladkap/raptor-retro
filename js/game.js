var canvas = document.getElementById('gameplay-canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* GLOBALS */
var level;
var raptor;
var bullets;

/* KEYBOARD EVENTS */
window.addEventListener("keypress", KeyPressed);
window.addEventListener("keydown", KeyDown);
window.addEventListener("keyup", KeyReleased);

function KeyPressed(event) {
    if (event.key == ' ') {
      raptor.fireBullet(ANGLE_OFFSET);
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

function setBackground() {

}

function createRaptor() {
  raptor = new Raptor(RAPTOR_POS_X, RAPTOR_POS_Y, RAPTOR_ALTITUDE, 0, 0, RAPTOR_HEALTH, RAPTOR_IMAGE_SOURCE, RAPTOR_SHIELD);
}

function createBullets() {
  bullets = [];
}

function updateRaptor() {
  raptor.display();
  raptor.update();
}

function updateBullets() {
  for (let bullet of bullets) {
    bullet.display();
    bullet.update();
  }
}

function removeBulletsOffScreen() {
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].toDestroy) {
      bullets.splice(i, 1);
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

function setup() {
  setBackground();
  createRaptor();
  createBullets();

    // setInterval(() => {
    //     console.log('Setup finished.');
    // }, 3000);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateRaptor();
  checkRaptorInScreenEdges();
  updateBullets();
  removeBulletsOffScreen();
  requestAnimationFrame(update);
}

setup();
requestAnimationFrame(update);
