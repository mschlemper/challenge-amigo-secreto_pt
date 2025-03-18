//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById('amigo');
  let nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome válido.');
    return;
  }

  if (!amigos.includes(nome)) {
    amigos.push(nome);
    atualizarLista();
    input.value = '';
  } else {
    alert('Esse nome já foi adicionado!');
  }
}

function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach((nome) => {
    let li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  let resultadoLista = document.getElementById('resultado');
  resultadoLista.innerHTML = '';

  if (amigos.length < 2) {
    let aviso = document.createElement('li');
    aviso.textContent = 'Adicione pelo menos dois nomes!';
    resultadoLista.appendChild(aviso);
    return;
  }

  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.createElement('li');
  resultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;
  resultadoLista.appendChild(resultado);
}