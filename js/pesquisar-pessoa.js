// API endpoint --------------------------------------------
const baseUrl = 'https://app-escala-api.herokuapp.com/v1/pessoas';

const searchInput = getElement('#search-input'),
 searchButton = getElement('#search-button'),
 container = getElement('#tabela'),
 erroMessage = getElement('#error')
 


 function getElement(element) {
  return document.querySelector(element);
}
// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function pessoaRequest() {
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
 
    const Tabela = [document.querySelector('table').getAttribute = data[1].nome,
     document.querySelector('table').getAttribute = data[1].endereco,
     document.querySelector('table').getAttribute = data[1].idade]
     
    document.querySelector("#tabela").innerHTML = Tabela
    
    console.log(Tabela)
    
     
    
    })
    .catch(err => console.log(err));
}

function startApp(data) {
  pessoaRequest(baseUrl, data);
 
  setTimeout(function () {
    //Exibe uma mensagem caso o pokemon pesquisado não exista
    if(data.detail) {
      erroMessage.style.display = 'block';
      container.style.display = 'none';
    }else{
      erroMessage.style.display = 'none';
      container.style.display = 'flex';
      container.innerHTML = pessoaRequest();
    }
  }, 2000);
}

searchButton.addEventListener('click', event => {
  event.preventDefault();
  data = searchInput.value.toLowerCase();
  startApp(data);
  container.classList.add('fade')

  setTimeout(()=>{
    container.classList.remove('fade')
  },3000)
});