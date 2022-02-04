//---- GLOBAL VARIABLES ----//
let preGame: PreGame;
let spaceShipImg: p5.Image
let betterSpaceShipImg: p5.Image

let obstacleImg: p5.Image
let obstacleImg1: p5.Image
let obstacleImg2: p5.Image
let obstacleImg3: p5.Image
let obstacleImg4: p5.Image
let obstacleImg5: p5.Image
let obstacleImg6: p5.Image

let backgroundImg: p5.Image
let backgroundImg2: p5.Image

let spaceRockImg: p5.Image

let collisionSound: p5.SoundFile
let gameMusic: p5.SoundFile

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Sounds
    collisionSound = loadSound('../assets/sounds/crash.wav');
    gameMusic = loadSound('../assets/sounds/music.mp3');

    // Images
    betterSpaceShipImg = loadImage('./assets/images/betterspaceship.png')
    spaceShipImg = loadImage('./documents/assets/spaceship.png');

    obstacleImg = loadImage('./documents/assets/obstacle.png')
    obstacleImg1 = loadImage('./documents/assets/obstacle.png')
    obstacleImg2 = loadImage('./assets/images/obstacle2.png')
    obstacleImg3 = loadImage('./assets/images/obstacle3.png')
    obstacleImg4 = loadImage('./assets/images/obstacle4.png')
    obstacleImg5 = loadImage('./assets/images/obstacle5.png')
    obstacleImg6 = loadImage('./assets/images/obstacle6.png')

    backgroundImg = loadImage('./documents/assets/background.png')
    backgroundImg2 = loadImage('./assets/images/backgroundImg2.jpg')

    spaceRockImg = loadImage('./assets/images/spacerock.png')
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(1500, 800)
    frameRate(60);
    collisionSound.setVolume(0.1)
    gameMusic.setVolume(0.1)
    preGame = new PreGame();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    preGame.update();
    preGame.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(1500, 800);
}