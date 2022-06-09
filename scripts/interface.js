// evento ao documento ser carregado
document.addEventListener('DOMContentLoaded', () => {

    // pega todos os "squares" para trata o clique (cqual foi clicado)
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target; // elemento que foi clicado
    let position = square.id; // pego id (chamando de "position")

    if (handleMove(position)) {
        
        setTimeout(() => {
            alert("O jogo acabou -  O vencedor foi " + playerTime)
        }, 10);

    }
    updateSquares(position);
}

function updateSquares(position) {
    let squares = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class= '${symbol}'></div>`
}


// function restart game 
function updateSquares() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        // ser não for vazio coloca o symbol
        if (symbol != '') {
            square.innerHTML = `<div class= '${symbol}'></div>`
        }
    })
}

let btn = document.querySelectorAll(".btn")[0]
btn.addEventListener("click", restart)
 function restart () {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.innerHTML = ``
    })
    handleMove()
    board = ['', '', '', '', '', '', '', '', '']
    isWin()
    gameOver = false
    playerTime = 0
}