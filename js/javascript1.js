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


//functions

function randomPosition(){          // generate random position for cursor to approach 
    randPositionX = Math.floor(Math.random() * window.innerWidth);
    randPositionY = Math.floor(Math.random() * window.innerHeight);
    return randPositionX, randPositionX
}

function getMousePos(evt) {
  return {
    x: evt.clientX,
    y: evt.clientY
  }
}
  

// events
c.addEventListener('click', function(evt) {getClickedMouseXY(evt)});

