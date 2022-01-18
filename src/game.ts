class Game {
    public obstacles: Obstacle[]
    public spaceship: Spaceship
    public upperWall: Wall
    public lowerWall: Wall
    public menu: Menu
    public background: Background
    public gameState: GameState = GameState.start

    constructor() {
        const position = createVector(50, 0)
        const size = createVector(130, 100)
        this.spaceship = new Spaceship(size, position, betterSpaceShipImg)
        this.upperWall = new Wall(createVector(0,0))
        this.lowerWall = new Wall(createVector(0,height - 50))
        this.background = new Background(backgroundImg)
        this.menu = new Menu(this.startGame.bind(this), this.controls.bind(this), this.highScore.bind(this))
        this.menu.setup()
        this.obstacles = []
        this.obstacles.push(new Obstacle(obstacleImg, createVector(random(100, 1000), random(height)), createVector(random(100, 200), random(100, 200)), createVector(1, 1)))
        this.obstacles.push(new Obstacle(obstacleImg, createVector(random(100, 1000), random(height)), createVector(random(100, 200), random(100, 200)), createVector(1, 1)))
    }

    public draw() {
        clear()
        this.background.draw()

        switch (this.gameState) {
            case GameState.start:
                break
            case GameState.running:
                for(const obstacle of this.obstacles){
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
        switch (this.gameState) {
            case GameState.start:

                // Menu stuff
            case GameState.running:
                this.spaceship.update()
                break
            case GameState.over:
                // Game over stuff
        }
    }

    private startGame() {
        this.gameState = GameState.running
        this.menu.gameIsRunning()

    }

    private spawnObstacle() {

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


