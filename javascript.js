let color;
const container = document.querySelector('.container');
const Red = document.querySelector('.Red');
const Blue = document.querySelector('.Blue');
const Green = document.querySelector('.Green');
const Black = document.querySelector('.Black');
const White = document.querySelector('.White');
const Entersize = document.querySelector('.Entersize');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('button');
        function colorin() {
            cell.style.backgroundColor = color;
        }
        addEventListener('mousedown', function() {
            cell.addEventListener('mousedown', colorin);
            cell.addEventListener('mouseover', colorin);
            
        });
        addEventListener('mouseup', function() {
            cell.removeEventListener('mouseover', colorin);
        });
        container.appendChild(cell).className = "grid-item";
    };
};

function colorinRed() {
    color = "#FF0000";
}
function colorinBlue() {
    color = "#0000FF";
}
function colorinGreen() {
    color = "#00FF00";
}
function colorinBlack() {
    color = "#000000";
}
function colorinWhite() {
    color = "#FFFFFF";
}
function EnterWidthHeight () {
    var W = document.getElementById('Width').value;
    var H = document.getElementById('Height').value;
    makeGrid(W, H);
}

Red.addEventListener('click', colorinRed);
Blue.addEventListener('click', colorinBlue);
Green.addEventListener('click', colorinGreen);
Black.addEventListener('click', colorinBlack);
White.addEventListener('click', colorinWhite);
Entersize.addEventListener('click', EnterWidthHeight);