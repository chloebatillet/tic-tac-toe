const gameboard = document.getElementById('gameboard');
const message = document.getElementById('message');

let cellArray = [
    "", "", "", "", "", "", "", "", ""
];

let start = "circle";

message.textContent= `${start}'s turn`;



cellArray.forEach((e, index) => {
    const cell = document.createElement('div');
    cell.id = index;
    cell.classList.add('cell');
    cell.addEventListener('click', handleClick);
    document.querySelector('#gameboard').append(cell);
});


function handleClick(e) {
    const go = document.createElement('div');
    go.classList.add(start);
    e.target.append(go);
    e.target.removeEventListener('click', handleClick);

    

    // A raccourcir sous la forme "?"
    if (start === "circle") {
        start = "cross";
    } else {
        start = "circle";
    }
    message.textContent= `${start}'s turn`;

    findMatch();

}

const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function findMatch() {
    const allCells = document.querySelectorAll('.cell');

    winningCombos.forEach(array => {
        
        // Testing circle
        const circleMatch = array.every(checkCircle);
        function checkCircle (element) {
            return allCells[element].firstChild?.classList.contains('circle');
        }

        if (circleMatch) {
            message.classList.add('winner--circle');
            message.textContent ='Circle wins 🎉';
            allCells.forEach(cell => cell.removeEventListener('click', handleClick));
        }

        // Testing cross
        const crossMatch = array.every(checkCross);
        function checkCross (element) {
            return allCells[element].firstChild?.classList.contains('cross');
        }

        if (crossMatch) {
            message.classList.add('winner--cross');
            message.textContent ='Cross wins 🎉';
            allCells.forEach(cell => cell.removeEventListener('click', handleClick));
        }

    })
      

};