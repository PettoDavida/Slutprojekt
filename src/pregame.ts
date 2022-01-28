class PreGame {
    private game: Game;
    private menu: Menu
    private gameovermenu: GameOverMenu
    public gameState: GameState = GameState.start // gör private
    //public highscore: Highscore;
    public background: Background;
    highscore: any;
    

    constructor() {
        this.menu = new Menu(this.startGame.bind(this))
        this.gameovermenu = new GameOverMenu(this.menu)
        this.menu.setup()
        this.game = new Game(this.gameOver.bind(this));
        this.background = new Background(backgroundImg)
       // this.highscore = new Highscore()
    }

    /**
     * Changes the gamestate to running and changes the position of the spaceship
     */
    private startGame() {
        this.gameState = GameState.running
        this.game = new Game(this.gameOver.bind(this));
    }

    private gameOver = () => {
        this.gameovermenu.setup()
        this.gameState = GameState.over
        this.game.removeObstaclesFromArray()   
    }

    public update() {
        if (this.gameState === GameState.running) {
            this.game.update();
        }
    }

    public draw() {
        clear()
        if (this.gameState === GameState.running || this.gameState === GameState.over) {
            this.game.draw();
        }
    }

} 