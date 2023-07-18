/* Game Physics */
const GRAVITY = 0.1;
const IMAGE_SCALE = 0.2;
const MOVEMENT_UNITS = 5;
const ANGLE_OFFSET = -Math.PI / 2;
const ANGLE_OFFSET_REVERSED = Math.PI / 2;
const FRICTION = 0.95;

/* Raptor */
const RAPTOR_POS_X = window.innerWidth * 0.5;
const RAPTOR_POS_Y = window.innerHeight * 0.8;
const RAPTOR_ALTITUDE = 100;
const RAPTOR_HEALTH = 1000;
const RAPTOR_SHIELD = 1000;
const RAPTOR_ACC = 0.7;
const RAPTOR_BOOST_ACC = 1;
const RAPTOR_MAX_SPEED = 8;
const RAPTOR_MAX_BOOST_SPEED = 10;
const ROTATE_ACC = 0.1;
const MAX_ROTATE = 1;
const RAPTOR_FRICTION = 0.95;
const RAPTOR_IMAGE_SOURCE = 'assets/image/sprites/raptor/raptor.png';

/* Enemy */
const ENEMY_SPEED_1 = 3;
const ENEMY_HEALTH_1 = 100;
const ENEMY_URL_1 = 'assets/image/sprites/enemies/enemy_1.png';

/* Bullet */
const BULLET_SPEED = 10;
const BULLET_RADIUS = 3;
const BULLET_INTERVAL = 500;
const BULLET_DAMAGE = 5;
const BULLET_COLOR = 'rgba(255,100,100,1)';

/* Rocket */
const ROCKET_SPEED = 10;
const ROCKET_WIDTH = 3;
const ROCKET_HEIGHT = 30;
const ROCKET_DAMAGE = 30;

/* Enablers */
var ALLOW_SOUND = false;
