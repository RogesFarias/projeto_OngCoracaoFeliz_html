// script.js
// =======================================
// 1. FORMULÁRIO DE CONTATO (index.html)
// =======================================
const formContato = document.querySelector('#formContato');
const msgStatus = document.querySelector('#msgStatus');

if (formContato && msgStatus) {
  formContato.addEventListener('submit', (e) => {
    e.preventDefault();

    msgStatus.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato ❤️";
    msgStatus.style.color = "#0077cc";

    formContato.reset();

    setTimeout(() => {
      msgStatus.textContent = "";
    }, 5000);
  });
}

// =======================================
// 2. CÓPIA DA CHAVE PIX (projetos.html)
// =======================================
function copiarChavePix() {
  const chavePix = document.getElementById("chave-pix");
  const mensagem = document.getElementById("mensagem-copiado");

  if (chavePix && mensagem) {
    navigator.clipboard.writeText(chavePix.textContent).then(() => {
      mensagem.style.display = "block";
      setTimeout(() => {
        mensagem.style.display = "none";
      }, 3000);
    });
  }
}

// Torna a função acessível globalmente
window.copiarChavePix = copiarChavePix;

// =======================================
// 3. FORMULÁRIO DE CADASTRO (cadastro.html)
// =======================================
const formCadastro = document.querySelector('#formCadastro');

if (formCadastro) {
  formCadastro.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('✅ Cadastro realizado com sucesso!');
    this.reset();
  });
}

// =======================================
// 4. MÁSCARAS DE CAMPOS (cadastro.html)
// =======================================
const campoCPF = document.getElementById('cpf');
if (campoCPF) {
  campoCPF.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = value;
  });
}

const campoTelefone = document.getElementById('telefone');
if (campoTelefone) {
  campoTelefone.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
    e.target.value = value;
  });
}

const campoCEP = document.getElementById('cep');
if (campoCEP) {
  campoCEP.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    e.target.value = value;
  });
}
