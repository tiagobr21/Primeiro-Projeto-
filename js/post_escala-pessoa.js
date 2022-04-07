
 /* API */


 function fazGet(url){
  let request = new XMLHttpRequest()
  request.open('GET',url,false)
  request.send()
  return request.responseText
}

function escolherPessoa(pessoa){
   Pessoa = document.createElement("tr");

   tdInput = document.createElement("input")
   tdInput.setAttribute("type", "checkbox");
   tdNome = document.createElement("td")
  
   tdInput.innerHTML = pessoa.check
   tdNome.innerHTML = pessoa.nome
   
   Pessoa.appendChild(tdInput);
   Pessoa.appendChild(tdNome);
  
  

   return Pessoa
   
}

function principal(){
  data = fazGet("https://app-escala-api.herokuapp.com/v1/pessoas");
  let pessoas = JSON.parse(data);
  let nome_pessoa = document.getElementById("nome_pessoa")
  let check = document.getElementById("check")
  check.setAttribute("type", "checkbox");
  pessoas.forEach(element => {
    let Pessoa = escolherPessoa(element)
    check.appendChild(Pessoa)
    nome_pessoa.appendChild(Pessoa)
    
  });
  //Para cada escala
     //criar uma linha
     //adicionar na tabela
}

principal()  










/* fetch('https://app-escala-api.herokuapp.com/v1/pessoas')
  .then(response =>{
    return response.json();
  })
  .then(json =>{
  
    document.querySelector('#nome_pessoa').innerHTML = json[5].nome;  
    document.querySelector('#nome_pessoa1').innerHTML = json[6].nome;    
  })
   */