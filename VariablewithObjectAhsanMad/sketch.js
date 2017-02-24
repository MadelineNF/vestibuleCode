
/*
https://vimeo.com/channels/learningp5js/138327558
*/
var circle = {
  diameter: 50,
};
 
var sound; 
 
function preLoad(){
 
}

function setup() {
  createCanvas(600, 400); 
}
 
function draw() {
  // background
  var r = mouseY
var g = mouseX
var b = random([1],[255])
  background(r, g, b);
  // ellipse
  fill(mouseX, mouseY, 100);
  ellipse(mouseX, mouseY, circle.diameter, circle.diameter);
}
