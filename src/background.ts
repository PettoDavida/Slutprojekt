class Background {
    private image: p5.Image
   // private highscore: Highscore
    

    constructor(image: p5.Image) {
        this.image = image
        
       // this.highscore = new Highscore()
    }


    public update(highscore: number) {
if(highscore === 50){
    this.image = backgroundImg2
}
   
    public draw() {
        image(this.image, 0, 0)
    }
}

