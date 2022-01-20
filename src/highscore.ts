class highscore {
    private score: number

    constructor() {
        this.score = 0
    }
    
    public update() {
        this.score += (deltaTime / 1000) // +1 km for each second
    }
    
    public draw() {
        fill('white')
        textSize(25)
        textFont('Monospace');
        text(`Distance from earth: ${floor(this.score)} km`, 10, height - 5)
        
    }
}
