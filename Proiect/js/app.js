var inputElement=document.getElementById('user-number');
var form=document.getElementById('game');
var option=document.getElementById('options');
var difficulty=document.getElementById('difficulty');
var generatedNumber=0;
var usedNumbers=[];
var time = 0;
// console.log(level);
var difficultyMap = {
  easy: 10,
  medium: 100,
  hard: 1000
};
var selectedDifficulty=difficultyMap['easy'];

function timer(){
  time=time-1
  console.log(time)
  let rahat = document.getElementById('timebar');
  rahat.style.width=time+'%';
  if(time === 0){
  alert('Timpul a expirat')
  startGame(selectedDifficulty);
  }
}


function startGame(difLevel) {
  time=100;
  setInterval(timer,1000);
  generatedNumber=Math.ceil(Math.random()*difLevel);
  selectedDifficulty=difLevel;
  console.log(generatedNumber);
  
}


option.addEventListener('submit', function(evt){
  var level=difficulty.options[difficulty.selectedIndex].value;
  startGame(difficultyMap[level]);
  evt.preventDefault();
  
 
});




form.addEventListener('submit', function(evt){
  inputNumber=inputElement.value;
  usedNumbers.push(inputNumber);
  usedN=document.getElementById('usedNumbers');
  usedN.innerText = usedNumbers;
  if(inputNumber>generatedNumber){
    alert('Numarul introdus e mai mare.')
  }
  
  if(inputNumber<generatedNumber){
    alert('Numarul introdus e mai mic.')
  }
  if(inputNumber==generatedNumber){
    alert('Ai ghicit.');
    startGame(selectedDifficulty);

    
  }
  

  evt.preventDefault();
})

form.addEventListener('reset', function(evt){
  startGame(selectedDifficulty);
  evt.preventDefault()
})



startGame(selectedDifficulty);