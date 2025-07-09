// Newsletter do rodapé
document.addEventListener("DOMContentLoaded", function () {
  const formNewsletter = document.querySelector('.footer form');
  const inputEmail = formNewsletter.querySelector('input[type="email"]');
  const btnEnviar = formNewsletter.querySelector('.btn');

  btnEnviar.addEventListener('click', function (e) {
    e.preventDefault(); // impede o envio do formulário

    const email = inputEmail.value.trim();
    if (validateEmail(email)) {
      alert("Obrigada em se inscrever para novos lançamentos!");
      inputEmail.value = ''; // limpa o campo
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  });

  function validateEmail(email) {
    // Expressão regular simples para validar e-mail
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});


// Botões de "Comprar" nos livros
document.querySelectorAll('.btnn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const titulo = this.closest('.content').querySelector('h4').innerText;
    alert(`"${titulo}" foi adicionado ao seu carrinho!`);
  });
});
