class Obstacle {
    private size: p5.Vector
    private position: p5.Vector
    private image: p5.Image
    public collisionCircle: Circle
    //public collisionEllipse: Ellipse
    private rotationSpeed: number
    //private rotationDegree: number

    constructor(image: p5.Image, position:p5.Vector, size:p5.Vector, rotationSpeed:number) {
        this.size = size
        this.position = position
        this.image = obstacleImg  
        this.collisionCircle = new Circle(createVector(0 + size.x/2, 0 + size.y/2), size.y/2)
        //this.rotationDegree = 1
        this.rotationSpeed = rotationSpeed
   

        //his.collisionEllipse = new Ellipse(ellipse(obstacleMidPointX, obstacleMidPointY, obstacleWidth, obstacleHeight))

    }

    public update(horizontalGameSpeed: number) {
        // fart i px per sekund
        this.position.x -= horizontalGameSpeed * (deltaTime / 1000)
        

        this.rotationSpeed++;
       // this.removesObstaclesFromArray();

        // let func = this.removesObstaclesFromArray.bind(Game)
        // func();
       

    }
 
    public draw(){
        
       push()      
       angleMode(DEGREES) 
       imageMode(CENTER)
        ellipseMode(CENTER)
        translate(this.position.x + (this.size.x * .5), this.position.y + (this.size.y * .5))
       rotate(- this.rotationSpeed)
       image(this.image, 0,0, this.size.x, this.size.y);
       //För att se vart centrumpunkten befinner sig
        // fill(255)
        // ellipse(0,0, 10,10)
        
        pop()

        // fill(255,0,0)
        // ellipse(this.collisionCircle.position.x + this.position.x, this.collisionCircle.position.y + this.position.y,
        //         this.collisionCircle.radius * 2, this.collisionCircle.radius * 2)
 
    }

    public getCollisionCircle(){
        let circle = new Circle(createVector(this.collisionCircle.position.x + this.position.x, this.collisionCircle.position.y + this.position.y),
                                this.collisionCircle.radius)
                                
        return circle
    }

    private obstaclePosition(){}
    private obstacleType(){}
    
}


// alla hinder snurrar olika mycket fps
// nummer mellan 0 - 4