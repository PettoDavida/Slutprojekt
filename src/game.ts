class Game {
    public obstacles: Obstacle[]
    public spaceship: Spaceship
    public menu: Menu
    public background: Background
    public gameState: GameState = GameState.start

    constructor() {
        const position = createVector(50, 400)
        const size = createVector(130, 100)
        this.spaceship = new Spaceship(size, position, spaceShipImg)
        this.menu = new Menu(this.startGame.bind(this), this.controls.bind(this), this.highScore.bind(this))
        this.menu.setup()
        this.obstacles = []
        this.obstacles.push(new Obstacle(obstacleImg, createVector(600, 400), createVector(200, 200), createVector(1, 1)))
        this.obstacles.push(new Obstacle(obstacleImg, createVector(400, 700), createVector(100, 100), createVector(1, 1)))
    }

    public draw() {
        image(backgroundImg, 0, 0);

        switch (this.gameState) {
            case GameState.start:
                break
            case GameState.running:
                for(const obstacle of this.obstacles){
                    obstacle.draw()
                }
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


