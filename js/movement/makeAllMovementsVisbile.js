function makeAllMovementsVisbile(){
    setTimeout(function (){
        runningMovementCommand = false;
        runningMovementUP = false;
        runningMovementDOWN = false;
        runningMovementLEFT = false;
        runningMovementRIGHT = false;
        runningMovementUPRIGHT= false;
        runningMovementUPLEFT= false;
        document.getElementById("moveKeysDown").style.visibility = "visible";
        document.getElementById("moveKeysLeft").style.visibility = "visible";
        document.getElementById("moveKeysRight").style.visibility = "visible";
        document.getElementById("moveKeysUp").style.visibility = "visible";
        document.getElementById("moveKeysDownLeft"  ).style.visibility = "visible";
        document.getElementById("moveKeysDownRight").style.visibility = "visible";
        document.getElementById("moveKeysUpLeft").style.visibility = "visible";
        document.getElementById("moveKeysUpRight").style.visibility = "visible";
  }, 100);
  }