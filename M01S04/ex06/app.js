var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css', 'java', 'c++', 'node', 'jquery'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age:30
  }, {
    name:'Steven',
    surname: 'Stevenson',
    age:31
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age:29
  }]
};


for (let i=0; i < person.skills.length; i++) {
  if ( i % 2 === 0) {
  console.log(person.skills[i]);
  }
}
console.warn('******************************************')
for (let i=0; i < person.skills.length; i++) {
 
  if (!person.skills[i].startsWith('j')) {
    console.log(person.skills[i]);
  }

}

console.warn('*******************************')

let sentence=`Prietenii mei sunt `;
for (let i=0; i<person.friends.length; i++) {
  sentence +=`${person.friends[i].name} ${person.friends[i].surname}`;
  if (i < person.friends.length - 1) {
    sentence += ', ';
  } else {
    sentence +='.';
  }
}
console.log(sentence);


console.warn('********************');
let totalAge=0;
for (let i = 0; i < person.friends.length; i++) {
  if (person.friends[i].age >= 30) {
    totalAge += person.friends[i].age;

  }
}
console.log(totalAge);

console.warn('********');
let birthYearSum = 0;
for (let i = 0; i < person.friends.length; i++) {
  let birthYear=2019 - person.friends[i].age;
  birthYearSum += birthYear;
}
console.log(birthYearSum);

console.warn('**********');
for (let i = 0; i < person.friends.length; i++) {
  let ageDifference = person.age - person.friends[i].age;
  if (ageDifference >2) {
    console.log(`Diferenta dintre ${person.name} si ${person.friends[i].name} este de ${ageDifference} ani`); 
  }
}

console.warn('*************************');
for (let i = 0; i < person.friends.length; i++) {
let ageDifference=person.age - person.friends[i].age;
  if (person.friends[i].age % 2 !==0) {
    console.log(`Diferenta dintre ${person.name} si ${person.friends[i].name} este ${ageDifference}`);
  }
}

console.warn('************************');
  for (let i = person.skills.length - 1; i >= 0; i--) {
    console.log(person.skills[i]);
  }