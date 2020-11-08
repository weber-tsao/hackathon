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
var audio = new Audio("./asset/audio/comehere.mp3")

//functions

function randomPosition(){          // generate random position for cursor to approach 
    randPositionX = Math.floor(Math.random() * window.innerWidth);
    randPositionY = Math.floor(Math.random() * window.innerHeight);
    return {
      randPositionX, randPositionX
    }
}

function getMousePos(evt) {
  return {
    currentPositionX: evt.clientX,
    currentPositionY: evt.clientY
  }
}

function calcDistance(){
  var distance = Math.sqrt(Math.pow((currentPositionX-randPositionX), 2) - Math.pow((currentPositionY-randPositionY), 2))
  if (distance < 100) {
    audio.play();
  }else if (200 <= distance < 300){
    audio.play();
  }else if (300 <= distance < 500){
    audio.play();
  }else{
    audio.play();
  }
}




// events

document.addEventListener('mousemove', calcDistance);
randomPosition();

//document.addEventListener('click', );


