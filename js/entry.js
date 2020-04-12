
/*desktop speed*/
//var verticalMovementSpeed = 10.0;
//var horizantalMovementSpeed = 5.0;
/*mobile speed*/
var ySpeed = 1;
var xSpeed = 1;



var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

var characterStillImage="images/walkingava.gif";

var characterMoveDownImage = "images/movedown.gif";
var characterMoveDownRightImage = "images/movedown.gif";
var characterMoveDownLeftImage = "images/movedown.gif";

var characterMoveUpRightImage = "images/moveup.gif";
var characterMoveUpLeftImage = "images/moveup.gif";
var characterMoveUpImage = "images/moveup.gif";

var characterMoveRightImage = "images/moveright.gif";
var characterMoveLeftImage = "images/moveleft.gif";


var refreshSpeed =100;
var avatarSpeed =5;
var agility =1;

var runningMovementCommand = false;
var runningMovementUP = false;
var runningMovementDOWN = false;
var runningMovementLEFT = false;
var runningMovementRIGHT = false;
var runningMovementUPLEFT = false;
var runningMovementUPRIGHT = false;
var runningMovementDOWNLEFT = false;
var runningMovementDOWNRIGHT = false;

window.onload=function(){
  var imported = document.createElement('script');
  imported.src = 'js/movement/downleft/downleft.js';
  document.head.appendChild(imported);
  
  var imported = document.createElement('script');
  imported.src = 'js/movement/downright/downright.js';
  document.head.appendChild(imported);

  var imported = document.createElement('script');
  imported.src = 'js/movement/upright/upright.js';
  document.head.appendChild(imported);

  var imported = document.createElement('script');
  imported.src = 'js/movement/upleft/upleft.js';
  document.head.appendChild(imported);

  var imported = document.createElement('script');
    imported.src = 'js/movement/right/right.js';
    document.head.appendChild(imported);

    var imported = document.createElement('script');
    imported.src = 'js/movement/down/down.js';
    document.head.appendChild(imported);

    var imported = document.createElement('script');
    imported.src = 'js/movement/up/up.js';
    document.head.appendChild(imported);

    var imported = document.createElement('script');
    imported.src = 'js/movement/left/left.js';
    document.head.appendChild(imported);
    
    var imported = document.createElement('script');
    imported.src = 'js/movement/makeAllMovementsVisbile.js';
    document.head.appendChild(imported);
    
    var imported = document.createElement('script');
    imported.src = 'js/firstload.js';
    document.head.appendChild(imported);
  }
