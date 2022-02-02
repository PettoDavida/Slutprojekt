class GameOverMenu {
    private menu: Menu
    private highscore: Highscore

    constructor(startMenu: Menu) {
        this.menu = startMenu
        this.highscore = new Highscore()
    }

    /**
     * Creates the elements in the gameOverMenu
     */
    public setup() {
        this.menu.clearMenuContainer()
        //drawonscoreboard
       

        let div = createElement('div')
            .addClass('gameovermenu-div')
            .id('score')
            
             this.highscore.drawOnScoreBoard(div)

        createElement("h2", "Game Over")
            .addClass('menu-headline')
            .style('color', 'white')
            .parent(div)
            
        createButton('Restart')
            .mousePressed(this.restartGame.bind(this))
            .size(100, 60)
            .parent(div)
           

        createButton('Menu')
            .mousePressed(this.backToMenu.bind(this))
            .size(100, 60)
            .parent(div)
            

    }

    /**
     * Returns to the startMenu
     */
    private backToMenu() {
        this.menu.setup()
    }

    /**
     * Restarts the game
     */
    private restartGame() {
        this.menu.startGame()
        

    }
}





