// API endpoint --------------------------------------------
const baseUrl = 'https://app-escala-api.herokuapp.com/v1/pessoas/findByNome/Tiago Braga';

const searchInput = getElement('#search-input'),
 searchButton = getElement('#search-button'),
 container = getElement('#tabela'),
 erroMessage = getElement('#error')
 
let pessoaNome,pessoa,person;

 function getElement(element) {
  return document.querySelector(element);
}
// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function pessoaRequest() {
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
     pessoa = data
    console.log(pessoa)
    })
    .catch(err => console.log(err));
}


function createPessoa(){
/*    let Tabela = [document.querySelector('table').getAttribute = pessoa.nome,
  document.querySelector('table').getAttribute = pessoa.endereco,
  document.querySelector('table').getAttribute = pessoa.idade]
  
  document.querySelector("#tabela").innerHTML = Tabela

  return Tabela */

  document.querySelector("#tabela").innerHTML = pessoa.baseUrl

  
  
}


function startApp(pessoaNome) {
  pessoaRequest(baseUrl, pessoaNome);
 
  setTimeout(function () {
    //Exibe uma mensagem caso o pokemon pesquisado não exista
    if(pessoa.detail) {
      erroMessage.style.display = 'block';
      container.style.display = 'none';
    }else{
      erroMessage.style.display = 'none';
      container.style.display = 'flex';
      container.innerHTML = createPessoa();
    }
  }, 2000);
}

searchButton.addEventListener('click', event => {
  event.preventDefault();
  pessoaNome = searchInput.value.toLowerCase();
  startApp(pessoaNome);
  container.classList.add('fade')

  setTimeout(()=>{
    container.classList.remove('fade')
  },3000)
}); 