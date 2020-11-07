"use strict";

var a = document.getElementsByTagName('input');
var count = 60;

function myFunction() {
  count--;
  a[0].value = count;
}

setInterval(myFunction, 1000); //load images

var imagesArr;

function preLoad() {
  imagesArr = new Array();
  imagesArr[0] = new Image();
  imagesArr[0].src = "./images/0.jpg";
  imagesArr[1] = new Image();
  imagesArr[1].src = "./images/1.jpg";
  imagesArr[2] = new Image();
  imagesArr[2].src = "./images/2.jpg";
  imagesArr[3] = new Image();
  imagesArr[3].src = "./images/3.jpg";
  imagesArr[4] = new Image();
  imagesArr[4].src = "./images/4.jpg";
  imagesArr[5] = new Image();
  imagesArr[5].src = "./images/5.jpg";
  imagesArr[6] = new Image();
  imagesArr[6].src = "./images/6.jpg";
  imagesArr[7] = new Image();
  imagesArr[7].src = "./images/7.jpg";
  imagesArr[8] = new Image();
  imagesArr[8].src = "./images/8.jpg";
  imagesArr[9] = new Image();
  imagesArr[9].src = "./images/9.jpg";
}

preLoad(); //vars

var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
var recordOfButtons = new Array(); //in order to record what button is pressed

recordOfButtons[0] = 0; //set a default value in case button 4 is the first one get pressed

var arr; //used in function randonm5Numbers()

var arrForPickFrame; //used in function random1to7Numbers()

var cr; //used in function randomColour()

var positionsX, positionsY; //used in function randomPosition and button 4

var allImages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var notUsedImgs;
var r; //functions

function random5Numbers() {
  //generate a array that every parameter is unique to pick up random images( 
  arr = [];

  while (arr.length < 5) {
    var randomN = Math.floor(Math.random() * 10);
    if (arr.indexOf(randomN) === -1) arr.push(randomN);
  }

  return arr;
}

function random1to7Numbers() {
  //generate a array from 1 to 6 to pick up frames
  arrForPickFrame = [];

  while (arrForPickFrame.length < 5) {
    var randomN = Math.floor(Math.random() * 7 + 1);
    if (arrForPickFrame.indexOf(randomN) === -1) arrForPickFrame.push(randomN);
  }

  return arrForPickFrame;
}

function randomColour() {
  //generate random colours
  cr = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  return cr;
}

function pickFrameAndDraw(nth, imgX, imgY) {
  //nth means drawing for nth image (from 0)
  switch (nth) {
    case 1:
      frame1(imgX, imgY);
      break;

    case 2:
      frame2(imgX, imgY);
      break;

    case 3:
      frame3(imgX, imgY);
      break;

    case 4:
      frame4(imgX, imgY);
      break;

    case 5:
      frame5(imgX, imgY);
      break;

    case 6:
      frame6(imgX, imgY);
      break;

    case 7:
      frame7(imgX, imgY);
      break;
  }
}

function getMouseXY(event) {
  //get the click position
  var boundingRect = c.getBoundingClientRect();
  var offsetX = boundingRect.left;
  var offsetY = boundingRect.top;
  var w = (boundingRect.width - c.width) / 2;
  var h = (boundingRect.height - c.height) / 2;
  offsetX += w;
  offsetY += h;
  var mx = Math.round(event.clientX - offsetX);
  var my = Math.round(event.clientY - offsetY);
  return {
    x: mx,
    y: my
  };
}

function NotUsedImage() {
  //find the image that has not been used
  r = Math.floor(Math.random() * 10);

  while (!(arr.indexOf(r) === -1)) {
    r = Math.floor(Math.random() * 10);
  }

  return r;
}

