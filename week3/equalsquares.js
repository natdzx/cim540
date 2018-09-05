var x=30;
var y=20;
var s=20;
var d=60;


function setup (){
createCanvas (600,250);
background (200);
}

function draw(){
rect(x,y,s,s);
rect(x+s+d,y,2*s,2*s);
rect(x+3*s+2*d,y,3*s,3*s);


}
