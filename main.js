let size = 16;

createDiv(size);
updateGrid()

// Creates div for grid
function createDiv(size) {
    const container = document.querySelector(".container");
    container.innerHTML = " ";
    let gridSize = size * size;
    for (let i= 0; i< gridSize; i++) {
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
    changeDivColor();
}
function changeDivColor() {
    // Iterates of all divs and add eventlistener for mouseover
    const divs = document.querySelectorAll(".container div");
    divs.forEach(div => {
        div.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "blue";
        })
    })
}

function updateGrid() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        let newSize = Number(prompt("Type the number of squares pr. side"));
        createDiv(newSize);
    })
    
}


