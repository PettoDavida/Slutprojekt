class GameOverMenu {
    private menu: Menu

    constructor(startMenu: Menu) {
        this.menu = startMenu
    }

    /**
     * Creates the elements in the game over menu
     */
    public setup() {
        this.menu.clearMenuContainer()
        this.menu.menuContainer = Menu.createMenuContainer()

        createElement("h2", "Game Over")
            .style("color", "white")
            .position(90, 5)
            .parent(this.menu.menuContainer)

        createElement('p', "Score:")
            .position(90, 100)
            .parent(this.menu.menuContainer)

        createButton('Restart')
            .position(300, 350)
            .mousePressed(this.restartGame.bind(this))
            .size(100, 60)
            .parent(this.menu.menuContainer)

        createButton('Menu')
            .position(100, 350)
            .mousePressed(this.backToMenu.bind(this))
            .size(100, 60)
            .parent(this.menu.menuContainer)
    }

    /**
     * Returns the elements in menu setup
     */
    private backToMenu() {
        this.menu.setup()
    }

    /**
     * Makes the game start over
     */
    private restartGame() {
        this.menu.startGame()
    }

    private checkHighScore() {
    }
}





