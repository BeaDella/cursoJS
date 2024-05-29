let carrinho = [];
let itensCarrinho = document.getElementById('lista-produtos');
let resultado = document.getElementById('valor-total');
limpar();

function adicionar() {

    let produtoSelecionado = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade');
    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorProduto = produtoSelecionado.split('R$')[1];
    let total = 0;

    let subtotal = quantidade.value * valorProduto;
    carrinho.push(subtotal);

    itensCarrinho.innerHTML = itensCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">
    R$${valorProduto}</span></section>`;
    
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i];
    }
    resultado.textContent = `R$ ${total}`;
    quantidade.value = '';
}

function limpar() {
    carrinho = [];
    itensCarrinho.innerHTML = '';
    resultado.textContent = 'R$ 0';
}