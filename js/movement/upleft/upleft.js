var interval;
var mousekey = document.getElementById("moveKeysUpLeft")

mousekey.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingLeftAva.gif";
  interval = setInterval(goUpLeft, 200);
});
mousekey.addEventListener('mouseup', function() {
  clearInterval(interval);
  stopUp();
});

function goUpLeft(){
  setLocation();
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
    var currXPos = document.getElementById("usersCharacter").style.left;
    if(currXPos == ""){
      document.getElementById("usersCharacter").style.left = "0px";
    }
    
    currYPos=currYPos.replace("px","");
    
    currYPos = parseInt(currYPos)-avatarSpeed;
    var newYPos=currYPos+"px";
    document.getElementById("usersCharacter").style.top = newYPos;

    currXPos = parseInt(currXPos)-avatarSpeed;
    var newXPos=currXPos+"px";
    document.getElementById("usersCharacter").style.left = newXPos;

}

function stopUpLeft(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}