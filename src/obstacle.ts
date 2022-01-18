class Obstacle {
    private size: p5.Vector
    private speed: p5.Vector
    private position: p5.Vector
    private image: p5.Image

    constructor(image:p5.Image, position:p5.Vector, size:p5.Vector, speed:p5.Vector){
        this.size = size
        this.image = image
        this.position = position
        this.speed = speed
    }

    public draw(){
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
        // const position = createVector(width * 0.5 , height * 0.5)
        // const size = createVector(0,0)
        // new Obstacle()
    }

    public update(){}
    private obstacleSize(){}
    private obstaclePosition(){}
    private obstacleType(){}
}
