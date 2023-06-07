let container = document.getElementById('container')
let sizebtn = document.querySelector('.gridsize')

function createGrid(x) {
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`

    let numDivs = x * x

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement('div')
        div.classList = "cell"
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black'
        })
        container.insertAdjacentElement('beforeend', div)
    }
}

function askSize(){
    let input = prompt("What size do you want the grid to be? 64px max!")
    if (input < 1 || input > 64){
        alert("Invalid size! Choose between 1 and 64.")
    } else if (input == ""){
        alert("No input found, please try again")
    } else if (isNaN(input)) {
        alert("Only numbers please")
    }
    return input
}

sizebtn.addEventListener("click", () => {
    createGrid(askSize())
    let cells = document.querySelectorAll(".cell")
    for (let cell of cells){
        console.log(cell.removeAttribute('style'))
    }
})

createGrid(16)