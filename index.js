/*
OBJETIVO - Quando clicar em um botão, tem que mostrar a imagem de fundo correspondete
- passo 1 - dar um jeito de pegar o elemento HTML dos botões
- passo 2 - dar um jeito de identificar o clique do usuário
- passo 3 - desmarcar o botão selecionado anterior
- passo 4 - marcar o botão clicado como se tivesse selecionado
- passo 5 - esconder a imagem anteriormente selecionada
- passo 6 - fazer aparecer a imagem correspondente
- passo 7 - esconder a informação do dragão anteriormente selecionado
- passo 8 - mostrar a informação do dragão referente ao botão clicado */

//passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem'); // Correção: declaração de 'imagens'
const informacoes = document.querySelectorAll('.informacoes'); // Correção: declaração de 'informacoes'

//passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //passo 3
        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado");

        //passo 4
        botao.classList.add("selecionado");

        const imagemAtiva = document.querySelector(".imagem.ativa"); // Correção: usar a classe correta '.imagem.ativa'

        //passo 5
        imagemAtiva.classList.remove("ativa");

        imagens[indice].classList.add("ativa"); // Correção: usar 'imagens' ao invés de 'imagem'

        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");

        informacoes[indice].classList.add("ativa");
    });
});