var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987, 
  pets: [{
    name: 'Twix',
    species: 'papagal',
    age: 4
  }, {
    name: 'Mars',
    species: 'caine',
    age: 2, 
  }, {
    name: 'Bounty',
    species: 'hamster',
    age: 4
  }, {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};

person.pets.forEach(function(petName) {
  console.log(petName.name);
});

console.warn('*************');
let ageSum = 0;
for(i = 0; i < person.pets.length; i++) {
  ageSum = ageSum + person.pets[i].age;
};
console.log(ageSum);

console.warn('*************');

person.pets.forEach(function(pet) {
  let sentence = `${pet.name} este ${pet.species} si are ${pet.age} ani.`
  console.log(sentence);
});

console.warn('*************');

for (i = 0; i < person.pets.length; i++) {
  let sentence = `Intre ${person.firstName} si ${person.pets[i].name} este o diferenta de ${new Date().getFullYear()-person.birthYear - person.pets[i].age} ani.`
  console.log(sentence)
};

console.warn('*************');

for (i = person.pets.length-1; i >= 0; i--) {
  console.log(person.pets[i].name);
};

console.warn('*************');
var pets=person.pets;
var petsRev=pets.reverse();
petsRev.forEach(function(pet) {
  console.log(pet);
});

console.warn('***************');
ages=[]
for (i = 0; i < person.pets.length; i++) {
  ages.push(person.pets[i].age);
  if (person.pets[i].age === Math.max(...ages)) {
    console.log(`${person.pets[i].name} este cel mai batran animal pe care il am si este cu ${new Date().getFullYear() - person.birthYear - person.pets[i].age} de ani mai mic decat mine.`)
  }
}
console.log(Math.max(...ages));

console.warn('***************');
let petsSentence = `Am `;
pets.reverse();
person.pets.forEach(function(pet,i) {
  if(i < person.pets.length - 1) {
    petsSentence += `${pet.species}, `
  } else{
    petsSentence +=`si ${pet.species}.`
  }
})
console.log(petsSentence)