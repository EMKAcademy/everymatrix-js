let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'js', 'css', 'java', 'c++', 'node', 'jquery'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age:30
  }, {
    name: 'Steven',
    surname: 'Stevenson',
    age: 31
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age: 29
  }
]
};

person.skills.forEach(function(skill, i) {
  if (i % 2 === 0) {
    console.log(skill);
  }
})

console.warn('***********');

person.skills.forEach(function(skill){
  if(skill.includes('a')) {
    console.log(skill);
  }
});

console.warn('****************');
let sentence = 'Prietenii mei se numesc ';
person.friends.forEach(function(friend, i, friendsArray) {
  sentence += `${friend.name} ${friend.surname}`;
  if (i <= friendsArray.length -3) {
    sentence += ', '
  }
  if (i === friendsArray.length - 2) {
    sentence +=' si '
  }
});
console.log(sentence);