function clickOnAndDraw() {
  switch (recordOfButtons[recordOfButtons.length - 1]) {
    case 1:
      var pos = getMouseXY(event);

      if (80 <= pos.x && pos.x <= 150 && 349 <= pos.y && pos.y <= 419) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], 80, 349, 70, 70);
      } else if (280 <= pos.x && pos.x <= 350 && 349 <= pos.y && pos.y <= 419) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], 280, 349, 70, 70);
      } else if (480 <= pos.x && pos.x <= 550 && 349 <= pos.y && pos.y <= 419) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], 480, 349, 70, 70);
      } else if (680 <= pos.x && pos.x <= 750 && 349 <= pos.y && pos.y <= 419) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], 680, 349, 70, 70);
      } else if (880 <= pos.x && pos.x <= 1050 && 349 <= pos.y && pos.y <= 419) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], 880, 349, 70, 70);
      }

      break;

    case 2:
      var pos = getMouseXY(event);

      if (positionsX[1] <= pos.x && pos.x <= positionsX[1] + 70 && positionsY[1] <= pos.y && pos.y <= positionsY[1] + 70) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], positionsX[1], positionsY[1], 70, 70);
      } else if (positionsX[2] <= pos.x && pos.x <= positionsX[2] + 70 && positionsY[2] <= pos.y && pos.y <= positionsY[2] + 70) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], positionsX[2], positionsY[2], 70, 70);
      } else if (positionsX[3] <= pos.x && pos.x <= positionsX[3] + 70 && positionsY[3] <= pos.y && pos.y <= positionsY[3] + 70) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], positionsX[3], positionsY[3], 70, 70);
      } else if (positionsX[4] <= pos.x && pos.x <= positionsX[4] + 70 && positionsY[4] <= pos.y && pos.y <= positionsY[4] + 70) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], positionsX[4], positionsY[4], 70, 70);
      } else if (positionsX[5] <= pos.x && pos.x <= positionsX[5] + 70 && positionsY[5] <= pos.y && pos.y <= positionsY[5] + 70) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], positionsX[5], positionsY[5], 70, 70);
      }

      break;

    case 3:
      var pos = getMouseXY(event);

      if (148 <= pos.x && pos.x <= 218 && 113 <= pos.y && pos.y <= 183) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], 148, 113, 70, 70);
      } else if (774 <= pos.x && pos.x <= 844 && 113 <= pos.y && pos.y <= 183) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], 774, 113, 70, 70);
      } else if (148 <= pos.x && pos.x <= 218 && 579 <= pos.y && pos.y <= 649) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], 148, 579, 70, 70);
      } else if (774 <= pos.x && pos.x <= 844 && 579 <= pos.y && pos.y <= 649) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], 774, 579, 70, 70);
      } else if (466 <= pos.x && pos.x <= 536 && 346 <= pos.y && pos.y <= 416) {
        NotUsedImage();
        ctx.drawImage(imagesArr[r], 466, 346, 70, 70);
      }

      break;
  }
}

function frame1(imgX, imgY) {
  //imgX imgY are images position
  randomColour();
  ctx.beginPath();
  ctx.moveTo(imgX - 10, imgY - 10);
  ctx.lineTo(imgX - 10, imgY + 80);
  ctx.lineTo(imgX + 80, imgY + 80);
  ctx.lineTo(imgX + 80, imgY - 10);
  ctx.lineTo(imgX - 10, imgY - 10);
  ctx.closePath();
  ctx.stroke(); // Draw it

  ctx.fillStyle = cr;
  ctx.fill();
}

function frame2(imgX, imgY) {
  //imgX imgY are images position
  randomColour();
  ctx.beginPath();
  ctx.moveTo(imgX, imgY - 10);
  ctx.lineTo(imgX, imgY + 80);
  ctx.lineTo(imgX + 70, imgY + 80);
  ctx.lineTo(imgX + 70, imgY - 10);
  ctx.lineTo(imgX, imgY - 10);
  ctx.closePath();
  ctx.stroke(); // Draw it

  ctx.fillStyle = cr;
  ctx.fill();
}

