var i;
var inputNumber=prompt('Introduceti numarul')||10;
var upperLimit=prompt('Introduceti limita superioara') || 100;

for (i = 0; i <= upperLimit; i++) {
  console.log(i);
  if (i % inputNumber !== 0) {
    continue;
  }
  console.log('Acest numar e multiplu de '+inputNumber);
}