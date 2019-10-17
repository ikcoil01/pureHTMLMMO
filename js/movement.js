/*desktop speed*/
//var verticalMovementSpeed = 10.0;
//var horizantalMovementSpeed = 5.0;
/*mobile speed*/
var ySpeed = 1;
var xSpeed = 1;

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

var characterStillImage="images/still.gif";

var characterMoveDownImage = "images/movedown.gif";
var characterMoveDownRightImage = "images/movedown.gif";
var characterMoveDownLeftImage = "images/movedown.gif";

var characterMoveUpRightImage = "images/moveup.gif";
var characterMoveUpLeftImage = "images/moveup.gif";
var characterMoveUpImage = "images/moveup.gif";

var characterMoveRightImage = "images/moveright.gif";
var characterMoveLeftImage = "images/moveleft.gif";

var firstRun=true;
var xPosition="";
var yPosition="";
var refreshSpeed =100;

function init(){
  document.body.style.backgroundPosition = "0px, 0px";
}
function getCurrentPosition(){
  if(firstRun){
    init();
    firstRun=false;
  }
    var currentPostions=document.body.style.backgroundPosition.split(" ");
  console.log(currentPostions);
    return currentPostions;
}

var runningMovementCommand = false;
var runningMovementUP = false;
var runningMovementDOWN = false;
var runningMovementLEFT = false;
var runningMovementRIGHT = false;
var runningMovementUPLEFT = false;
var runningMovementUPRIGHT = false;
var runningMovementDOWNLEFT = false;
var runningMovementDOWNRIGHT = false;

function moveUp(){
  if(runningMovementCommand && !runningMovementUP){
    return
  }
  runningMovementCommand = true;
  runningMovementUP = true;

  var currPos = getCurrentPosition();
  var x = currPos[0].replace("px","");
  var y = currPos[2].replace("px","");
  x = parseInt(x);
  if(isChrome){
    y = parseInt(y) - ySpeed;
  }else{
    y = parseInt(y) + ySpeed;
  }
  var newPos=x+"px,"+y+"px";
  document.body.style.backgroundPosition = newPos;
  showOnlyThisButton("moveUp");
}

function moveUpLeft(){
  if(runningMovementCommand && !runningMovementUPLEFT){
    return
  }
  runningMovementCommand = true;
  runningMovementUPLEFT = true;

  var currPos = getCurrentPosition();
  var x = currPos[0].replace("px","");
  var y = currPos[2].replace("px","");

  if (isChrome) {
    x = parseInt(x) - xSpeed;
    y = parseInt(y) - ySpeed;
  } else {
    x = parseInt(x) - xSpeed;
    y = parseInt(y) + ySpeed;
  }
  var newPos=x+"px,"+y+"px";
  document.body.style.backgroundPosition = newPos;
  showOnlyThisButton("moveUpLeft");
}

function moveUpRight(){
  if(runningMovementCommand && !runningMovementUPRIGHT){
    return
  }
  runningMovementCommand = true;
  runningMovementUPRIGHT = true;

  var currPos = getCurrentPosition();
  var x = currPos[0].replace("px","");
  var y = currPos[2].replace("px","");
    x = parseInt(x) + xSpeed;
    y = parseInt(y) + ySpeed;
  var newPos=x+"px,"+y+"px";
  document.body.style.backgroundPosition = newPos;
  showOnlyThisButton("moveUpRight");
}

function moveDown(){
  if(runningMovementCommand && !runningMovementDOWN){
    return
  }
  runningMovementCommand = true;
  runningMovementSDown= true;

  var currPos = getCurrentPosition();
  var x = currPos[0].replace("px", "");
  var y = currPos[2].replace("px", "");
  x = parseInt(x);
  y = parseInt(y) - ySpeed;
  var newPos=x+"px,"+y+"px";
  document.body.style.backgroundPosition = newPos;
  showOnlyThisButton("moveDown");
}
function moveDownLeft(){
  if(runningMovementCommand && !runningMovementDOWNLEFT){
    return
  }
  runningMovementCommand = true;
  runningMovementDOWNLEFT = true;

  var currPos = getCurrentPosition();
  var x = currPos[0].replace("px","");
  var y = currPos[2].replace("px","");

  if (isChrome) {
    x = parseInt(x) - xSpeed;
    y = parseInt(y) + ySpeed;
  } else {
    x = parseInt(x) - xSpeed;
    y = parseInt(y) - ySpeed;
  }
  var newPos=x+"px,"+y+"px";
  document.body.style.backgroundPosition = newPos;
  showOnlyThisButton("moveDownLeft");
}
function moveDownRight(){
  if(runningMovementCommand && !runningMovementDOWNRIGHT){
    return
  }
  runningMovementCommand = true;
  runningMovementDOWNRIGHT = true;

  var currPos = getCurrentPosition();
  var x = currPos[0].replace("px","");
  var y = currPos[2].replace("px","");

  if (isChrome) { 
    x = parseInt(x) + xSpeed;
    y = parseInt(y) + ySpeed;
  } else {
    x = parseInt(x) + xSpeed;
    y = parseInt(y) - ySpeed;
  }
  var newPos=x+"px,"+y+"px";
  document.body.style.backgroundPosition = newPos;
  showOnlyThisButton("moveDownRight");
}

