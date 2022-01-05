
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

const BASE_URL = "https://thatcopy.pw/catapi/rest/"
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');


const getImgs = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    } catch(e) {
        console.log(e.message)
    }

    }

const loadImg = async () => {
    catImg.src = await getImgs();
}

catBtn.addEventListener('click', loadImg)

loadImg()
