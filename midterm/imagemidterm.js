var sun;
var moon;
//var clock;

function preload(){
  sun= loadImage('sun.png');
  moon= loadImage('moon.png');
  //clock= loadImage('clocknohands.png')
}

function setup(){
  createCanvas(800,500);
  background(220);

}

function draw(){
  fill(0);
  rect(0,0,800,400);
  fill(255,220,0);
  noStroke();
  rect(0,400,800,200);
  image(sun, 300,420,40,40 );
  image(moon, 460,420,40,40);
  //image(clock, 400,250, 80,80);
}
