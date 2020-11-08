"use strict";

// timer function
function timer(){
document.getElementById("startgame").addEventListener("click", function(){
  document.getElementById("startgame").style.visibility = 'hidden';
  var timeleft = 60;
  var downloadTimer = setInterval(function function1(){
  document.getElementById("countdown").innerHTML = "Time remain : " + timeleft + 
  "&nbsp"+"seconds";

  timeleft -= 1;
  if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!"
  }
  }, 1000);
  console.log(countdown);
});
}


//vars
var randPositionX = 0;
var randPositionY = 0;
var currentPositionX = 0;
var currentPositionY = 0;
var clickedPositionX = 0;
var clickedPositionY = 0;
var distance = 10000;
var audio = new Audio("./asset/audio/comehere.mp3")

//functions

function randomPosition(){          // generate random position for cursor to approach 
    randPositionX = Math.random() * window.innerWidth;
    randPositionY = Math.random() * window.innerHeight;
    return {
      randPositionX, randPositionX
    }
}

function getMousePos(evt) {
  currentPositionX = evt.clientX;
  currentPositionY = evt.clientY;
  return {
    currentPositionX, currentPositionX
  }
}

function calcDistance(){
  distance = Math.sqrt(Math.pow((currentPositionX-randPositionX), 2) + Math.pow((currentPositionY-randPositionY), 2))
  return distance
}

function playAudio(){
if (distance <= 50){
  audio.playbackRate = 5;
}else if (50 < distance && distance <= 150){
  audio.playbackRate = 2;
}else if (150 < distance && distance <= 350){
  audio.playbackRate = 1.5;
}else if (350 < distance && distance <= 600){
  audio.playbackRate = 1;
}else{
  audio.playbackRate = 0.65;
}
document.getElementById("distance").innerHTML = distance;
audio.play()
}



// events
timer();
document.addEventListener('mousemove', calcDistance);
document.addEventListener('mousemove', getMousePos);
setInterval(playAudio, 50)
randomPosition();

//document.addEventListener('click', );


