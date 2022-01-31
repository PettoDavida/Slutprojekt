class Game {
    private onGameOver: () => void;
    public obstacles: Obstacle[]
    private spaceship: Spaceship
    private upperWall: Wall
    private lowerWall: Wall
    private background: Background
    // public scores: Score[]
    private spawnTime: number;
    private horizontalGameSpeed: number;
    public highscore: Highscore


    constructor(onGameOver: () => void) {
        this.onGameOver = onGameOver;
        const position = createVector(50, 300)
        const size = createVector(130, 100)
        this.obstacles = []
        this.spaceship = new Spaceship(size, position, betterSpaceShipImg)
        this.upperWall = new Wall(createVector(0, 0))
        this.lowerWall = new Wall(createVector(0, height - 50))
        this.background = new Background(backgroundImg)
        this.highscore = new Highscore()
        this.spawnTime = 0;
        this.horizontalGameSpeed = 100;
        // this.scores =  [];
    }

    public draw() {
        this.background.draw()
        for (const obstacle of this.obstacles) {
            obstacle.draw()
        }

        this.upperWall.draw()
        this.lowerWall.draw()
        this.spaceship.draw()
        this.highscore.draw()
    }

    public update() {
        this.spawnObstacle()
        this.background.update()
        for (const obstacle of this.obstacles) {
            obstacle.update(this.horizontalGameSpeed)


        }
        if (this.highscore.flooredScore === 10 || this.highscore.flooredScore === 20 || this.highscore.flooredScore === 30) {
            this.background.update()
        }
        this.checkCollision()
        this.spaceship.update()
        this.updateWorldSpeed()
        this.upperWall.update()
        this.lowerWall.update()
        this.highscore.update()
    }


    private updateWorldSpeed() {
        this.horizontalGameSpeed += 0.1
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

    public removeObstaclesFromArray() {
        this.obstacles = [];
        console.log(this.obstacles)
    }

    private checkCollision() {
        for (const obstacle of this.obstacles) {
            if (obstacle.collisionCircle.collide(this.spaceship.position, this.spaceship.size)) {
                this.highscore.save();
                this.onGameOver();
                collisionSound.play()
                return
            }// vad som ska hända när spaceship nuddar ett hinder

        }
        if (
            this.upperWall.collisionBox.collide(this.spaceship.position, this.spaceship.size) ||
            this.lowerWall.collisionBox.collide(this.spaceship.position, this.spaceship.size)
        ) {
            this.highscore.save();
            this.onGameOver();
            collisionSound.play()
            return
        } // vad som ska hända när spaceship nuddar en kant
    }

}

