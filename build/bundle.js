"use strict";
class Background {
    draw() {
    }
    update() { }
    mute() { }
    changeImage() { }
}
class Game {
    constructor() {
        this.gameState = GameState.start;
        const position = createVector(50, 400);
        const size = createVector(130, 100);
        this.spaceship = new Spaceship(size, position, spaceShipImg);
        this.menu = new Menu(this.startGame.bind(this), this.controls.bind(this), this.highScore.bind(this));
        this.menu.setup();
    }
    draw() {
        image(backgroundImg, 0, 0);
        switch (this.gameState) {
            case GameState.start:
                break;
            case GameState.running:
                image(obstacleImg, 600, 400, 200, 200);
                image(obstacleImg, 400, 700, 100, 100);
                this.spaceship.draw();
                break;
            case GameState.over:
        }
    }
    update() {
        switch (this.gameState) {
            case GameState.start:
            case GameState.running:
                this.spaceship.update();
                break;
            case GameState.over:
        }
    }
    startGame() {
        this.gameState = GameState.running;
        this.menu.gameIsRunning();
    }
    spawnObstacle() {
    }
    changeBackgroundImage() {
    }
    controls() {
        this.menu.checkControls();
    }
    highScore() {
        this.menu.checkHighScore();
    }
    showDistanceOnScreen() {
    }
    checkCollision() {
    }
}
class GameOverMenu {
    draw() {
        this.gameState = GameState.start;
    }
    update() { }
    newGame() { }
    checkHighScore() { }
}
var GameState;
(function (GameState) {
    GameState[GameState["start"] = 0] = "start";
    GameState[GameState["running"] = 1] = "running";
    GameState[GameState["over"] = 2] = "over";
})(GameState || (GameState = {}));
class Obstacle {
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
let game;
let spaceShipImg;
let obstacleImg;
let backgroundImg;
function preload() {
    spaceShipImg = loadImage('./documents/assets/spaceship.png');
    obstacleImg = loadImage('./documents/assets/obstacle.png');
    backgroundImg = loadImage('./documents/assets/background.png');
}
function setup() {
    createCanvas(windowWidth, 600);
    frameRate(60);
    game = new Game();
}
function draw() {
    game.update();
    game.draw();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
class Spaceship {
    constructor(size, position, image) {
        this.size = size;
        this.image = image;
        this.position = position;
    }
    draw() {
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
    }
    update() {
        this.fly();
    }
    fly() {
        if (mouseIsPressed) {
            if (this.position.y >= 0) {
                this.position.y -= 4;
                console.log(this.position.y);
            }
        }
        else {
            if (this.position.y <= 600) {
                this.position.y += 4;
                console.log(this.position.y);
            }
            else {
                this.position.y += 0;
                console.log(this.position.y);
            }
        }
    }
    changeSpaceship() {
    }
}
class Menu {
    constructor(clickStartGame, clickForControls, clickForHighScore) {
        this.clickStartGame = clickStartGame;
        this.clickForControls = clickForControls;
        this.clickForHighScore = clickForHighScore;
    }
    setup() {
        this.gameTitle = createElement('h1', 'Space Jam 3.0');
        this.gameTitle.position(600, 300);
        this.startButton = createButton('Start Game');
        this.startButton.position(700, 420);
        this.startButton.size(200, 60);
        this.startButton.mousePressed(this.clickStartGame);
        this.controlsButton = createButton('Controls');
        this.controlsButton.position(500, 520);
        this.controlsButton.size(200, 60);
        this.controlsButton.mousePressed(this.clickForControls);
        this.highScoreButton = createButton('HighScore');
        this.highScoreButton.position(900, 520);
        this.highScoreButton.size(200, 60);
        this.highScoreButton.mousePressed(this.clickForHighScore);
    }
    gameIsRunning() {
        this.startButton.remove();
        this.gameTitle.remove();
        this.controlsButton.remove();
        this.highScoreButton.remove();
    }
    draw() {
    }
    update() {
    }
    checkControls() {
        this.gameIsRunning();
        this.controlsDiv = createElement('div');
        this.controlsDiv.position(600, 300);
    }
    checkHighScore() {
        this.gameIsRunning();
        this.highScoreMenu = createElement('ol', 'Highscore');
        this.highScoreMenu.position(550, 200);
        this.highScoreList = createElement('li', 'Anna');
        this.highScoreList.position(600, 270);
    }
    newGame() {
    }
}
class Wall {
    constructor(position) {
        this.position = position;
    }
    changeImage() { }
}
//# sourceMappingURL=bundle.js.map