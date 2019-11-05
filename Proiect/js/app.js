var inputNumber=document.getElementById('user-number');
var generatedNumber=Math.ceil(Math.random()*10);
var form=document.getElementById('game')
console.log(generatedNumber)

form.addEventListener('submit', function(evt){
  inputNumber=inputNumber.value;
  if(inputNumber>generatedNumber){
    alert('Numarul introdus e mai mare.')
  }
  else{
    if(inputNumber<generatedNumber){
      alert('Numarul introdus e mai mic.')
    }
    else{
      alert('Ai ghicit.')
      location.reload();
    }
  }

  evt.preventDefault();
})

form.addEventListener('reset', function(evt){
  location.reload();
  evt.preventDefault()
})