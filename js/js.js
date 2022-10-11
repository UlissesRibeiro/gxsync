//script de loader
var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";
    

}, 2000);


var vid = document.getElementById("myVideo");
vid.autoplay = false;
vid.controls = true;
vid.load();