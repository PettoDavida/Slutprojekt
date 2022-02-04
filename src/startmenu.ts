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
     * Draws up the rectangle around the menu
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
                .addClass('startmenu-div flex absolute flex-column')

        createElement('h1', 'Space Race')
            .style('color', 'white')
            .style('font-size', '50px')
            .addClass('menu-headline text-center')
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

        let div = createElement('div')
            .addClass('controls-div flex absolute flex-column text-center')

        createElement('h2', 'Game Controls')
            .style('color', 'white')
            .style('font-size', '50px')
            .addClass('controls-title text-center')
            .parent(div)

        createElement('p', 'Fly upwards')
            .style('color', 'black')
            .style('font-size', '20px')
            .parent(div)

        createElement('p', 'Left Mouse Button')
            .addClass('gameKeys')
            .parent(div)

        createElement('p', 'Space')
            .addClass('gameKeys')
            .parent(div)

        createElement('p', 'W')
            .addClass('gameKeys')
            .parent(div)

        createElement('p', '\u02C4')
            .addClass('gameKeys')
            .parent(div)

        createElement('p', 'Mute')
            .style('color', 'black')
            .style('font-size', '20px')
            .parent(div)

        createElement('p', 'M')
            .addClass('gameKeys')
            .parent(div)

        createButton('Back')
            .size(80, 30)
            .mousePressed(this.setup.bind(this))
            .addClass('backButton')
            .parent(div)
    }

    /**
     * Creates the elements in High Score
     */
    private checkHighScore() {
        this.clearMenuContainer()
        this.highscore.drawOnScoreBoard()

        let div = createElement('div')
            .addClass('highscore-div flex absolute flex-column')

        createElement('h2', 'HighScore')
            .addClass('highscore-title text-center')
            .style('color', 'black')
            .style('font-size', '50px')
            .parent(div)

        createButton('Back')
            .size(80, 30)
            .mousePressed(this.setup.bind(this))
            .parent(div)
    }
}



