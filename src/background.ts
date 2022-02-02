class Background {
    private image: p5.Image
   // private highscore: Highscore
    

    constructor(image: p5.Image) {
        this.image = image
        
       // this.highscore = new Highscore()
    }

    public update(highscore?: number) {

        switch (highscore) {
            case 5:
                
                
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

