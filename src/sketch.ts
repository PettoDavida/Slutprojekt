//---- GLOBAL VARIABLES ----//
let game: Game;
// let sound: p5.SoundFile
let spaceShipImg: p5.Image
let betterSpaceShipImg: p5.Image
let obstacleImg: p5.Image
let backgroundImg: p5.Image
let spaceRockImg: p5.Image

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
    betterSpaceShipImg = loadImage('./assets/images/betterspaceship.png')
    spaceShipImg = loadImage('./documents/assets/spaceship.png');
    obstacleImg = loadImage('./documents/assets/obstacle.png')
    backgroundImg = loadImage('./documents/assets/background.png')
    spaceRockImg = loadImage('./assets/images/spacerock.png')

}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, 600);
    frameRate(60);
    //noCursor();

    game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    // image(backgroundImg, 0, 0);
    // image(obstacleImg, 600, 400, 200, 200);
    // image(obstacleImg, 400, 700, 100, 100);
    // image(spaceShipImg, 50, 400, 130, 100);


    game.update();
    game.draw();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}