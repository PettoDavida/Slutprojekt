class Game {
    public obstacles: Obstacle[]
    public spaceship: Spaceship
    public upperWall: Wall
    public lowerWall: Wall
    public menu: Menu
    public gameovermenu: GameOverMenu
    public background: Background
    public highscore: Highscore
    public scores: Score[]
    public gameState: GameState = GameState.start
    private spawnTime: number;
    private horizontalGameSpeed: number;

    constructor() {
        const position = createVector(50, 300)
        const size = createVector(130, 100)
        this.obstacles = []
        this.spaceship = new Spaceship(size, position, betterSpaceShipImg)
        this.upperWall = new Wall(createVector(0, 0))
        this.lowerWall = new Wall(createVector(0, height - 50))
        this.background = new Background(backgroundImg)

        this.menu = new Menu(this.startGame.bind(this))
        this.gameovermenu = new GameOverMenu(this.menu)
        this.menu.setup()

        this.spawnTime = 0;
        this.horizontalGameSpeed = 100;
        this.highscore = new Highscore()
        this.scores = []
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
                this.highscore.draw()

                break
            case GameState.over:
                // Game over menu
                break
        }
    }

    public update() {
        switch (this.gameState) {
            case GameState.start:
                break
            // Menu stuff
            case GameState.running:
                this.spawnObstacle();
                this.highscore.update();
                this.background.update();
                for (const obstacle of this.obstacles) {
                    obstacle.update(this.horizontalGameSpeed)
                }
                this.checkCollision();
                this.spaceship.update();
                this.updateWorldSpeed();
                break
            case GameState.over:
                this.highscore.update();
                // stoppa score-counter 
                // spara floored score till en array
                break
        }
    }

    private updateWorldSpeed() {
        this.horizontalGameSpeed += 0.1
    }

    /**
     * Changes the gamestate to running and changes the position of the spaceship
     */
    public startGame() {
        this.spaceship.position.y = 300
        this.gameState = GameState.running
    }

    private spawnObstacle() {
        this.spawnTime += deltaTime
        /**
         * Calculated from horizontal game speed in order to have
         * the same space between obstacles when the game speeds up.
         */
        const spawnDelay = 800000 / this.horizontalGameSpeed;

        if (this.spawnTime > spawnDelay) {
            const diameter = random(70, 200)
            const size = createVector(diameter, diameter)
            const position = createVector(1200, random(height - size.y))
            const rotationSpeed = random(0, 50)
            const newObstacle = new Obstacle(obstacleImg, position, size, rotationSpeed)
            this.obstacles.push(newObstacle)
            this.spawnTime = 0;
            console.log(rotationSpeed)
        }
    }

    private checkCollision() {
        for (const obstacle of this.obstacles) {
            if (obstacle.collisionCircle.collide(this.spaceship.position, this.spaceship.size)) {
                this.gameovermenu.draw()
                this.gameState = GameState.over
                return
            }// vad som ska hända när spaceship nuddar ett hinder

        }
        if (this.upperWall.collisionBox.collide(this.spaceship.position, this.spaceship.size) ||
            this.lowerWall.collisionBox.collide(this.spaceship.position, this.spaceship.size)) {
            this.gameovermenu.draw()
            this.gameState = GameState.over
            return
        } // vad som ska hända när spaceship nuddar en kant
    }

}
