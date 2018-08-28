function setup() {
  // put setup code here
  createCanvas (800, 400);
  background (204);
}

function draw() {
  //head
  //fill(8, 170, 0);
  ellipse (200,100,40,40);
  //mouth
  //fill(255, 71, 135);
  rect(185,120,30,100);
  //left eye
  //fill(71, 153, 255);
  //bottom left, bottom right,  top right , top left
  quad (140,250,185,220,185,120,140,100);
  //right eye
  //fill(71, 153, 255);
  quad (260,250,215,220,215,120,260,100);
}
