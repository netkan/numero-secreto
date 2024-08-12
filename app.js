let listasdenumerossorteados = []
let nunmerolimite = 10;
let numerosecreto = gerarnumero();
let tentativa = 0;

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function novojogo(){
    exibirTextonaTela('h1', 'Jogo do Número Secreto');
    exibirTextonaTela('p', 'escolha um número entre 1 e 10');
}

novojogo()

function verificarChute() {

    let chute = document.querySelector('input').value;

    if(chute == numerosecreto){
        exibirTextonaTela('h1', 'Acertou');
        let palavratentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let nometentativa = `Você acertou com ${tentativa} ${palavratentativa}`; 
        exibirTextonaTela('p', nometentativa);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else if(chute > numerosecreto){
        exibirTextonaTela('h1', 'Errou!');
        exibirTextonaTela('p', 'O número secreto é menor do que o colocado');
    }else{
        exibirTextonaTela('h1', 'Errou!')
        exibirTextonaTela('p', 'O número secreto é maior do que o colocado');
        
    }
   tentativa ++
   campo()
}

function campo(){
        let chute = document.querySelector('input')
    chute.value ="";
}

function gerarnumero() {
    let numeroescolhido = parseInt(Math.random() * nunmerolimite + 1);
    let qunatidadedenumeros = listasdenumerossorteados.length;

    if(qunatidadedenumeros == nunmerolimite){
        listasdenumerossorteados = []
    }

    if(listasdenumerossorteados.includes(numeroescolhido)){
        return gerarnumero()
    }else{
        listasdenumerossorteados.push(numeroescolhido)
        return numeroescolhido;
    }
}

function reiniciar(){
    numerosecreto = gerarnumero()
    campo()
    tentativa = 1
    novojogo()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}