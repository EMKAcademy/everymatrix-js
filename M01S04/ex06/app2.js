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

for ( let i=0; i <person.skills.length; i++) {
  console.log(person.skills[i]);
}

console.warn('**********************');

for ( let i=0; i <person.skills.length; i++) {
 if (person.skills[i].startsWith('c'))
  console.log(person.skills[i]);
}

console.warn('******************************');

let sentence='Numele de familie ale prietenilor mei sunt ';
for (let i = 0; i < person.friends.length; i++) {
 sentence += `${person.friends[i].surname} `;
 if (i < person.friends.length-1) {
   sentence += `, `;
 } else {
   sentence +=`.`;
 }
  console.log(sentence);
}