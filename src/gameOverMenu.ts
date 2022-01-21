class GameOverMenu {

    private background: string;
    private text: string;
    private size: p5.Vector;
    public gameState: GameState

    

    constructor() {

    }

    public draw() {

        this.gameState = GameState.start;
        let h2 = createElement("h2", "Game Over");
        h2.style("color", "white");
        h2.position(500, 200);

        let restartButton;
        restartButton = createButton('Restart');
        restartButton.position(600, 400);
        restartButton.mousePressed();

        let menuButton;
        menuButton = createButton('Menu');
        menuButton.position(600, 450);
        menuButton.mousePressed();
    }



    public update() { }

    private newGame() { }

    private checkHighScore() { }

}
