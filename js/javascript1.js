"use strict";

var a = document.getElementsByTagName('input')
var count = 62;
function countDown(){
 count--;
 a[0].value = count;
if(count==61){
	a[0].value="Start"
}
else if(count<=0){
	a[0].value="End"
}
}
setInterval(countDown, 1000)



//vars

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