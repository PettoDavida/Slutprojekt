
class Game {
    public obstacles: Obstacle[]
    public spaceship: Spaceship
    public menu: Menu
    public background: Background
    public gameState: GameState = GameState.start
    private spawnDelay: number;
    private spawnTime: number;
    private horizontalGameSpeed: number;

    constructor() {
        const position = createVector(50, 400)
        const size = createVector(130, 100)
        this.spaceship = new Spaceship(size, position, spaceShipImg);
        this.obstacles = [
            new Obstacle(obstacleImg, createVector(windowWidth - 200, random(windowHeight)), createVector(random(200, 500), random(100, 500))),
        ];
        this.menu = new Menu(this.startGame.bind(this), this.controls.bind(this), this.highScore.bind(this))
        this.menu.setup() 
        this.spawnDelay = 1000;
        this.spawnTime = 0;
        this.horizontalGameSpeed = 50;
    }

    public draw() {
        image(backgroundImg, 0,0, windowWidth, windowHeight);
        
        switch (this.gameState) {
            case GameState.start:
                break
            case GameState.running:
                for (const obstacle of this.obstacles) {
                    obstacle.draw()
                }
                this.spaceship.draw()
                break
            case GameState.over:
                // Game over menu
        }
    }

    public update() {
        this.spawnObstacle();
        this.checkCollision();
        // this.checkOutOfBounds();
        switch (this.gameState) {
            case GameState.start:

                // Menu stuff
            case GameState.running:
                for (const obstacle of this.obstacles) {
                    obstacle.update(this.horizontalGameSpeed)
                }
                this.spaceship.update()
                this.updateWorldSpeed()
                break
            case GameState.over:
                // Game over stuff
        }
    }

    private updateWorldSpeed() {
        this.horizontalGameSpeed += 0.0001
    }

    private startGame() {
        this.gameState = GameState.running
        this.menu.gameIsRunning()

    }

    private spawnObstacle() {
        this.spawnTime += deltaTime;
        // För varje 50e frameRate skapa ett hinder
       if (this.spawnTime > this.spawnDelay) {
        //    this.obstacles.push(new)
           this.spawnTime = 0;
           this.spawnDelay *= 0.99
        
           // skapa ett hinder med position.x = speed. 
        //loop: när xSpeed > 0 ta bort hinder.
        // för varje hinder som skapas = pusha till []
        }
    // speed -= 1;
    }

    private changeBackgroundImage() {
    }

    public controls() {
        this.menu.checkControls()
    }

    public highScore() {
        this.menu.checkHighScore()
    }

    private showDistanceOnScreen() {
    }

    private checkCollision() {
    }
}


// if (this.position.x <= 0){
//     // När hinders x-position är =< windowWidth ta bort första hinder från []

// }