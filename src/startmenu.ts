
class Menu {
    private background: string
    private text: string
    private size: p5.Vector

    public gameTitle: any
    private startButton: any
    private clickStartGame: () => any
    private controlsButton: any
    private clickForControls: () => any
    private highScoreButton: any
    private clickForHighScore: () => any

    private controlsTitle: any
    private highScoreMenu: any
    private highScoreList: any
    private spaceKey: any
    private wKey: any
    private arrowKey: any
    private leftMouseClick: any
    private pauseKey: any
    private muteKey: any

    constructor(clickStartGame: () => any, clickForControls: () => any, clickForHighScore: () => any) {
        this.clickStartGame = clickStartGame
        this.clickForControls = clickForControls
        this.clickForHighScore = clickForHighScore
    }


    public setup() {

        this.gameTitle = createElement('h1', 'Space Jam 3.0')
        this.gameTitle.position(600, 300)

        this.startButton = createButton('Start Game')
        this.startButton.position(700, 420)
        this.startButton.size(200, 60)
        this.startButton.mousePressed(this.clickStartGame)

        this.controlsButton = createButton('Controls')
        this.controlsButton.position(500, 520)
        this.controlsButton.size(200, 60)
        this.controlsButton.mousePressed(this.clickForControls)

        this.highScoreButton = createButton('HighScore')
        this.highScoreButton.position(900, 520)
        this.highScoreButton.size(200, 60)
        this.highScoreButton.mousePressed(this.clickForHighScore)
    }

    public gameIsRunning() {
        this.startButton.remove()
        this.gameTitle.remove()
        this.controlsButton.remove()
        this.highScoreButton.remove()
    }

    public draw(){
    }

    public update(){

    }

    public checkControls(){
        this.gameIsRunning()

       this.controlsTitle = createElement('h2', 'Game Controls')
        this.controlsTitle.position(600, 50)

        this.leftMouseClick = createElement('p', 'Left Mouse Button')
        this.leftMouseClick.position(550, 150)

        this.spaceKey = createElement('p', 'Space')
        this.spaceKey.position(600, 220)

        this.wKey = createElement('p', 'W')
        this.wKey.position(620, 290)

        this.arrowKey = createElement('p', '')
        this.arrowKey.position(630, 350)

        this.pauseKey = createElement('p', 'Pause')
        this.pauseKey.position(800, 150)

        this.muteKey = createElement('p', 'Mute')
        this.muteKey.position(800, 220)
    }

    public checkHighScore(){
        this.gameIsRunning()

        this.highScoreMenu = createElement('ol', 'Highscore')
        this.highScoreMenu.position(550, 150)
        this.highScoreList = createElement('li','Anna')
        this.highScoreList.position(600,270)
    }

    private newGame(){

    }
}