const game = new playChess()
const toggleBoardButton = document.getElementById("boardColorToggle")
const gameBoard = document.getElementById("gameBoard")

toggleBoardButton.addEventListener("click", boardColorToggle)
gameBoard.addEventListener("click", handleBoardClick)

function boardColorToggle(e) {
    if (game.darkSquare == "src/assets/board squares/square brown dark.svg") {
        game.darkSquare = "src/assets/board squares/square gray dark.svg" 
    }else game.darkSquare = "src/assets/board squares/square brown dark.svg"
    
    if (game.lightSquare == "src/assets/board squares/square brown light.svg") {
        game.lightSquare = "src/assets/board squares/square gray light.svg" 
    }else game.lightSquare = "src/assets/board squares/square brown light.svg"

    game.drawBoard()
}

function handleBoardClick(e) {
    if(e.clientX <= 100 && e.clientY >= 700) {
       game.drawBoard() 
    }
    
}

game.drawBoard()
game.drawPieces()