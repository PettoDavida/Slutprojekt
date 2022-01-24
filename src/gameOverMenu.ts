class GameOverMenu {
    public menu: Menu
    private background: string;
    private text: string;
    private size: p5.Vector;

    constructor(startMenu: Menu) {
        this.menu = startMenu
    }

    public draw() {
        this.menu.clearMenuContainer()
        this.menu.menuContainer = Menu.createMenuContainer()

        createElement("h2", "Game Over")
            .style("color", "white")
            .position(40, 5)
            .parent(this.menu.menuContainer)

        createButton('Restart')
            .position(200, 450)
            .mousePressed(this.restartGame.bind(this))
            .parent(this.menu.menuContainer)

        createButton('Menu')
            .position(200, 350)
            .mousePressed(this.backToMenu.bind(this))
            .parent(this.menu.menuContainer)
    }

    public backToMenu() {
        this.menu.setup()
    }

    public restartGame() {
        this.menu.startGame()
    }

    public update() {
    }

    private newGame() {
    }

    private checkHighScore() {
    }
}





