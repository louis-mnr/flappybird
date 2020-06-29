var cvs= document.getElementById('canvas');

var ctx= cvs.getContext('2d');

var imageName = new Image();
imageName.src="img/soucoupe.png";



var backg = new Image();
backg.src="img/fondturfu";

var tuyaux = new Image();
tuyaux.src="img/tuyauxmario.png";

var sol = new Image();
sol.src="img/fg.png";



function draw(){

  ctx.drawImage( backg, 0, 0, 288,512);

  ctx.drawImage(imageName, 100, 150, 50, 50);

  ctx.drawImage(sol, 0, cvs.height - sol.height);

  /*ctx.drawImage( tuyaux, pX, pY);
  
 ctx.drawImage( tuyaux, pX, pY+Const);

  ctx.drawImage( fg, 0, cvs.height - fg.height);

  ctx.drawImage( bird, bX, bY);*/

}
  requestAnimationFrame(draw);
