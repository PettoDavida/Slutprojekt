class Game {
    private onGameOver: () => void
    public obstacles: Obstacle[]
    private spaceship: Spaceship
    private upperWall: Wall
    private lowerWall: Wall
    private background: Background
    private spawnTime: number
    private horizontalGameSpeed: number
    public highscore: Highscore

    constructor(onGameOver: () => void) {
        this.onGameOver = onGameOver
        const position = createVector(50, 300)
        const size = createVector(130, 100)
        this.obstacles = []
        this.spaceship = new Spaceship(size, position, betterSpaceShipImg)
        this.upperWall = new Wall(createVector(0, 0))
        this.lowerWall = new Wall(createVector(0, height - 50))
        this.background = new Background(backgroundImg)
        this.highscore = new Highscore()
        this.spawnTime = 0
        this.horizontalGameSpeed = 100

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
        this.background.update(this.highscore.flooredScore)
        

        /**
         * For each obstacles update speed of obstacles
         */
        for (const obstacle of this.obstacles) {
            obstacle.update(this.horizontalGameSpeed)
        }

        this.checkCollision()
        this.spaceship.update()
        this.updateWorldSpeed()
        this.upperWall.update()
        this.lowerWall.update()
        this.highscore.update()
    }

    /**
     * Updates game speed
     */
    private updateWorldSpeed() {
        this.horizontalGameSpeed += 0.25
    }

    /**
     * function for spawning obstacles based on horizontalGameSpeed
     */
    private spawnObstacle() {
        this.spawnTime += deltaTime
       
        /**
         * Calculated from horizontal game speed in order to have
         * the same space between obstacles when the game speeds up.
         */
        const spawnDelay = 800000 / this.horizontalGameSpeed


        if (this.spawnTime > spawnDelay) {
            const diameter = random(70, 200)
            const size = createVector(diameter, diameter)
            const position = createVector(1500, random(height - size.y))
            const rotationSpeed = random(0, 100)
            let randomObstaclePicture = obstacleImg

            /**
             * Obstacles get different picture based on a random number
             */
            if (this.highscore.flooredScore > 20) {
                const picNumber = random(1, 100)

                if (picNumber < 15) {
                    randomObstaclePicture = obstacleImg1
                } else if (picNumber > 15 && picNumber < 30) {
                    randomObstaclePicture = obstacleImg2
                } else if(picNumber > 30 &&  picNumber < 45) {
                    randomObstaclePicture = obstacleImg3
                } else if(picNumber > 45 && picNumber < 65) {
                    randomObstaclePicture = obstacleImg4
                } else if(picNumber > 65 && picNumber < 75) {
                    randomObstaclePicture = obstacleImg5
                } else if (picNumber > 75) {
                    randomObstaclePicture = obstacleImg6
                }
            }

            const newObstacle = new Obstacle(randomObstaclePicture, position, size, rotationSpeed)
            this.obstacles.push(newObstacle)
            this.spawnTime = 0
        }
    }

    /**
     * When game over function resets spaceships clicked boolean to false and empties obstacle array
     */
    public resetObstaclesAndSpaceship() {
        this.spaceship.updateClickedBoolean()
        this.obstacles = []
    }


    private checkCollision() {
        for (const obstacle of this.obstacles) {

            if (this.spaceship.collideCircle(obstacle.getCollisionCircle())) {
                this.onGameOver()
                collisionSound.play()
                return

            }// vad som ska hända när spaceship nuddar ett hinder
            }

        if (
            this.spaceship.collideBox(this.upperWall.collisionBox) ||
            this.spaceship.collideBox(this.lowerWall.collisionBox)
            ) {
            this.onGameOver()
            collisionSound.play()

            return
        } // vad som ska hända när spaceship nuddar en kant
    }
}

