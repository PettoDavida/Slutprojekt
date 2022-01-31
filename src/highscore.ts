class Highscore {
    public score: number
    public flooredScore: number
    private scoreBoardArray: number[]


    constructor() {
        this.score = 0
        this.flooredScore = 0
        this.scoreBoardArray = JSON.parse(localStorage.getItem("scores") ?? "[]")
        console.log(this.scoreBoardArray)
    }
    /**
     * Saves 
     */
    public update() { 
        this.flooredScore = floor(this.score)
        this.score += (deltaTime / 1000) // +1 km for each second 
        //console.log(this.score)      
      
    }
    
    public save() {
        console.log('save')
        this.scoreBoardArray.push(this.flooredScore);
        this.sortHighScore();
     // console.log(this.scoreBoardArray)

    }
    
    public draw() {
        fill('white')
        textSize(25)
        textFont('Monospace');
        text(`Distance from earth: ${floor(this.score)} km`, 10, height - 5)
        
    }

    public sortHighScore() {
        this.scoreBoardArray.sort(function(a, b){
                return b-a
        })
        this.saveToLS();
        console.log(this.scoreBoardArray)  
    }
  
    private saveToLS() {
        localStorage.setItem("scores", JSON.stringify(this.scoreBoardArray));
    }

    public drawOnScoreBoard(parent) {
        this.sortHighScore()
       // this.scoreBoardArray.splice(5);
        console.log(this.scoreBoardArray)
        
        let place = [1,2,3,4,5]
        for(let i = 0; i < 5; i ++) {
                
                createElement('p', `${place[i]}.   ${this.scoreBoardArray[i]}`)
                .style('font-size', '25px') 
                .style('color', 'white')
                .addClass('highscore-list-items')
                .parent(parent)
                
        }
        
    }

}
