let stage = document.querySelector('.stage');
let message = document.querySelector('.message');
let countElement = document.querySelector('.count')
let count = 0;

stage.addEventListener('mouseover', () => {
  message.innerText = 'Mouse-ul este pe scena'; 
  count = count + 1;

});

stage.addEventListener('mouseout', ()=> {
  message.innerText = 'Mouse-ul nu este pe scena';
  countElement.innerText=`Mouse-ul a fost pe scena de ${count} ori`
})