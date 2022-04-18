 /* API */



 function fazPut(){
  let request = new XMLHttpRequest()
  request.open('PUT',"https://mighty-ocean-42895.herokuapp.com/https://app-escala-api.herokuapp.com/v1/escalas/94/pessoa/94",true)
  request.send()
  console.log('ok')
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