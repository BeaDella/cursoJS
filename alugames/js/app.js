function alterarStatus(numeroJogo) {

    let jogo = document.getElementById(`game-${numeroJogo}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {

        let confirmacao = prompt(`Tem certeza que deseja devolver ${nomeJogo.textContent}? (S/N)`);
        if (confirmacao == 'S' || confirmacao == 's') {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
        else {
            return;
        }
    }
    else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}