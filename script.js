

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
    
    let size = container.offsetWidth/ range;
    while (i < range*range) {
        let div =  document.createElement("div");
        div.style.width = size + "px";
        div.style.height = size + "px";
        container.appendChild(div);
        i++;
    }

    container.addEventListener("mouseover",(e)=>{
        let darkening = 10;
        if(!e.target.dataset.hue){
            e.target.dataset.hue = (Math.random() * 360);
            e.target.dataset.light = 90;
        }else{
            if(e.target.dataset.light>= darkening){
                e.target.dataset.light -= darkening;
            } 
        }
        e.target.style.background = randomHsl(e.target.dataset.hue,e.target.dataset.light);
        
        
    });
}

function newSketch(){
    let number = Number(prompt("Enter the number of pixels for the side of the grid","16"));

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
    }else if(isNaN(number)){
        alert("Please enter a valid number");
    }
    createGrid(number);
}

function randomHsl(hue , light) {
    //return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return 'hsla(' + hue + ', 100%,'+light+'%, 1)';
}

const btn = document.getElementById("refresh");
btn.addEventListener("click",newSketch);

createGrid(16);