"use strict";

// timer function
document.getElementById("startTimer").addEventListener("click", function(){
  var timeleft = 60;
  var downloadTimer = setInterval(function function1(){
  document.getElementById("countdown").innerHTML = timeleft + 
  "&nbsp"+"seconds remaining";

  timeleft -= 1;
  if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!"
  }
  }, 1000);
  console.log(countdown);
});




//set canvas
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');	



//vars
var randPositionX = 0;
var randPositionY = 0;
var currentPositionX = 0;
var currentPositionY = 0;


//functions

function randomPosition(){          // generate random position for cursor to approach 
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    randPositionX = Math.floor(Math.random() * canvas.width);
    randPositionY = Math.floor(Math.random() * canvas.height);
}

function getMousePos(evt) {
  var canvas = document.getElementById("myCanvas");
  var boundingRect = canvas.getBoundingClientRect();
  var offsetX = boundingRect.left;
  var offsetY = boundingRect.top;
  return {
    x: evt.clientX - offsetX,
    y: evt.clientY - offsetY
  }
}

function getClickedMouseXY(e) { 
  var canvas = document.getElementById("myCanvas");
  var boundingRect = canvas.getBoundingClientRect();
  var offsetX = boundingRect.left;
  var offsetY = boundingRect.top;
  var w = (boundingRect.width-canvas.width)/2;
  var h = (boundingRect.height-canvas.height)/2;
  offsetX += w;
  offsetY += h;
  var mx = Math.round(e.clientX-offsetX);
  var my = Math.round(e.clientY-offsetY);
  console.log(mx);
  console.log(my);

  return {x: mx, y: my};
  }
  
  function findCurrentMousePosition(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
  }
// events
c.addEventListener('click', function(evt) {getClickedMouseXY(evt)});

