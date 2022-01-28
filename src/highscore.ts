class Highscore {
    private score: number
    public flooredScore: number
    private scoreBoardArray: number[]


    constructor() {
        this.score = 0
        this.flooredScore = 0

        this.scoreBoardArray = JSON.parse(localStorage.getItem("scores") ?? "[]")

    }
    
    public update() { 
       //this.getScoresFromLS();
        this.flooredScore = floor(this.score)
        this.score += (deltaTime / 1000) // +1 km for each second 
        
    }
    
    public save() {
        this.scoreBoardArray.push(this.flooredScore);
        this.sortHighScore();
      //  this.drawOnScoreBoard()

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
            
        this.saveToLS();
        this.scoreBoardArray.sort(function(a, b){
                return b-a
            })
            console.log(this.scoreBoardArray);

        
     }

    private saveToLS() {

        localStorage.setItem("scores", JSON.stringify(this.scoreBoardArray));
        
    }
    // private drawOnScoreBoard() {
        
    //     for(let i = 0; i < 5; i ++) {
                
    //             createElement('ol', `${this.scoreBoardArray[i]}`)
    //             .parent('#score-list')
    //             .style('font-size', '17px') 
    //             .style('color', 'white')
    //             .addClass('highscoreListItems')
            
    //     }
        
    // }

}
