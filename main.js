function createDiv() {
    for (let i= 0; i< 256; i++) {
        const newDiv = document.createElement("div");
        const div = document.querySelector(".container");
        div.appendChild(newDiv);
    }
    console.log("Div created");
}

createDiv();