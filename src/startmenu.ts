class Menu {
    private readonly clickStartGame: () => void
    private highscore: Highscore


    constructor(clickStartGame: () => void) {
        this.clickStartGame = clickStartGame
        this.highscore = new Highscore()
        this.setup();
    }

    /**
     * Removes all the elements
     */
    public clearMenuContainer() {
        removeElements()
    }

    /**
     * Draws up the square around the menu
     */
    public draw() {
        push()
        fill(255, 250, 250, 100)
        square(350, 50, 500)
        pop()
    }

    /**
     * Creates all the elements on the startMenu
     */
    public setup() {
        this.clearMenuContainer()

        createElement('h1', 'Space Jam 3.0')
            .position(400, 50)
            .style('color', 'black')
            .style('font-size', '50px')
            .addClass('menu-headline')

        createButton('Start Game')
            .position(500, 200)
            .size(200, 60)
            .mousePressed(this.startGame.bind(this))

        createButton('Controls')
            .position(360, 300)
            .size(200, 60)
            .mousePressed(this.checkControls.bind(this))

        createButton('HighScore')
            .position(640, 300)
            .size(200, 60)
            .mousePressed(this.checkHighScore.bind(this))
    }

    /**
     * When the game starts it clears the menu
     */
    public startGame() {
        this.clearMenuContainer()
        this.clickStartGame()
        
    }

    /**
     * Creates the elements under Controls
     */
    public checkControls() {
        this.clearMenuContainer()

        createElement('h2', 'Game Controls')
            .position(400, 50)
            .style('color', 'black')
            .style('font-size', '50px')

        createElement('p', 'Fly')
            .position(440, 150)
            .style('color', 'black')
            .style('font-size', '20px')

        createElement('p', 'Left Mouse Button')
            .position(360, 200)
            .addClass('gameKeys')

        createElement('p', 'Space')
            .position(410, 270)
            .addClass('gameKeys')

        createElement('p', 'W')
            .position(420, 330)
            .addClass('gameKeys')

        createElement('p', '\u02C4')
            .position(425, 390)
            .addClass('gameKeys')

        createElement('p', 'Mute')
            .position(730, 190)
            .style('color', 'black')
            .style('font-size', '20px')

        createElement('p', 'M')
            .position(650, 200)
            .addClass('gameKeys')

        createButton('Back')
            .position(550, 500)
            .size(80, 30)
            .mousePressed(this.setup.bind(this))
    }

    /**
     * Creates the elements in High Score
     */
    private checkHighScore() {
        this.clearMenuContainer()
        this.highscore.drawOnScoreBoard()

        createElement('h2', 'HighScore')
            .position(400, 50)
            .style('color', 'black')
            .style('font-size', '50px')

        createButton('Back')
            .size(80, 30)
            .mousePressed(this.setup.bind(this))
            .position(550, 500)
    }
}



