/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  var walker = {
     positionX : 0,
     speedX : 0,
     positionY : 0,
     speedY : 0
  }

  var walker2 = {
     positionX : 0,
     speedX : 0,
     positionY : 0,
     speedY : 0
  }
  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var KEY = {
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40
  };
  var KEY2 = {
    LEFT : 65,
    UP : 87,
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
    repositionGameItem();
    wallCollision();
    redrawGameItem();
    walkerCollision();

  }
  
  /* 
  Called in response to events.
  */
 // Figures which key code is returned when a key is pressed
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
    if (walker.positionX > $("#board").width() -50 ){
      walker.positionX -= walker.speedX ;
    } if (walker.positionY > $("#board").height() - 50 ){
      walker.positionY -=  walker.speedY;
    } if (walker.positionX < 0){
      walker.positionX -= walker.speedX;
    } if (walker.positionY < 0){
      walker.positionY -= walker.speedY;
    } if (walker2.positionX > $("#board").width() -50 ){
      walker2.positionX += walker2.speedX ;
    } if (walker2.positionY > $("#board").height() - 50 ){
      walker2.positionY +=  walker2.speedY;
    } if (walker2.positionX < 0){
      walker2.positionX += walker2.speedX;
    } if (walker2.positionY < 0){
      walker2.positionY += walker2.speedY;
    }
  }
  // Allows the walker to move
  function repositionGameItem(){
      walker.positionX += walker.speedX; 
      walker.positionY += walker.speedY
      walker2.positionX -= walker2.speedX; 
      walker2.positionY -= walker2.speedY;
  }
  // 
  function redrawGameItem(){
      $("#walker").css("left", walker.positionX)
      $("#walker").css("top", walker.positionY) 
      $("#walker2").css("right", walker2.positionX)
      $("#walker2").css("bottom", walker2.positionY)

  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  $("#walker").on("click", colorChanger)
 
  function colorChanger(){
    var r = Math.floor(Math.random() * 255);
     var g = Math.floor(Math.random() * 255);
     var b = Math.floor(Math.random() * 255);
     var rgbString = "rgb(" + r + "," + g + "," + b + ")";
     $("#walker").css("background-color", rgbString);
  }

  $("#walker2").on("click", colorChanger2)
  function colorChanger2(){
    var r = Math.floor(Math.random() * 255);
     var g = Math.floor(Math.random() * 255);
     var b = Math.floor(Math.random() * 255);
     var rgbString = "rgb(" + r + "," + g + "," + b + ")";
     $("#walker2").css("background-color", rgbString);
  }

}
