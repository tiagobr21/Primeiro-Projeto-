 /* API */



 function fazPut(){
  let request = new XMLHttpRequest()
  request.open('PUT',"https://app-escala-api.herokuapp.com/v1/escalas/94/pessoa/94",false)
  request.send()
  return request.responseText
  
}



/* 

 function fazPost(url){
    let request = new XMLHttpRequest()
    request.open("PUT",url,true)
    request.setRequestHeader("Content-Type", "application/json")

  
  }
  
  
  function mandarPessoa(){
   event.preventDefault()
   url = "https://app-escala-api.herokuapp.com/v1/escalas/94/pessoa/94"
  
  
 
  
   fazPost(url)
   
  }
   */