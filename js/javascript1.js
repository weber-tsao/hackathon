"use strict";

//set up for canvas

var c=document.getElementById('myCanvas');
var ctx=c.getContext('2d');	
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//vars
var positionX = 0;
var positionY = 0;


//functions

function randomPosition(){
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    positionX = Math.floor(Math.random() * canvas.width);;
    positionY = Math.floor(Math.random() * canvas.height);
}