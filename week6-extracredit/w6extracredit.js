var angle= 100;

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(255);
  strokeWeight(2);
  line(200,100,400,100);
  push();
  strokeWeight(5);
  translate(300,100);
  rotate(angle);
  angle += 1/8;
  line(0,0,200,200);
}
