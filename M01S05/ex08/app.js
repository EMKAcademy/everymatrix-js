let button = document.getElementById('clicker');
const clickerCickHandler = () => {
  alert('Am apasat butonul')
}
let removeEventBuutton = document.getElementById('removeEventButton')
button.addEventListener('click', clickerCickHandler)
removeEventBuutton.addEventListener('click', ()=> {
  button.removeEventListener('click', clickerCickHandler)
})
let queryButton = document.getElementById('query')
let age=0;

queryButton.addEventListener('click', () => {
  age = prompt('Cati ani ai?');
  let message = `Ai ${age} ani.`;
  messageParagraph.innerText = message;
})

let messageParagraph = document.getElementById('message');
