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
  let qdtTotalCerveja = cervejaPP(duracao) + adultos + cervejaPP(duracao) / 2;
  let qdtTotalBebidas =
    bebidasPP(duracao) + adultos + (bebidasPP(duracao) / 2 + criancas);

  resultado.innerHTML = `<p>${qdtTotalCarne / 1000}Kg de carne</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qdtTotalCerveja / 355
  )} Lata de cerbeja</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qdtTotalBebidas / 2000
  )} Garrafas de bebida</p>`;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
  return carne;
}
function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
  return cerveja;
}

function bebidaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1000;
  }
  return bebidas;
}
