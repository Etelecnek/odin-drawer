const container = document.querySelector('.container');


function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('button');
        function color() {
            cell.style.backgroundColor = "red";
        }
        addEventListener('mousedown', function() {
            cell.addEventListener('mousedown', color);
            cell.addEventListener('mouseover', color);
            
        });
        addEventListener('mouseup', function() {
            cell.removeEventListener('mouseover', color);
        });
        container.appendChild(cell).className = "grid-item";
    };
};

makeGrid(16, 16);