class Spaceship {
    public size: p5.Vector
    public position: p5.Vector
    private image: p5.Image
    private spaceShipSpeedUp: number
    private spaceShipSpeedDown: number
    private collisionShape: Box[]
    private clicked: boolean

    constructor(size: p5.Vector, position: p5.Vector, image: p5.Image) {
        this.size = size
        this.image = image
        this.position = position
        this.spaceShipSpeedUp = 3.5
        this.spaceShipSpeedDown = 4.5

        this.collisionShape = [] // Array for collisionBoxes of ship
        this.collisionShape.push(new Box(createVector(0,this.size.y/2 - 12), createVector(this.size.x, this.size.y/4))) // CollsionBox of wings
        this.collisionShape.push(new Box(createVector(this.size.x/4,0), createVector(this.size.x/4, this.size.y))) // CollsionBox of body

        this.clicked = false
    }

    public draw() {
    
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y)
     
        // Used to see collisionBoxes of spaceship
        // for (let index = 0; index < this.collisionShape.length; index++) {
        //     const element = this.collisionShape[index];
        //     
        //     fill(255 , 255, 255)
        //     rect(element.position.x + this.position.x, element.position.y + this.position.y, element.size.x, element.size.y)
        // }
       
            

    }

    /**
     * Speeds up spaceships speed up and down
     */
    public update() {
        this.fly()

        this.spaceShipSpeedUp *= 1.0001;
        this.spaceShipSpeedDown *= 1.0001;
    }

      /**updates booolean if mouse is clicked
      */

    public updateClickedBoolean() {
        this.clicked = false
    }

    private fly() {
        
        /**
         * Makes spaceship start at a set position
         */
        if (!this.clicked) {
            this.position.y = height * .5
        }
        // Spaceship fly up on mouseclick, w, space, uparrow
        if (mouseIsPressed
            || keyIsDown(38)
            || keyIsDown(87)
            || keyIsDown(32)) {
            
            this.clicked = true
                
            if (this.position.y >= 0) {
                this.position.y -= this.spaceShipSpeedUp
            }
          
        } else {
            
            if (this.position.y <= height - this.size.y) {
                this.position.y += this.spaceShipSpeedDown
            } else if (this.position.y < 0) {
                this.position.y = 0
            } else {
                this.position.y += 0
            }
        }
    }

    /**
     * Checks collision between ship and a collisionBox
     * @param box the box that the ship collides with
     * @returns true if collision false if no collision
     */
    public collideBox(box:Box){
        for (let index = 0; index < this.collisionShape.length; index++) {
            const element = this.collisionShape[index]
            let ship = new Box(createVector(element.position.x + this.position.x, element.position.y + this.position.y), element.size)
            if (ship.collide(box.position, box.size)) {
                return true
            }
        }
        return false
    }

    /**
     * Checks collision between ship and a collisionCricle
     * @param Circle the circle that the ship collides with
     * @returns true if collision false if no collision
     */
    public collideCircle(circle:Circle){
        for (let index = 0; index < this.collisionShape.length; index++) {
            const element = this.collisionShape[index]
            let ship = new Box(createVector(element.position.x + this.position.x, element.position.y + this.position.y), element.size)
            if (circle.collide(ship.position, ship.size)) {
                return true
            }
        }
        return false
    }
}
