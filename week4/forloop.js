//part 1
var d=5;
var x=330;
var y=200;
//part 2
var w=100
var h=30
var a=10
var b=400
//part 3
var s=10
var e=10
var f=800

function setup(){
  createCanvas (4000,4000);
  background (205);
  noFill();
}

function draw(){
  //part 1
  noFill();
  strokeWeight(2);
  for (var i = 1; i<3; i++){
    for (var j = 10; j < 70; j+=10){
      ellipse(i*x,y,j*d,j*d);}

  }
  //part 2
  fill(255);
  strokeWeight(2);
  for (var k=1; k<78; k+=5){
    rect(2*k*a,6*k+b,w,h);
  }

  //part 3
  noFill();
  strokeWeight(2);
  for (var n=1; n<1.5; n+=1/20){
    for (var m=1; m<100; m+=4){
      ellipse(m*e,n*f,s,s);
      line(m*e,n*f, 500, 1000)
    }
  }



}
