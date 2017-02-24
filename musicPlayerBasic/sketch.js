//This is a basic music player, it includes a background image, song file, and play-pause button.
//Change the song or image by replacing the name of the current file with one of those in the comments.
//Add new files by adding them to the "musicPlayerBasic" folder. 
//In order to use the new files, simply replace the current file with the new file name.
//To replay the song, refreh the pop-up window.


var sound;
var bg;
var button;
function preload(){
  sound = loadSound('giveUp.mp3') //song files included: giveUp.mp3, shootingStars.mp3, shoulderKiss.mp3, holdingOn.mp3
}

function setup() {
  bg = loadImage('astley.jpg') //image files included: astley.jpg, vaporWave.jpg
  createCanvas(100,100) //make sure the canvas is the same size as your image (resolution)
  button=createButton("play")
  button.mousePressed(togglePlaying)  
  function togglePlaying(){
    if (!sound.isPlaying()) {
    sound.play();
    button.html("pause");
  }  
  else {
   sound.pause();
   button.html("play");
 }
  }
}

function draw() {
  background(bg)
}