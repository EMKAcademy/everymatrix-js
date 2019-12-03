const calculateSurface = (L, l) => {
 if (l) {
   return L*l;
 }
 else {
   return Math.pow(L,2);
 }
};

console.log(`${calculateSurface(2)}`);
console.log(`${calculateSurface(6, 7)}`)