console.log('ceva')

var inputLength=document.getElementById('length');
var inputWidth=document.getElementById('width');
var inputHeight=document.getElementById('height');
var inputRange=document.getElementById('range');
var elementResult=document.getElementById('resultsurface');
var elementResultV=document.getElementById('resultvolume');
var elementResultSC=document.getElementById('resultSC');
var elementResultVS=document.getElementById('resultVS');
var elementResultAS=document.getElementById('resultAS');
var form=document.querySelector('.rectangle-form');


form.addEventListener('submit', function(evt) {
  var length=inputLength.value || 0;
  var width=inputWidth.value || 0;
  var height=inputHeight.value || 0;
  var range=inputRange.value || 0;
  var resultsurface=0;
  var resultvolume=0;
  var resultSC=0;
  var resultVS=0;
  var resultAS=0;

  resultsurface=length*width;
  resultvolume=length*width*height;
  resultSC=Math.pow(range,2)*Math.PI;
  resultVS=(4/3)*Math.pow(range,3)*Math.PI;
  resultAS=(4*Math.PI)*Math.pow(range,2);

  elementResultAS.innerText=resultAS;
  elementResult.innerText=resultsurface;
  elementResultV.innerText=resultvolume;
  elementResultSC.innerText=resultSC;
  elementResultVS.innerText=resultVS;

  evt.preventDefault()
});