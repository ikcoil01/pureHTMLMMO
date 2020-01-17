

var interval;
var mousekey = document.getElementById("moveKeysLeft")

mousekey.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingLeftAva.gif";
  interval = setInterval(goLeft, 200);
});
mousekey.addEventListener('mouseup', function() {
  clearInterval(interval);
  stopLeft();
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
























