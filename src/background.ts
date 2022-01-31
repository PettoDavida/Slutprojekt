class Background {
    private state = 0
    private image: p5.Image
    private highscore: Highscore
    

    constructor(image: p5.Image) {
        this.image = image
        this.highscore = new Highscore()
    }

    public update() {
        // if (Highscore.flooredScore == 10 || Game.highscore.flooredScore === 20 || Game.highscore.flooredScore === 30) {
        this.changeImages();
        // }

    }

    public draw() {
        image(this.image, 0, 0)
    }

    private mute() {
    }

    private changeImages() {
        
      switch (this.highscore.flooredScore) {
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
        this.state = this.highscore.flooredScore
        
    }
}

