class Highscore {
    private score: number
    public flooredScore: number
    public scoreBoardArray: number[]
    

    constructor() {
        this.score = 0
        this.flooredScore = 0
        this.scoreBoardArray =  JSON.parse(localStorage.getItem('scores')) ?? [];
        
    }
    
    public update() { 
       //this.getScoresFromLS();
       console.log(this.scoreBoardArray)
        this.flooredScore = floor(this.score)
        this.score += (deltaTime / 1000) // +1 km for each second 
        
        if (game.gameState === GameState.over) {
            console.log(this.scoreBoardArray)
            this.scoreBoardArray.push(this.flooredScore);
            this.sortScoreBoard();
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
    private sortScoreBoard() {
            this.scoreBoardArray.sort(function(a, b){
               return b-a
           })

        this.scoreBoardArray.splice(5);
        this.saveToLS();
        this.drawOnBoard()
        console.log(this.drawOnBoard)
        
     }

    private saveToLS() {
        localStorage.setItem('scores', JSON.stringify(this.scoreBoardArray));
        
    }
    private drawOnBoard() {
        for(let i = 0; i < 5; i ++) {
                let highscoreListItems = createElement('ol', `${this.scoreBoardArray[i]}`)
                .parent('#score-list')
                .style('font-size', '17px') 
                .style('color', 'white')
                .addClass('highscoreListItems')


            
        }
        noLoop()
    }
}
