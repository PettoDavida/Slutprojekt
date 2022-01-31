class PreGame {
    private game: Game;
    private menu: Menu
    private gameovermenu: GameOverMenu
    private gameState: GameState = GameState.start
    //public highscore: Highscore;
    public background: Background;


    constructor() {
        this.menu = new Menu(this.startGame.bind(this))
        this.gameovermenu = new GameOverMenu(this.menu)
        this.menu.setup()
        this.game = new Game(this.gameOver.bind(this));
        this.background = new Background(backgroundImg)
        // this.highscore = new Highscore()
    }

    /**
     * Sets the game to gameState running and starts a new game
     */
    private startGame() {
        this.gameState = GameState.running
        this.game = new Game(this.gameOver.bind(this));
    }

    /**
     * When the player loses the game, it removes the obstacles and shows the gameOverMenu
     */
    private gameOver = () => {
        this.gameState = GameState.over
        this.game.removeObstaclesFromArray()

        if (this.gameState === GameState.over) {
            this.gameovermenu.setup()
            return
        }

        this.game.removeObstaclesFromArray()   
        this.game.highscore.sortHighScore()

    }

    public update() {
        if (this.gameState === GameState.running) {
            this.game.update();

        }

    }

    public draw() {
        clear()
        switch (this.gameState) {
            case GameState.start:
                this.background.draw()
                this.menu.draw()
                break

            case GameState.running || this.gameState === GameState.over:
                this.game.draw();
                break

            case GameState.over:
                this.game.draw()
                this.menu.draw()
                break
        }

    }

} 