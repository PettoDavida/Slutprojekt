"use strict";
class gameBackground {
    draw() {
    }
    update() { }
    mute() { }
    changeImage() { }
}
class game {
    draw() { }
    update() { }
    spawnObstacle() { }
    changeBackgroundImage() { }
    highScore() { }
    showDistanceOnScreen() { }
    checkCollision() { }
}
class gameovermenu {
    draw() { }
    update() { }
    newGame() { }
    checkHighScore() { }
}
class IGameState {
}
class obstacle {
    constructor(size, position, image, speed) {
        this.size = size;
        this.image = image;
        this.position = position;
        this.speed = speed;
    }
    draw() {
    }
    update() { }
    obstacleSize() { }
    obstaclePosition() { }
    obstacleType() { }
}
let spaceShipImg;
let obstacleImg;
let backgroundImg;
function preload() {
    spaceShipImg = loadImage('./documents/assets/spaceship.png');
    obstacleImg = loadImage('./documents/assets/obstacle.png');
    backgroundImg = loadImage('./documents/assets/background.png');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
}
function draw() {
    image(backgroundImg, 0, 0);
    image(obstacleImg, 600, 400, 200, 200);
    image(obstacleImg, 400, 700, 100, 100);
    image(spaceShipImg, 50, 400, 130, 100);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
class spaceship {
    constructor(size, position, image) {
        this.size = size;
        this.image = image;
        this.position = position;
    }
    draw() {
    }
    update() { }
    fly() { }
    changeSpaceship() { }
}
class menu {
    draw() { }
    update() { }
    checkControls() { }
    checkHighScore() { }
    newGame() { }
}
class wall {
    constructor(position) {
        this.position = position;
    }
    changeImage() { }
}
//# sourceMappingURL=bundle.js.map