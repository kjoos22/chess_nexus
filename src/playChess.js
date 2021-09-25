class playChess {
    
    constructor() {
        this.canvas = document.getElementById("gameBoard")
        this.ctx = this.canvas.getContext("2d")

        
        this.boardCoords = [
            'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8',
            'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8',
            'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8',
            'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8',
            'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8',
            'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8',
            'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'
        ]
        this.squares = {
            a1: {x: 0, y: 700, color: "dark"},
            a2: {x: 0, y: 600, color: "light"},
            a3: {x: 0, y: 500, color: "dark"},
            a4: {x: 0, y: 400, color: "light"},
            a5: {x: 0, y: 300, color: "dark"},
            a6: {x: 0, y: 200, color: "light"},
            a7: {x: 0, y: 100, color: "dark"},
            a8: {x: 0, y: 0, color: "light"}
        }
    }

    drawBoard() {
        const light = new Image()
        const dark = new Image()
        light.src = "src/assets/board squares/square brown light.svg"
        dark.src = "src/assets/board squares/square brown dark.svg"
        light.addEventListener('load', e =>  {
            dark.addEventListener('load', e => {
                //this.ctx.drawImage(light, this.boardCoords.a1.x, this.boardCoords.a1.y, 100, 100)
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
        

}

