class Background {
private image: p5.Image
private distance: number

constructor(image:p5.Image){
    this.image = image
}

public draw(){
    image(this.image, 0, 0)
}
public update(){}
private mute(){}
private changeImage(){}
}

