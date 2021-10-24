const game = new PlayChess()
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
    game.drawPieces()
}

function handleBoardClick(e) {
    game.determineSquareClicked(e)
    console.log("X: " + (e.clientX - gameBoard.getBoundingClientRect().x) + " Y: " + e.clientY)
    console.log(gameBoard.getBoundingClientRect())
    console.log(gameBoard.offsetLeft)
}

game.drawBoard()
game.drawPieces()