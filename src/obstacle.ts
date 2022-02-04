class Obstacle {
    private size: p5.Vector
    private position: p5.Vector
    private image: p5.Image
    public collisionCircle: Circle
    private rotationSpeed: number

    constructor(image: p5.Image, position:p5.Vector, size:p5.Vector, rotationSpeed:number) {
        this.size = size
        this.position = position
        this.image = image  
        this.collisionCircle = new Circle(createVector(size.x/2, size.y/2), size.y/2)
        this.rotationSpeed = rotationSpeed
   
    }

    /**
     * upates speed based on px per second
     * @param horizontalGameSpeed 
     */
    public update(horizontalGameSpeed: number) {
        this.position.x -= horizontalGameSpeed * (deltaTime / 1000)
        this.rotationSpeed++;

    }


    public draw(){
       push()      
       angleMode(DEGREES) 
       imageMode(CENTER)
       ellipseMode(CENTER)
       translate(this.position.x + (this.size.x * .5), this.position.y + (this.size.y * .5))
       noStroke()
       rotate(this.rotationSpeed)
       image(this.image, 0,0, this.size.x, this.size.y);
       pop()
       fill(255,0,0,1)
       ellipse(this.collisionCircle.position.x + this.position.x, this.collisionCircle.position.y + this.position.y,
                this.collisionCircle.radius * 2, this.collisionCircle.radius * 2)
    }

    public getCollisionCircle(){
        let circle = new Circle(createVector(this.collisionCircle.position.x + this.position.x, 
                                             this.collisionCircle.position.y + this.position.y),
                                             this.collisionCircle.radius)                       
        return circle
    }
    
}