function moveRight(){
  if(runningMovementCommand && !runningMovementRIGHT){
    return
  }
  runningMovementCommand = true;
  runningMovementRIGHT = true;

  var currPos = getCurrentPosition();
  var x = currPos[0].replace("px","");
  var y = currPos[2].replace("px","");
  x = parseInt(x) - xSpeed;
  y = parseInt(y);
  var newPos=x+"px,"+y+"px";
  document.body.style.backgroundPosition = newPos;
  showOnlyThisButton();
  showOnlyThisButton("moveRight");
}

function moveLeft(){
  if(runningMovementCommand && !runningMovementLEFT){
    return
  }
  runningMovementCommand = true;
  runningMovementLEFT = true;

  var currPos = getCurrentPosition();
  var x = currPos[0].replace("px","");
  var y = currPos[2].replace("px","");
  x = parseInt(x) + xSpeed;
  y = parseInt(y);
  var newPos=x+"px,"+y+"px";
  document.body.style.backgroundPosition = newPos;
  showOnlyThisButton("moveLeft");
}

var rightInvVar;
function goRight(){
  document.getElementById("characterImage").src = characterMoveRightImage;
  clearInterval(rightInvVar);
  rightInvVar=setInterval(moveRight, refreshSpeed);
}
function stopRight(){
  clearInterval(rightInvVar);
  makeAllMovementsVisbile();
  setIdleAnimation();
}

var leftInvVar;
function goLeft(){
  document.getElementById("characterImage").src = characterMoveLeftImage;
  clearInterval(leftInvVar);
  leftInvVar=setInterval(moveLeft, refreshSpeed);
}
function stopLeft(){
  clearInterval(leftInvVar);
  makeAllMovementsVisbile();
  setIdleAnimation();
}
var upInvVar;
function goUp(){
  document.getElementById("characterImage").src = characterMoveUpImage;
  clearInterval(upInvVar);
  upInvVar=setInterval(moveUp, refreshSpeed);
}

var upLeftInvVar;
function goUpLeft(){
  document.getElementById("characterImage").src = characterMoveUpLeftImage;
  clearInterval(upLeftInvVar);
  upLeftInvVar=setInterval(moveUpLeft, refreshSpeed);
}

var upRightInvVar;
function goUpRight(){
  document.getElementById("characterImage").src = characterMoveUpRightImage;
  clearInterval(upRightInvVar);
  upRightInvVar=setInterval(moveUpRight, refreshSpeed);
}

function stopUp(){
  clearInterval(upInvVar);
  makeAllMovementsVisbile();
  setIdleAnimation();
}
function stopUpLeft(){
  clearInterval(upLeftInvVar);
  makeAllMovementsVisbile();
  setIdleAnimation();
}
function stopUpRight(){
  clearInterval(upRightInvVar);
  makeAllMovementsVisbile();
  setIdleAnimation();
}

var downInvVar;
function goDown(){
  document.getElementById("characterImage").src = characterMoveDownImage;
  clearInterval(downInvVar);
  downInvVar=setInterval(moveDown, refreshSpeed);
}

var downLeftInvVar;
function goDownLeft(){
  document.getElementById("characterImage").src = characterMoveDownLeftImage;
  clearInterval(downLeftInvVar);
  downLeftInvVar=setInterval(moveDownLeft, refreshSpeed);
}

var downRightInvVar;
function goDownRight(){
  document.getElementById("characterImage").src = characterMoveDownRightImage;
  clearInterval(downRightInvVar);
  downRightInvVar=setInterval(moveDownRight, refreshSpeed);
}

function stopDown(){
  clearInterval(downInvVar);
  makeAllMovementsVisbile();
  setIdleAnimation();
}

function stopDownLeft(){
  clearInterval(downLeftInvVar);
  makeAllMovementsVisbile();
  setIdleAnimation();
}

function stopDownRight(){
  clearInterval(downRightInvVar);
  makeAllMovementsVisbile();
  setIdleAnimation();
}
function setIdleAnimation(){
  document.getElementById("characterImage").src = characterStillImage;
}

