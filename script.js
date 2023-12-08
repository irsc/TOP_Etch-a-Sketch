

function createGrid(range){
    let i = 0;
    const body = document.querySelector("body");
    const refDiv = document.querySelector("div");
    
    if(!document.getElementById("container")){
        refDiv.after(document.createElement("div"));
        let container = document.querySelector("div").nextSibling;
        container.id = "container";
        container.className = "float";
    }
    
    let width = container.offsetWidth;

    let size = width / range;
    while (i < range*range) {
        let div =  document.createElement("div");
        div.style.width = size + "px";
        div.style.height = size + "px";
        container.appendChild(div);
        i++;
    }

    container.addEventListener("mouseover",(e)=>{
        e.target.style.background = 'black';
        
    });
}

function newSketch(){
    let number = Number(prompt("Enter the size for the grid","16"));

    const divContainer = document.getElementById("container");
    divContainer.style.background = "white";
    while (divContainer.firstChild) {
            divContainer.removeChild(divContainer.firstChild);
    }
    if(number > 100){
        number = 100;
        alert("The maximum grid is 100 x 100. Grid adjusted!")
    }else if(number < 2){
        number = 2;
        alert("The minimum grid is 2 x 2. Grid adjusted!")
    }
    createGrid(number);
}
const btn = document.getElementById("refresh");
btn.addEventListener("click",newSketch);

createGrid(16);