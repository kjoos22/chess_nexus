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
        //subtract 28 for padding and offset (X), 27.203125 for offset (Y)
        //refactor into determine X then Y for efficiency 
        if(e.clientX-28 <= 100 && e.clientY - 27.203125 >= 700) {
            console.log("A1")
        }else if (e.clientX-28 <= 100 && e.clientY - 27.203125 >= 600) {
            console.log("A2")
        }else if (e.clientX-28 <= 100 && e.clientY - 27.203125 >= 500) {
            console.log("A3")
        }else if (e.clientX-28 <= 100 && e.clientY - 27.203125 >= 400) {
            console.log("A4")
        }else if (e.clientX-28 <= 100 && e.clientY - 27.203125 >= 300) {
            console.log("A5")
        }else if (e.clientX-28 <= 100 && e.clientY - 27.203125 >= 200) {
            console.log("A6")
        }else if (e.clientX-28 <= 100 && e.clientY - 27.203125 >= 100) {
            console.log("A7")
        }else if (e.clientX-28 <= 100) {
            console.log("A8")
        }else if (e.clientX-28 <= 200 && e.clientY - 27.203125 >= 700) {
            console.log("B1")
        }else if (e.clientX-28 <= 200 && e.clientY - 27.203125 >= 600) {
            console.log("B2")
        }else if (e.clientX-28 <= 200 && e.clientY - 27.203125 >= 500) {
            console.log("B3")
        }else if (e.clientX-28 <= 200 && e.clientY - 27.203125 >= 400) {
            console.log("B4")
        }else if (e.clientX-28 <= 200 && e.clientY - 27.203125 >= 300) {
            console.log("B5")
        }else if (e.clientX-28 <= 200 && e.clientY - 27.203125 >= 200) {
            console.log("B6")
        }else if (e.clientX-28 <= 200 && e.clientY - 27.203125 >= 100) {
            console.log("B7")
        }else if (e.clientX-28 <= 200) {
            console.log("B8")
        }else if (e.clientX-28 <= 300 && e.clientY - 27.203125 >= 700) {
            console.log("C1")
        }else if (e.clientX-28 <= 300 && e.clientY - 27.203125 >= 600) {
            console.log("C2")
        }else if (e.clientX-28 <= 300 && e.clientY - 27.203125 >= 500) {
            console.log("C3")
        }else if (e.clientX-28 <= 300 && e.clientY - 27.203125 >= 400) {
            console.log("C4")
        }else if (e.clientX-28 <= 300 && e.clientY - 27.203125 >= 300) {
            console.log("C5")
        }else if (e.clientX-28 <= 300 && e.clientY - 27.203125 >= 200) {
            console.log("C6")
        }else if (e.clientX-28 <= 300 && e.clientY - 27.203125 >= 100) {
            console.log("C7")
        }else if (e.clientX-28 <= 300) {
            console.log("C8")
        }else if (e.clientX-28 <= 400 && e.clientY - 27.203125 >= 700) {
            console.log("D1")
        }else if (e.clientX-28 <= 400 && e.clientY - 27.203125 >= 600) {
            console.log("D2")
        }else if (e.clientX-28 <= 400 && e.clientY - 27.203125 >= 500) {
            console.log("D3")
        }else if (e.clientX-28 <= 400 && e.clientY - 27.203125 >= 400) {
            console.log("D4")
        }else if (e.clientX-28 <= 400 && e.clientY - 27.203125 >= 300) {
            console.log("D5")
        }else if (e.clientX-28 <= 400 && e.clientY - 27.203125 >= 200) {
            console.log("D6")
        }else if (e.clientX-28 <= 400 && e.clientY - 27.203125 >= 100) {
            console.log("D7")
        }else if (e.clientX-28 <= 400) {
            console.log("D8")
        }else if (e.clientX-28 <= 500 && e.clientY - 27.203125 >= 700) {
            console.log("E1")
        }else if (e.clientX-28 <= 500 && e.clientY - 27.203125 >= 600) {
            console.log("E2")
        }else if (e.clientX-28 <= 500 && e.clientY - 27.203125 >= 500) {
            console.log("E3")
        }else if (e.clientX-28 <= 500 && e.clientY - 27.203125 >= 400) {
            console.log("E4")
        }else if (e.clientX-28 <= 500 && e.clientY - 27.203125 >= 300) {
            console.log("E5")
        }else if (e.clientX-28 <= 500 && e.clientY - 27.203125 >= 200) {
            console.log("E6")
        }else if (e.clientX-28 <= 500 && e.clientY - 27.203125 >= 100) {
            console.log("E7")
        }else if (e.clientX-28 <= 500) {
            console.log("E8")
        }else if (e.clientX-28 <= 600 && e.clientY - 27.203125 >= 700) {
            console.log("F1")
        }else if (e.clientX-28 <= 600 && e.clientY - 27.203125 >= 600) {
            console.log("F2")
        }else if (e.clientX-28 <= 600 && e.clientY - 27.203125 >= 500) {
            console.log("F3")
        }else if (e.clientX-28 <= 600 && e.clientY - 27.203125 >= 400) {
            console.log("F4")
        }else if (e.clientX-28 <= 600 && e.clientY - 27.203125 >= 300) {
            console.log("F5")
        }else if (e.clientX-28 <= 600 && e.clientY - 27.203125 >= 200) {
            console.log("F6")
        }else if (e.clientX-28 <= 600 && e.clientY - 27.203125 >= 100) {
            console.log("F7")
        }else if (e.clientX-28 <= 600) {
            console.log("F8")
        }else if (e.clientX-28 <= 700 && e.clientY - 27.203125 >= 700) {
            console.log("G1")
        }else if (e.clientX-28 <= 700 && e.clientY - 27.203125 >= 600) {
            console.log("G2")
        }else if (e.clientX-28 <= 700 && e.clientY - 27.203125 >= 500) {
            console.log("G3")
        }else if (e.clientX-28 <= 700 && e.clientY - 27.203125 >= 400) {
            console.log("G4")
        }else if (e.clientX-28 <= 700 && e.clientY - 27.203125 >= 300) {
            console.log("G5")
        }else if (e.clientX-28 <= 700 && e.clientY - 27.203125 >= 200) {
            console.log("G6")
        }else if (e.clientX-28 <= 700 && e.clientY - 27.203125 >= 100) {
            console.log("G7")
        }else if (e.clientX-28 <= 700) {
            console.log("G8")
        }else if (e.clientX-28 <= 800 && e.clientY - 27.203125 >= 700) {
            console.log("H1")
        }else if (e.clientX-28 <= 800 && e.clientY - 27.203125 >= 600) {
            console.log("H2")
        }else if (e.clientX-28 <= 800 && e.clientY - 27.203125 >= 500) {
            console.log("H3")
        }else if (e.clientX-28 <= 800 && e.clientY - 27.203125 >= 400) {
            console.log("H4")
        }else if (e.clientX-28 <= 800 && e.clientY - 27.203125 >= 300) {
            console.log("H5")
        }else if (e.clientX-28 <= 800 && e.clientY - 27.203125 >= 200) {
            console.log("H6")
        }else if (e.clientX-28 <= 800 && e.clientY - 27.203125 >= 100) {
            console.log("H7")
        }else if (e.clientX-28 <= 800) {
            console.log("H8")
        }
        

    }
        

}

