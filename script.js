var email = "user1@email.com"
var password = "1234"

function login() {

   

    // Captura os valores dos campos de email e senha
    const emailUser = document.getElementById("email").value;
    const passwordUser = document.getElementById("password").value;

    

    // Valida se os campos estão preenchidos
    if(emailUser === "" || passwordUser === "") {
        alert("Por favor, preencha todos os campos.");
       
    }
    else if (email === emailUser && passwordUser === password) {
     
        window.location.href = "/chat.html";
    } else {
        alert("email ou senha incorretos.");
    }


}
