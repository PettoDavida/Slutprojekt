class PreGame {
    private game: Game
    private menu: Menu
    private gameovermenu: GameOverMenu
    private gameState: GameState = GameState.start
    //public highscore: Highscore;
     public background: Background
    //highscore: any;
    private isMuteKeyDown: boolean

    constructor() {
        this.menu = new Menu(this.startGame.bind(this))
        this.gameovermenu = new GameOverMenu(this.menu)
        this.game = new Game(this.gameOver.bind(this))
        this.background = new Background(backgroundImg)
        this.isMuteKeyDown = false
       // this.highscore = new Highscore()
    }

    /**
     * Sets the game to gameState running and starts a new game
     */
    private startGame() {
        this.gameState = GameState.running
        this.game = new Game(this.gameOver.bind(this))
        gameMusic.play()
        noCursor()
    }

    /**
     * When the player loses the game, it removes the obstacles and shows the gameOverMenu
     */
    private gameOver = () => {
        this.gameState = GameState.over
        this.game.resetObstaclesAndSpaceship() 
        gameMusic.stop()
        this.gameovermenu.setup()
        this.game.highscore.drawOnScoreBoard()
        cursor(ARROW)
    }

    /**
     * When the game is running it updates the walls, obstacles, highscore, spaceship and collision.
     *
     */
    public update() {
        if (this.gameState === GameState.running) {
            this.game.update()
        }

        // const muteKeyPressed = !this.isMuteKeyDown && keyIsDown(77);
        const muteKeyReleased = this.isMuteKeyDown && !keyIsDown(77)

        if (muteKeyReleased) {
            if (getOutputVolume()) {
                outputVolume(0)
            } else {
                outputVolume(1)
            }
        }
        
        // Save current frame's value so we can
        // check against it in the next frame
        this.isMuteKeyDown = keyIsDown(77)
    }

    /**
     * Draws out the rectangle around the menu on the startMenu and on the gameOverMenu.
     * Draws out the spaceship, obstacles, walls, background and highscore when the game is running and over.
     */
    public draw() {
        clear()
        switch (this.gameState) {
            case GameState.start:
                this.menu.draw()
                break

            case GameState.running || this.gameState === GameState.over:
                this.game.draw()
                break

            case GameState.over:
                this.game.draw()
                this.menu.draw()
                break
        }
    }
} 