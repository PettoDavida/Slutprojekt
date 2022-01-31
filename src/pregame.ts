class PreGame {
    private game: Game;
    private menu: Menu
    private gameovermenu: GameOverMenu
    public gameState: GameState = GameState.start // gör private
    //public highscore: Highscore;
    public background: Background;
    highscore: any;
    private isMuteKeyDown: boolean
    

    constructor() {
        this.menu = new Menu(this.startGame.bind(this))
        this.gameovermenu = new GameOverMenu(this.menu)
        this.menu.setup()
        this.game = new Game(this.gameOver.bind(this));
        this.background = new Background(backgroundImg)
        this.isMuteKeyDown = false;
       // this.highscore = new Highscore()
    }

    /**
     * Changes the gamestate to running and changes the position of the spaceship
     */
    private startGame() {
        this.gameState = GameState.running
        this.game = new Game(this.gameOver.bind(this));
        gameMusic.play()
    }

    private gameOver = () => {
        this.gameovermenu.setup()
        this.gameState = GameState.over
        this.game.removeObstaclesFromArray()   
        gameMusic.stop()
    }

    public update() {
        if (this.gameState === GameState.running) {
            this.game.update();
        }
        
        // const muteKeyPressed = !this.isMuteKeyDown && keyIsDown(77);
        const muteKeyReleased = this.isMuteKeyDown && !keyIsDown(77);

        if (muteKeyReleased) {
            if (getOutputVolume()) {
                outputVolume(0);
            } else {
                outputVolume(1);
            }
        }
        
        // Save current frame's value so we can
        // check against it in the next frame
        this.isMuteKeyDown = keyIsDown(77);
    }

    public draw() {
        clear()
        if (this.gameState === GameState.running || this.gameState === GameState.over) {
            this.game.draw();
        }
    }

} 