// Função do Carrossel

const backList = [
    "pageImages/imagemIntro1.jpg",
    "pageImages/imagemIntro2.jpg",
    "pageImages/imagemIntro3.jpg"
];

const header = document.querySelector(".info-header");
const dv = header.querySelector("#divText")
const indic = header.querySelector(".divIndic") // indicador de click

let opctBack = 0;
let ope = true;
let background = 0;

header.style.background = `url(${backList[background]}) no-repeat`
header.style.backgroundPosition = "53% 35%";
dv.style.backgroundColor = `rgba(0, 0, 0, .${opctBack})`
header.st
background = 1


// setInterval( () => {
//     if (opctBack >= 1.00){
//         ope = true;
//     }
//     if (opctBack <= 0.00){
//         ope = false;
//     }

//     if (ope){
//         opctBack -= 0.01;
//     } 
//     else if (!ope){
//         opctBack += 0.01;
//     }
//     dv.style.backgroundColor = `rgba(0, 0, 0, ${opctBack})`
// }, 50)

setInterval( () => {
    if (background > (backList.length-1)){
        background = 0
    }
    header.style.background = `url(${backList[background]}) no-repeat`
        
    if (background == 0){
        header.style.backgroundPosition = "53% 35%";
    }

    if (background == 1){
        header.style.backgroundPosition = "35% 30%";
    }

    if (background == 2){
        header.style.backgroundPosition = "30% 50%";
    }
    background++

}, 6000);


setTimeout(() => {
    indic.classList.add("indic")
}, 3000)

header.addEventListener("click", () => {
    header.classList.toggle("closed-introHeader");
    header.classList.toggle("open-introHeader");
    indic.classList.remove("indic")
})