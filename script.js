let container = document.querySelector('.container')

function createGrid(x) {
    for (let i = 0; i < x; i++){
        let column = document.createElement('div')
        column.className = 'column'
        for (let j = 0; j < x; j++){
            let row = document.createElement('div')
            row.className = 'row'
            column.appendChild(row)
        }
    container.appendChild(column)
    }
}

let squares = document.querySelectorAll('.row')


console.log(createGrid(9))