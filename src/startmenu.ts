class Menu {
    public menuContainer?: p5.Element
    public readonly clickStartGame: () => any

    constructor(clickStartGame: () => any) {
        this.clickStartGame = clickStartGame
    }

    /**
     * Removes the div and all it's children
     */
    public clearMenuContainer() {
        this.menuContainer?.remove()
    }

    /**
     * Creates a div
     */
    public static createMenuContainer(): p5.Element {
        return createDiv()
            .position(350, 50)
            .size(500, 500)
            .addClass('startContainer')
            .parent(document.querySelector('main') as Element)
    }

    /**
     * Creates all the elements on the menu
     */
    public setup() {
        this.clearMenuContainer()
        this.menuContainer = Menu.createMenuContainer()

        createElement('h1', 'Space Jam 3.0')
            .position(40, 5)
            .parent(this.menuContainer)

        createButton('Start Game')
            .position(150, 140)
            .size(200, 60)
            .mousePressed(this.startGame.bind(this))
            .parent(this.menuContainer)

        createButton('Controls')
            .position(0, 240)
            .size(200, 60)
            .mousePressed(this.checkControls.bind(this))
            .parent(this.menuContainer)

        createButton('HighScore')
            .position(300, 240)
            .size(200, 60)
            .mousePressed(this.checkHighScore.bind(this))
            .parent(this.menuContainer)
    }

    /**
     * When the game starts it clears the menu div
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

        this.menuContainer = Menu.createMenuContainer()

        createElement('h2', 'Game Controls')
            .position(40, 5)
            .style('color', 'white')
            .parent(this.menuContainer)

        createElement('p', 'Fly')
            .position(80, 100)
            .parent(this.menuContainer)

        createElement('p', 'Left Mouse Button')
            .position(0, 150)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createElement('p', 'Space')
            .position(40, 220)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createElement('p', 'W')
            .position(60, 290)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createElement('p', '\u02C4')
            .position(60, 360)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createElement('p', 'Pause')
            .position(430, 170)
            .parent(this.menuContainer)

        createElement('p', 'P')
            .position(350, 150)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createElement('p', 'Mute')
            .position(430, 240)
            .parent(this.menuContainer)

        createElement('p', 'M')
            .position(350, 220)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createButton('Back')
            .position(200, 450)
            .size(80, 30)
            .mousePressed(this.setup.bind(this))
            .parent(this.menuContainer)
    }

    /**
     * Creates the elements in High Score
     */
    public checkHighScore() {
        this.clearMenuContainer()

        this.menuContainer = Menu.createMenuContainer()

        const ol = createElement('ol', 'Highscore')
            .position(40, 5)
            .parent(this.menuContainer)

        createElement('li', 'Anna')
            .position(100, 70)
            .parent(ol)

        createElement('li', 'Ella')
            .position(100, 110)
            .parent(ol)

        createElement('li', 'Maximilian')
            .position(100, 150)
            .parent(ol)

        createElement('li', 'Linnea')
            .position(100, 190)
            .parent(ol)

        createElement('li', 'Erik')
            .position(100, 240)
            .parent(ol)

        createButton('Back')
            .position(200, 450)
            .size(80, 30)
            .mousePressed(this.setup.bind(this))
            .parent(this.menuContainer)
    }
}



