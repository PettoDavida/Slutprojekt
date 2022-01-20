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

    

    private obstacleSize: number;
    private lastObstacle: number;



    constructor() {
        const position = createVector(50, 0)
        const size = createVector(130, 100)
        this.obstacles = []
        this.spaceship = new Spaceship(size, position, betterSpaceShipImg)
        this.upperWall = new Wall(createVector(0, 0))
        this.lowerWall = new Wall(createVector(0, height - 50))
        this.background = new Background(backgroundImg)
       this.menu = new Menu(this.startGame.bind(this), this.controls.bind(this), this.highScore.bind(this))
        this.menu.setup() 
        this.spawnTime = 0;
        this.horizontalGameSpeed = 100;

        this.menu = new Menu(this.startGame.bind(this))
        this.menu.setup()
        this.spawnDelay = 2000;
        this.spawnTime = 0;
        this.horizontalGameSpeed = 100;
        this.lastObstacle = 0;
        this.obstacleSize = 0;

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
                this.spaceship.update()
                this.updateWorldSpeed()
                break


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

        this.spawnTime += deltaTime;
        this.obstacleSize = random(100, 400);
        if (this.spawnTime > this.spawnDelay) {
            this.obstacles.push(new Obstacle(obstacleImg, createVector(1200, random(height)), createVector(this.obstacleSize, this.obstacleSize)))
            this.spawnTime = 0;

            if (this.spawnDelay > 1000) {
                this.spawnDelay *= 0.99
            } else {
                this.spawnDelay *= 0.995;
            }

            // obstacle: size: x.400 y.400 nya: lastObstacle.y + eller - 50.
        }


    }

    private changeBackgroundImage() {
    }

    private showDistanceOnScreen() {
    }

    private checkCollision() {
    }
}
