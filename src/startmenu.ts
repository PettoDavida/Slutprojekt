
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

    private controlsDiv: any
    private highScoreMenu: any
    private highScoreList: any

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

        this.controlsDiv = createElement('div')
        this.controlsDiv.position(600, 300)



    }
    public checkHighScore(){
        this.gameIsRunning()

        this.highScoreMenu = createElement('ol', 'Highscore')
        this.highScoreMenu.position(550, 200)
        this.highScoreList = createElement('li','Anna')
        this.highScoreList.position(600,270)
    }
    private newGame(){

    }
}