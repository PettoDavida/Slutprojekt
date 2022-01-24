class Background {
    private state = 0
    private image: p5.Image

    constructor(image: p5.Image) {
        this.image = image
    }

    public update() {
        if (game.highscore.flooredScore === 5 || game.highscore.flooredScore === 10 || game.highscore.flooredScore === 20) {
            this.changeImage();
        }
    }

    public draw() {
        image(this.image, 0, 0)
    }

    private mute() {
    }

    private changeImage() {
        console.log('bild');
        switch (game.highscore.flooredScore) {
            case 5:
                if (this.state === 5) {
                    return
                }
                game.background = new Background(backgroundImg2)
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

