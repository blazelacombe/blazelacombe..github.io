var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Boot-Leg Nintendo",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "enemy", "x": 900, "y": groundY },
               
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

   
function createSawBlade (sawX, sawY){
    
        var hitZoneSize = 25;// sets the size of the area that collisions will impact
    var damageFromObstacle = 69;// place holder to contain the value for how much the healthbar decreases on collison
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// creates the hitzone for the obstacle
    sawBladeHitZone.x = sawX;// contains the value for where the hitzone will appear on a left to right scale
    sawBladeHitZone.y = sawY;// contains the vallue for 
    game.addGameItem(sawBladeHitZone); // pushes this value to the "game" array.
    var obstacleImage = draw.bitmap('img/download (4).png'); // places an image on the screen 
    obstacleImage.x = -30 //controls the left and right motion of the image
    obstacleImage.y = -25//controls the up and down motion of the image
    sawBladeHitZone.addChild(obstacleImage);
    
  
}       

function createSawBlade2 (sawX, sawY){
    
    var hitZoneSize = 25;// sets the size of the area that collisions will impact
var damageFromObstacle = 69;// place holder to contain the value for how much the healthbar decreases on collison
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// creates the hitzone for the obstacle
sawBladeHitZone.x = sawX;// contains the value for where the hitzone will appear on a left to right scale
sawBladeHitZone.y = sawY;// contains the vallue for 
game.addGameItem(sawBladeHitZone); // pushes this value to the "game" array.
var obstacleImage = draw.bitmap('img/Flying.png'); // places an image on the screen 
obstacleImage.x = -120 //controls the left and right motion of the image
obstacleImage.y = -190//controls the up and down motion of the image
sawBladeHitZone.addChild(obstacleImage);


}       

function createMyObstacle(x,y) {
    

};

    /*
    var enemy = game.createGameItem('enemy',25);
    var redSquare = draw.rect(50,50,'red');
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 800;
    enemy.y = groundY-50
    game.addGameItem(enemy);
    enemy.velocityX = -1;
    enemy.rotationalVelocity = 10;


    enemy.onPlayerCollision = function() {
    console.log('The enemy has hit Halle');
    game.changeIntegrity(-10);
    enemy.fadeOut();
    
    };
    enemy.onProjectileCollision = function() {
        console.log("Halle has hit the enemy");
        game.increaseScore(100);
        enemy.flyTo(1700,50)
    }
    */

function createEnemy (x,y){


 var enemy = game.createGameItem('enemy',25);
    var redSquare = draw.bitmap('img/eyeball.png');
    redSquare.x = -90;
    redSquare.y = -80;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y
    game.addGameItem(enemy);
    enemy.velocityX = -1;
    enemy.rotationalVelocity = 0;


    enemy.onPlayerCollision = function() {
    console.log('The enemy has hit Halle');
    game.changeIntegrity(-10);
    enemy.fadeOut();
    
    };
    enemy.onProjectileCollision = function() {
        console.log("Halle has hit the enemy");
        game.increaseScore(100);
        enemy.flyTo(1700,50)
    }
 return enemy.onPlayerCollision;
 return enemy.onProjectileCollision;
}

function createReward(x,y){
    var reward = game.createGameItem('reward',25);
    var blueSquare = draw.bitmap("img/Heart.png");
    blueSquare.x = -40;
    blueSquare.y = -40;
    reward.addChild(blueSquare);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.velocityX = -1;
    reward.rotationalVelocity = 0;


    reward.onPlayerCollision = function() {
    console.log('The reward has hit Halle');
    game.changeIntegrity(30);
    game.increaseScore(690);
    reward.fadeOut();
    
    }
  return reward.OnPlayerCollision;
 

}


createSawBlade(450,450);  
createSawBlade(800, 460);
createSawBlade(450 + 1600,450);  
createSawBlade(800 + 1600, 460); 
createSawBlade(450 + 1800,450);  
createSawBlade(800 + 100, 460);  
createSawBlade(800 + 300, 460);  
createSawBlade(800+ 500, 460);



createSawBlade2(700, 350);  
createSawBlade2(700 + 800, 350);
createSawBlade2(700 + 1000, 350);  
createSawBlade2(700 + 2800, 350);
createSawBlade2(700, + 1500, 350);  
createSawBlade2(700 + 3800, 350);

createEnemy(500,430);
createEnemy(600, 430);
createEnemy(800,430); 
createEnemy(1600,430);
createEnemy(2400,430);
createEnemy(500,430);


createEnemy(500,430);
createEnemy(600 + 600, 430);
createEnemy(800+ 600,430);
createEnemy(1600+ 600,430);
createEnemy(2400+ 600,430);
createEnemy(500+ 600,430);

createReward(950,350);
createReward(1850,350);
createReward(1400,350);
//createMyObstacle(100,200);
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
