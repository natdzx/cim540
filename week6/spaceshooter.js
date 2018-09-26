var x = 60;
var y = 60;
function setup(){
  createCanvas(220,220);
}

function draw(){
  background(0);
  fill(255);
  if(keyIsPressed){
    if(keyCode == LEFT_ARROW){
      x = x-5;
    }else if(keyCode == RIGHT_ARROW){
      x = x+5;
    }
    if(keyCode == UP_ARROW){
      y = y-5;
    }else if(keyCode == DOWN_ARROW){
      y = y+5;
    }
    if(key == 'd'){
      stroke(255,255,0);
      line(x+20,y,220,y);
    }

  }
  noStroke();
  rect(x, y, 20, 20);
}
