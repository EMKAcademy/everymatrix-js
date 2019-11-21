let i = 0;
let lim = prompt('Lim');
let div = prompt('Div');

while (i <= lim) {
  if (i % div !== 0) {
    i++
    continue;
  }
  console.log(i);

  i++
}