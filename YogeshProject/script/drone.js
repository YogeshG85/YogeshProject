
var box = document.getElementById("box");
var container = document.getElementById("container");
var left2 = 0;
var down2 = 0;
var currectDirect = 1;
var current_rotation = -90;
var facingImg = document.querySelector("#droneImg");
var droneCanMove = true;
var gameStateStarted = false;


function report() {
  var details = document.getElementById("details");
  let directionActual;

  if (currectDirect == 1) {
    directionActual = "East";
  }

  if (currectDirect == 2) {
    directionActual = "North";
  }

  if (currectDirect == 3) {
    directionActual = "West";
  } else if (currectDirect == 4) {
    directionActual = "South";
  }

  details = alert(left2 + ", " + down2 + ", " + directionActual) ;
}

function place() {
  let x = document.getElementById("xaxis").value;
  let y = document.getElementById("yaxis").value;
  let direction = document.getElementById("direction").value;

  let directionArr = ["EAST", "NORTH", "WEST", "SOUTH"];

  if (x && y && direction) {
    if((x < 5 && x >= 0) && (y < 5 && y >= 0) && directionArr.includes(direction.toUpperCase()) ){

        if (direction.toUpperCase() == "EAST") {
     
      currectDirect = 1;
      current_rotation = -90;
      facingImg.style.transform = 'rotate(' + current_rotation + 'deg)';
    }

    else if (direction.toUpperCase() == "NORTH") {
      currectDirect = 2;
      current_rotation = -180;
      facingImg.style.transform = 'rotate(' + current_rotation + 'deg)';
    }

    else if (direction.toUpperCase() == "WEST") {
      currectDirect = 3;
      current_rotation = 90;
      facingImg.style.transform = 'rotate(' + current_rotation + 'deg)';
    } 
    
    else if(direction.toUpperCase() == "SOUTH") {
      currectDirect = 4;
      current_rotation = 0;
      facingImg.style.transform = 'rotate(' + current_rotation + 'deg)';
    }

    left2 = parseInt(x);
    down2 = parseInt(y);
    box.style.left = 5 * left2 + "%";
    box.style.top = 5 * down2 + "%";
    }  

  }
}


function decideDirection(direct) {
  if (direct == "right") {
    currectDirect--;
    current_rotation += 90;
    if (currectDirect < 1) {
      currectDirect = 4;

    }
  } else {
    currectDirect++;
    current_rotation -= 90;
    if (currectDirect > 4) {
      currectDirect = 1;
    }
  }

  facingImg.style.transform = 'rotate(' + current_rotation + 'deg)';
  
}
margX = 0;
let image = document.getElementById('droneImg')
function Move(direct){
  if (direct == "right") {
    margX += 10
    image.style.left = margX+'px';
}
}