function goUpRight(){
  document.getElementById("characterImage").src = characterMoveUpRightImage;
  document.getElementById("moveKeysUpRight").style.visibility = "visible";
  document.getElementById("moveKeysDown").style.visibility = "hidden";
  document.getElementById("moveKeysLeft").style.visibility = "hidden";
  document.getElementById("moveKeysRight").style.visibility = "hidden";
  document.getElementById("moveKeysUp").style.visibility = "hidden";
  document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
  document.getElementById("moveKeysDownRight").style.visibility = "hidden";
  document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
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

  function stopUpRight(){
    clearInterval(upRightInvVar);
    makeAllMovementsVisbile();
    setIdleAnimation();
  }
  var upRightInvVar;