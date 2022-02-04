//---- GLOBAL VARIABLES ----//
let preGame: PreGame;

// Spaceship 
let betterSpaceShipImg: p5.Image

// Obstacles
let obstacleImg: p5.Image
let obstacleImg1: p5.Image
let obstacleImg2: p5.Image
let obstacleImg3: p5.Image
<<<<<<< Updated upstream
=======
let obstacleImg4: p5.Image
let obstacleImg5: p5.Image
let obstacleImg6: p5.Image
let spaceRockImg: p5.Image
>>>>>>> Stashed changes

// Background
let backgroundImg: p5.Image
let backgroundImg2: p5.Image

// Sounds
let collisionSound: p5.SoundFile
let gameMusic: p5.SoundFile

<<<<<<< Updated upstream

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
=======
>>>>>>> Stashed changes
function preload() {
    // Sounds
    collisionSound = loadSound('../assets/sounds/crash.wav');
    gameMusic = loadSound('../assets/sounds/music.mp3');

    // Images
    betterSpaceShipImg = loadImage('./assets/images/betterspaceship.png')
    obstacleImg = loadImage('./documents/assets/obstacle.png')
    obstacleImg1 = loadImage('./documents/assets/obstacle.png')
    obstacleImg2 = loadImage('./assets/images/obstacle2.png')
    obstacleImg3 = loadImage('./assets/images/obstacle3.png')
<<<<<<< Updated upstream

=======
    obstacleImg4 = loadImage('./assets/images/obstacle4.png')
    obstacleImg5 = loadImage('./assets/images/obstacle5.png')
    obstacleImg6 = loadImage('./assets/images/obstacle6.png')
>>>>>>> Stashed changes
    backgroundImg = loadImage('./documents/assets/background.png')
    backgroundImg2 = loadImage('./assets/images/backgroundImg2.jpg')
    spaceRockImg = loadImage('./assets/images/spacerock.png')

}

function setup() {
    createCanvas(1500, 800)
    frameRate(60);
    //noCursor();
    collisionSound.setVolume(0.1)
    gameMusic.setVolume(0.1)
    preGame = new PreGame();
}

function draw() {
    // image(backgroundImg, 0, 0);
    // image(obstacleImg, 600, 400, 200, 200);
    // image(obstacleImg, 400, 700, 100, 100);
    // image(spaceShipImg, 50, 400, 130, 100);
    preGame.update();
    preGame.draw();
}

<<<<<<< Updated upstream

/**
 *  Built in windowResize listener function in P5
 */
=======
>>>>>>> Stashed changes
function windowResized() {
    resizeCanvas(1200, 600);
}