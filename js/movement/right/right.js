

var interval;
var mousekey = document.getElementById("moveKeysRight")
var mousekey2 = document.getElementById("moveKeysUpRight")
var mousekey3 = document.getElementById("moveKeysDownRight")

mousekey.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingAva.gif";
  interval = setInterval(goRight, 200);
});
mousekey.addEventListener('mouseup', function() {
  clearInterval(interval);
  stopRight();
});
mousekey2.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingAva.gif";
  interval2 = setInterval(goRightUp, 200);
});
mousekey2.addEventListener('mouseup', function() {
  clearInterval(interval2);
  stopRight();
});

mousekey3.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingAva.gif";
  interval7 = setInterval(goRightDown, 200);
});
mousekey3.addEventListener('mouseup', function() {
  clearInterval(interval7);
  stopRightDown();
});

function goRight(){
  
  document.getElementById("moveKeysRight").style.visibility = "visible";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
  document.getElementById("moveKeysDownRight").style.visibility = "hidden";
  document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUpRight").style.visibility = "hidden";
  
    var currYPos = document.getElementById("usersCharacter").style.left;
    if(currYPos == ""){
      document.getElementById("usersCharacter").style.left = "0px";
    }
    
      currYPos=currYPos.replace("px","");
    
    currYPos = parseInt(currYPos)+2;
    var newPos=currYPos+"px";
    document.getElementById("usersCharacter").style.left = newPos;
}

function stopRight(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}

function goRightUp(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
  document.getElementById("moveKeysDownRight").style.visibility = "hidden";
  document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUpRight").style.visibility = "visible";
  
    var currYPos = document.getElementById("usersCharacter").style.left;
    if(currYPos == ""){
      document.getElementById("usersCharacter").style.left = "0px";
    }
    
      currYPos=currYPos.replace("px","");
    
    currYPos = parseInt(currYPos)+2;
    var newPos=currYPos+"px";
    document.getElementById("usersCharacter").style.left = newPos;
}

function stopRightUp(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}

function goRightDown(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
  document.getElementById("moveKeysDownRight").style.visibility = "visible";
  document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUpRight").style.visibility = "hidden";
  
    var currYPos = document.getElementById("usersCharacter").style.left;
    if(currYPos == ""){
      document.getElementById("usersCharacter").style.left = "0px";
    }
    
      currYPos=currYPos.replace("px","");
    
    currYPos = parseInt(currYPos)+2;
    var newPos=currYPos+"px";
    document.getElementById("usersCharacter").style.left = newPos;
}

function stopRightDown(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}