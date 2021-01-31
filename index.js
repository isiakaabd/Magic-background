const BoxContainer = document.getElementById("boxes");
const btn =document.getElementById("btn");

// on click function for the button
btn.addEventListener("click",()=>BoxContainer.classList.toggle("big"))

function createboxes (){
    for (let i=0; i < 4; i++){
        for ( let j = 0; j < 4; j++){
             const box = document.createElement("div");
             box.classList.add("singlebox")
             box.style.backgroundPosition = `${-j*125}px ${-i*125}px`
            BoxContainer.appendChild(box)
    }
}
}


createboxes()