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

 // Array de mensagens do chat
 const chat = [];

 // Função para enviar uma mensagem
 function sendMessage() {
     const input = document.querySelector(".input");
     const message = input.value;

     if (message) {
         // Adiciona a mensagem do usuário 1 ao array de chat
         chat.push({
             author: 'aluno 1',
             avatar: '/images/user1.png',
             message
         });
         input.value = ""; // Limpa o campo de entrada
         renderChat(); // Atualiza o chat na tela

         // Chama a função para resposta automática do user2 após um breve intervalo
         setTimeout(autoReply, 1000);
     }
 }

 // Função para resposta automática do user2
 function autoReply() {
     const responses = [
         "Tudo bem, e você?",
         "Como posso ajudar?",
         "Interessante, conte-me mais!",
         "Entendi. Quer mais detalhes?",
         "Obrigado pela mensagem!"
     ];

     // Seleciona uma resposta aleatória
     const reply = responses[Math.floor(Math.random() * responses.length)];

     // Adiciona a mensagem do usuário 2 ao array de chat
     chat.push({
         author: 'aluno 2',
         avatar: '/images/user2.png',
         message: reply
     });
     renderChat(); // Atualiza o chat na tela
 }

 // Função para renderizar as mensagens do chat
 function renderChat() {
     const chatContainer = document.getElementById("chat-container");
     chatContainer.innerHTML = ""; // Limpa o container

     chat.forEach((message, index) => {
         const userClass = message.author === 'aluno 1' ? "container-user1" : "container-user2";
         const nameClass = message.author === 'aluno 1' ? "name-user1" : "name-user2";
         const messageClass = message.author === 'aluno 1' ? "message-user1" : "message-user2";
         const avatarClass = message.author === 'aluno 1' ? "container-avatar1" : "container-avatar2";

         // Template HTML para cada mensagem
         const messageHTML = `
             <div class="${userClass}">
                 <div class="container-name-message${index + 1}">
                     <small class="${nameClass}">${message.author}</small>
                     <p class="${messageClass}">${message.message}</p>
                 </div>
                 <div class="${avatarClass}">
                     <img src="${message.avatar}" alt="Avatar">
                 </div>
             </div>
         `;
         chatContainer.insertAdjacentHTML("beforeend", messageHTML);
     });


           // Rola automaticamente para a última mensagem
           chatContainer.lastElementChild.scrollIntoView({ behavior: 'smooth' });
 }

 

 // Evento para enviar a mensagem ao pressionar Enter
 document.querySelector(".input").addEventListener("keydown", function(event) {
     if (event.key === "Enter") {
         event.preventDefault(); // Evita que o Enter envie o formulário
         sendMessage(); // Chama a função de envio de mensagem
     }
 });

 // Renderiza o chat ao carregar a página
 renderChat();
