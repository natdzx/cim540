function setup() {
createCanvas(800,700);
background (0, 74, 107);
angleMode(DEGREES);
}

function draw(){
fill(191, 236, 255);
noStroke();
beginShape();
vertex(380,700);
vertex(380,600);
vertex(280,630);
vertex(170,500);
vertex(350,300);
vertex(480,360);
vertex(500,100);
vertex(600,150);
vertex(570,260);
vertex(680,150);
vertex(710,240);
vertex(600,410);
vertex(660,550);
vertex(640,700);
endShape();
fill(89, 34, 170);
ellipse(350,400,40,40);
fill(215, 188, 255);
ellipse(340,405,20,20);
}
