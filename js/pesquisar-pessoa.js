const baseUrl = 'https://app-escala-api.herokuapp.com/v1/pessoas'


function botao(){
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
       
      let input = document.querySelector('#search-input')
      pesquisa = input.value 

     
     
      for(i = 0; i<=1; i++){
    
      Nome = data[i].nome
      nomeMaiusc = Nome.toUpperCase();  
     
        
      if(pesquisa ===  data[i].nome){
      
       document.querySelector('#nome').innerHTML = nomeMaiusc
       document.querySelector('#telefone').innerHTML = data[i].telefone
       document.querySelector('#endereco').innerHTML = data[i].endereco
       document.querySelector('#idade').innerHTML = data[i].idade
       document.querySelector('#data').innerHTML = data[i].dataNascimento   
        
       console.log(true)
     }else{
      console.log(false)
     } 
     console.log( data[i].nome)  
    }  
    } 

     
    
    )}  



  
    
  
    /* 
    
    
    function botao(){
       let input = document.querySelector('#search-input')
       let pesquisa = input.value;
       console.log(pesquisa)
       return pesquisa
    }
    
    
    
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
      data = fazGet("https://app-escala-api.herokuapp.com/v1/pessoas/findByNome/",pesquisa);
      let pessoas = JSON.parse(data);
      let tabela = document.getElementById("tabela")
    
      Object.keys(pessoas).forEach(key => {
        let Pessoa = consultarEscala(pessoas[key])
        tabela.appendChild(Pessoa)
      })
    
    
     
    }
    
    
    principal()  */
    
    






/* principal()  */








/* // API endpoint --------------------------------------------
const baseUrl = 'https://app-escala-api.herokuapp.com/v1/pessoas';

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
   let Tabela = [document.querySelector('table').getAttribute = pessoa[4].nome,
  document.querySelector('table').getAttribute = pessoa[4].endereco,
  document.querySelector('table').getAttribute = pessoa[4].idade]
  
  document.querySelector("#tabela").innerHTML = Tabela

  return Tabela


  
  
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
});  */