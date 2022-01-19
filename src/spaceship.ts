class Spaceship {
    public size: p5.Vector
    public position: p5.Vector
    private image: p5.Image

    constructor(size: p5.Vector, position: p5.Vector, image: p5.Image) {
        this.size = size
        this.image = image
        this.position = position
    }

    public draw() {
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
    }

    public update() {
        this.fly()
    }

    private fly() {
        if( mouseIsPressed
            ||keyIsDown(38) 
            || keyIsDown(87) 
            || keyIsDown(32)){
            if(this.position.y >= 0){
                this.position.y -= 3
            } 
        }
        else{
                if(this.position.y <= 520){
                    this.position.y += 3
                 
                } else{
                    this.position.y += 0
                }
            
            
               
        }
    }

    private changeSpaceship() {
        
    }
}