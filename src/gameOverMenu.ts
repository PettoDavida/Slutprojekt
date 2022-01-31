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
            .style('color', 'black')
            .position(430, 50)
            .style('font-size', '50px')

        createElement('p', "Score:")
            .position(400, 150)
            .style('color', 'black')
            .id('score-list')

            .style("color", "black")
            //.position(90, 5)
         //   .parent(this.menu.menuContainer)
            .addClass('menu-headline')


        let scoreElement = createElement('p', "Score:")
            //.position(40, 100)
        //    .parent(this.menu.menuContainer)
           // .id('score-list')
            this.highscore.drawOnScoreBoard(scoreElement)
           

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





