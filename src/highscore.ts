class Highscore {
    private score: number
    public flooredScore: number
    private scoreBoard: number[]
    

    constructor() {
        this.score = 0
        this.flooredScore = 0
        this.scoreBoard = JSON.parse(localStorage.getItem("scores")) ?? []
        
    }
    
    public update() { 
       //this.getScoresFromLS();
       
        this.flooredScore = floor(this.score)
        this.score += (deltaTime / 1000) // +1 km for each second 
        
         if (game.gameState === GameState.over) {
            this.scoreBoard.push(this.flooredScore);
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
    private sortHighScore() {
            
        console.log(this.scoreBoard);
        this.saveToLS();
        // this.scoreBoard.sort(function(a, b){
        //         return b-a
        //     })
            //console.log(this.scoreBoard);
        
     }

    private pushScoreToArray() {
       this.sortHighScore();
       this.saveToLS();
        
    };
    

    private saveToLS() {
        localStorage.setItem("scores", JSON.stringify(this.scoreBoard));
        
    }
}
