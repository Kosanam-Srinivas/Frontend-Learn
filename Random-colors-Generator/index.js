const conatainerE1 = document.querySelector(".container");


for (let index = 0; index < 52; index++) {
    const colorContainerE1 = document.createElement("div")

    colorContainerE1.classList.add("color-container");
    conatainerE1.appendChild(colorContainerE1);
    
}

const colorContainersall = document.querySelectorAll(".color-container");
colorGeneratos()
function colorGeneratos(){
    colorContainersall.forEach((colorContainerE1)=>{
        const newColorcode = randomColor();
        colorContainerE1.style.backgroundColor = "#" + newColorcode;
        colorContainerE1.innerText = "#" + newColorcode;
    })
}

function randomColor(){
    const chars = "0123456789abcdef"
    const colorcodeLength = 6;
    let colorCode = ""
    for (let index = 0; index < colorcodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);        
    }
    return colorCode;
}