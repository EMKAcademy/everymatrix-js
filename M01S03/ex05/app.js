var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age:30
  }, {
    name: 'Steven',
    surname: 'Stevenson',
    age:31
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age:29
  },
  ]
};

console.log(
  'Ma numesc ' + person.name + ' ' + person.surname +
  ' si stiu ' + person.skills[0] + ' ' + person.skills[2] + '.'
);

console.log(
  `Sunt ${person.name} si acum invat Javascript` 
);

console.log(
  `Am ${person.friends.length} prieteni: ${person.friends[0]}, ${person.friends[1]} si ${person.friends[2]}.`
);

console.log(
  `Am numesc ${person.name} ${person.surname} si vreau sa invat ${person.skills[1]}`
);

console.log(
  `Sunt ${person.name} si stiu HTML si CSS`
)

console.log(
  `Am ${person.friends.length}: ${person.friends[0].name}, ${person.friends[1].name} si ${person.friends[2].name}.`
);

console.log(
  `Numele meu este ${person.name} ${person.surname} si am ${person.age} si ${person.friends.length} prieteni.`
)