function frame3(imgX, imgY) {
  //imgX imgY are images position
  randomColour();
  ctx.beginPath();
  ctx.arc(imgX + 35, imgY + 35, 50, 0 * Math.PI, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke(); // Draw it

  ctx.fillStyle = cr;
  ctx.fill();
}

function frame4(imgX, imgY) {
  //imgX imgY are images position
  randomColour();
  ctx.beginPath();
  ctx.moveTo(imgX, imgY - 10);
  ctx.lineTo(imgX - 10, imgY);
  ctx.lineTo(imgX - 10, imgY + 70);
  ctx.lineTo(imgX, imgY + 80);
  ctx.lineTo(imgX + 70, imgY + 80);
  ctx.lineTo(imgX + 80, imgY + 70);
  ctx.lineTo(imgX + 80, imgY);
  ctx.lineTo(imgX + 70, imgY - 10);
  ctx.closePath();
  ctx.stroke(); // Draw it

  ctx.fillStyle = cr;
  ctx.fill();
}

function frame5(imgX, imgY) {
  //imgX imgY are images position
  randomColour();
  ctx.beginPath();
  ctx.moveTo(imgX - 5, imgY - 5);
  ctx.lineTo(imgX - 20, imgY + 35);
  ctx.lineTo(imgX - 5, imgY + 75);
  ctx.lineTo(imgX + 75, imgY + 75);
  ctx.lineTo(imgX + 90, imgY + 35);
  ctx.lineTo(imgX + 75, imgY - 5);
  ctx.lineTo(imgX - 5, imgY - 5);
  ctx.closePath();
  ctx.stroke(); // Draw it

  ctx.fillStyle = cr;
  ctx.fill();
}

function frame6(imgX, imgY) {
  //imgX imgY are images position
  randomColour();
  ctx.beginPath();
  ctx.moveTo(imgX - 10, imgY - 10);
  ctx.lineTo(imgX - 10, imgY + 10);
  ctx.lineTo(imgX + 10, imgY + 10);
  ctx.lineTo(imgX + 10, imgY - 10);
  ctx.lineTo(imgX - 10, imgY - 10);
  ctx.moveTo(imgX - 10, imgY + 80);
  ctx.lineTo(imgX - 10, imgY + 60);
  ctx.lineTo(imgX + 10, imgY + 60);
  ctx.lineTo(imgX + 10, imgY + 80);
  ctx.lineTo(imgX - 10, imgY + 80);
  ctx.moveTo(imgX + 80, imgY + 80);
  ctx.lineTo(imgX + 80, imgY + 60);
  ctx.lineTo(imgX + 60, imgY + 60);
  ctx.lineTo(imgX + 60, imgY + 80);
  ctx.lineTo(imgX + 80, imgY + 80);
  ctx.moveTo(imgX + 80, imgY - 10);
  ctx.lineTo(imgX + 80, imgY + 10);
  ctx.lineTo(imgX + 60, imgY + 10);
  ctx.lineTo(imgX + 60, imgY - 10);
  ctx.lineTo(imgX + 80, imgY - 10);
  ctx.closePath();
  ctx.stroke(); // Draw it

  ctx.fillStyle = cr;
  ctx.fill();
}

function frame7(imgX, imgY) {
  //imgX imgY are images position
  randomColour();
  ctx.beginPath();
  ctx.moveTo(imgX - 10, imgY);
  ctx.lineTo(imgX + 80, imgY);
  ctx.lineTo(imgX + 80, imgY + 70);
  ctx.lineTo(imgX - 10, imgY + 70);
  ctx.lineTo(imgX - 10, imgY);
  ctx.closePath();
  ctx.stroke(); // Draw it

  ctx.fillStyle = cr;
  ctx.fill();
} //Buttons


function allInARow() {
  //button 1
  recordOfButtons.push(1);
  random5Numbers();
  random1to7Numbers();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear all

  arr.forEach(function (item, index) {
    pickFrameAndDraw(arrForPickFrame[index], 80 + index * 200, 349);
    ctx.drawImage(imagesArr[item], 80 + index * 200, 349, 70, 70);
  });
}

function randomPosition() {
  //button 2
  recordOfButtons.push(2);
  random5Numbers();
  random1to7Numbers();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear all

  positionsX = [], positionsY = [];
  positionsX[0] = 0;
  positionsY[0] = 0; //set the value for the first X and Y to minus

  var checkIfOverlap;
  arr.forEach(function (item, index) {
    do {
      checkIfOverlap = false;
      var randomX = Math.floor(Math.random() * 934),
          randomY = Math.floor(Math.random() * 678);

      for (var i = 0; i <= index + 1; i++) {
        if (Math.abs(randomX - positionsX[i]) < 110 && Math.abs(randomY - positionsY[i] < 90)) {
          checkIfOverlap = true;
        } //log 11/12/2019 found if this button pressed to frequently the javascript would crash.

      }
    } while (checkIfOverlap);

    pickFrameAndDraw(arrForPickFrame[index], randomX, randomY);
    ctx.drawImage(imagesArr[item], randomX, randomY, 70, 70);
    positionsX.push(randomX);
    positionsY.push(randomY);
  });
}

function collection() {
  //button 3
  recordOfButtons.push(3);
  random5Numbers();
  random1to7Numbers();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear all

  pickFrameAndDraw(arrForPickFrame[0], 148, 113); //surrounds

  ctx.drawImage(imagesArr[arr[0]], 148, 113, 70, 70);
  pickFrameAndDraw(arrForPickFrame[1], 774, 113);
  ctx.drawImage(imagesArr[arr[1]], 774, 113, 70, 70);
  pickFrameAndDraw(arrForPickFrame[2], 148, 579);
  ctx.drawImage(imagesArr[arr[3]], 148, 579, 70, 70);
  pickFrameAndDraw(arrForPickFrame[3], 774, 579);
  ctx.drawImage(imagesArr[arr[4]], 774, 579, 70, 70);
  pickFrameAndDraw(arrForPickFrame[4], 466, 346); //centre

  ctx.drawImage(imagesArr[arr[2]], 466, 346, 70, 70);
}

function changeFrames() {
  switch (recordOfButtons[recordOfButtons.length - 1]) {
    case 1:
      random1to7Numbers();
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear all

      arr.forEach(function (item, index) {
        pickFrameAndDraw(arrForPickFrame[index], 80 + index * 200, 349);
        ctx.drawImage(imagesArr[item], 80 + index * 200, 349, 70, 70);
      });
      break;

    case 2:
      random1to7Numbers();
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear all

      arr.forEach(function (item, index) {
        pickFrameAndDraw(arrForPickFrame[index], positionsX[index + 1], positionsY[index + 1]);
        ctx.drawImage(imagesArr[item], positionsX[index + 1], positionsY[index + 1], 70, 70);
      });
      break;

    case 3:
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear all

      random1to7Numbers();
      pickFrameAndDraw(arrForPickFrame[0], 148, 113); //surrounds

      ctx.drawImage(imagesArr[arr[0]], 148, 113, 70, 70);
      pickFrameAndDraw(arrForPickFrame[1], 774, 113);
      ctx.drawImage(imagesArr[arr[1]], 774, 113, 70, 70);
      pickFrameAndDraw(arrForPickFrame[2], 148, 579);
      ctx.drawImage(imagesArr[arr[3]], 148, 579, 70, 70);
      pickFrameAndDraw(arrForPickFrame[3], 774, 579);
      ctx.drawImage(imagesArr[arr[4]], 774, 579, 70, 70);
      pickFrameAndDraw(arrForPickFrame[4], 466, 346); //centre

      ctx.drawImage(imagesArr[arr[2]], 466, 346, 70, 70);
      break;

    case 0:
    default:
      break;
  }
} //events


c.addEventListener('click', clickOnAndDraw);
//# sourceMappingURL=javascript1.dev.js.map
