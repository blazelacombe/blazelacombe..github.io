/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  var walker = {
     positionX : 0,//Horizintal position of the walker
     speedX : 0,//Holds the value for the horizontal speed of the walker
     positionY : 0,//Holds the value for the vertical position of the walker
     speedY : 0//Holds the value for the horizontal speed of the walker
  }

  var walker2 = {
     positionX : 0,//Horizintal position of the walker
     speedX : 0,////Holds the value for the horizontal speed of the walker
     positionY : 0,//Holds the value for the vertical position of the walker
     speedY : 0//Holds the value for the horizontal speed of the walker
  }
  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  
  var KEY = {
    LEFT : 37,
    UP : 38,            // Holds the values of the arrow keys for the walker and holds them all in a clearly named collection 
    RIGHT : 39,
    DOWN : 40
  };
  var KEY2 = {
    LEFT : 65,
    UP : 87,             // Holds the values of the WASD keys for the second walker and holds them all in a clearly named collection 
    RIGHT : 68,
    DOWN : 83
  };

  

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);   
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();// calls the function that figures where the box should spawn
    wallCollision();// detects when the square hits the wall
    redrawGameItem();// removes the box and replaces it at its spawn point
  }
  
  /* 
  Called in response to events.
  */
 // Figures which key code is returned when a key is pressed and gives it a speed value across the board
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = -5;
    } if (event.which === KEY.UP){
      walker.speedY = -5;
    } if (event.which === KEY.RIGHT){
      walker.speedX = +5;
    } if (event.which === KEY.DOWN){
      walker.speedY = +5;
    }if (event.which === KEY2.LEFT){
      walker2.speedX = -5;
    } if (event.which === KEY2.UP){
      walker2.speedY = -5;
    } if (event.which === KEY2.RIGHT){
      walker2.speedX = +5;
    } if (event.which === KEY2.DOWN){
      walker2.speedY = +5;
      }
  }
// Tells the wallkers to stop moving when the key is no longer depressed
  function handleKeyUp(event) {
    if (event.which === KEY.LEFT){
      walker.speedX = 0;
    } if (event.which === KEY.UP){
      walker.speedY = 0;
    } if (event.which === KEY.RIGHT){
      walker.speedX = 0;
    } if (event.which === KEY.DOWN){
      walker.speedY = 0;
    }if (event.which === KEY2.LEFT){
      walker2.speedX = 0;
    } if (event.which === KEY2.UP){
      walker2.speedY = 0;
    } if (event.which === KEY2.RIGHT){
      walker2.speedX = 0;
    } if (event.which === KEY2.DOWN){
      walker2.speedY = 0;
      }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Figures the borders to keep the bix inbounds
  function wallCollision(){
    if (walker.positionX > $("#board").width() -50 ){ // Prevents the square from passing the edges of the border on the left and right
      walker.positionX -= walker.speedX ;
    } if (walker.positionY > $("#board").height() - 50 ){// Prevents walker 1 from escaping the top and bottom boarders
      walker.positionY -=  walker.speedY;
    } if (walker.positionX < 0){
      walker.positionX -= walker.speedX;
    } if (walker.positionY < 0){
      walker.positionY -= walker.speedY;
    } if (walker2.positionX > $("#board").width() -50 ){// Prevents the second walker from passing the edges of the border on the left and right
      walker2.positionX += walker2.speedX ;
    } if (walker2.positionY > $("#board").height() - 50 ){// Prevents walker 2 from escaping the top and bottom boarders
      walker2.positionY +=  walker2.speedY;
    } if (walker2.positionX < 0){
      walker2.positionX += walker2.speedX;
    } if (walker2.positionY < 0){
      walker2.positionY += walker2.speedY;
    }
  }
  // Allows the walker to move
  function repositionGameItem(){
      walker.positionX += walker.speedX;// adds distance from the left side of the board to the 1st walker  
      walker.positionY += walker.speedY// adds distance from the top of the screen to the 1st walker
      walker2.positionX -= walker2.speedX;// adds distance from the right side of the board to the 2nd walker  
      walker2.positionY -= walker2.speedY;// adds distance from the bottom of the screen to the 2nd walker
  }
  // 
  function redrawGameItem(){
      $("#walker").css("left", walker.positionX)// starts the walker at the left of the board
      $("#walker").css("top", walker.positionY)// starts the walker at the top of the board
      $("#walker2").css("right", walker2.positionX)// starts the 2nd walker at the right of the board
      $("#walker2").css("bottom", walker2.positionY)// starts the 2nd walker at the bottom of the board

  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  $("#walker").on("click", colorChanger)     // detects a click on the walker and runs the color changing function
 
  function colorChanger(){      // generates random numbers for the rgb values and assing that random combination the the walker's background color 
    var r = Math.floor(Math.random() * 255);
     var g = Math.floor(Math.random() * 255);
     var b = Math.floor(Math.random() * 255);
     var rgbString = "rgb(" + r + "," + g + "," + b + ")";
     $("#walker").css("background-color", rgbString);
  }

  $("#walker2").on("click", colorChanger2) // detects a click on the walker and runs the 2nd color changing function

  function colorChanger2(){          // generates random numbers for the rgb values and asigning that random combination to the 2nd walker's background color 
    var r = Math.floor(Math.random() * 255);
    var r = Math.floor(Math.random() * 255);
     var g = Math.floor(Math.random() * 255);
     var b = Math.floor(Math.random() * 255);
     var rgbString = "rgb(" + r + "," + g + "," + b + ")";
     $("#walker2").css("background-color", rgbString);
  }

}
