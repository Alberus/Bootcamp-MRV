
var elemento = document.getElementById("numAtual");
var numAtual = 0;

function decrement(){
    numAtual = numAtual - 1;
    elemento.innerHTML = numAtual
}

function somar(){
    numAtual = numAtual + 1;
    elemento.innerHTML = numAtual
}
