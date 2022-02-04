class Box {
    public position: p5.Vector
    public size: p5.Vector

    constructor(position: p5.Vector, size: p5.Vector) {
        this.position = position
        this.size = size
    }

    /**
     * Checks to see if a rectangle has collided with another rectangle
     * @param pos position of rectangle 
     * @param size size of rectangle
     * @returns true if collision false if no collision
     */
    public collide(pos: p5.Vector, size: p5.Vector) { 
        return this.position.x < pos.x + size.x && 
        this.position.x + this.size.x > pos.x &&
        this.position.y < pos.y + size.y && 
        this.size.y + this.position.y > pos.y
    }
}

class Circle {
    public position: p5.Vector
    public radius: number

    constructor(position: p5.Vector, radius: number) {
        this.position = position
        this.radius = radius
    }

    /**
     * Checks to see if a rectangle has collided with a circle
     * @param pos position of rectangle 
     * @param size size of rectangle
     * @returns true if collision false if no collision
     */
    public collide(pos: p5.Vector, size: p5.Vector) {

        let rectangleCenter = createVector(pos.x + size.x / 2, pos.y + size.y / 2)
    
        let w = size.x / 2
        let h = size.y / 2
    
        let dx = Math.abs(this.position.x - rectangleCenter.x)
        let dy = Math.abs(this.position.y - rectangleCenter.y)
    
        if (dx > (this.radius + w) || dy > (this.radius + h)) return false
    
        let circleDistance = createVector(Math.abs(this.position.x - pos.x - w), Math.abs(this.position.y - pos.y - h))
    
        if (circleDistance.x <= w)
            return true
    
        if (circleDistance.y <= h)
            return true
    
        let cornerDistanceSq = Math.pow(circleDistance.x - w, 2) + Math.pow(circleDistance.y - h, 2)
    
        return (cornerDistanceSq <= (Math.pow(this.radius, 2)))

    }
}
