var cvs= document.getElementById('canvas');

var ctx= cvs.getContext('2d');

var imageName = new Image();
imageName.src="img/soucoupe.png";



var backg = new Image();
backg.src="img/fondturfu";

function draw(){

  ctx.drawImage( backg, 0, 0, 288,512);

  ctx.drawImage(imageName, 100, 150, 50, 50);

  /*ctx.drawImage( pipeNorth, pX, pY);
  ctx.drawImage( pipeSouth, pX, pY+Const)

  ctx.drawImage( fg, 0, cvs.height - fg.height);

  ctx.drawImage( bird, bX, bY);*/

}
  requestAnimationFrame(draw);
