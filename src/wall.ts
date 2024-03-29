class Wall {
     private position: p5.Vector
     private wall: { image: p5.Image, offset: p5.Vector }[]
     public collisionBox: Box

    constructor(position: p5.Vector){
        this.position = position
        this.wall = []
        // creates a collisionbox on the walls position specified when creating the wall
        this.collisionBox = new Box(position, createVector(width, 50))
        for (let i = 0; i < 36; i++) { // creates enough asteroids so that the whole screen has a wall of asteroids
            this.wall.push({image:spaceRockImg, offset: createVector(i*50, random(0,30))})
        }
    }

    public update() {
        // Checks to see if a piece of the wall has gone far enough offscreen...
        // to not be seen and moves it to the back of the array to create a seamless loop
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
        for (const element of this.wall) {// draws out every asteroid in the array
            let positionX = this.position.x + element.offset.x -30 // creates enouigh space between asteroids so they arent ontop of each other
            if (positionX < backgroundImg.width - 50) {
                image(element.image, positionX, this.position.y + element.offset.y -30, 100, 100) 
                // checks so that the distance between asteroids is enough so that they dont spawn ontop of each other
            }
        }   

        // Used to see collisionBox of wall
        //fill(255)
        //rect(this.position.x, this.position.y, width, 50)

    }
}