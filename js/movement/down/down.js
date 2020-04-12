var interval;
var mousekey = document.getElementById("moveKeysDown")

mousekey.addEventListener('mousedown', function() {
  document.getElementById("characterImage").src = "images/walkingLeftAva.gif";
  interval = setInterval(goDown, 200);
});
mousekey.addEventListener('mouseup', function() {
  clearInterval(interval);
  stopDown();
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
  
  currYPos = parseInt(currYPos)+avatarSpeed;
  var newPos=currYPos+"px";
  document.getElementById("usersCharacter").style.top = newPos;
}

function stopDown(){
  
  document.getElementById("characterImage").src = "images/idleAva.gif";
  makeAllMovementsVisbile();
}