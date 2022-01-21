class Highscore {
    private score: number
    public flooredScore: number
    

    constructor() {
        this.score = 0
        this.flooredScore = 0
        
    }
    
    public update() { 

        if (GameState.over) {
            this.pushScoreToArray();
        }
        
        this.flooredScore = floor(this.score)
        this.score += (deltaTime / 1000) // +1 km for each second 
        
       
    }
    
    public draw() {
        fill('white')
        textSize(25)
        textFont('Monospace');
        text(`Distance from earth: ${floor(this.score)} km`, 10, height - 5)
        
    }

    private pushScoreToArray() {
       // this.highscores.push(this.flooredScore);
    }
}
