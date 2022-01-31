class Background {
   
    private image: p5.Image
    private highscore: Highscore
    

    constructor(image: p5.Image) {
        this.image = image
        this.highscore = new Highscore()
    }

    public update(highscore) {
        //console.log(highscore)
        switch (highscore) {
            case 5:
                console.log('score är 5')
                obstacleImg = obstacleImg2
                preGame.background = new Background(backgroundImg2)
        }

    }

    public draw() {
        image(this.image, 0, 0)
    }

    private mute() {
    }

    private changeImages() {

        
    }
}

