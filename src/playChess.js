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
        wRook.src = "src/assets/pieces/w_rook.svg"
        wRook.addEventListener("load", e => {
            this.ctx.drawImage(wRook, 10, 710, 80, 80)
            this.ctx.drawImage(wRook, 710, 710, 80, 80)
        })

        let wKnight = new Image()
        wKnight.src = "src/assets/pieces/w_knight.svg"
        wKnight.addEventListener("load", e => {
            this.ctx.drawImage(wKnight, 110, 710, 80, 80)
            this.ctx.drawImage(wKnight, 610, 710, 80, 80)
        })

        let wBishop = new Image()
        wBishop.src = "src/assets/pieces/w_bishop.svg"
        wBishop.addEventListener("load", e => {
            this.ctx.drawImage(wBishop, 210, 710, 80, 80)
            this.ctx.drawImage(wBishop, 510, 710, 80, 80)
        })

        let wQueen = new Image()
        wQueen.src = "src/assets/pieces/w_queen.svg"
        wQueen.addEventListener("load", e => {
            this.ctx.drawImage(wQueen, 310, 710, 80, 80)
        })

        let qKing = new Image()
        qKing.src = "src/assets/pieces/w_king.svg"
        qKing.addEventListener("load", e => {
            this.ctx.drawImage(qKing, 410, 710, 80, 80)
        })

    }
        

}

