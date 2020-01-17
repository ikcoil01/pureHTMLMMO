

var interval;
var mousekey = document.getElementById("moveKeysRight")

mousekey.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingAva.gif";
  interval = setInterval(goRight, 200);
});
mousekey.addEventListener('mouseup', function() {
  clearInterval(interval);
  stopRight();
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
























