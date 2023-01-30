
// find the container div
const container = document.querySelector("#container");



function addHoverClass(e) {
    e.target.classList.add("hovered");
}

function removeHoverClass(e){
    e.target.classList.remove("hovered");
}

/* function reSize(){
    const newSize = Number(prompt("Enter size: "));
    console.log(newSize);
    deleteBoxes();
    for (let i = 0; i < newSize; i++){
        const newDiv = document.createElement(`div`);
        container.appendChild(newDiv);
        newDiv.setAttribute("class", `class${i}`);
        newDiv.setAttribute("value", `${i}`);
    }
    return newSize;
}
*/


// generate 16x16 boxes for inital plot
for (let a = 1; a < 17; a++){
    const newCol = document.createElement('div'); 
    container.appendChild(newCol);
    newCol.setAttribute('id', `rowbox`);
    for (let i = 1; i < 17; i++){
        const newRow = document.createElement(`div`);
        newCol.appendChild(newRow);
        newRow.setAttribute("class", `colbox`);
    }
}

//select divs within each
const divs = container.querySelectorAll("div");
console.log(divs.length);

function deleteBoxes() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


// select divs and add event listeners for all of them
const squares = container.querySelectorAll("div#rowbox > div");
console.log(squares.length);
squares.forEach(square => {
    square.addEventListener("mouseenter", addHoverClass)
    square.addEventListener("mouseleave", removeHoverClass)
});



/*function makeGrid() {
    deleteBoxes();
    const size = prompt("Enter size: ");
    for (let i = 0; i < size; i++){
        const newRow = document.createElement("div"); 
        container.appendChild(newRow);
        newRow.setAttribute('id', `rowbox`);
        for (let x = 0; x < size; x++){
            const newColumn = document.createElement("div");
            newRow.appendChild(newColumn);
            newColumn.setAttribute('id', `colbox`);
        }
    }
}
*/ 