var mountains;

function preload(){
  mountains = loadImage('mountains.jpg');
}

function moai(initX, initY, size){
  this.x = initX;
  this.y = initY;
  this.size = size;

  this.moai = function(){
    noStroke();
    fill(252, 153, 201)
    rect(this.x,this.y,this.size-80,this.size-40);
    fill(211, 57, 118)
    ellipse(this.x+40,this.y+40,this.size-80-70,this.size-40-220);
    ellipse(this.x+60+40,this.y+80,this.size-80-70-20,this.size-40-200);
    rect(this.x+30,this.y+100+30,this.size-80-70,this.size-180);
  }
}

function setup(){
  createCanvas(800,1600);
  image(mountains, 50,50,500,800);
  moai1 = new moai(350,600,200);
  moai2 = new moai(100,550,200);
  moai3 = new moai(80,300,200);
  moai4 = new moai(250,280,200);
  moai5 = new moai(390,400,200);
}

var moai1;
var moai2;
var moai3;
var moai4;
var moai5;

function draw(){
  // noStroke();
  // fill(252, 153, 201)
  // rect(100,80,100,160);
  // fill(211, 57, 118)
  // ellipse(120,140,20,40);
  // ellipse(160,130,30,40);
  // rect(140,180,30,15);
  moai1.moai();
  moai2.moai();
  moai3.moai();
  moai4.moai();
  moai5.moai();
}
