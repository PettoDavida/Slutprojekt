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

        createElement("h2", "Game Over")
            .addClass('menu-headline')
            .style('color', 'black')
            .position(430, 50)
            
       
        
        createButton('Restart')
            .mousePressed(this.restartGame.bind(this))
            .size(100, 60)
            .position(430, 480)

        createButton('Menu')
            .mousePressed(this.backToMenu.bind(this))
            .size(100, 60)
            .position(650, 480)

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

    private checkHighScore() {
    }
}





