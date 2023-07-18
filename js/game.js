var canvas = document.getElementById('gameplay-canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* GLOBALS */
var level;
var raptor;

/* KEYBOARD EVENTS */
window.addEventListener("keypress", KeyPressed);
window.addEventListener("keydown", KeyDown);
window.addEventListener("keyup", KeyReleased);

function KeyPressed(event) {
    if (event.key == " ") {
        console.log("rocket");
    }
}

function KeyDown(event) {
    if (event.key == "ArrowLeft") {
        console.log('go left');
        raptor.steerLeft();
        raptor.pos.x-=5;
        // raptor.SetAccelerating(true);
      }
      if (event.key == "ArrowRight") {
        console.log('go right');
        raptor.steerRight();
        // raptor.SetAccelerating(true);
      }
      if (event.key == "ArrowUp") {
        console.log('go up');
        raptor.forward();
        // raptor.SetAccelerating(true);
      }
      if (event.key == "ArrowDown") {
        console.log('go down');
        raptor.reverse();
        // raptor.setAccelerating(true);
      }
      if (event.key == " ") {
        // raptor.FireBullet(ANGLE_OFFSET);
        // Sleep(BULLET_INTERVAL);
      }
}

function KeyReleased() {
    console.log('key released');
    // raptor.setAccelerating(false);
    // raptor.stop();
}

/* Keyboard Events */

function setBackground() {
    // ctx.fillStyle = "url('../../assets/image/background/bg_space1.png')";
}

function createRaptor() {
    raptor = new Raptor(RAPTOR_POS_X, RAPTOR_POS_Y, RAPTOR_ALTITUDE, 0, 0, RAPTOR_HEALTH, RAPTOR_IMAGE_SOURCE, RAPTOR_SHIELD);
}

function updateRaptor() {
    raptor.display();
    raptor.update();
}

function setup() {
    setBackground();
    createRaptor();


    // setInterval(() => {
    //     console.log('Setup finished.');
    // }, 3000);
}

function update() {
    updateRaptor();
    requestAnimationFrame(update);
}


setup();
requestAnimationFrame(update);
