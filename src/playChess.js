class PlayChess {
    
    constructor() {
        this.canvas = document.getElementById("gameBoard")
        this.ctx = this.canvas.getContext("2d")
        this.lightSquare = "src/assets/board squares/square gray light.svg"
        this.darkSquare = "src/assets/board squares/square gray dark.svg"
        
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

        let wKing = new Image()
        wKing.src = "src/assets/pieces/w_king.svg"
        wKing.addEventListener("load", e => {
            this.ctx.drawImage(wKing, 410, 710, 80, 80)
        })

        let wPawn = new Image()
        wPawn.src = "src/assets/pieces/w_pawn.svg"
        wPawn.addEventListener("load", e => {
            this.ctx.drawImage(wPawn, 10, 610, 80, 80)
            this.ctx.drawImage(wPawn, 110, 610, 80, 80)
            this.ctx.drawImage(wPawn, 210, 610, 80, 80)
            this.ctx.drawImage(wPawn, 310, 610, 80, 80)
            this.ctx.drawImage(wPawn, 410, 610, 80, 80)
            this.ctx.drawImage(wPawn, 510, 610, 80, 80)
            this.ctx.drawImage(wPawn, 610, 610, 80, 80)
            this.ctx.drawImage(wPawn, 710, 610, 80, 80)
        })

        let bRook = new Image()
        bRook.src = "src/assets/pieces/b_rook.svg"
        bRook.addEventListener("load", e => {
            this.ctx.drawImage(bRook, 10, 10, 80, 80)
            this.ctx.drawImage(bRook, 710, 10, 80, 80)
        })

        let bKnight = new Image()
        bKnight.src = "src/assets/pieces/b_knight.svg"
        bKnight.addEventListener("load", e => {
            this.ctx.drawImage(bKnight, 110, 10, 80, 80)
            this.ctx.drawImage(bKnight, 610, 10, 80, 80)
        })

        let bBishop = new Image()
        bBishop.src = "src/assets/pieces/b_bishop.svg"
        bBishop.addEventListener("load", e => {
            this.ctx.drawImage(bBishop, 210, 10, 80, 80)
            this.ctx.drawImage(bBishop, 510, 10, 80, 80)
        })

        let bQueen = new Image()
        bQueen.src = "src/assets/pieces/b_queen.svg"
        bQueen.addEventListener("load", e => {
            this.ctx.drawImage(bQueen, 310, 10, 80, 80)
        })

        let bKing = new Image()
        bKing.src = "src/assets/pieces/b_king.svg"
        bKing.addEventListener("load", e => {
            this.ctx.drawImage(bKing, 410, 10, 80, 80)
        })

        let bPawn = new Image()
        bPawn.src = "src/assets/pieces/b_pawn.svg"
        bPawn.addEventListener("load", e => {
            this.ctx.drawImage(bPawn, 10, 110, 80, 80)
            this.ctx.drawImage(bPawn, 110, 110, 80, 80)
            this.ctx.drawImage(bPawn, 210, 110, 80, 80)
            this.ctx.drawImage(bPawn, 310, 110, 80, 80)
            this.ctx.drawImage(bPawn, 410, 110, 80, 80)
            this.ctx.drawImage(bPawn, 510, 110, 80, 80)
            this.ctx.drawImage(bPawn, 610, 110, 80, 80)
            this.ctx.drawImage(bPawn, 710, 110, 80, 80)
        })

    }

    determineSquareClicked(e) {     
        console.log(this.determineColumnClicked(e) + this.determineRowClicked(e))    
    }

    determineColumnClicked(e) {
        //subtract 28 for padding and offset (X)
        if(e.clientX-28 <= 100)
            return "A"
        else if(e.clientX-28 <= 200)
            return "B"
        else if(e.clientX-28 <= 300)
            return "C"
        else if(e.clientX-28 <= 400)
            return "D"
        else if(e.clientX-28 <= 500)
            return "E"
        else if(e.clientX-28 <= 600)
            return "F"
        else if(e.clientX-28 <= 700)
            return "G"
        else
            return "F"
    }

    determineRowClicked(e) {
        //subtract 27.203125 for offset (Y)
        if(e.clientY - 27.203125 >= 700)
            return "1"
        else if(e.clientY - 27.203125 >= 600)
            return "2"
        else if(e.clientY - 27.203125 >= 500)
            return "3"
        else if(e.clientY - 27.203125 >= 400)
            return "4"
        else if(e.clientY - 27.203125 >= 300)
            return "5"
        else if(e.clientY - 27.203125 >= 200)
            return "6"
        else if(e.clientY - 27.203125 >= 200)
            return "7"
        else
            return "8"
    }
        

}

