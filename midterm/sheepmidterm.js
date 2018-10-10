var pinksheep;
var bluesheep;
var purplesheep;

function preload(){
  pinksheep = loadImage('pinksheep.png');
  bluesheep = loadImage('bluesheep.png');
  purplesheep = loadImage('purplesheep.png');
}

function setup(){
  createCanvas(800,500);
  background(220);

}

function draw(){
  image(pinksheep, 300,420,40,40 );
  image(bluesheep, 460,420,40,40);
  image(purplesheep, 400,250,80,80);
}
