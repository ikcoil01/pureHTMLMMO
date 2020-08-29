var interval;
var mousekey = document.getElementById("moveKeysDown")
var mousekey2 = document.getElementById("moveKeysDownLeft")
var mousekey3 = document.getElementById("moveKeysDownRight")

mousekey.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingLeftAva.gif";
  interval = setInterval(goDown, 200);
});
mousekey.addEventListener('mouseup', function() {
  clearInterval(interval);
  stopDown();
});
mousekey2.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingLeftAva.gif";
  interval2 = setInterval(goDownLeft, 200);
});
mousekey2.addEventListener('mouseup', function() {
  clearInterval(interval2);
  stopDown();
});
mousekey3.addEventListener('mousedown', function() {
  
  interval6 = setInterval(goDownRight, 200);
});
mousekey3.addEventListener('mouseup', function() {
  clearInterval(interval6);
  stopDownRight();
});

function goDown(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "visible";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
  document.getElementById("moveKeysDownRight").style.visibility = "hidden";
  document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUpRight").style.visibility = "hidden";
  
  var currYPos = document.getElementById("usersCharacter").style.top;
  if(currYPos == ""){
    document.getElementById("usersCharacter").style.top = "0px";
  }
  
    currYPos=currYPos.replace("px","");
  
  currYPos = parseInt(currYPos)+2;
  var newPos=currYPos+"px";
  document.getElementById("usersCharacter").style.top = newPos;
}

function stopDown(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}

function goDownLeft(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "visible";
  document.getElementById("moveKeysDownRight").style.visibility = "hidden";
  document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUpRight").style.visibility = "hidden";
  
  var currYPos = document.getElementById("usersCharacter").style.top;
  if(currYPos == ""){
    document.getElementById("usersCharacter").style.top = "0px";
  }
  
    currYPos=currYPos.replace("px","");
  
  currYPos = parseInt(currYPos)+2;
  var newPos=currYPos+"px";
  document.getElementById("usersCharacter").style.top = newPos;
}

function stopDownLeft(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}

function goDownRight(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
  document.getElementById("moveKeysDownRight").style.visibility = "visible";
  document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUpRight").style.visibility = "hidden";
  
  var currYPos = document.getElementById("usersCharacter").style.top;
  if(currYPos == ""){
    document.getElementById("usersCharacter").style.top = "0px";
  }
  
    currYPos=currYPos.replace("px","");
  
  currYPos = parseInt(currYPos)+2;
  var newPos=currYPos+"px";
  document.getElementById("usersCharacter").style.top = newPos;
}

function stopDownRight(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}