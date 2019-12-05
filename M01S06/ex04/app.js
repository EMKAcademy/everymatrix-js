(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let stage = document.querySelector('.stage');
    const showMessage = (message) => {
      let p = document.createElement('p');
      p.innerText = message;
      p.classList.add('message');
      document.body.appendChild(p);
      setTimeout(() => {p.remove()}, 1000)
    }
    stage.addEventListener('mouseover', () => {
     showMessage('Mouse-ul este pe scena')
    });
   
    stage.addEventListener('mouseout', () => {
      showMessage('Mouse-ul nu este pe scena')
    })
  })
})();

