class Highscore {
    public score: number
    public flooredScore: number
    private scoreBoardArray: number[]

    constructor() {
        this.score = 0
        this.flooredScore = 0
        this.scoreBoardArray = JSON.parse(localStorage.getItem("scores") ?? "[]")
    }
   
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

    public save() {
        this.scoreBoardArray.push(this.flooredScore)
        console.log('save')
    }
    
    public sortHighScore() {
        console.log('sorthighscore') 
        this.scoreBoardArray.sort(function(a, b){
                return b-a
        })
    }
  
    private saveToLS() {
        localStorage.setItem("scores", JSON.stringify(this.scoreBoardArray))
        console.log('savetols')
        //this.drawOnScoreBoard()
    }

    public drawOnScoreBoard() {
      console.log('drawonscoreboard')
       this.save()
       this.sortHighScore()
       this.saveToLS()

        this.scoreBoardArray.splice(5)
        console.log(this.scoreBoardArray)
       
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
