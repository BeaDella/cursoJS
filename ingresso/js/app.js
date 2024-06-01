 function comprar() {

    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let quantidadeIngresso = parseInt(document.getElementById(`qtd-${ingresso}`).textContent);
    let mensagem;

    if (ingresso == 'pista') {
        mensagem = `Quantidade indisponível para o ingresso do tipo ${ingresso}!`;
    } else {
        mensagem = `Quantidade indisponível para o ingresso do tipo cadeira ${ingresso}!`;
    }

    if (quantidade > quantidadeIngresso) {
        alert(mensagem);
        document.getElementById('qtd').value = '';
    }
    else {
        quantidadeIngresso -= quantidade;
        document.getElementById(`qtd-${ingresso}`).textContent = `${quantidadeIngresso}`;
        document.getElementById('qtd').value = '';
    }
 }