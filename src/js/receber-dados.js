function mostraDados() {
  let nome = document.form.nome.value;
  let email = document.form.email.value;
  let telefone = document.form.telefone.value;
  let mensagem = document.form.mensagem.value;

  if (nome == '' || nome == null) {
    document.form.nome.style.backgroundColor = '#ff8b8b';
    document.form.nome.focus();
    alert(`Por favor, preencha o campo nome!`);
  } else if (email == '' || email == null) {
    document.form.email.style.backgroundColor = '#ff8b8b';
    document.form.email.focus();
    alert(`Por favor, preencha o campo email!`);
  } else if (telefone == '' || telefone == null) {
    document.form.telefone.style.backgroundColor = '#ff8b8b';
    document.form.telefone.focus();
    alert(`Por favor, preencha o campo telefone!`);
  } else if (mensagem == '' || mensagem == null) {
    document.form.mensagem.style.backgroundColor = '#ff8b8b';
    document.form.mensagem.focus();
    alert(`Por favor, escreva alguma mensagem!`);
  } else {
    document.form.nome.style.backgroundColor = '#fff';
    document.form.email.style.backgroundColor = '#fff';
    document.form.telefone.style.backgroundColor = '#fff';
    document.form.mensagem.style.backgroundColor = '#fff';

    let msg = `${nome}, sua mensagem foi enviada, entraremos em contato assim que possível!`;
    alert(msg);

    document.form.nome.value = '';
    document.form.email.value = '';
    document.form.telefone.value = '';
    document.form.mensagem.value = '';
  }
}
