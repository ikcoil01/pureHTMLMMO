function goUp(){
    document.getElementById("characterImage").src = characterMoveUpImage;
    document.getElementById("moveKeysUp").style.visibility = "visible";
    document.getElementById("moveKeysDown").style.visibility = "hidden";
    document.getElementById("moveKeysLeft").style.visibility = "hidden";
    document.getElementById("moveKeysRight").style.visibility = "hidden";
    document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
    document.getElementById("moveKeysDownRight").style.visibility = "hidden";
    document.getElementById("moveKeysUpLeft").style.visibility = "hidden";
    document.getElementById("moveKeysUpRight").style.visibility = "hidden";

    if(runningMovementCommand && !runningMovementUP){
      return
    }
    runningMovementCommand = true;
    runningMovementUP = true;
  
    var currPos = getCurrentPosition();
    var x = currPos[0].replace("px","");
    var y = currPos[2].replace("px","");
    x = parseInt(x);
    if(isChrome){
      y = parseInt(y) - ySpeed;
    }else{
      y = parseInt(y) + ySpeed;
    }
    var newPos=x+"px,"+y+"px";
    document.body.style.backgroundPosition = newPos;
  }
  
  function stopUp(){
    clearInterval(upInvVar);
    makeAllMovementsVisbile();
    setIdleAnimation();
  }
  var upInvVar;