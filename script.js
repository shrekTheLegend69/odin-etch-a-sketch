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
const pixels = document.querySelectorAll('.grid');

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function(e) {
        pixel.style.backgroundColor = "black";
    })
});

