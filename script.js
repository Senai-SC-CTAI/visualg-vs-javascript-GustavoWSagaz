const calcularBtn = document.getElementById('calcular');
const mediaElement = document.getElementById('media');

calcularBtn.addEventListener('click', () => {
  let thoras = 0;
  for(let semana = 1; semana <= 4; semana++) {
      thoras += parseFloat(prompt(`Digite a quantidade de horas estudadas na semana ${semana}:`));
  }
  mediaElement.textContent = `Média de horas estudadas por semana: ${(thoras / 4).toFixed(2)}`;
});