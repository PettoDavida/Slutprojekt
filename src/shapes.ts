class Box {
    public position: p5.Vector
    public size: p5.Vector
    

    constructor(position: p5.Vector, size: p5.Vector) {
        this.position = position
        this.size = size
    }
}

class Circle {
    public position: p5.Vector
    public radius: number

    constructor(position: p5.Vector, radius: number) {
        this.position = position
        this.radius = radius
    }
}

class Triangle {
    public position: p5.Vector
    public size: p5.Vector

    constructor(position: p5.Vector, size: p5.Vector) {
        this.position = position
        this.size = size
    }
}