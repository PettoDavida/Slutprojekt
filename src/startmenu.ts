class Menu {
    private menuContainer?: p5.Element
    private readonly clickStartGame: () => any

    constructor(clickStartGame: () => any) {
        this.clickStartGame = clickStartGame
    }

    private clearMenuContainer() {
        this.menuContainer?.remove()
    }

    private static createMenuContainer(): p5.Element {
        return createDiv()
            .position(0, 0)
            .size(gameSize.width, gameSize.height)
            .parent(document.querySelector('main') as Element)
    }

    public setup() {
        this.clearMenuContainer()

        this.menuContainer = Menu.createMenuContainer()

        createElement('h1', 'Space Jam 3.0')
            .position(600, 300)
            .parent(this.menuContainer)

        createButton('Start Game')
            .position(700, 420)
            .size(200, 60)
            .mousePressed(this.startGame.bind(this))
            .parent(this.menuContainer)

        createButton('Controls')
            .position(500, 520)
            .size(200, 60)
            .mousePressed(this.checkControls.bind(this))
            .parent(this.menuContainer)

        createButton('HighScore')
            .position(900, 520)
            .size(200, 60)
            .mousePressed(this.checkHighScore.bind(this))
            .parent(this.menuContainer)
    }

    public startGame() {
        this.clearMenuContainer()
        this.clickStartGame()
    }

    public draw() {
    }

    public update() {

    }

    public checkControls() {
        this.clearMenuContainer()

        this.menuContainer = Menu.createMenuContainer()

        createElement('h2', 'Game Controls')
            .position(600, 50)
            .parent(this.menuContainer)

        createElement('p', 'Fly')
            .position(630, 150)
            .parent(this.menuContainer)

        createElement('p', 'Left Mouse Button')
            .position(550, 200)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createElement('p', 'Space')
            .position(600, 270)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createElement('p', 'W')
            .position(620, 330)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createElement('p', '')
            .position(630, 390)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createElement('p', 'Pause')
            .position(870, 170)
            .parent(this.menuContainer)

        createElement('p', 'P')
            .position(800, 150)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createElement('p', 'Mute')
            .position(870, 240)
            .parent(this.menuContainer)

        createElement('p', 'M')
            .position(800, 220)
            .addClass('gameKeys')
            .parent(this.menuContainer)

        createButton('Back')
            .position(700, 500)
            .size(80, 30)
            .mousePressed(this.setup.bind(this))
            .parent(this.menuContainer)
    }

    public checkHighScore() {
        this.clearMenuContainer()

        this.menuContainer = Menu.createMenuContainer()

        const ol = createElement('ol', 'Highscore')
            .position(550, 150)
            .parent(this.menuContainer)

        createElement('li', 'Anna')
            .position(0, 70)
            .parent(ol)

        createButton('Back')
            .position(700, 500)
            .size(80, 30)
            .mousePressed(this.setup.bind(this))
            .parent(this.menuContainer)
    }

    //public startPage() {
    //   setup()


    //}

}



