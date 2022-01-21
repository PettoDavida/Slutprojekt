class Background {
private image: p5.Image


constructor(image:p5.Image){
    this.image = image
}
public update(){

   if (game.highscore.flooredScore === 5 || 10 || 20) {
       this.changeImage();
    }
    
}
public draw(){
    image(this.image, 0, 0)
}

private mute(){}

private changeImage(){
    console.log('bild');
    switch (game.highscore.flooredScore === 20 || 30 || 40) {
        case game.highscore.flooredScore === 20:
            game.background = new Background(backgroundImg2)
        break
        case game.highscore.flooredScore === 10:
        // ändra bakgrundsbild
        break
        case game.highscore.flooredScore === 20:
        // ändra bakgrundsbild
        break
    }
    
}
}

