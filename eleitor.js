function consulta() {
  var idade = document.getElementById('idade').value

  var elementoIdade = document.getElementById('consulta')
  elementoIdade

  if (idade < 16) {
    elementoIdade.innerHTML = 'Não eleitor!'
  } else if (idade >= 18 && idade <= 70) {
    elementoIdade.innerHTML = 'Eleitor obrigatório!'
  } else if (16 <= idade < 18 || idade > 70) {
    elementoIdade.innerHTML = 'Eleitor facultativo!'
  }
}
