// THIS IS YOUR JAVASCRIPT DOCUMENT!
let makeAsteroids = require('./createAsteroids');
// GENERATE ASTEROIDS IN HTML DOCUMENT
let controls = require('./controls');

// MOVEMENT CONTROLS FOR SHIP
makeAsteroids.createAsteroids();

// declare & initialize movement variables
let xPosition = 100;
let yPosition = 100;
let xSpeed = 1;
let ySpeed = 0;
let maxSpeed = 5;

// declare & initialize controller variables
let upPressed = 0;
let downPressed = 0;
let leftPressed = 0;
let rightPressed = 0;



function slowDownX()
{
  if (xSpeed > 0)
    xSpeed = xSpeed - 1;
  if (xSpeed < 0)
    xSpeed = xSpeed + 1;
}

function slowDownY()
{
  if (ySpeed > 0)
    ySpeed = ySpeed - 1;
  if (ySpeed < 0)
    ySpeed = ySpeed + 1;
}

let shipHealth = 1000;
let loopCounter = 0;
let asteroidCounter = 0;

function gameLoop()
{

  // SPACESHIP MOVEMENT
  console.log("game started")
// console.log("hello " + e.key + " " + e.keyCode);
document.addEventListener("keydown", controls.keyDown, false);

// console.log("hello there " + e.key + " " + e.keyCode);
document.addEventListener("keyup", controls.keyUp, false);

  // new position
  xPosition += xSpeed;
  yPosition += ySpeed;

  // actually change on-screen position by adjusting CSS
  document.getElementById('ship').style.left = xPosition;
  document.getElementById('ship').style.top = yPosition;

  // change speed when user presses keys
  if (upPressed == 1)
    ySpeed = Math.max(ySpeed - 1,-1*maxSpeed);
  if (downPressed == 1)
    ySpeed = Math.min(ySpeed + 1,1*maxSpeed)
  if (rightPressed == 1)
    xSpeed = Math.min(xSpeed + 1,1*maxSpeed);
  if (leftPressed == 1)
    xSpeed = Math.max(xSpeed - 1,-1*maxSpeed);

  // deceleration
  if (upPressed == 0 && downPressed == 0)
     slowDownY();
  if (leftPressed == 0 && rightPressed == 0)
     slowDownX();

     // check position of ship on screen
     var shipBox = document.getElementById('ship').getBoundingClientRect();

     // ASTEROID MOVEMENT

     // count how many times we've been through the gameLoop
     loopCounter++;

     // every 33 cycles (three times a second), launch a new asteroid BY GIVING IT A CLASS OF "MOVING"
     // but only do this 100 times
     if (loopCounter >= 32 && asteroidCounter <= 99) {
       document.getElementById("asteroid" + asteroidCounter.toString()).className = "moving";
       asteroidCounter++;
       loopCounter = 0;
     }

     // every cycle, check & update status of each moving asteroid
     var arrayOfMovingAsteroids = document.getElementsByClassName("moving");
     for (var i=0; i < arrayOfMovingAsteroids.length; i++){

       // move current asteroid 2px to the left (but remove it from the "moving" array if it's already offscreen)
       if (parseInt(arrayOfMovingAsteroids[i].style.right) < 3000) {
        arrayOfMovingAsteroids[i].style.right = parseInt(arrayOfMovingAsteroids[i].style.right) + 5 + 'px';
      } else {
        arrayOfMovingAsteroids[i].className = "";
      }

      // get "bounding box" of current asteroid
      var asteroidBox = arrayOfMovingAsteroids[i].getBoundingClientRect();

      // detect if asteroid's bounding box overlaps with space ship's bounding box
      var collision = !(asteroidBox.right < shipBox.left ||
                      asteroidBox.left > shipBox.right ||
                      asteroidBox.bottom < (shipBox.top + 30) ||
                      asteroidBox.top > (shipBox.bottom - 30));

      if (collision) {
        shipHealth = (shipHealth - parseInt(arrayOfMovingAsteroids[i].style.height)); // ship loses number of health points relative to size of asteroid
        if (shipHealth >= 0) {
          document.getElementById("healthCounter").innerHTML = "SHIELDS: " + shipHealth;
        } else {
          document.getElementById("healthCounter").innerHTML = "GAME OVER";
          document.getElementById('ship').style.display = 'none';
        }
        var audio = new Audio('./sounds/explosion.wav');  // load explosion sound (creative commons license: https://www.freesound.org/people/Veiler/sounds/264031/)
        audio.play();  // play explosion sound
        arrayOfMovingAsteroids[i].remove();  // asteroid disappears
      }

     }

  // loop
  

  setInterval(gameLoop, 10);


}

document.addEventListener("load", gameLoop);
