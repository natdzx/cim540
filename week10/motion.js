var x = 80;
var y = 0;
var speed = 14;
var speedsun = 2;
var t = 0;
var grow = 1;
var g = 1;

function setup(){
  createCanvas(400,300);
}

function draw(){
  background(0, 36, 51);
  stroke(255);
  currentTime = millis();
  if(currentTime < 5000){
    y += speed;
    line(x,y,x,y+20);
    line(x+50,y+30,x+50,y+20+30);
    line(x+100,y-10,x+100,y+20-10);
    line(x+150,y+80,x+150,y+20+80);
    line(x+200,y-40,x+200,y+20-40);
    if ( y > height){
      y = 0;
      x = random(0,width);
    }
  }else{
    t += speedsun;
    background(142, 185, 255,t);
    if (currentTime > 5000 && currentTime < 6000){
      g += grow
      noStroke();
      fill(255,255,0,);
      ellipse(250,height/3,g,g);
    } else if (currentTime > 6000){
      noStroke();
      fill(255,255,0,);
      ellipse(250,height/3,60,60);
    }


  }




}
