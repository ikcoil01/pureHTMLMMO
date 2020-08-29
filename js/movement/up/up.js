var interval;
var mousekey = document.getElementById("moveKeysUp")
var mousekey2 = document.getElementById("moveKeysUpLeft")
var mousekey3 = document.getElementById("moveKeysUpRight")

mousekey.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingLeftAva.gif";
  interval = setInterval(goUp, 200);
});
mousekey.addEventListener('mouseup', function() {
  clearInterval(interval);
  stopUp();
});

mousekey2.addEventListener('mousedown', function() {
  interval5 = setInterval(goUpLeft, 200);
});
mousekey2.addEventListener('mouseup', function() {
  clearInterval(interval5);
  stopUpLeft();
});

mousekey3.addEventListener('mousedown', function() {
  interval3 = setInterval(goUpRight, 200);
});
mousekey3.addEventListener('mouseup', function() {
  clearInterval(interval3);
  stopUpRight();
});

function goUp(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "visible";
  document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
  document.getElementById("moveKeysDownRight").style.visibility = "hidden";
  document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUpRight").style.visibility = "hidden";
  
    var currYPos = document.getElementById("usersCharacter").style.top;
    if(currYPos == ""){
      document.getElementById("usersCharacter").style.top = "0px";
    }
    
      currYPos=currYPos.replace("px","");
    
    currYPos = parseInt(currYPos)-2;
    var newPos=currYPos+"px";
    document.getElementById("usersCharacter").style.top = newPos;

}

function stopUp(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}

function goUpLeft(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
  document.getElementById("moveKeysDownRight").style.visibility = "hidden";
  document.getElementById("moveKeysUpLeft").style.visibility = "visible";
  document.getElementById("moveKeysUpRight").style.visibility = "hidden";
  
    var currYPos = document.getElementById("usersCharacter").style.top;
    if(currYPos == ""){
      document.getElementById("usersCharacter").style.top = "0px";
    }
    
      currYPos=currYPos.replace("px","");
    
    currYPos = parseInt(currYPos)-2;
    var newPos=currYPos+"px";
    document.getElementById("usersCharacter").style.top = newPos;

}

function stopUpLeft(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}

function goUpRight(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
  document.getElementById("moveKeysDownRight").style.visibility = "hidden";
  document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUpRight").style.visibility = "visible";
  
    var currYPos = document.getElementById("usersCharacter").style.top;
    if(currYPos == ""){
      document.getElementById("usersCharacter").style.top = "0px";
    }
    
      currYPos=currYPos.replace("px","");
    
    currYPos = parseInt(currYPos)-2;
    var newPos=currYPos+"px";
    document.getElementById("usersCharacter").style.top = newPos;

}

function stopUpRight(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}