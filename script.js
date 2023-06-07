let container = document.getElementById('container')

function createGrid(x) {
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`

    let numDivs = x * x

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement('div')
        container.insertAdjacentElement('beforeend', div)
    }
}

let paint = (e) => {
    e.target.style.backgroundColor = 'black'
}

console.log(createGrid(20))