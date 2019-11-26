 let calculateRA = function(L,l) {
  return L*l;
};
let field1 = calculateRA(100,250);
let field2 = calculateRA(150,200);
let qtyPerMeter = 25;
let yield1 = field1* qtyPerMeter;
let yield2 = field2*qtyPerMeter;
let output = Math.abs(yield1-yield2);
console.log(output);

console.warn('*************');

let field3 = calculateRA(400, 370);
let yield3 = field3 * qtyPerMeter;
let beerPerKg = 10;
let beerOutput = yield3 / beerPerKg;
console.log(beerOutput);

let grainOutputPerM = 32;
let grainOutput = calculateRA(300,200)*grainOutputPerM;
let breadOutput = grainOutput * 2.5;
console.log(breadOutput); 

let grainField1 = calculateRA(150, 200);
let grainField2 = calculateRA(500, 300);
let breadOutput2 = (grainField1 + grainField2) * grainOutputPerM*2.5;
console.log(breadOutput2);