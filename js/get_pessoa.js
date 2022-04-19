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

 