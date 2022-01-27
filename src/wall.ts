class Wall {
     private position: p5.Vector
     private wall: { image: p5.Image, offset: p5.Vector }[]
     public collisionBox: Box

    constructor(position: p5.Vector){
        this.position = position
        this.wall = []
        this.collisionBox = new Box(position, createVector(width, 75))
        for (let i = 0; i < 36; i++) {
            this.wall.push({image:spaceRockImg, offset: createVector(i*50, random(0,30))})
        }
        
    }

    public update() {
        if(this.wall[0].offset.x < -50){
             let wall = this.wall.shift()
             if (wall !== undefined) {
                wall.offset.x = this.wall.length * 50
                this.wall.push(wall) 
             }
        }
        // Move walls to the left
        for (const element of this.wall) {
            element.offset.x -= 1
        }
    }

    public draw(){
        for (const element of this.wall) {
            let positionX = this.position.x + element.offset.x -30
            if (positionX < backgroundImg.width - 50) {
                image(element.image, positionX, this.position.y + element.offset.y -30, 100, 100)
            }
        }   
    }

    private changeImage(){}
}