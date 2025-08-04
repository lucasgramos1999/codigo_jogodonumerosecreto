// CÓDIGO DO JOGO DO NÚMERO SECRETO  
// function = executa alguma tarefa específica com o código criado; só executa uma função se ela for "chamada".

let listaDeNumerosSorteados = []; // cria uma lista de números sorteados;
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio(); // cria uma variável (numeroSecreto) e chamar uma função criada no final do código que gera um número aleatório;
let tentativas = 1; // cria uma variável de tentativas;
exibirMensagemInicial(); // e executa a função para que o código leia a mensagem inicial.

function exibirTextoNaTela(tag, texto) { // função com mais de um parâmetro e que executa uma ação.
    let campo = document.querySelector(tag); //  documentoHTML.seleciona um elemento do código com no parâmetro (tag)
    campo.innerHTML = texto;  //  insere o conteúdo (texto) dentro desse elemento.
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 0.8});
}

function exibirMensagemInicial() {
exibirTextoNaTela("h1", "LucasGame - Jogo do número secreto."); // executa a função passando primeiro o parâmetro (h1), depois o texto
exibirTextoNaTela("p", `Escolha um número entre e 1 e ${numeroLimite}`); // executa a função passando o parâmetro (p) e o texto
}

function verificarChute() {  // função sem parâmetro e sem retorno (usada apenas para conferir o chute)
    let chute = document.querySelector ("input").value; // puxar apenas os números do parâmetro "input" do código HTML .value pega o que o usuário digitou;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1","Parabéns, você acertou o número!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // variável criada para questão ortográfica.
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; // variável criada para questão ortográfica.
        exibirTextoNaTela("p",mensagemTentativas);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);  // : ativa o botão "Novo jogo" ao remover o atributo disabled do código HTML;
    } else {
    
            if(chute > numeroSecreto) {
                exibirTextoNaTela("p", "O número secreto é menor que o seu palpite.");
            } else {
         exibirTextoNaTela ("p" , "o número secreto é maior que o seu palpite."); 
            }
            tentativas ++;
            limparCampo(); // execução da função criada no final do código para limpar o elemento input do código.
        }
    }

    

function gerarNumeroAleatorio() { // função sem parâmetro, mas que traz retorno.
   let numeroEscolhidoPeloIa = parseInt(Math.random() * numeroLimite + 1); // Gera um número inteiro aleatório
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;  // Essa linha conta quantos números já foram sorteados até o momento

if (quantidadeDeElementosNaLista == numeroLimite) { // Verifica se já foram sorteados os 10 números possíveis (de 1 a 10, sem repetição).
   listaDeNumerosSorteados = []; // Se a lista já tiver 10 elementos, ela é esvaziada (redefinida como lista vazia).
}

if (listaDeNumerosSorteados.includes(numeroEscolhidoPeloIa)) { // Verifica se esse número já está presente na lista listaDeNumerosSorteados - impede a repetição
   return gerarNumeroAleatorio(); // Se o número já foi sorteado, chama a função de novo até encontrar um número novo.
} else {
   listaDeNumerosSorteados.push(numeroEscolhidoPeloIa); // Se o número ainda não foi usado, ele é adicionado à lista.
   console.log(listaDeNumerosSorteados);
   return numeroEscolhidoPeloIa; // Retorna o número novo e válido para ser usado no jogo.
}

}

   function limparCampo() {
   let  chute = document.querySelector(`input`); // : seleciona o campo de entrada (<input>).
    chute.value = ""; // limpa o que foi digitado, deixando o campo vazio.
   }
    
   function  reiniciarJogo() {  // Essa função tem como objetivo reiniciar o jogo do número secreto quando o botão "Novo jogo" for clicado.
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto (reinicia o desafio).
    limparCampo(); // Provavelmente limpa o campo de input
    tentativas = 1; // Reinicia a contagem de tentativas.
    exibirMensagemInicial(); // Mostra novamente a mensagem inicial no <h1> e <p>
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true); // Desativa novamente o botão “Novo jogo” até o jogador acertar o número de novo.
   }
   