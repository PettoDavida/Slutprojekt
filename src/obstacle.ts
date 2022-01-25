class Obstacle {
    public size: p5.Vector
    public position: p5.Vector
    private image: p5.Image
    public collisionCircle: Circle
    //public collisionEllipse: Ellipse
    private rotationSpeed: number
    //private rotationDegree: number

    constructor(image: p5.Image, position:p5.Vector, size:p5.Vector, rotationSpeed:number) {
        this.size = size
        this.position = position
        this.image = image 
        this.collisionCircle = new Circle(createVector(position.x + size.x/2, position.y + size.y/2), size.y/2)
        //this.rotationDegree = 1
        this.rotationSpeed = rotationSpeed
   

        //his.collisionEllipse = new Ellipse(ellipse(obstacleMidPointX, obstacleMidPointY, obstacleWidth, obstacleHeight))

    }

    public update(horizontalGameSpeed: number) {
        // fart i px per sekund
        this.position.x -= horizontalGameSpeed * (deltaTime / 1000)
        this.collisionCircle.position.x -= horizontalGameSpeed * (deltaTime / 1000)

        this.rotationSpeed++;
        this.removesObstaclesFromArray();
       

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
        fill(255)
        ellipse(0,0, 10,10)
        pop()
 
    }

    /** 
    * Removes obstacles from its array when out of screen
    */
    private removesObstaclesFromArray(){
        if (game.obstacles[0].position.x < 0 - game.obstacles[0].size.x) {
            game.obstacles.shift()
        }
    }
    private obstaclePosition(){}
    private obstacleType(){}
    
}


// alla hinder snurrar olika mycket fps
// nummer mellan 0 - 4