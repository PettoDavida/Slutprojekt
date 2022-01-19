class Spaceship {
    private size: p5.Vector
    private position: p5.Vector
    private image: p5.Image
    private spaceShipSpeedUp: number;
    private spaceShipSpeedDown: number;
    

    constructor(size: p5.Vector, position: p5.Vector, image: p5.Image) {
        this.size = size
        this.image = image
        this.position = position
        this.spaceShipSpeedUp = 3.5
        this.spaceShipSpeedDown = 4.5
    }

    public draw() {
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
    }

    public update() {
        this.fly()
        this.spaceShipSpeedUp *= 1.00005
        this.spaceShipSpeedDown *= 1.00005;
    }

    private fly() {
        if(mouseIsPressed 
           || keyIsDown(38) 
           || keyIsDown(87) 
           || keyIsDown(32)){
            if(this.position.y >= 0){
                this.position.y -= this.spaceShipSpeedUp;
            } 
        }
        else{

            if(this.position.y <= height - this.size.y){
                this.position.y += this.spaceShipSpeedDown;
             
            } else{
                this.position.y += 0
            }
               
        }
    }

    private changeSpaceship() {
        
    }
}