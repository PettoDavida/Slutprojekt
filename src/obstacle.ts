class Obstacle {
    private size: p5.Vector
    private speed: p5.Vector
    private position: p5.Vector
    private image: p5.Image

    constructor(size:p5.Vector, position:p5.Vector, image:p5.Image, speed:p5.Vector){
        this.size = size
        this.image = image
        this.position = position
        this.speed = speed
    }

    public draw(){
        
    }
    public update(){}
    private obstacleSize(){}
    private obstaclePosition(){}
    private obstacleType(){}
}
