
 /* API */

/* function fazGet(url){
   let request = new XMLHttpRequest()
   request.open('GET',url,false)
   request.send()
   return request.responseText
}

function consultarEscala(escala){
    Escala = document.createElement("tr");
    tdNome = document.createElement("td")
    tdPessoas = document.createElement("td")
    tdLocais = document.createElement("td")
    tdData = document.createElement("td")
  
    tdNome.innerHTML = escala.nome
    tdPessoas.innerHTML = escala.pessoas
    tdLocais.innerHTML = escala.Locais
    tdData.innerHTML = escala.data

    Escala.appendChild(tdNome);
    Escala.appendChild(tdPessoas);
    Escala.appendChild(tdLocais);
    Escala.appendChild(tdData);

    return Escala
    
}

function principal(){
   data = fazGet("https://app-escala-api.herokuapp.com/v1/escalas");
   let escalas = JSON.parse(data);
   let tabela = document.getElementById("tabela")
   escalas.forEach(element => {
     let Escala = consultarEscala(element)
     tabela.appendChild(Escala)
   });
   //Para cada escala
      //criar uma linha
      //adicionar na tabela
}

principal() */

/* visualizar no console */
fetch('https://app-escala-api.herokuapp.com/v1/escalas')
  .then(response =>{
    return response.json();
  })
  .then(json =>{
    document.querySelector('#nome').innerHTML = json[14].nome;
    document.querySelector('#pessoas').innerHTML = json[14].pessoas;
    document.querySelector('#locais ').innerHTML = json[14].locais;
    document.querySelector('#data').innerHTML = json[14].data;
    console.log(json)
  })












/* 
Receber dados do Json 
fetch('https://app-escala-api.herokuapp.com/v1/escalas')
  .then(response =>{
    return response.json();
  })
  .then(json =>{
    document.querySelector('#nome').innerHTML = json[4].nome;
    document.querySelector('#pessoas').innerHTML = json[4].pessoas;
    document.querySelector('#locais ').innerHTML = json[4].locais;
    document.querySelector('#data').innerHTML = json[4].data;
    console.log(json)
  })

 Enviar dados para o Json 

 function fazPost(url,body){
     console.log("Body=",body)
     let request = new XMLHttpRequest()
     request.open("POST",url,true)
     request.setRequestHeader("Content-Type", "application/json")
     request.send(JSON.stringify(body))

     resquest.onload = function(){
       console.log(this.responseText)
     }
     return request.responseText
 }


  function cadastraEscala(){
    event.preventDefault()
    url = "https://app-escala-api.herokuapp.com/v1/escalas"
    let nome = document.getElementById("nome").value
    let pessoas = document.getElementById("pessoas").value
    let locais = document.getElementById("locais").value
    let data = document.getElementById("data").value
    console.log(nome)
    console.log(pessoas)
    console.log(locais)
    console.log(data)
    
    body ={
      "nome": nome,
      "pessoas": pessoas,
      "locais": locais,
      "data": data
      
    }

    fazPost(url,body)
    
  }
 */

 /*   
  const data{

  }

  fetch('https://app-escala-api.herokuapp.com/v1/escalas',{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
 */
/* 
  /* ar url = "https://app-escala-api.herokuapp.com/v1/escalas";

var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", url);
httpRequest.responseType = "json";
httpRequest.addEventListener("readystatechange", function () {
  if (httpRequest.readyState == 4){
    if (httpRequest.status == 200){
      console.log(httpRequest.response);
      console.log(httpRequest.response.headDocument);
      console.log(httpRequest.response.headDocument.authors);
      console.log(httpRequest.response.headDocument.content);
    } else {
      
    }
  }
});

httpRequest.send(); */ 