function makeAllMovementsVisbile(){
  setTimeout(function (){
      runningMovementCommand = false;
      runningMovementUP = false;
      runningMovementDOWN = false;
      runningMovementLEFT = false;
      runningMovementRIGHT = false;
      runningMovementUPRIGHT= false;
      runningMovementUPLEFT= false;
      document.getElementById("moveKeysDown").style.visibility = "visible";
      document.getElementById("moveKeysLeft").style.visibility = "visible";
      document.getElementById("moveKeysRight").style.visibility = "visible";
      document.getElementById("moveKeysUp").style.visibility = "visible";
      document.getElementById("moveKeysDownLeft"  ).style.visibility = "visible";
      document.getElementById("moveKeysDownRight").style.visibility = "visible";
      document.getElementById("moveKeysUpLeft").style.visibility = "visible";
      document.getElementById("moveKeysUpRight").style.visibility = "visible";
}, 100);
}
function showOnlyThisButton(funcName){
  switch(funcName) {
      case "moveUpLeft":
        document.getElementById("moveKeysUpLeft").style.visibility = "visible";
        document.getElementById("moveKeysDown").style.visibility = "hidden";
        document.getElementById("moveKeysLeft").style.visibility = "hidden";
        document.getElementById("moveKeysRight").style.visibility = "hidden";
        document.getElementById("moveKeysUp").style.visibility = "hidden";
        document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
        document.getElementById("moveKeysDownRight").style.visibility = "hidden";
        document.getElementById("moveKeysUpRight").style.visibility = "hidden";
        break;
      case "moveUpRight":
          document.getElementById("moveKeysUpRight").style.visibility = "visible";
          document.getElementById("moveKeysDown").style.visibility = "hidden";
          document.getElementById("moveKeysLeft").style.visibility = "hidden";
          document.getElementById("moveKeysRight").style.visibility = "hidden";
          document.getElementById("moveKeysUp").style.visibility = "hidden";
          document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
          document.getElementById("moveKeysDownRight").style.visibility = "hidden";
          document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
          break;
      case "moveUp":
          document.getElementById("moveKeysUp").style.visibility = "visible";
          document.getElementById("moveKeysDown").style.visibility = "hidden";
          document.getElementById("moveKeysLeft").style.visibility = "hidden";
          document.getElementById("moveKeysRight").style.visibility = "hidden";
          document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
          document.getElementById("moveKeysDownRight").style.visibility = "hidden";
          document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
          document.getElementById("moveKeysUpRight").style.visibility = "hidden";
          break;
      case "moveLeft":
          document.getElementById("moveKeysLeft").style.visibility = "visible";
          document.getElementById("moveKeysDown").style.visibility = "hidden";
          document.getElementById("moveKeysRight").style.visibility = "hidden";
          document.getElementById("moveKeysUp").style.visibility = "hidden";
          document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
          document.getElementById("moveKeysDownRight").style.visibility = "hidden";
          document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
          document.getElementById("moveKeysUpRight").style.visibility = "hidden";
          break;
      case "moveRight":
          document.getElementById("moveKeysRight").style.visibility = "visible";
          document.getElementById("moveKeysDown").style.visibility = "hidden";
          document.getElementById("moveKeysLeft").style.visibility = "hidden";
          document.getElementById("moveKeysUp").style.visibility = "hidden";
          document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
          document.getElementById("moveKeysDownRight").style.visibility = "hidden";
          document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
          document.getElementById("moveKeysUpRight").style.visibility = "hidden";
          break;
      case "moveDown":
          document.getElementById("moveKeysDown").style.visibility = "visible";
          document.getElementById("moveKeysLeft").style.visibility = "hidden";
          document.getElementById("moveKeysRight").style.visibility = "hidden";
          document.getElementById("moveKeysUp").style.visibility = "hidden";
          document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
          document.getElementById("moveKeysDownRight").style.visibility = "hidden";
          document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
          document.getElementById("moveKeysUpRight").style.visibility = "hidden";
          break;
      case "moveDownRight":
          document.getElementById("moveKeysDownRight").style.visibility = "visible";
          document.getElementById("moveKeysDown").style.visibility = "hidden";
          document.getElementById("moveKeysLeft").style.visibility = "hidden";
          document.getElementById("moveKeysRight").style.visibility = "hidden";
          document.getElementById("moveKeysUp").style.visibility = "hidden";
          document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
          document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
          document.getElementById("moveKeysUpRight").style.visibility = "hidden";
          break;
      case "moveDownLeft":
          document.getElementById("moveKeysDownLeft").style.visibility = "visible";
          document.getElementById("moveKeysDown").style.visibility = "hidden";
          document.getElementById("moveKeysLeft").style.visibility = "hidden";
          document.getElementById("moveKeysRight").style.visibility = "hidden";
          document.getElementById("moveKeysUp").style.visibility = "hidden";
          document.getElementById("moveKeysDownRight").style.visibility = "hidden";
          document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
          document.getElementById("moveKeysUpRight").style.visibility = "hidden";
          break;
      }
}
