var dateBuilder = [
  function() {
    return '2019';
  },
  function() {
    return 'februarie';
  },
  function() {
    return '14'
  }
];

dateBuilder[3] = function () {
  return 'Duminica';
};

console.log(dateBuilder[1]());

console.log(`Suntem in anul ${dateBuilder[0]()}`)

console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}`)

console.log(`Astazi este ${dateBuilder[3]()}`)

console.log(dateBuilder[0]());

console.log(`Suntem in ${dateBuilder[1]()} ${dateBuilder[0]()}`);

console.log(`Astazi este ${dateBuilder[3]()} ${dateBuilder[1]()}`)