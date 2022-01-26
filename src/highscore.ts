class Highscore {
    private score: number
    public flooredScore: number
    private scoreBoard: number[]
    

    constructor() {
        this.score = 0
        this.flooredScore = 0
       // this.scoreBoard = []
        
    }
    
    public update() { 
       //this.getScoresFromLS();
       
        this.flooredScore = floor(this.score)
        this.score += (deltaTime / 1000) // +1 km for each second 
        
         if (game.gameState === GameState.over) {
            this.sortHighScore(); 
           noLoop()
        } 
        return
       
    }
    
    public draw() {
        fill('white')
        textSize(25)
        textFont('Monospace');
        text(`Distance from earth: ${floor(this.score)} km`, 10, height - 5)
        
    }
//    private getScoresFromLS() {
//         game.scores.push() ?? [];
//         console.log(game.scores);
//     }

    private pushScoreToArray() {
       this.sortHighScore();
       this.saveToLS();
        game.scores.push(this.flooredScore)
    };
    private sortHighScore() {
         
        this.pushScoreToArray();
    }

    private saveToLS() {
        localStorage.setItem("scores", JSON.stringify(game.scores));
        
    }
}
