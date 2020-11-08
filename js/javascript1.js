"use strict";

// timer function
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
  distance = Math.sqrt(Math.pow((currentPositionX-randPositionX), 2) - Math.pow((currentPositionY-randPositionY), 2))
  return distance
}

function playAudio(){
if (distance < 100){
  audio.playbackRate = 3
}else if (100 <= distance < 250){
  audio.playbackRate = 2
}else if (250 <= distance < 500){
  audio.playbackRate = 1
}else{
  audio.playbackRate = 0.8
}
document.getElementById("distance").innerHTML = distance;
audio.play()
}



// events

document.addEventListener('mousemove', calcDistance);
document.addEventListener('mousemove', getMousePos);
setInterval(playAudio, 300)
randomPosition();

//document.addEventListener('click', );


