function moveUpLeft(){
    document.getElementById("moveKeysUpLeft").style.visibility = "visible";
    document.getElementById("moveKeysDown").style.visibility = "hidden";
    document.getElementById("moveKeysLeft").style.visibility = "hidden";
    document.getElementById("moveKeysRight").style.visibility = "hidden";
    document.getElementById("moveKeysUp").style.visibility = "hidden";
    document.getElementById("moveKeysDownLeft").style.visibility = "hidden";
    document.getElementById("moveKeysDownRight").style.visibility = "hidden";
    document.getElementById("moveKeysUpRight").style.visibility = "hidden";
    
    if(runningMovementCommand && !runningMovementUPLEFT){
      return
    }
    runningMovementCommand = true;
    runningMovementUPLEFT = true;
  
    var currPos = getCurrentPosition();
    var x = currPos[0].replace("px","");
    var y = currPos[2].replace("px","");
  
    if (isChrome) {
      x = parseInt(x) - xSpeed;
      y = parseInt(y) - ySpeed;
    } else {
      x = parseInt(x) - xSpeed;
      y = parseInt(y) + ySpeed;
    }
    var newPos=x+"px,"+y+"px";
    document.body.style.backgroundPosition = newPos;
    showOnlyThisButton("moveUpLeft");
  }

