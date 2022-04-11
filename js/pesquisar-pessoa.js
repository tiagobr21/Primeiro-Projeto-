// API endpoint --------------------------------------------
const baseUrl = 'https://app-escala-api.herokuapp.com/v1/pessoas';

const searchInput = getElement('#search-input'),
 searchButton = getElement('#search-button')
   
 function getElement(element) {
  return document.querySelector(element);
}
// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function pessoaRequest() {
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
     console.log(data)
    })
    .catch(err => console.log(err));
}

function startApp(data) {
  pessoaRequest(baseUrl, data);

  /* setTimeout(function () {
      data.innerHTML = consultarEscala();
  }, 2000); */
}

searchButton.addEventListener('click', event => {
  event.preventDefault();
  data = searchInput.value.toLowerCase();
  startApp(data);
});