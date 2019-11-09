console.log('Catalin Curelea');
var greet=document.getElementById('hello');
var apasa=document.getElementById('apasa');
var apasa2=document.getElementById('apasa2');
var apasa3=document.getElementById('apasa3');

window.onload=function() {
  var nume=prompt('Care este numele tau?');
  console.log(nume);
};
apasa3.addEventListener('mouseover', function() {
  console.log('Vrei sa apesi acest buton?');
});
apasa3.addEventListener('click', function() {
  var nume=prompt('Care este numele tau?');
  console.log(nume);
})
apasa2.addEventListener('click', function() {
  alert('Butonul a fost apasat');
});
apasa.addEventListener('click', function() {
  console.log('Am fost apasat');
});
hello.addEventListener('click', function() {
  alert('Catalin Curelea');
});
