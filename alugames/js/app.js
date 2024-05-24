function alterarStatus(numeroJogo) {
    
    if (numeroJogo == 1) {
        let monopoly = document.getElementById('game-1').querySelector('a');

        if (monopoly.classList.contains('dashboard__item__button--return')) {
            monopoly.classList.remove('dashboard__item__button--return');
            monopoly.innerText = 'Alugar';
        }
        else {
            monopoly.classList.add('dashboard__item__button--return');
            monopoly.innerText = 'Devolver';
        }
    }
    else if (numeroJogo == 2) {
        let ticketToRide = document.getElementById('game-2').querySelector('a');

        if (ticketToRide.classList.contains('dashboard__item__button--return')) {
            ticketToRide.classList.remove('dashboard__item__button--return');
            ticketToRide.innerText = 'Alugar';
        }
        else {
            ticketToRide.classList.add('dashboard__item__button--return');
            ticketToRide.innerText = 'Devolver';
        }
    }
    else if (numeroJogo == 3) {
        let takenoko = document.getElementById('game-3').querySelector('a');

        if (takenoko.classList.contains('dashboard__item__button--return')) {
            takenoko.classList.remove('dashboard__item__button--return');
            takenoko.innerText = 'Alugar';
        }
        else {
            takenoko.classList.add('dashboard__item__button--return');
            takenoko.innerText = 'Devolver';
        }
    }
}