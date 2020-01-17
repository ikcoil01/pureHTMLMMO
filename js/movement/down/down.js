function goDown(){
    document.getElementById("characterImage").src = characterMoveDownImage;
    document.getElementById("moveKeysDown").style.visibility = "visible";
    document.getElementById("moveKeysLeft").style.visibility = "hidden";
    document.getElementById("moveKeysRight").style.visibility = "hidden";
    document.getElementById("moveKeysUp").style.visibility = "hidden";
    document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
    document.getElementById("moveKeysDownRight").style.visibility = "hidden";
    document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
    document.getElementById("moveKeysUpRight").style.visibility = "hidden";
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
  function stopDown(){
    clearInterval(downInvVar);
    makeAllMovementsVisbile();
    setIdleAnimation();
  }
  