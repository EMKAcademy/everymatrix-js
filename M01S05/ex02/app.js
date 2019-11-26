function calculateRectangleArea(l, L) {
  return l*L;
};
console.log(calculateRectangleArea(3, 4));
let rectangle1 = calculateRectangleArea(5, 3);
let rectangle2 = calculateRectangleArea(3, 2);
console.log(rectangle1 + rectangle2);

let squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);

console.log(calculateRectangleArea(12,9));

let rec1 = calculateRectangleArea(15, 31);
let rec2 = calculateRectangleArea(8, 9);
let rec3 = calculateRectangleArea(10, 5);
console.log(rec1 + rec2 + rec3);

let anotherSquare=calculateRectangleArea(8, 8);
console.log(anotherSquare);