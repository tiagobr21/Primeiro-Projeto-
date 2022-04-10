// API endpoint --------------------------------------------
const baseUrl = 'https://app-escala-api.herokuapp.com/v1/pessoas';
//https://app-escala-api.herokuapp.com/v1/pessoas/findByName/sergio vinhote
// Get Elements --------------------------------------------
const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      main = getElement('.main')

var nomePessoa, // Nome ou numero passado na caixa de busca
    pessoa, // Responsavel por guardar os dados recebidos da API
    html; // Responsavel por receber o HTML 

// Build Functions --------------------------------------------

// Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
  return document.querySelector(element);
}

// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function requestPokeInfo(url, name) {
  fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pessoa = data;
    })
    .catch(err => console.log(err));
}

console.log(pessoa)