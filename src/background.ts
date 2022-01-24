class Background {
    private state = 0
    private image: p5.Image

    constructor(image: p5.Image) {
        this.image = image
    }

    public update() {
        if (game.highscore.flooredScore === 10 || game.highscore.flooredScore === 20 || game.highscore.flooredScore === 30) {
            this.changeImages();
        }

    }

    public draw() {
        image(this.image, 0, 0)
    }

    private mute() {
    }

    private changeImages() {
        
        switch (game.highscore.flooredScore) {
            case 10:
                if (this.state === 10) {
                    return
                }
                game.background = new Background(backgroundImg2)
                obstacleImg = obstacleImg2
                break
            case 10:
                // ändra bakgrundsbild
                break
            case 20:
                // ändra bakgrundsbild
                break
        }
        this.state = game.highscore.flooredScore
    }
}

