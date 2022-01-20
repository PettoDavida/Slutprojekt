class Game {
    public obstacles: Obstacle[]
    public spaceship: Spaceship
    public upperWall: Wall
    public lowerWall: Wall
    public menu: Menu
    public background: Background
    public gameState: GameState = GameState.start
    private spawnTime: number;
    private horizontalGameSpeed: number;
    
    constructor() {
        const position = createVector(50, 0)
        const size = createVector(130, 100)
        this.obstacles = []
        this.spaceship = new Spaceship(size, position, betterSpaceShipImg)
        this.upperWall = new Wall(createVector(0,0))
        this.lowerWall = new Wall(createVector(0,height - 50))
        this.background = new Background(backgroundImg)
        this.menu = new Menu(this.startGame.bind(this))
        this.menu.setup() 
        this.spawnTime = 0;
        this.horizontalGameSpeed = 100;
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
        
        this.checkCollision();
        // this.checkOutOfBounds();
        switch (this.gameState) {
            case GameState.start:
            break
                // Menu stuff
            case GameState.running:
            this.spawnObstacle();
            
            for (const obstacle of this.obstacles) {
                obstacle.update(this.horizontalGameSpeed)
            }
            this.spaceship.update()
            this.updateWorldSpeed()
            break

            this.spawnObstacle();

            for (const obstacle of this.obstacles) {
                obstacle.update(this.horizontalGameSpeed)
                if (obstacle.collisionCircle.collide(this.spaceship.position, this.spaceship.size)) {

                }// vad som ska hända när spaceship nuddar ett hinder
            }
            if (this.upperWall.collisionBox.collide(this.spaceship.position, this.spaceship.size) ||
                this.lowerWall.collisionBox.collide(this.spaceship.position, this.spaceship.size)) {

            } // vad som ska hända när spaceship nuddar en kant

            case GameState.over:
                // Game over stuff
        }
    }

    private updateWorldSpeed() {
        this.horizontalGameSpeed += 0.1
    }

    private startGame() {
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
            const diameter = random(100, 400)
            const size = createVector(diameter, diameter)
            const position = createVector(1200, random(height - size.y))
            const newObstacle = new Obstacle(obstacleImg, position, size)
            this.obstacles.push(newObstacle)
            this.spawnTime = 0;
        }
    }
 
    private changeBackgroundImage() {
    }

    private showDistanceOnScreen() {
    }

    private checkCollision() {}

}
