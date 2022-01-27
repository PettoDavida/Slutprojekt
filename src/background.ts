class Background {
    private state = 0
    private image: p5.Image

    constructor(image: p5.Image) {
        this.image = image
    }

    public update() {
        if (preGame.highscore.flooredScore === 10 || preGame.highscore.flooredScore === 20 || preGame.highscore.flooredScore === 30) {
            this.changeImages();
        }

    }

    public draw() {
        image(this.image, 0, 0)
    }

    private mute() {
    }

    private changeImages() {
        
        switch (preGame.highscore.flooredScore) {
            case 10:
                if (this.state === 10) {
                    return
                }
                preGame.background = new Background(backgroundImg2)
                obstacleImg = obstacleImg2
                break
            case 10:
                // ändra bakgrundsbild
                break
            case 20:
                // ändra bakgrundsbild
                break
        }
        this.state = preGame.highscore.flooredScore
    }
}

