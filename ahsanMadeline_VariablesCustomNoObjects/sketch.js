var x1 = 200;
var x2 = 150;
var x3 = 120;
var x4 = 150;
var x5 = 150;
var x6 = 250;
var x7 = 280;
var x8 = 250;
var y1 = 200;
var y2 = 200;
var y3 = 380
var y4 = 380
var y5 = 325
var length = 100; 
var wid = 200;
var length1 = 100
var wid1 = 180
 
function setup() {
  createCanvas(400, 500);  
}
 
function draw() {
  
  var r = random([1],[255])
var g = random([1],[255])
var b = random([1],[255])
  // background
  background(r, g, b);
  // rocket
  fill(180);
 ellipse(x1,y1,length,wid); //ellispe that makes the nose of the rocket
 fill(255, 204, 0)
 rect(x2,y2,length1,wid1); // Makes the fuselage of the rocket
 triangle(x3, y3,x4,y4,x5,y5); // makes the left fin of the rocket
 triangle(x6, y3, x7, y4, x8, y5 ); // makes the right fin
 stroke('black');
 strokeWeight(4);
 line(200, 325, 200, 380);// we add a line so it looks like the third fin.
  y1 = y1 - 1;
  y2 = y2 - 1;
  y3 = y3 - 1;
  y4 = y4 - 1;
  y5 = y5 - 1;
}