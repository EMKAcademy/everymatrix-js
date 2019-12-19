let boxElement = document.querySelector('.box');
let cssClassName = 'animate-class'
let applyButton = document.querySelector('button');
let darkenButton = document.getElementById('darkenButton');

window.setTimeout(() => { 
  boxElement.classList.add(cssClassName);

  window.setTimeout(() => {
    boxElement.classList.remove(cssClassName);
  }, 2000);
}, 2000);

applyButton.addEventListener('click', (evt) => {
  if (boxElement.classList.contains(cssClassName)){
    boxElement.classList.remove(cssClassName);
    evt.target.innerText = 'Adauga';
  } else {
    boxElement.classList.add(cssClassName);
    evt.target.innerText = 'Elimina';
  }
})

darkenButton.addEventListener('click', () => {
  boxElement.style.backgroundColor = "#000";
})