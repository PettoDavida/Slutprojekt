class Game {
    public obstacle: Obstacle[]
    public spaceship: Spaceship
    public menu: Menu
    public background: Background
    public gameState: GameState = GameState.start

    constructor() {
        const position = createVector(50, 400)
        const size = createVector(130, 100)
        this.spaceship = new Spaceship(size, position, spaceShipImg)
        this.menu = new Menu(this.startGame.bind(this))
        this.menu.setup()
    }

    public draw() {
        image(backgroundImg, 0, 0);

        switch (this.gameState) {
            case GameState.start:
                break
            case GameState.running:
                image(obstacleImg, 600, 400, 200, 200);
                image(obstacleImg, 400, 700, 100, 100);
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
    }

    private spawnObstacle() {
    }

    private changeBackgroundImage() {
    }

    private showDistanceOnScreen() {
    }

    private checkCollision() {
    }
}


