var pink;
var blue;
var purple;
var pinkhelmet;
var bluehelmet;
var purplehelmet;
var ship;
var bluelight;
var greenlight;
var angle = 10;
var pinkdistance = 650;
var bluedistance = 650;
var purpledistance = 650;
var bluedone = 0;
var pinkdone = 0;
var purpledone = 0;

function preload(){
  pink = loadImage('./img/pink.svg');
  blue = loadImage('./img/blue.svg');
  purple = loadImage('./img/purple.svg');
  ship = loadImage('./img/spaceship.svg');
  pinkhelmet = loadImage('./img/pinkhelmet.svg');
  bluehelmet = loadImage('./img/bluehelmet.svg');
  purplehelmet = loadImage('./img/purplehelmet.svg');
  bluelight = loadImage('./img/bluelight.svg');
  greenlight = loadImage('./img/greenlight.svg');
}

function setup(){
  createCanvas(1300,800);
  background(220);
}

function draw(){
  fill(13,87,124);
  rect(0,0,1300,800);
  fill(255);

  if (mouseIsPressed) {
    if(mouseX>200 && mouseX<320 && mouseY>600 && mouseY<740){

      push();
      translate(250,pinkdistance);
      rotate(angle);
      image(pinkhelmet,-50,-5,120,140 );
      angle+= .1;
      pop();

      pinkdistance -=4;
      if(pinkdistance < 150) {
        pinkdistance = -200;
        pinkdone = 1;
      }

    } else {
      if(pinkdone == 0) {
      image(pink,200,600,120,140 );
      }
    }


    if(mouseX>600 && mouseX<720 && mouseY>600 && mouseY<740){
      //image(bluehelmet,600,600,120,140);
      push();
      translate(650,bluedistance);
      image(bluehelmet,-50,-5,120,140 );
      pop();

      bluedistance -=4;
      if(bluedistance < 70) {
        bluedistance = -200;
        bluedone = 1;
      }

    }else {
      if(bluedone == 0) {
      image(blue,600,600,120,140);
      }
    }


    if(mouseX>1000 && mouseX<1120 && mouseY>600 && mouseY<740){
      //image(purplehelmet,1000,600,120,140);
      push();
      translate(1050,purpledistance);
      rotate(angle);
      image(purplehelmet,-50,-5,120,140 );
      angle+= .1;
      pop();

      purpledistance -=4;
      if(purpledistance < 150) {
        purpledistance = -200;
        purpledone = 1;
      }

    }else {
      if(purpledone == 0) {
      image(purple,1000,600,120,140);
      }
    }

  }else {
    if(bluedone == 0) {
    image(blue,600,600,120,140);
    }if (pinkdone == 0) {
    image(pink,200,600,120,140);
    }if (purpledone == 0) {
    image(purple,1000,600,120,140);
    }
  }

  if (mouseX>200 && mouseX<320){
    push();
    tint(146,255,179,50);
    image(greenlight,mouseX-100,120,180,700);
    pop();
    text('Click the sheep!',550,400);
    textSize(30);

  } else if (mouseX>600 && mouseX<720){
    push();
    tint(146,255,179,50);
    image(greenlight,mouseX-100,120,180,700)
    pop();
    text('Click the sheep!',550,400);
    textSize(30);

  }else if (mouseX>1000 && mouseX<1120){
    push();
    tint(146,255,179,50);
    image(greenlight,mouseX-100,120,180,700)
    pop();
    text('Click the sheep!',550,400);
    textSize(30);

  }else(image(bluelight,mouseX-100,120,180,700))


  image(ship,mouseX-100,40,180,100);
  //quad(640,130,760,130,810,800,590,800);
  /*if(pinkdone == 0){
    fill(13,87,124);
    rect(550,350,250,100);
  }*/

}
