
var meuInputId = document.getElementById('meuInputID')

meuInputId.addEventListener('input', function (event) {
  let valordigitado = event.target.value

  let tamanhoString = valordigitado.length;

  if (tamanhoString <= 5) {
    meuInputId.style.border = 'thick solid #FE6847';
  }
  else {
    meuInputId.style.border = 'thick solid #57B8FF';
  }


})






