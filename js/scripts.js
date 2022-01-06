
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

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor){
        if (valor <= this.saldo) {
            return "Operação negada. Não há saldo suficiente. Vá trabalhar..."
        }
        this.saldo = this.saldo - valor;
        return `Seu saldo atual é ${this.saldo}`
    }

    depositar(valor) {
        this.saldo = this.saldo + valor;
        return `Seu saldo atual é ${this.saldo}` 
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cardCredito) {
        super(agencia, numero);
        this.tipo = `Conta Corrente`;
        this._cardCredito = cardCredito;
    }

    get cardCredito() {
        return this._cardCredito;
    }

    set cardCredito(valor) {
        this._cardCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, saldo);
        this.tipo = `Conta Poupança`;
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = `Conta Universitária`;
    }

    sacar(valor) {
        if (valor > 500) {
            return `A operação não pode ser realizada`;
        } else if (valor > this.saldo) {
            return `Saldo insuficiente`;
        }
        else {
            this.saldo = this.saldo - valor;
            return `Seu saldo atual é ${this.saldo}` 
        }
    }
}