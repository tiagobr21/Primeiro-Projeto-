
 /* API */

 /* function fazGet(url){
  let request = new XMLHttpRequest()
  request.open('GET',url,false)
  request.send()
  return request.responseText
}

function consultarEscala(pessoa){
   Pessoa = document.createElement("tr");
   tdNome = document.createElement("td")
 
   tdNome.innerHTML = pessoa.nome

   Pessoa.appendChild(tdNome);
  

   return Pessoa
   
}

function principal(){
  data = fazGet("https://app-escala-api.herokuapp.com/v1/pessoas");
  let pessoas = JSON.parse(data);
  let nome_pessoa = document.getElementById("nome_pessoa")
  pessoas.forEach(element => {
    let Pessoa = consultarEscala(element)
    nome_pessoa.appendChild(Pessoa)
  });
  //Para cada escala
     //criar uma linha
     //adicionar na tabela
}

principal()  */










/* fetch('https://app-escala-api.herokuapp.com/v1/pessoas')
  .then(response =>{
    return response.json();
  })
  .then(json =>{
  
    document.querySelector('#nome_pessoa').innerHTML = json[5].nome;  
    document.querySelector('#nome_pessoa1').innerHTML = json[6].nome;    
  })
   */