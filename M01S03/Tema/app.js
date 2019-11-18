var person = {
  firstName: 'Catalin',
  lastName: 'Curelea',
  email:'ccu@everymatrix.com',
  birthYear: 1986,
  pets:[{
    name:'Dog',
    species:'Canine',
    age:2
  },
      {
    name: 'Cat',
    species: 'Feline',
    age:2
  },
    {
      name: 'Mouse',
      species: 'Rodent',
      age:2
    }
  ],
  zipCode: '061109'
}

console.log(`Ma numesc ${person.firstName} ${person.lastName} si am ${person.pets.length} animale` );
console.log(`Am acelasi email din copilarie : ${person.email}`);
console.log(`Unul din cele ${person.pets.length} animale ale mele este ${person.pets[0].species} si are ${person.pets[0].age} ani`);
var anCurent=new Date().getFullYear();
console.log(anCurent-person.pets[1].age);
var difference=(anCurent-person.birthYear)-person.pets[0].age;
var petName=person.pets[0].name;
console.log(`Intre ${person.firstName} si ${petName} este o diferente de ${difference} ani.`)

document.getElementById('prop01').innerText=`${person.firstName}, ${person.pets[0].name} ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;
document.getElementById('prop02').innerText=`${person.pets[0].age-person.pets[2].age}`;
document.getElementById('prop03').innerText=`Ma numesc ${person.firstName} ${person.lastName} m-am nascut in ${person.birthYear} si am codul postal ${person.zipCode}`;
document.getElementById('prop04').innerText=`Animalele mele s-au nascut in ${anCurent-person.pets[0].age},  ${anCurent-person.pets[1].age} si  ${anCurent-person.pets[2].age} `;
document.getElementById('prop05').innerText='Folosirea variabilelor este optionala, dar incurajata.'