

var interval;
var mousekey = document.getElementById("moveKeysLeft")
var mousekey2 = document.getElementById("moveKeysUpLeft")
var mousekey3 = document.getElementById("moveKeysDownLeft")

mousekey.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingLeftAva.gif";
  interval = setInterval(goLeft, 200);
});
mousekey.addEventListener('mouseup', function() {
  clearInterval(interval);
  stopLeft();
});
mousekey2.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingLeftAva.gif";
  interval2 = setInterval(goLeftUp, 200);
});
mousekey2.addEventListener('mouseup', function() {
  clearInterval(interval2);
  stopLeftUp();
});
mousekey3.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingLeftAva.gif";
  interval3 = setInterval(goLeftDown, 200);
});
mousekey3.addEventListener('mouseup', function() {
  clearInterval(interval3);
  stopLeftUp();
});



function goLeft(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "visible";
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
    
    currYPos = parseInt(currYPos)-2;
    var newPos=currYPos+"px";
    document.getElementById("usersCharacter").style.left = newPos;
}

function stopLeft(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}


function goLeftUp(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
  document.getElementById("moveKeysDownRight").style.visibility = "hidden";
  document.getElementById("moveKeysUpLeft").style.visibility = "visible";
  document.getElementById("moveKeysUpRight").style.visibility = "hidden";
  
    var currYPos = document.getElementById("usersCharacter").style.left;
    if(currYPos == ""){
      document.getElementById("usersCharacter").style.left = "0px";
    }
    
      currYPos=currYPos.replace("px","");
    
    currYPos = parseInt(currYPos)-2;
    var newPos=currYPos+"px";
    document.getElementById("usersCharacter").style.left = newPos;
}

function stopLeftUp(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}



function goLeftDown(){
  
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "visible";
  document.getElementById("moveKeysDownRight").style.visibility = "hidden";
  document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
  document.getElementById("moveKeysUpRight").style.visibility = "hidden";
  
    var currYPos = document.getElementById("usersCharacter").style.left;
    if(currYPos == ""){
      document.getElementById("usersCharacter").style.left = "0px";
    }
    
      currYPos=currYPos.replace("px","");
    
    currYPos = parseInt(currYPos)-2;
    var newPos=currYPos+"px";
    document.getElementById("usersCharacter").style.left = newPos;
}

function stopLeftDown(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}

















