/* 
function validarLogin(){
    var user = formuser.user.value;
    var senha = formuser.senha.value;
   

    if(user == ""){
        alert('Preencha o campo login');
        formuser.nome.focus();
        return false;
    }

    if(senha == ""){
        alert('Preencha o campo senha');
        formuser.senha.focus();
        return false;
    }

    if(senha.length < 7 ){
        alert('Senha deve conter no mínimo 8 caracteres');
        formuser.senha.focus();
        return false;

    }
    
    if(senha.indexOf('0') == -1 & senha.indexOf('1') == -1 & senha.indexOf('2') == -1
     &senha.indexOf('3') == -1 & senha.indexOf('4') == -1 & senha.indexOf('5') == -1
      &senha.indexOf('6') == -1 &senha.indexOf('7') == -1 &senha.indexOf('8') == -1
       &senha.indexOf('9') == -1){
        alert('A senha precisa ter letras e numeros');
        formuser.senha.focus();
        return false;
    }


     if(senha.indexOf('!') == -1 & senha.indexOf('@') == -1 & senha.indexOf('#') == -1
     &senha.indexOf('$') == -1 & senha.indexOf('%') == -1 & senha.indexOf('&') == -1
      &senha.indexOf('*') == -1 & senha.indexOf('_') == -1 &senha.indexOf('?') == -1
       &senha.indexOf('+') == -1){
        alert('Senha deve ter um caracter especial ex:#');
        formuser.senha.focus();
        return false;
    } 

    if(senha.indexOf('A') == -1 & senha.indexOf('B') == -1 & senha.indexOf('C') == -1
        & senha.indexOf('D') == -1 & senha.indexOf('E') == -1 & senha.indexOf('F') == -1
         & senha.indexOf('G') == -1 & senha.indexOf('H') == -1 & senha.indexOf('I') == -1
          & senha.indexOf('J') == -1 & senha.indexOf('L') == -1 & senha.indexOf('M') == -1 
           & senha.indexOf('N') == -1 & senha.indexOf('O') == -1 & senha.indexOf('P') == -1 
            & senha.indexOf('Q') == -1 & senha.indexOf('R') == -1 & senha.indexOf('S') == -1
             & senha.indexOf('T') == -1 & senha.indexOf('U') == -1 & senha.indexOf('V') == -1 
              & senha.indexOf('X') == -1 & senha.indexOf('Z') == -1 & senha.indexOf('W') == -1 
               & senha.indexOf('Y') == -1){
       alert('Senha deve ter letras maiúsculas');
       formuser.senha.focus();
       return false;
   } 
 
} */

function entrar(){
   let usuario = document.querySelector('.user')
   let senha = document.querySelector('.senha')
   let listaUser = []
   let userValid = {
       nome:'',
       user:'',
       senha:''
   }
}


