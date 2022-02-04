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

        let div = createElement('div')
            .addClass('gameovermenu-div')
            .id('score')

        createElement("h2", "Game Over")
            .addClass('menu-headline')
            .style('color', 'white')
            .parent(div)
            
        createButton('Restart')
            .mousePressed(this.restartGame.bind(this))
            .size(100, 60)
            .parent(div)
            .addClass('button-restart')
           
        createButton('Menu')
            .mousePressed(this.backToMenu.bind(this))
            .size(100, 60)
            .parent(div)
            .addClass("button-menu")
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





