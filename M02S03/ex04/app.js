let image=document.querySelector('.image');
const showMessage = (message) => {
let paragraph = document.getElementById('toaster');
 
  if (paragraph) {
    paragraph.innerText = message;

  }else {
    let p =document.createElement('p');
    p.innerText = message;
    p.id = 'toaster'
    document.body.appendChild(p);
  }
}

image.addEventListener('load', () => {
  showMessage ('Imaginea s-a incarcat.')
  image.addEventListener('click', (evt) => {
    alert(`Imagine cu url-ul ${evt.target.src}    s-a incarcat`)
  })
})