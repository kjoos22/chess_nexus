class playChess {
    
    constructor() {
        this.canvas = document.getElementById("gameBoard")
        this.ctx = this.canvas.getContext("2d")
    }

    drawBoard() {
        const square1 = new Image()
        const square2 = new Image()
        square1.src = "src/assets/board squares/square brown light.svg"
        square2.src = "src/assets/board squares/square brown dark.svg"
        square1.addEventListener('load', e =>  {
            let x = 0, y = 0
            while (x <= 800) {
                this.ctx.drawImage(square1, x, 0, 100, 100)
                x += 100
                this.ctx.drawImage(square2, x, 0, 100, 100)
                x += 100
            }
            //this.ctx.drawImage(square1, 0, 0, 100, 100)
            //this.ctx.drawImage(square1, 200, 0, 100, 100)
        })
        

    }

}