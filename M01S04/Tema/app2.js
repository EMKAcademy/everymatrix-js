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
  for (i = 0; i < person.friends.length; i++) {
    
   for (j = 0; j < person.friends.length; j++){
     if(i === j ){

     }else{
    sentence1 = `Intre ${person.friends[i].name} si ${person.friends[j].name} este o diferenta de ${Math.abs(person.friends[i].age-person.friends[j].age)} de ani`;
    console.log(sentence1)
   }
   }
  
  //   if (i === 0) {
  //   sentence1 = `Intre ${person.friends[i].name} si ${person.friends[i+1].name} este o diferenta de ${Math.abs(person.friends[i].age-person.friends[i+1].age)} de ani`;
  //   sentence2 = `Intre ${person.friends[i].name} si ${person.friends[i+2].name} este o diferenta de ${Math.abs(person.friends[i].age-person.friends[i+2].age)} de ani`;
  
  //  console.log(sentence1);
  //  console.log(sentence2);
  //   }
  //   if (i === 1) {
  //     sentence3 = `Intre ${person.friends[i].name} si ${person.friends[i+1].name} este o diferenta de ${Math.abs(person.friends[i].age-person.friends[i+1].age)} de ani`;
  //   sentence4 = `Intre ${person.friends[i].name} si ${person.friends[i-1].name} este o diferenta de ${Math.abs(person.friends[i].age-person.friends[i-1].age)} de ani`;
  //   console.log(sentence3);
  //   console.log(sentence4);
  // }

  //   if (i === 2) {
  //     sentence5 = `Intre ${person.friends[i].name} si ${person.friends[i-2].name} este o diferenta de ${Math.abs(person.friends[i].age-person.friends[i-2].age)} de ani`;
  //   sentence6 = `Intre ${person.friends[i].name} si ${person.friends[i-1].name} este o diferenta de ${Math.abs(person.friends[i].age-person.friends[i-1].age)} de ani`;
  //   console.log(sentence5);
  //   console.log(sentence6);
  //   }
  }
  
  //   for (i > 1; i <= person.friends.length-1; i++) {
  //     p=i-2
  //     sentence1 = `Intre ${person.friends[i].name} si ${person.friends[p].name} este o diferenta de ${Math.abs(person.friends[i].age-person.friends[i+1].age)} de ani`;
  //     sentence2 = `Intre ${person.friends[i].name} si ${person.friends[p+1].name} este o diferenta de ${Math.abs(person.friends[i].age-person.friends[i-1].age)} de ani`;
    
  //   }
  // }
  
  

