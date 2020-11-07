"use strict";

// timer function
document.getElementById("gameStart").addEventListener("click", function(){
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


//functions

function randomPosition(){          // generate random position for cursor to approach 
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    randPositionX = Math.floor(Math.random() * canvas.width);;
    randPositionY = Math.floor(Math.random() * canvas.height);
}

function findMouseCoordsOnCanv(mouseEvent) // this returns xpos, y pos of mouse on canvas
{
  var c = document.getElementById("myCanvas");
  var c_left = 0;
  var c_top = 0;
  var xpos;
  var ypos;
  while (c.offsetParent)
  {
    c_left += c.offsetLeft;
    c_top += c.offsetTop;
    c = c.offsetParent;
  }
  if (mouseEvent)
  {
    //FireFox
    xpos = mouseEvent.pageX;
    ypos = mouseEvent.pageY;
  }
  else
  {
    //IE
    xpos = window.event.x + document.body.scrollLeft - 2;
    ypos = window.event.y + document.body.scrollTop - 2;
  }
  xpos -= c_left;
  ypos -= c_top;
  document.getElementById("myCanvas").innerHTML = xpos + ", " + ypos;
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
  return {x: mx, y: my};
  }
  


// events

document.getElementById("myCanvas").onmousemove = findMouseCoordsOnCanv;

