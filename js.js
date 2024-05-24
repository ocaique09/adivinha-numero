let numeroSecreto = parseInt(Math.random() * 100);
let numtentativas = 0;

 function geranumero() {
    numeroSecreto = parseInt(Math.random() * 100);
    numtentativas = 0;
    document.getElementById('t').innerHTML = "Tentativas: " +numtentativas;
    document.getElementById('x').value = "";
    document.getElementById('x').focus();
} 

function testejogo() {
    
    let chute = document.getElementById('x').value;
    if (numeroSecreto < chute) {
        alert('Você digitou um número maior!');
        numtentativas++;
        document.getElementById('t').innerHTML = "Tentativas: " + numtentativas;
    }
    else if (numeroSecreto > chute) {
        alert('Você digitou um número menor!');
        numtentativas++;
        document.getElementById('t').innerHTML = "Tentativas: " + numtentativas;
    }
    else if (numeroSecreto == chute) {
        alert('Você acertou!\nJogue denovo\nUm novo número secreto foi gerado');
        numeroSecreto = parseInt(Math.random() * 100);
        document.getElementById('x').value = "";
        document.getElementById('t').innerHTML = "";
        numtentativas = 0;
    } 
    document.getElementById('x').focus();
}

