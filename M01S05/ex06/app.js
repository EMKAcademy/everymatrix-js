let person = {
  getName: function() {
    return 'Dragos Iordache';
  },
  getAge: function() {
    return 32;
  }
};

const accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`;
  return person[methodName]();

};

console.log(accessor('Name'));
console.log(accessor('Age'));

let firstName = accessor('Name').split(' ')[0];
console.log(firstName.split(' ')[0]);

console.log(56 - accessor('Age'));

console.log((new Date().getFullYear())-accessor('Age'));
let age = accessor('Age');
console.log(`Ma numesc ${firstName} si am ${accessor('Age')} si m-am nascut ${age} de ani`);

let fullName= accessor('Name');
console.log(fullName);

console.log(age);

let currentYear = (new Date().getFullYear())
console.log(currentYear-age)

console.log(`Ma numesc ${fullName} si am ${age} de ani`)