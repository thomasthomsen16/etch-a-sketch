// Creates div for grid

function createDiv() {
    for (let i= 0; i< 256-1; i++) {
        const newDiv = document.createElement("div");
        const div = document.querySelector(".container");
        div.appendChild(newDiv);
        console.log(document.querySelectorAll(".container div").length)
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

createDiv();
