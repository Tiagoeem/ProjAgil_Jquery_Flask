





elemento0 = document.getElementById("demo0");

elemento0.onclick = function(e) {
    e.target.innerHTML = "Hello World!";
}














function bgChange() {
    var rndCol = 'rgb(' + 100 + ',' + 100 + ',' + 100 + ')';
    document.body.style.backgroundColor = rndCol;
}

elemento1 = document.getElementById("demo1");
  
elemento1.addEventListener('click', bgChange);
















elememto2 = document.getElementById("demo2");

elememto2.addEventListener('click', function () {

    var rndCol = 'rgb(' + 200 + ',' + 200 + ',' + 200 + ')';
    document.body.style.backgroundColor = rndCol;  

} );

/*
function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}   

btn.addEventListener('click', bgChange);
*/
