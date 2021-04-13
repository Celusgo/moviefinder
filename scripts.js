let opcoes=[];
const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes');
promessa.then(resposta);

const catalogo = document.querySelector(".movies");

function resposta(retorno){
    opcoes = retorno.data;
    for(let i=0; i < opcoes.length; i++){
        catalogo.innerHTML += `
        <div class="movie">
        <img src=${opcoes[i].imagem}>
        <div class="title">${opcoes[i].titulo}</div>
        <button onclick='insira(${response.data[i].id})'>
          Comprar
          <ion-icon name="cart-outline"></ion-icon>
        </button>
      </div>
        `
    }
}

function insira(clicado){
    const nomeClicado = clicado;
    const nomePessoa = prompt("Insira aqui seu nome: ");
    const assentos = prompt("Insira aqui a quantidade de assentos: ");
    const dados = {nome: nomePessoa, quantidade: parseInt(assentos)};
    const compra = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${nomeClicado}/ingresso`, dados);
    compra.then(sucesso);
    compra.catch(erro);
}


function sucesso(){
    alert("Ingresso comprado com sucesso!")
}

function erro(){
    alert("Os ingressos estão esgotados!")
}

