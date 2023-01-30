
// find the container div
const container = document.querySelector("#container");

function sizePrompt(){ 
    const returnSize = prompt("Enter size: ");
    return returnSize;
}


function addHoverClass(e) {
    e.target.classList.add("hovered");
}

function removeHoverClass(e){
    e.target.classList.remove("hovered");
}

function deleteBoxes() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function grid(size) {
    deleteBoxes();
    for (let a = 0; a < size; a++){
        const newCol = document.createElement('div'); 
        container.appendChild(newCol);
        newCol.setAttribute('id', `rowbox`);
        for (let i = 0; i < size; i++){
            const newRow = document.createElement(`div`);
            newCol.appendChild(newRow);
            newRow.setAttribute("class", `colbox`);
        }
    }
    const squares = container.querySelectorAll("div#rowbox > div");
    console.log(squares.length);
    squares.forEach(square => {
        square.addEventListener("mouseenter", addHoverClass)
    //square.addEventListener("mouseleave", removeHoverClass)
    });  
}


// button function to let user enter grid size and pass it as a function to grid generating function
function newGrid() {
    let gridSize = sizePrompt();
    if (gridSize > 100){
        gridSize = sizePrompt();
    }
    grid(gridSize);
}

//set initial grid
grid(16);


//select divs within each
const divs = container.querySelectorAll("div");
console.log(divs.length);



// select divs and add event listeners for all of them
const squares = container.querySelectorAll("div#rowbox > div");
console.log(squares.length);
squares.forEach(square => {
    square.addEventListener("mouseenter", addHoverClass)
    //square.addEventListener("mouseleave", removeHoverClass)
});
