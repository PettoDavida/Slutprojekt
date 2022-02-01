class Spaceship {
    public size: p5.Vector
    public position: p5.Vector
    private image: p5.Image
    private spaceShipSpeedUp: number;
    private spaceShipSpeedDown: number;
    private collisionShape: Box[]
    private angle: number
    private clicked: boolean


    constructor(size: p5.Vector, position: p5.Vector, image: p5.Image) {
        this.size = size
        this.image = image
        this.position = position
        this.spaceShipSpeedUp = 3.5
        this.spaceShipSpeedDown = 4.5
        this.collisionShape = []
        this.collisionShape.push(new Box(createVector(0,this.size.y/2 - 12), createVector(this.size.x, this.size.y/4)))
        this.collisionShape.push(new Box(createVector(this.size.x/4,0), createVector(this.size.x/4, this.size.y)))
        this.angle = 0
        this.clicked = false
    }

    public draw() {
    
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
     
        for (let index = 0; index < this.collisionShape.length; index++) {
            const element = this.collisionShape[index];
            fill(255,0,0,1)
            rect(element.position.x + this.position.x, element.position.y + this.position.y, element.size.x, element.size.y)
        }
       
            
    }

    public update() {
        this.fly()
        this.spaceShipSpeedUp *= 1.00005;
        this.spaceShipSpeedDown *= 1.000005;
    }

    private fly() {
        
        if (!this.clicked) {
            this.position.y = height * .5
        }
        
        if (mouseIsPressed
            || keyIsDown(38)
            || keyIsDown(87)
            || keyIsDown(32)) {
            
            this.clicked = true
            if(this.angle >= -20) {
                    this.angle -= 2;
             }
                
            if (this.position.y >= 0) {
                this.position.y -= this.spaceShipSpeedUp;
            }
          
        } else {
            
            if(this.angle <= 0){
                this.angle++;
            }

            if (this.position.y <= height - this.size.y) {
                this.position.y += this.spaceShipSpeedDown;
            } else if (this.position.y < 0) {
                this.position.y = 0
            } else {
                this.position.y += 0
            }
        }
    }

    public collideBox(box:Box){
        for (let index = 0; index < this.collisionShape.length; index++) {
            const element = this.collisionShape[index];
            let wooh = new Box(createVector(element.position.x + this.position.x, element.position.y + this.position.y), element.size)
            if (wooh.collide(box.position, box.size)) {
                return true
            }
            
        }
        return false
    }

    public collideCircle(circle:Circle){
        for (let index = 0; index < this.collisionShape.length; index++) {
            const element = this.collisionShape[index];
            let wooh = new Box(createVector(element.position.x + this.position.x, element.position.y + this.position.y), element.size)
            if (circle.collide(wooh.position, wooh.size)) {
                return true
            }
            
        }
        return false
    }


}
