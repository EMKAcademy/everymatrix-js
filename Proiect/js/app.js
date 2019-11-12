var inputNumber=document.getElementById('user-number');
var form=document.getElementById('game');
var option=document.getElementById('options');
var difficulty=document.getElementById('difficulty');

// console.log(level);

option.addEventListener('submit', function(evt){
  level=difficulty.options[difficulty.selectedIndex].value;
  console.log(level);
  if (level==1) {
  var  difLevel=10;
  }
  if (level==2) {
   var difLevel=100;
  }
  if (level==3) {
    var difLevel=1000;
  }

  evt.preventDefault();
  generatedNumber=Math.ceil(Math.random()*difLevel);
  console.log(generatedNumber);
})




form.addEventListener('submit', function(evt){
  inputNumber=inputNumber.value;
  if(inputNumber>generatedNumber){
    alert('Numarul introdus e mai mare.')
  }
  
    if(inputNumber<generatedNumber){
      alert('Numarul introdus e mai mic.')
    }
    if(inputNumber==generatedNumber){
      alert('Ai ghicit.')
      location.reload();
    }
  
console.log(generatedNumber);
  evt.preventDefault();
})

form.addEventListener('reset', function(evt){
  location.reload();
  evt.preventDefault()
})
