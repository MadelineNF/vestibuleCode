function setup() {
  createCanvas(600, 400);
  background(250, 250, 100);
}
//draw function 
function draw() {
  fill(250, 200, 200);
  ellipse(mouseX, mouseY, 100, 100);
}
 
// mousePressed function
function mousePressed() {
  background(235, 251, 250);
}
//mouse clicked function to make background alternate wcolors when mouse is clicked
function mouseClicked() {
  background(250, 250, 100)
}