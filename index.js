const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");
const valorTaxa = document.getElementById("valorTaxa");
const distanciaKm = rangeInput.value;

rangeInput.addEventListener("input", () => {
  rangeValue.innerText = rangeInput.value + "km";
  converterKmEmReal(rangeInput.value);
  valorTaxa.innerText = converterKmEmReal(rangeInput.value);
});

function converterKmEmReal(km) {
  let valor = 0;

  if (km >= 1 && km <= 2) {
    valor = 6;
  } else if (km >= 3 && km <= 5) {
    valor = 8;
  } else if (km >= 5 && km <= 7) {
    valor = 10;
  } else if (km > 7 && km <= 20) {
    valor = 12;
  } else if (km > 20) {
    return "Não é possível converter mais de 20km.";
  } else {
    return "Por favor, insira um valor válido.";
  }

  return `O valor para ${km} km é R$${valor}.`;
}
