let calculateRA = (L,l) => {
  return L*l;
};


let aggregateSurfaceArea = (L1, l1, L2, l2) => {
  let surface1 = calculateRA(L1, l1);
  let surface2 = calculateRA(L2, l2);

  return surface1 + surface2;
}

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

longWall = calculateRA (12, 2.5);
shortWall =calculateRA (9, 2.5);
totalSurface = (2 * longWall) + (2 * shortWall);

windowsSurface = calculateRA (3,2);
doorSurface = calculateRA (3,2);

console.log(totalSurface-windowsSurface-doorSurface);

console.warn('**********************');
console.log(`Suprafata celor 2 dreptunghiuri este ${aggregateSurfaceArea(48, 92 ,51 ,102)}`);
