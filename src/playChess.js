class playChess {
    
    constructor() {
        this.canvas = document.getElementById("gameBoard")
        this.ctx = this.canvas.getContext("2d")
    }

    drawBoard() {
        var board = new Image()
        board.src = "src/assets/board squares/square brown dark_svg.svg"
        board.addEventListener('load', e =>  {
            this.ctx.drawImage(board, 0, 0, 100, 100)
        })
        

    }

}