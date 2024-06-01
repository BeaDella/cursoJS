 function comprar() {

    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let quantidadeIngresso = parseInt(document.getElementById(`qtd-${ingresso}`).textContent);

    let mensagem;
    if (ingresso == 'pista') {
        mensagem = `Quantidade indisponível para o ingresso do tipo ${ingresso}!`;
    }
    else {
        mensagem = `Quantidade indisponível para o ingresso do tipo cadeira ${ingresso}!`;
    }


    if (quantidade > quantidadeIngresso) {
        alert(mensagem);
        limparQuantidade();
    }
    else if (quantidade <= 0) { 
        alert('A quantidade informada não é válida!');
        limparQuantidade();
    }
    else {
        alert('Compra realizada com sucesso!');
        quantidadeIngresso -= quantidade;
        document.getElementById(`qtd-${ingresso}`).textContent = `${quantidadeIngresso}`;
        limparQuantidade();
    }
 }

 function limparQuantidade() {
    document.getElementById('qtd').value = '';
 }