 /* API */


 function fazPost(url,body){
    console.log("Body=",body)
    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(body))
  
  
  }
  
  
  function mandarPessoa(){
   event.preventDefault()
   url = "https://app-escala-api.herokuapp.com/v1/escalas/94/pessoa/94"
    nome_pessoa = "nome_pessoa"
   console.log(nome)
   body ={
    "nome_pessoa" : nome_pessoa
   }
  
   fazPost(url,body)
   
  }
  