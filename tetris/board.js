class Board {
    shape
    nextShape;
    constructor(ctx, ctxNextShape) {
        this.ctx=ctx;
        this.ctxNextShape=ctxNextShape;

        this.grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.play();

    }

    play(){
        this.shape = new Shape(this.ctx,this.grid,this);
        this.getNewShape();
    }

    getNewShape(){
        this.ctxNextShape.clearRect(0, 0, this.ctxNextShape.canvas.width, this.ctxNextShape.canvas.height);
        this.nextShape = new Shape(this.ctxNextShape,this.grid,this)
        this.nextShape.drawShape();
    }
    
    drawShape(){
        this.shape.drawShape(this.ctx);
    }
    
    moveShapeLeft(){
        this.shape.moveLeft(this.grid);
    }
    
    moveShapeRight(){
        this.shape.moveRight(this.grid);
    }
    
    moveShapeDown(){
        this.shape.moveDown(this.grid);
    }

    setPositionFirstShape(){
        this.shape.setPositionInGameCanvas();
    }

    drawBoard(){
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.grid.forEach((row, y) => {
            row.forEach((value, x) => {
              if (value > 0) {
                this.ctx.fillStyle = COLORS[value];
                this.ctx.fillRect(x, y, 1, 1);
              }
            });
          });
    }

    changeShape(){
        this.freezeShape();
        this.drawBoard();
        this.shape = this.nextShape;
        this.shape.ctx = this.ctx;
        this.shape.setPositionInGameCanvas();
        this.getNewShape();
    }

    freezeShape() {
        this.shape.shape.forEach((row, indexY) => {
          row.forEach((value, indexX) => {
            if (value > 0) {
              this.grid[indexY + this.shape.y][indexX + this.shape.x] = value;
            }
          });
        });

        if (this.shape.y == 0){
            gameOver();
        }
    }

    detectLines(){
        let numberLinesCompleted = 0;

        this.grid.forEach((row,y) => {
            if(row.every(value => value > 0)){
                numberLinesCompleted++;
                this.grid.splice(y,1); //Supprime la ligne remplie
                this.grid.unshift(Array(10).fill(0)); //Ajoute une nouvelle ligne au dessus

                if (nbLinesCompleted%5 == 0 && nbLinesCompleted != 0) {
                    timerGlobal*=0.8; // le jeu va 20% plus vite 
                    timer = timerGlobal;
                } 
            }
           
        })

          

        return 10*numberLinesCompleted;

        
    }

    rotateShape(){
        this.shape.rotate();
    }


    
}