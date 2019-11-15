var numar=document.getElementById('frauda'),
    watchers=Math.floor(Math.random()*10)+1;

    numar.innerText=watchers;

    var time = setInterval(function() {
      watchers=Math.floor(Math.random()*10)+1;
      numar.innerText=watchers;
  
    },1000)