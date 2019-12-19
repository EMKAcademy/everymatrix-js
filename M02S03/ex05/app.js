const showMessage = (message, targetElement) => {
  let paragraph = document.getElementById(targetElement);
   
    if (paragraph) {
      paragraph.innerText = message;
  
    }else {
      let p =document.createElement('p');
      p.innerText = message;
      p.id = targetElement;
      document.body.appendChild(p);
    }
  };
let originalWidth = window.innerWidth;

window.addEventListener('resize', module.exports( (evt) => {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  console.log('fereastra si-a schimbat dimensiunea');
  showMessage(`Fereastra are ${evt.target.innerWidth} pixeli`, 'toaster');

  if (evt.target.innerWidth !== originalWidth) {
    showMessage(`Fereastra si-a schimbat latimea`)
    showMessage(`Fereastra si-a schimbat dimensiunea si are acum suprafata de ${windowHeight*windowWidth} pixeli`)
  }
}, 400))

function pagesurface() {
 let width = window.innerWidth;
 let height = window.innerHeight;
 showMessage(width*height, 'test');

}

window.addEventListener('DOMContentLoaded', pagesurface)
