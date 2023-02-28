const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");
const valorTaxa = document.getElementById("valorTaxa");
const distanciaKm = rangeInput.value;

rangeInput.addEventListener("input", () => {
  rangeValue.innerText = rangeInput.value + "km";
});

function converterKmEmReais(distanciaKm) {
  let preco = 0;
  if (distanciaKm >= 1 && distanciaKm <= 2) {
    preco = 5;
  } else if (distanciaKm >= 3 && distanciaKm <= 5) {
    preco = 10;
  } else if (distanciaKm >= 5 && distanciaKm <= 7) {
    preco = 10;
  } else {
    // Caso a distância não esteja em nenhuma das faixas de preço definidas
    return "Distância não suportada";
  }
  return `A distância de ${distanciaKm} km custa R$ ${preco}`;
}
console.log(converterKmEmReais(distanciaKm));
