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
        rectMode(CENTER)
        rect(1500/2, 800/2, 500,500)
        pop()
    }

    /**
     * Creates all the elements on the startMenu
     */
    public setup() {
        this.clearMenuContainer()

        let div = createElement('div')
                .addClass('startmenu-div')

        createElement('h1', 'Space Jam 3.0')
            .style('color', 'white')
            .style('font-size', '50px')
            .addClass('menu-headline')
            .parent(div)
            
        createButton('Start Game')
            .size(200, 60)
            .mousePressed(this.startGame.bind(this))
            .parent(div)

        createButton('Controls')
            .size(200, 60)
            .mousePressed(this.checkControls.bind(this))
            .parent(div)

        createButton('HighScore')
            .size(200, 60)
            .mousePressed(this.checkHighScore.bind(this))
            .parent(div)
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
        

        let div = createElement('div')
                .addClass('startmenu-div')
                .addClass('startmenu-highscore')

        this.highscore.drawOnScoreBoard(div)

        createElement('h2', 'HighScore')
            .style('color', 'black')
            .style('font-size', '50px')
            .parent(div)

        createButton('Back')
            .size(80, 30)
            .mousePressed(this.setup.bind(this))
            .parent(div)
            
    }
}



