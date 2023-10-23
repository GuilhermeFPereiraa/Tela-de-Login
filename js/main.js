function submitForm(ev) {
  ev.preventDefault();
  const inputUser = document.querySelector('#inputUser').value;
  const inputPassword = document.querySelector('#inputPassword').value;

  async function autenticationLogin() {
    try {
      const resolve = await fetch('urlDeAutenticação', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
      },
        body: JSON.stringify({ inputUser, inputPassword })
      })
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          // window.location.href = '';
        } else {
          // alert('Aluno não encontrado, tente novamente');
        }
      })
    } catch (err) {
      alert(`Não foi possivel acessar o perfil institucional, erro: ${err}`);
    }
  }
}

//Confirmar pela tecla ENTER do teclado:
document.addEventListener('keydown', (ev) => {
  ev.preventDefault();
  if (ev.key === 'Enter') {
    submitForm();
  }
})

function showPassword() {
  const inputPassword = document.querySelector('#inputPassword');
  const showPassword = document.querySelector('#showPassword');

  if (inputPassword.type === 'password') {
    inputPassword.setAttribute('type', 'text');
    showPassword.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    inputPassword.setAttribute('type', 'password');
    showPassword.classList.replace('fa-eye-slash', 'fa-eye');
  }
}