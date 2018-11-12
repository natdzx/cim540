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
    beginShape();
    vertex(this.x,this.y);
    vertex(this.x+this.size/2,this.y);
    vertex(this.x+this.size/2,this.y+this.size);
    vertex(this.x,this.y+this.size);
    endShape();
    fill(211, 57, 118)
    ellipse(this.x+this.size/6,this.y+this.size/5,this.size/6,this.size/4 );
    ellipse(this.x+this.size/3, this.y+this.size*2/5, this.size/8, this.size/10);
    rect(this.x+this.size/6, this.y+this.size*3/4,this.size/4,this.size/10);
  }
}

function setup(){
  createCanvas(800,1600);
  image(mountains, 50,50,500,800);
  moai1 = new moai(120,620,200);
  moai2 = new moai(240,620,160);
  moai3 = new moai(340,560,120);
  moai4 = new moai(120,380,100);
  moai5 = new moai(200,380,80);
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
