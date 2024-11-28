const selectQuantidade = document
 .getElementById('quantidade');

// Popula o seletor com as opções de 15 a 20 números
for (let i = 15; i <= 20; i++) {
 const option = document.createElement(
  'option');
 option.value = i;
 option.textContent = i;
 selectQuantidade.appendChild(option);
}

// Define o valor padrão como 15
selectQuantidade.value = 15;

function gerarNumeros() {
 const quantidade = parseInt(
  selectQuantidade.value);
 const numerosContainer = document
  .getElementById('numeros');
 numerosContainer.innerHTML = '';

 const numerosGerados = new Set();
 while (numerosGerados.size <
  quantidade) {
  // Geração de números aleatórios entre 1 e 25 (para a Lotofácil)
  const numero = Math.floor(Math
   .random() * 25) + 1;
  numerosGerados.add(numero);
 }

 // Ordena os números gerados de forma crescente e os exibe
 Array.from(numerosGerados).sort((a,
  b) => a - b).forEach(numero => {
  const numeroDiv = document
   .createElement('div');
  numeroDiv.className = 'numero';
  numeroDiv.textContent = numero;
  numerosContainer.appendChild(
   numeroDiv);
 });
}

document.getElementById('gerar-btn')
 .addEventListener('click',
  gerarNumeros);
