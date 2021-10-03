class PlayChess {
    
    constructor() {
        this.canvas = document.getElementById("gameBoard")
        this.ctx = this.canvas.getContext("2d")
        this.lightSquare = "src/assets/board squares/square brown light.svg"
        this.darkSquare = "src/assets/board squares/square brown dark.svg"
        
        this.gameState = new GameState()

        
    }

    drawBoard() {
        let light = new Image()
        let dark = new Image()
        light.src = this.lightSquare
        dark.src = this.darkSquare
        light.addEventListener('load', e =>  {
            dark.addEventListener('load', e => {
                let x = 0, y = 700, square1 = dark, square2 = light
                while (y >= 0) {
                    while (x <= 700) {
                        this.ctx.drawImage(square1, x, y, 100, 100)
                        x += 100
                        this.ctx.drawImage(square2, x, y, 100, 100)
                        x += 100                       
                    }
                    if (square1 == dark) {
                        square1 = light
                    }else square1 = dark
                    if (square2 == dark) {
                        square2 = light
                    }else square2 = dark
                    y -= 100
                    x = 0
                }
            })
        })             
    }

    drawPieces() {
        let wRook = new Image()
        wRook.src = "src/assets/SVG No Shadow/w_rook_svg_NoShadow.svg"
        wRook.addEventListener("load", e => {
            this.ctx.drawImage(wRook, 10, 710, 80, 80)
        })
    }
        

}

