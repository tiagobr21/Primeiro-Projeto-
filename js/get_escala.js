
 /* API */

 
 function fazGet(url){
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
    tdPessoas.innerHTML = escala.pessoa
    tdLocais.innerHTML = escala.Locais
    tdData.innerHTML = escala.data

    Escala.appendChild(tdNome);
    Escala.appendChild(tdPessoas);
    Escala.appendChild(tdLocais);
    Escala.appendChild(tdData);

    return Escala
    

}

function principal(){
   data  = fazGet("https://app-escala-api.herokuapp.com/v1/escalas");
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


principal() 












