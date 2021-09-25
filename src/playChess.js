class playChess {
    
    constructor() {
        this.canvas = document.getElementById("gameBoard")
        this.ctx = this.canvas.getContext("2d")
    }

    drawBoard() {
        const square1 = new Image()
        square1.src = "src/assets/board squares/square brown dark_svg.svg"
        square1.addEventListener('load', e =>  {
            this.ctx.drawImage(square1, 0, 0, 100, 100)
        })
        

    }

}