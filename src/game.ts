
class Game {
    public obstacles: Obstacle[]
    public spaceship: Spaceship
    public upperWall: Wall
    public lowerWall: Wall
    public menu: Menu
    public background: Background
    public gameState: GameState = GameState.start
    private spawnDelay: number;
    private spawnTime: number;
    private horizontalGameSpeed: number;

    constructor() {
        const position = createVector(50, 0)
        const size = createVector(130, 100)
        this.obstacles = [
            new Obstacle(obstacleImg, createVector(random(width), random(height)), createVector(random(100, 300), random(100, 200))),
            new Obstacle(obstacleImg, createVector(random(width), random(height)), createVector(random(100, 300), random(100, 200))),
            new Obstacle(obstacleImg, createVector(random(width), random(height)), createVector(random(100, 300), random(100, 200))),
            new Obstacle(obstacleImg, createVector(random(width), random(height)), createVector(random(100, 300), random(100, 200))),
            new Obstacle(obstacleImg, createVector(random(width), random(height)), createVector(random(100, 300), random(100, 200)))
        ];
        this.spaceship = new Spaceship(size, position, betterSpaceShipImg)
        this.upperWall = new Wall(createVector(0,0))
        this.lowerWall = new Wall(createVector(0,height - 50))
        this.background = new Background(backgroundImg)
        this.menu = new Menu(this.startGame.bind(this), this.controls.bind(this), this.highScore.bind(this))
        this.menu.setup() 
        this.spawnDelay = 2000;
        this.spawnTime = 0;
        this.horizontalGameSpeed = 50;
    }

    public draw() {
        clear()
        this.background.draw()
      
        switch (this.gameState) {
            case GameState.start:
                break
            case GameState.running:
                for (const obstacle of this.obstacles) {
                    obstacle.draw()
                }
                this.upperWall.draw()
                this.lowerWall.draw()
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
           this.obstacles.push(new Obstacle(obstacleImg, createVector(1200, random(height)), createVector(random(100, 200), random(100, 200))))
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