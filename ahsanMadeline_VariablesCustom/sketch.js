
//ahsanDrivingMadelineTyping
function setup() {
  createCanvas(720,480)
  background(0)
}

function draw() { //variables randomized color between 1 and 255
var r = random([1],[255])
var g = random([1],[255])
var b = random([1],[255])
  fill(235,251,250)
  ellipse(360,150,300,100) //elipse hidden under ellipse to for cockpit
  fill(r,g,b) //variables used for beam
  triangle(350,240,550,400,180,400) //triangle hidden under ellipse to form beam
  stroke(5) //stroke to add depth
  strokeWeight(5)
  fill(148, 164, 165)
  ellipse(360,240,500,200)
  fill(235,251,250)
  ellipse(360,240,50,50)
  ellipse(460,240,50,50)
  ellipse(260,240,50,50)
}