class Background {
    private image: p5.Image

    constructor(image: p5.Image) {
        this.image = image
<<<<<<< Updated upstream
        
       // this.highscore = new Highscore()
    }

    public update(highscore: number) {
if(highscore === 50){
    this.image = backgroundImg2
}
=======
    }

/** Changes background when reaching highscore 50 */
    public update(highscore: number) {
        if(highscore === 50){
            this.image = backgroundImg2
        }
>>>>>>> Stashed changes
    }

    public draw() {
        image(this.image, 0, 0)
    }
}

