// API endpoint --------------------------------------------
const baseUrl = 'https://app-escala-api.herokuapp.com/v1/pessoas';

//https://app-escala-api.herokuapp.com/v1/pessoas/findByName/sergio vinhote

// Get Elements --------------------------------------------
const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.pessoa'),
      erroMessage = getElement('.error');

var pessoaName, // Nome ou numero passado na caixa de busca
    pessoa, // Responsavel por guardar os dados recebidos da API
    card; // Responsavel por receber o HTML 

// Build Functions --------------------------------------------

// Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
  return document.querySelector(element);
}

// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function requestPessoa(url, name) {
  fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pessoa = data;
    })
    .catch(err => console.log(err));
}

console.log(pessoa)

// API endpoint --------------------------------------------
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Get Elements --------------------------------------------
const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.pokemon'),
      erroMessage = getElement('.error');

var pokeName, // Nome ou numero passado na caixa de busca
    pokemon, // Responsavel por guardar os dados recebidos da API
    card; // Responsavel por receber o HTML 

// Build Functions --------------------------------------------

// Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
  return document.querySelector(element);
}

// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function requestPessoa(url, name) {
  fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pokemon = data;
    })
    .catch(err => console.log(err));
}

// Função responsavel por montar o HTML exibido na pagina
function createCard () {
   Pessoa = document.createElement("tr");
   tdNome = document.createElement("td")
   tdTelefone = document.createElement("td")
   tdEndereco = document.createElement("td")
   tdIdade = document.createElement("td")
   tdDataNascimento = document.createElement("td")
 
   tdNome.innerHTML = pessoa.nome
   tdTelefone.innerHTML = pessoa.telefone
   tdEndereco.innerHTML = pessoa.endereco
   tdIdade.innerHTML = pessoa.idade
   tdDataNascimento.innerHTML = pessoa.dataNascimento

   Pessoa.appendChild(tdNome);
   Pessoa.appendChild(tdTelefone);
   Pessoa.appendChild(tdEndereco);
   Pessoa.appendChild(tdIdade);
   Pessoa.appendChild(tdDataNascimento);

   return Pessoa
}

// Função que faz a chamada das principais funções e inicia o app
function startApp(pokeName) {
  requestPokeInfo(baseUrl, pokeName);

  setTimeout(function () {
      container.innerHTML = createCard();
  }, 2000);
}

// Add Events --------------------------------------------
searchButton.addEventListener('click', event => {
  event.preventDefault();
  pokeName = searchInput.value.toLowerCase();
  startApp(pokeName);
});


/* 

function fazGet(url){
   let request = new XMLHttpRequest()
   request.open('GET',url,false)
   request.send()
   return request.responseText
}

function consultarEscala(pessoa){
    Pessoa = document.createElement("tr");
    tdNome = document.createElement("td")
    tdTelefone = document.createElement("td")
    tdEndereco = document.createElement("td")
    tdIdade = document.createElement("td")
    tdDataNascimento = document.createElement("td")
  
    tdNome.innerHTML = pessoa.nome
    tdTelefone.innerHTML = pessoa.telefone
    tdEndereco.innerHTML = pessoa.endereco
    tdIdade.innerHTML = pessoa.idade
    tdDataNascimento.innerHTML = pessoa.dataNascimento

    Pessoa.appendChild(tdNome);
    Pessoa.appendChild(tdTelefone);
    Pessoa.appendChild(tdEndereco);
    Pessoa.appendChild(tdIdade);
    Pessoa.appendChild(tdDataNascimento);

    return Pessoa
    
}

function principal(){
   data = fazGet("https://app-escala-api.herokuapp.com/v1/pessoas");
   let pessoas = JSON.parse(data);
   let tabela = document.getElementById("tabela")
   pessoas.forEach(element => {
     let Pessoa = consultarEscala(element)
     tabela.appendChild(Pessoa)
   });
  
}


principal() 
 */

 