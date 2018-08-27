function setup() {
  // put setup code here
  createCanvas (800, 400);
  background (204);
}

function draw() {
  //head
  fill(8, 170, 0);
  ellipse (150,100,150,70);
  //mouth
  fill(255, 71, 135);
  ellipse (150,110,70,15);
  //left eye
  fill(71, 153, 255);
  ellipse (110,65,20,20);
  //right eye
  fill(71, 153, 255);
  ellipse (185,65,20,20);
}
