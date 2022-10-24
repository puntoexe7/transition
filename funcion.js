let boxOne = document.getElementById("cajaUno")
let boxTwo= document.getElementById("cajaDos")
let boxThree = document.getElementById("cajaTres")
let boxFour = document.getElementById("cajaCuatro")

let back = document.getElementById("back");
let next = document.getElementById("next");

boxTwo.style.display ="none";
boxThree.style.display ="none";
boxFour.style.display = "none";
back.style.display ="none";

let acumPos = 1;

function siguiente(){
    if(acumPos == 1){
        boxOne.style.display = "none";
        boxTwo.style.display = "flex";
        back.style.display ="block"
        acumPos = 2;
    }else if(acumPos == 2){
        boxTwo.style.display = "none";
        boxThree.style.display = "flex";
        acumPos = 3;
    }else if(acumPos == 3){
        boxThree.style.display = "none";
        boxFour.style.display = "flex";
        next.style.display = "none";
        acumPos=4;
    }
}
function atras(){
    if(acumPos == 2){
        boxTwo.style.display = "none";
        boxOne.style.display = "flex";
        acumPos = 1;
        back.style.display ="none";
    }else if(acumPos == 3){
        boxThree.style.display = "none";
        boxTwo.style.display = "flex";
        next.style.display = "block";
        acumPos = 2;
    }
    else if(acumPos == 4){
        boxFour.style.display = "none";
        boxThree.style.display = "flex";
        next.style.display = "block";
        acumPos = 3;
    }
}
function reiniciar(){
    location.reload()
}