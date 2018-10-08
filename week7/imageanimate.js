var water;
var floatie;


function preload(){
  water= loadImage('water.jpg');
  floatie= loadImage('floatie.png');
}

function setup(){
  createCanvas(800,500);
  background(220);

}

function draw(){
  tint(240,240,255);
  image(water, 0,0,800,500 );
  tint(220,200,200,250);
  image(floatie, mouseX,mouseY,400,300);

}
