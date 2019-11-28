let person = {
  getName: function() {
    return 'Catalin Curelea';
  },
  getAge: function() {
    return 32;
  }
};

console.log(person.getName().split(' ')[0]);
console.log(`Diferenta de varsta intre mine si persoana este ${65-person.getAge()}`)

let birthYear = (new Date()).getFullYear() - person.getAge();
console.log(birthYear);
console.log(String(birthYear).slice(-2));
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} de ani`);

console.log(person.getName());
console.log(person.getAge());
console.log((new Date().getFullYear()-person.getAge()));
console.log(`Ma numesc ${person.getName()} , m-am nascut acum ${person.getAge()} ani in anul ${birthYear}`)