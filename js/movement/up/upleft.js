function stopUpLeft(){
    clearInterval(upLeftInvVar);
    makeAllMovementsVisbile();
    setIdleAnimation();
  }
  var upLeftInvVar;
function goUpLeft(){
  document.getElementById("characterImage").src = characterMoveUpLeftImage;
  clearInterval(upLeftInvVar);
  upLeftInvVar=setInterval(moveUpLeft, refreshSpeed);
}