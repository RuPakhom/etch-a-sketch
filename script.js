const RAINBOW = "Rainbow mode"
const CLASSIC = "Classic mode"

const container = document.querySelector(".container")
const range = document.querySelector(".range")
const rangeValue = document.querySelector(".range-value")
const changeBtn = document.querySelector(".change")
const clearBtn = document.querySelector(".clear")
const squareColor = document.querySelector(".square-color")
const modeBtn = document.querySelector(".mode")
const modeValue = document.querySelector(".mode-value");
let isDrawing = false
let currentSize = 16

range.addEventListener("input", (e) => {
    rangeValue.value = e.target.value;
})

changeBtn.addEventListener("click", () => {
    clearGrid()
    renderGrid(+rangeValue.value)
})

clearBtn.addEventListener("click", ()=>{
    clearGrid()
    renderGrid(currentSize)
})

modeBtn.addEventListener("click", () => {
    if(modeValue.value === CLASSIC){
        modeValue.value = RAINBOW
    }
    else{
         modeValue.value = CLASSIC
    }
   
})

container.addEventListener("mousedown",(e) => {
    if(e.target.className === "container") return
    isDrawing = true;
    modeValue.value === RAINBOW ? rainbow(e) : classic(e)
    
})

container.addEventListener("mouseup",(e) => {
    if(e.target.className === "container") return
    isDrawing = false;
})

container.addEventListener("mouseover",(e) => {
    if(e.target.className === "container") return
    if(isDrawing){
        modeValue.value === RAINBOW ? rainbow(e) : classic(e)
    }
})

container.addEventListener("mouseleave", (e) => {
    if(e.target.className === "container"){
        isDrawing = false
    }
   
})

function rainbow(e){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b =  Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${r} ${g} ${b})`
}

function classic(e){
    e.target.style.backgroundColor = squareColor.value
}


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
    currentSize = n

}

function clearGrid(){
    container.textContent = ""
}

renderGrid()