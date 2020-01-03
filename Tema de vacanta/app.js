let nume = document.getElementById('nume');
let prenume = document.getElementById('prenume');
let addButton = document.querySelector('form');
let subscribed = [];
let lista = document.querySelector('ol');
let mesaj = document.querySelector('h2');
let getWin = document.querySelector('button');
let reset = document.getElementById('reset');


addButton.addEventListener('submit', (evt) => {
    let subscribedEntry = `${nume.value} ${prenume.value}`;
    console.log(subscribedEntry);
    subscribed.push(subscribedEntry);
    lista.innerHTML = " ";
    render();

    evt.preventDefault();
})
   let render = () => {
        for (i = 0; i < subscribed.length; i++) {
            lista.innerHTML += `<li id="button${i}" class="list-group-item-secondary ">${subscribed[i]} <button class=" btn btn-warning float-right" onclick="function remove(){subscribed.splice(${i},1); lista.removeChild(document.getElementById('button${i}'))} remove()">-</button></li>`;
        }
       
    }

    getWin.addEventListener('click', () => {
        let winner = subscribed[Math.floor(Math.random()*subscribed.length)];
        mesaj.innerText = `Castigatorul este ${winner}. Felicitari !`;
    })

    reset.addEventListener('click', ()=>{
        mesaj.innerText="";
        subscribed = [];;
        lista.innerHTML="";
    })