const container = document.querySelector('.container');


function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('button');
        cell.addEventListener('mousedown', function() {
            this.style.backgroundColor = "red";
        });
        container.appendChild(cell).className = "grid-item";
    };
};

//Create Function on Mouse Down enable Hover Button Change Colors
//Create Function on Mouse Up disable Hover Button to change colors

makeGrid(16, 16);