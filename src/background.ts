class Background {
    private image: p5.Image

    constructor(image: p5.Image) {
        this.image = image
    }
/** Changes Background when reaching highscore 50 */
    public update(highscore: number) {
        if(highscore === 50){
            this.image = backgroundImg2
        }
    }
   
    public draw() {
        image(this.image, 0, 0)
    }
}

