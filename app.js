//o usúario tem que adivinhar o numero secreto
alert("Bem vindo ao jogo do número secreto"); //mostra mensagem de boas-vindas
let numeroMaximo = 5000;
let numeroSecreto = parseInt (Math.random () * numeroMaximo +1); //valor do numero secreto
console.log(numeroSecreto);
let chute; //perdir para escolher um numero, poder inserir um valor e armazena-lo na variavel chute
let tentativas = 1;
//Enquanto não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
//Se o chute for igual ao numero secreto
if (numeroSecreto == chute) {
    break;
    } else{
        if (numeroSecreto > chute) {
            alert (`O número secreto é maior que ${chute}`);
        } else {
            alert (`O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}
let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);

