class Obstacle {
    private size: p5.Vector
    private position: p5.Vector
    private image: p5.Image
    

    constructor(image: p5.Image, position:p5.Vector, size:p5.Vector) {
        this.size = size
        this.position = position
        this.image = obstacleImg        
    }

    public update(horizontalGameSpeed: number) {
        // fart i px per sekund
        this.position.x -= horizontalGameSpeed * (deltaTime / 1000)
    }

    public draw(){
       image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
    }

    private obstacleSize(){}
    private obstaclePosition(){}
    private obstacleType(){}
}
