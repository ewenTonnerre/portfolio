const COLORS = ['none', 'cyan', 'blue', 'orange', 'yellow', 'green', 'purple', 'red'];
Object.freeze(COLORS);
const SHAPES = [
    [],
    [[0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]],

    [[2, 0, 0],
    [2, 2, 2],
    [0, 0, 0]],

    [[0, 0, 3],
    [3, 3, 3],
    [0, 0, 0]],

    [[4, 4],
    [4, 4]],

    [[0, 5, 5],
    [5, 5, 0],
    [0, 0, 0]],

    [[0, 6, 0],
    [6, 6, 6],
    [0, 0, 0]],

    [[7, 7, 0],
    [0, 7, 7],
    [0, 0, 0]]
];
Object.freeze(SHAPES);

class Shape {

    constructor(ctx, grid, board) {
        this.grid = grid;
        this.ctx = ctx;
        this.randomShape();
        this.board = board;

        // Starting position.
        this.x = 0;
        this.y = 0;
    }

    drawShape() {
        this.board.drawBoard();
        while (this.shape == undefined) {
            this.randomShape();
        }
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                // this.x, this.y gives the left upper position of the shape
                // x, y gives the position of the block in the shape
                // this.x + x is then the position of the block on the board
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }

    moveLeft(grid) {
        if (this.canMove(grid,-1,0)) {
            this.x--;
        }
    }

    moveRight(grid) {
        if (this.canMove(grid,1,0)) {
            this.x++;
        }
    }

    moveDown(grid) {
        if (this.canMove(grid,0,1)) {
            this.y++;
        } else {
            this.board.changeShape();
        }
    }

    canMove(grid,x,y) {
        return this.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let nextX = this.x + dx + x; // prochaine position en X de la brique
                let nextY = this.y + dy + y; // prochaine position en Y de la brique
                if (value != 0){ // Si c'est une brique
                    if (nextX >= 0 && nextX <= 9 && nextY <= 19) { // Si elle ne sort pas du plateau de jeu
                        return (grid[nextY][nextX] == 0 ); // si la prochaine case est occupée
                    }
                    else return false;
                } else return true;
            });
        });
    }
    
    randomShape() {
        let number = Math.floor(Math.random() * 8);
        this.shape = SHAPES[number + 1];
        this.color = COLORS[number + 1];
    }

    setPositionInGameCanvas() {
        this.x = 4;
    }

    rotate() {
        let tempShape = this.shape;

        for (let y = 0; y < this.shape.length; y++) {
            for (let x = 0; x < y; x++) {
                [tempShape[x][y], tempShape[y][x]] = [tempShape[y][x], tempShape[x][y]];
            }
        }

        tempShape.forEach((row) => row.reverse());

        this.shape = tempShape;

        // test si la shape est dans un mur après rotation
        this.shape.forEach((row, dy) => {
            row.forEach((value, dx) => {
                if (value != 0){
                    if (dx+this.x <0) this.x++; // la décale à droite
                    if (dx+this.x >9) this.x--; // la décale à gauche
                    if (dy+this.y >19) this.y--; // la décale en haut                  
                }
            });
        });
    }
}