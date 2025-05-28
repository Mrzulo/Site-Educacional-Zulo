function irParaFormulario() {
  document.getElementById("participar").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("formulario")?.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (nome && email) {
    mensagem.textContent = `Obrigado, ${nome}! Em breve enviaremos o guia para ${email}.`;
    this.reset();
  } else {
    mensagem.textContent = "Por favor, preencha todos os campos.";
  }
});

// Menu hamburguer
document.getElementById("menu-toggle")?.addEventListener("click", function() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
});
