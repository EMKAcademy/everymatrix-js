let personForm = document.getElementById('personForm');
let addSkillButton = document.getElementById('addSkill');
let addSkillInput = document.getElementById('skillInput');
let petSwitch = document.getElementById('hasPets');
let petFieldset = document.getElementById('pet');
let petNameInput = document.getElementById('petName');
let petSpeciesInput = document.getElementById('petSpecies');
let petAgeInput = document.getElementById('petAge');
let addPetButton = document.getElementById('addPetButton');
let person;

class Person {
  skills = [];
  pets = [];
  petsSpecies = [];
  petsAge = [];
  constructor(
    name,
    surname,
    age
  ) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.container = document.getElementById('details');
  }

  render() {
    this.clear()
    this.namePara = document.createElement('p');
    this.surnamePara = document.createElement('p');
    this.agePara = document.createElement('p');
    this.skillsList = document.createElement('ul');
    this.petsList = document.createElement('ul');

    this.namePara.innerText = this.name;
    this.surnamePara.innerText = this.surname;
    this.agePara.innerText = this.age;

    this.skills.forEach((skill) => {
      let skillLi = document.createElement('li');
      skillLi.innerText = skill;

      this.skillsList.appendChild(skillLi);
    });

    this.pets.forEach((pet)=>{
      let petLi = document.createElement('li');
      petLi.innerText = `Name ${pet.name}, Specie: ${pet.species},Varsta: ${pet.age}`;
      this.petsList.appendChild(petLi);
    })

    this.container.appendChild(this.namePara);
    this.container.appendChild(this.surnamePara);
    this.container.appendChild(this.agePara);
    this.container.appendChild(this.skillsList);
    this.container.appendChild(this.petsList);
  }

  clear() {
   this.container.innerHTML='';
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  addPet(pet) {
  this.pets.push(pet);
  }
  addPetSpecies(species) {
    this.petsSpecies.push(species);
  }
  addPetAge(age) {
    this.petsAge.push(age);
  }
}

personForm.addEventListener('submit', (evt) => {
  let inputArray = evt.target.querySelectorAll('input');

  person = new Person(inputArray[0].value, inputArray[1].value,inputArray[2].value);
  person.render();
  
  evt.preventDefault();
})

addSkillButton.addEventListener('click', () => {
  let skillName = addSkillInput.value;

  if (skillName.trim().length > 0) {
    person.addSkill(skillName);
    person.render();
  }

});

class Pet {
  constructor(petName, petSpecies, petAge) {
    this.name = petName;
    this.species = petSpecies;
    this.age = petAge;
  }
}

addPetButton.addEventListener('click', () => {
  let petName = petNameInput.value;
  let petSpecies = petSpeciesInput.value;
  let petAge = petAgeInput.value;
  if (petName.trim().length > 0) {
    let pet = new Pet(petName, petSpecies, petAge);
    person.addPet(pet);
  
    person.render();
  }
  
 
})

petSwitch.addEventListener('change', (evt) => {
  console.log(evt)
  if (evt.target.checked) {
    petFieldset.style.display='block'
  } else {
    petFieldset.style.display='none'
  }
})