let lista = [];
let listaNomes = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');

function adicionar() {

    let nomeAmigo = document.getElementById('nome-amigo').value;

    if (nomeAmigo == '') {
        return;
    }
    
    if (lista.includes(nomeAmigo)) {
        alert('Esse nome já foi incluído no sorteio!\nDigite outro ou adicione um sobrenome.');
    } else {
        lista.push(nomeAmigo);
        if (listaNomes.textContent == '') {
            listaNomes.textContent = nomeAmigo;
        } else {
            listaNomes.textContent = listaNomes.textContent + ', ' + nomeAmigo;
        }
    }

    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    
    // reseta o sorteio caso o botão já tenha sido clicado
    listaSorteio.innerHTML = '';
    
    if (lista.length < 3) {
        alert('O sorteio só pode ser realizado com 3 ou mais pessoas!');
        return;
    }

    embaralhar(lista);

    // atribui um nome da lista ao próximo e assim por diante
    for (let i = 0; i < lista.length; i++) {

        // if para atribuir o último da lista ao primeiro
        if (i == lista.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + `${lista[i]} => ${lista[0]}`;
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + `${lista[i]} => ${lista[i + 1]}` + '<br>';
        }
    }
}

function reiniciar() {
    lista = [];
    listaNomes.textContent = '';
    listaSorteio.innerHTML = '';
}

// Fisher-Yates shuffle
function embaralhar(array) {

    for (let i = array.length - 1; i; i--) {

        let j = Math.floor(Math.random() * i);
        
        //atribuição via destructuring
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}