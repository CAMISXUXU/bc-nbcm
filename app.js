// Função para criar um cartão com pergunta e resposta
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <div class="cartao__conteudo__pergunta">
                <h3>${categoria}</h3>
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Alterna entre pergunta e resposta ao clicar
    let respostaVisivel = false;
    cartao.addEventListener('click', () => {
        respostaVisivel = !respostaVisivel;
        cartao.classList.toggle('active', respostaVisivel);
    });

    container.appendChild(cartao);
}

// Criando cartões com perguntas e respostas criativas
criaCartao('Curiosidades', 'Qual animal é o mais rápido do mundo?', 'O falcão-peregrino, com velocidade de até 390 km/h!');
criaCartao('Espaço', 'Quantos planetas existem no sistema solar?', 'Oito planetas.');
criaCartao('História', 'Quem pintou a Mona Lisa?', 'Leonardo da Vinci.');
criaCartao('Ciências', 'Qual elemento químico é essencial para a respiração?', 'Oxigênio.');
criaCartao('Cultura Geral', 'Qual é o maior país do mundo em área?', 'A Rússia.');
