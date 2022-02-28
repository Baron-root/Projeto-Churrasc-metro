// Carne  - 400gr por Pessoa  + 6 Horas  - 650gr
// Cerveja - 1200 ml por Pessoa + 6 Horas - 2000 ml
// Refrigerante/Agua - 1000 ml por Pessoa + 6 Horas 1500 ml

//Criança valem por  0,5
let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  console.log("Calcular");

  let adultos = inputAdultos.value;
  let criancas = inputCrianca.value;
  let duracao = inputDuracao.value;

  let qdtTotalCarne =
    carnePP(duracao) + adultos + (carnePP(duracao) / 2 + criancas);
  console.log(qdtTotalCarne);
}

function carnePP(duracao) {
  let carne = 400;
  if (duracao >= 6) {
    carne = 650;
    return 650;
  } else {
    return 400;
  }
  return carne;
}
