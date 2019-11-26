let calculateRA = (L,l) => {
  return L*l;
};

let wall1 = calculateRA(6, 2.5);
let wall2 = calculateRA(4, 2.5);
let totalSurface = 2 * wall1 + 2*wall2;
let doorSurface = calculateRA(2.2, 1.5);
let windowsSurface = calculateRA(2, 1.5);
let wallPaperSurface = totalSurface - doorSurface -windowsSurface;
console.log(wallPaperSurface);

console.warn('wraooer');

let calculateSA = (l) => {
  return calculateRA(l, l);
};
console.log(calculateSA(2));