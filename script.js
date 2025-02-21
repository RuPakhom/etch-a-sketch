const container = document.querySelector(".container")
const range = document.querySelector(".range")
const rangeValue = document.querySelector(".range-value")
const changeBtn = document.querySelector(".change")
const clearBtn = document.querySelector(".clear")
const squareColor = document.querySelector(".square-color")
let isDrawing = false

range.addEventListener("input", (e) => {
    rangeValue.value = e.target.value;
})

changeBtn.addEventListener("click", () => {
    clearGrid()
    renderGrid(+rangeValue.value)
})

clearBtn.addEventListener("click", ()=>{
    clearGrid()
    renderGrid(+rangeValue.value)
})

container.addEventListener("mousedown",(e) => {
   
    isDrawing = true;
    e.target.style.backgroundColor = squareColor.value
})

container.addEventListener("mouseup",(e) => {
    isDrawing = false;
})

container.addEventListener("mousemove",(e) => {
    if(isDrawing){
        e.target.style.backgroundColor = squareColor.value
    }
    
})


function renderGrid(n = 16){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            const squareDiv = document.createElement("div")
            squareDiv.className = "square"
            container.appendChild(squareDiv)
            squareDiv.style.width = `${100/n}%`
            squareDiv.style.height = `${100/n}%`
            
        }
    }

}

function clearGrid(){
    container.textContent = ""
}

renderGrid(16)