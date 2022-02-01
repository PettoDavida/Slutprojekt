class Background {
   
    private image: p5.Image
    private highscore: Highscore
    

    constructor(image: p5.Image) {
        this.image = image
        this.highscore = new Highscore()
    }

    public update(highscore?) {
        switch (highscore) {
            case 15:
                preGame.background = new Background(backgroundImg2)
                break
            case 20:
                //Ny bild
                break
        }
    }

    public draw() {
        image(this.image, 0, 0)
    }
}

