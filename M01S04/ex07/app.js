var friends = [{
  name: 'Dragos',
  surname: 'Iordache'
}, {
  name: 'Larry',
  surname: 'Larryson'
}, {
  name: 'Steven',
  surname: 'Stevenson'
}, {
  name: 'Carol',
  surname: 'Carolson'
}, {
  name: 'Andra',
  surname: 'Andrason'
}];

for (i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
}

for (i = 0; i < friends.length; i++) {
  console.log(`${friends[i].name} ${friends[i].surname}`);
  if (friends[i].name === 'Steven') {
    break;
  }
}

console.warn('**********************');

for (let i = 0; i < friends.length; i++) {
  let fullName = friends[i].name + friends[i].surname;
  if (fullName.length <= 13) {
    continue;
  }
  console.log(`${friends[i].name} ${friends[i].surname}`);
}

for (i = 0; i < friends.length; i++) {
  console.log(`${friends[i].name}`);
}

for (i = 0; i < friends.length; i++) {
  console.log(`${friends[i].name} ${friends[i].surname}`);
}
console.warn('**********')
for (i = 0; i < friends.length; i++) {
  
  let fullName = friends[i].surname;
  if (fullName.length >= 9) {
    break;
  }
  console.log(friends[i].surname.length,`${friends[i].name} ${friends[i].surname}`);
}