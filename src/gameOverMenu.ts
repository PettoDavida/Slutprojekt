class GameOverMenu {

    private background: string;
    private text: string;
    private size: p5.Vector;
    
        constructor() {
        
        }
    
    
    
    public draw() {
        
        this.gameState = GameState.start;
        let h2 = createElement("h2", "Game Over");
        h2.style("color", "white");
        h2.position(500, 200);
        let button;
        button = createButton('Restart');
        button.position(600, 400);
        button.mousePressed();
    
    }
    
    
    
    public update() {}
    
    private newGame() {}
    
    private checkHighScore() {}
    
    }
