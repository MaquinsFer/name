let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuario == ""){
    nomeUsuario = prompt("Qaul o seu nome");
}

if(nomeUsuario == null){
    elemento.textContent = 'Seja muito Bem-vindo.';
}else{
    elemento.textContent = nomeUsuario;
}