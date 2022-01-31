class GameOverMenu {
    private menu: Menu

    constructor(startMenu: Menu) {
        this.menu = startMenu
    }



    /**
     * Creates the elements in the gameOverMenu
     */
    public setup() {
        this.menu.clearMenuContainer()

        createElement("h2", "Game Over")
            .style('color', 'black')
            .position(430, 50)
            .style('font-size', '50px')

        createElement('p', "Score:")
            .position(400, 150)
            .style('color', 'black')
            .id('score-list')

        createButton('Restart')
            .mousePressed(this.restartGame.bind(this))
            .size(100, 60)
            .position(430, 300)

        createButton('Menu')
            .position(650, 300)
            .mousePressed(this.backToMenu.bind(this))
            .size(100, 60)
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





