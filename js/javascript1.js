"use strict";

// timer function
function timer() {
    document.getElementById("startGame").addEventListener("click", function() {
        document.getElementById("startGame").style.visibility = 'hidden';
        var timeleft = 30;
        downloadTimer = setInterval(function function1() {
            document.getElementById("countdown").innerHTML = "Time remain : " + timeleft +
                "&nbsp" + "seconds";
            timeleft -= 1;
            if (timeleft <= 0) {
                loss();
            }
        }, 1000);
        console.log(countdown);
    });
}


//vars
var downloadTimer;
var randPositionX = 0;
var randPositionY = 0;
var currentPositionX = 0;
var currentPositionY = 0;
var clickedPositionX = 0;
var clickedPositionY = 0;
var distance = 10000;
var audio = new Audio("./asset/audio/comehere.mp3");
var audioVictory = new Audio("./asset/audio/fuckoff.mp3");
var audioLoss = new Audio("./asset/audio/loss_sound.mp3");
var start;

//functions

function randomPosition() { // generate random position for cursor to approach 
    randPositionX = Math.random() * window.innerWidth;
    randPositionY = Math.random() * window.innerHeight;
    return {
        randPositionX,
        randPositionX
    }
}

function getMousePos(evt) {
    currentPositionX = evt.clientX;
    currentPositionY = evt.clientY;
    return {
        currentPositionX,
        currentPositionX
    }
}

function calcDistance() {
    distance = Math.sqrt(Math.pow((currentPositionX - randPositionX), 2) + Math.pow((currentPositionY - randPositionY), 2))
    return distance
}

function playAudio() {
    if (distance <= 50) {
        audio.playbackRate = 5;
    } else if (50 < distance && distance <= 150) {
        audio.playbackRate = 2;
    } else if (150 < distance && distance <= 350) {
        audio.playbackRate = 1.5;
    } else if (350 < distance && distance <= 600) {
        audio.playbackRate = 1;
    } else {
        audio.playbackRate = 0.65;
    }
    audio.play()
}

function checkInRange() {
    if (distance <= 40) victory()
}

function showImage() {
    var img = document.getElementById('myImageId');
    img.style.visibility = "visible";
    clearInterval(document);
}

function victory() {
    clearInterval(downloadTimer);
    showImage();
    document.getElementById("countdown").innerHTML = "You have found Gordon. He likes you <3";
    audioVictory.play();
    clearInterval(start);
}

function loss() {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Time is up!";
    audioLoss.play();
    clearInterval(start);
}



function start() {
    start = setInterval(playAudio, 50);
}
// events
timer();
document.addEventListener('mousemove', calcDistance);
document.addEventListener('mousemove', getMousePos);
start();
randomPosition();

document.addEventListener('click', checkInRange);