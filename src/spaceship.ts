class Spaceship {
    public size: p5.Vector
    public position: p5.Vector
    private image: p5.Image
    private spaceShipSpeedUp: number;
    private spaceShipSpeedDown: number;
    private collisionShape: Triangle
    private angle: number


    constructor(size: p5.Vector, position: p5.Vector, image: p5.Image) {
        this.size = size
        this.image = image
        this.position = position
        this.spaceShipSpeedUp = 3
        this.spaceShipSpeedDown = 4
        this.collisionShape = new Triangle(createVector(this.position.x, this.position.y), createVector(this.size.x, this.size.y))
        this.angle = 0
    }

    public draw() {
    
        // push()
        // translate(this.position.x + 50, this.position.y)
        // rotate(this.angle)
        // angleMode(DEGREES)
        // imageMode(CENTER)
        // rectMode(CENTER)
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
        // rect(0, 0, 10, 10)
        // pop()

        // fill(255, 0, 0)
        // triangle(
        //     this.position.x, this.position.y,
        //     this.position.x + this.size.x, this.position.y + (this.size.y * .5), 
        //     this.position.x, this.position.y + this.size.y)
            
    }

    public update() {
        this.fly()
        this.spaceShipSpeedUp *= 1.00005;
        this.spaceShipSpeedDown *= 1.000005;
    }

    private fly() {
        if (mouseIsPressed
            || keyIsDown(38)
            || keyIsDown(87)
            || keyIsDown(32)) {
            
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

    // private changeAngle() {
    //     if 
    // }

}