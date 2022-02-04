class Highscore {
    public score: number
    public flooredScore: number
    private scoreBoardArray: number[]

    constructor() {
        this.score = 0
        this.flooredScore = 0
        this.scoreBoardArray = JSON.parse(localStorage.getItem("scores") ?? "[]")
    }
   
    /**
     * Counts score based on seconds and removes decimals
     */
    public update() { 
        this.flooredScore = floor(this.score)
        this.score += (deltaTime / 1000) // +1 km for each second
    }

       public draw() {
        fill('white')
        textSize(25)
        textFont('Monospace')
        text(`Distance from earth: ${floor(this.score)} km`, 10, height - 5)
    }

    /**
     * Saves recent score to array
     */
    public save() {
        this.scoreBoardArray.push(this.flooredScore)
    }
    
    /**
     * sorts highscore array
     */
    public sortHighScore() {
        this.scoreBoardArray.sort(function(a, b){
                return b-a
        })
    }
  
    /**
     * saves sorted higgscore array in local storage
     */
    private saveToLS() {
        localStorage.setItem("scores", JSON.stringify(this.scoreBoardArray))
    }

    /**
     * splices highscore array in 5 and draws out highscore on game over menu and start menu
     */
    public drawOnScoreBoard() {
       this.save()
       this.sortHighScore()
       this.saveToLS()

        this.scoreBoardArray.splice(5)
       
        let score = createElement('ol', "Score:")
                    .addClass('score-element flex-column flex absolute text-center')
                    .id('score-list')

        let place = [1,2,3,4,5]
        for(let i = 0; i < this.scoreBoardArray.length; i++) { 
                createElement('p', `${place[i]}.   ${this.scoreBoardArray[i]}`)
                    .style('font-size', '25px') 
                    .style('color', 'white')
                    .addClass('highscore-list-items')
                    .parent(score)
            }
    }
}
