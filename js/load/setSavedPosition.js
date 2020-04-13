function setSavedPostion(){
var newPos=presentCharacterPositionX+"px";
document.getElementById("usersCharacter").style.left = newPos;
var newPos=presentCharacterPositionY+"px";
document.getElementById("usersCharacter").style.top = newPos;
console.log(newPos);
}
setSavedPostion();