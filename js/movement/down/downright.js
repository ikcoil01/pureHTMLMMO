function goDownRight(){
    document.getElementById("characterImage").src = characterMoveDownRightImage;
    
    if(runningMovementCommand && !runningMovementDOWNRIGHT){
      return
    }
    runningMovementCommand = true;
    runningMovementDOWNRIGHT = true;
  
    var currPos = getCurrentPosition();
    var x = currPos[0].replace("px","");
    var y = currPos[2].replace("px","");
  
    if (isChrome) { 
      x = parseInt(x) + xSpeed;
      y = parseInt(y) + ySpeed;
    } else {
      x = parseInt(x) + xSpeed;
      y = parseInt(y) - ySpeed;
    }
    var newPos=x+"px,"+y+"px";
    document.body.style.backgroundPosition = newPos;
    showOnlyThisButton("moveDownRight");
  }
  
  function stopDownRight(){
    clearInterval(downRightInvVar);
    makeAllMovementsVisbile();
    setIdleAnimation();
  }
  var downRightInvVar;
