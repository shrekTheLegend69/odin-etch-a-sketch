// Create 16 divs nesting another 16 divs
const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    container.appendChild(rowDiv);
        for (let j = 0; j < 16; j++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid');
        rowDiv.appendChild(gridDiv); 
        }
}

// Turn all grid divs black on mouseover
let pixels = document.querySelectorAll('.grid');

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function(e) {
        console.log('works');
        pixel.style.backgroundColor = "black";
    })
});

// Change grid to X by X size (X is decided by user input)
const gridButton = document.querySelector('.gridSize');

gridButton.addEventListener('click', function(e) {
    let size = prompt("Please enter the new grid size (maximum 100):");
    buildGrid(size);
});

function buildGrid(size) {
    removeElements('row');
    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        container.appendChild(rowDiv);
            for (let j = 0; j < size; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('grid');
            rowDiv.appendChild(gridDiv); 
            }
    }
    pixels = document.querySelectorAll('.grid');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', function(e) {
            console.log('works');
            pixel.style.backgroundColor = "black";
        })
    });
}

function removeElements(name) {
    const elements = document.querySelectorAll('.'+ name);
    elements.forEach(element => element.remove());
}