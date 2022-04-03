/* 

function validarCadastro(){
    var user = formuser.user.value;
    var email = formuser.email.value;
    var senha = formuser.senha.value;
    var confirmar_senha = formuser.confirmar_senha.value;

    if(user == ""){
        alert('Preencha o campo login');
        formuser.user.focus();
        return false;
    }
    
    
    if(email == "" || email.indexOf('@') == -1){
        alert('Email inválido');
        formuser.email.focus();
        return false;
    }
    

    if(senha == "" ){
        alert('Preencha o campo senha');
        formuser.senha.focus();
        return false;
    }

    if(senha.length < 7 ){
        alert('Senha com no mínimo 8 caracteres');
        formuser.senha.focus();
        return false;
    }

  
    if(senha.indexOf('!') == -1 & senha.indexOf('@') == -1 & senha.indexOf('#') == -1
    &senha.indexOf('$') == -1 & senha.indexOf('%') == -1 & senha.indexOf('&') == -1
     &senha.indexOf('*') == -1 & senha.indexOf('_') == -1 &senha.indexOf('-') == -1
      &senha.indexOf('+') == -1){
       alert('Senha deve ter um caracter especial ex:#');
       formuser.senha.focus();
       return false;
   } 

    if(senha !== confirmar_senha){
        alert('As senhas não coincidem');
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


    if(confirmar_senha == ""){
        alert('Você precisa confirmar a confirmar senha');
        formuser.confirmar_senha.focus();
        return false;
    }
}   
 */
 /* const hasUpper = (str) => /[A-Z]/.test(str); 
        Verifique o valor ASCII de cada caractere para as seguintes condições: 
        Se o valor ASCII estiver na faixa de [65, 90] , é uma letra maiúscula.
        Se o valor ASCII estiver na faixa de [97, 122] , é uma letra minúscula.
        Se o valor ASCII estiver na faixa de [48, 57] , é um número.
        Se o valor ASCII estiver nos intervalos [32, 47] , [58, 64] , [91, 96] ou [123, 126] , é um caractere especial
*/

let user = document.querySelector('#user');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let confirmar_senha = document.querySelector('#confirmar_senha');



function cadastrar(){
    if(user && email && senha && confirmar_senha){
    let listaUser = JSON.parse(localStroge.getItem('listaUser') || '[]');
    listaUser.push({
        userCad: user.value,
        emailCad: email.value,
        senhaCad: senha.value,
        confirmar_senhaCad: confirmar_senha.value
        
    }
    )
    
    localStorage.setItem('listaUser',JSON.stringify(listaUser))
}
}

