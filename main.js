const sketchContainer = document.querySelector("#sketchContainer");
const size = document.querySelector("#size");
const dimension = document.querySelector("#dimension")
const createBtn = document.querySelector("#create");

createBtn.addEventListener("click", () => {
    deleteSketch();
    createSketch(parseInt(dimension.value), parseInt(size.value));
});

sketchContainer.addEventListener("mouseover", appendHoverMagic);

function createSketch(dimension, size){

    let divStyle = `border: 1px solid lightgrey; 
                width: ${size/dimension}px; 
                height: ${size/dimension}px;`;

    let containerStyle = `width: ${size}px; height: ${size}px;`;

    sketchContainer.setAttribute("style", containerStyle);

    for(let i = 0; i < dimension; i++){
        for(let j = 0; j < dimension; j++){
            let div = document.createElement("div");
            div.style.cssText += divStyle;
            sketchContainer.appendChild(div);
        }
    }
}

function appendHoverMagic(event){
    let randomRGB = `rgb(
        ${parseInt(Math.random()*255)},
        ${parseInt(Math.random()*255)},
        ${parseInt(Math.random()*255)},
        0.1)`;

    let closestDiv = event.target.closest("div");

    if(closestDiv.style.backgroundColor == "") {
        closestDiv.style.backgroundColor = randomRGB;
    }
    else{
        bgColor = closestDiv.style.backgroundColor;
        let actOpacity = parseFloat(bgColor.split(",")[3]);
        if (actOpacity + 0.1 <= 1) closestDiv.style.backgroundColor = bgColor.replace(actOpacity, actOpacity+0.1); 
    }
}

function deleteSketch(){
    let allDivs = Array.from(sketchContainer.querySelectorAll("div"));
    allDivs.map((item) => item.remove());
}