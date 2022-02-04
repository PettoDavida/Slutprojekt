class Background {
    private image: p5.Image
   // private highscore: Highscore
    

    constructor(image: p5.Image) {
        this.image = image
        

    }


    public update(highscore: number) {
        if(highscore === 30){
            this.image = backgroundImg2
        }
    }
   
    public draw() {
        image(this.image, 0, 0)
    }
}

