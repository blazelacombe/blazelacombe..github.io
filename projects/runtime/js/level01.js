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
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

   
function createSawBlade (sawX, sawY){
    
        var hitZoneSize = 25;
    var damageFromObstacle = 69;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = sawX;
    sawBladeHitZone.y = sawY;
    game.addGameItem(sawBladeHitZone); 
    var obstacleImage = draw.bitmap('img/sawblade.png');
    obstacleImage.x = -26
    obstacleImage.y = -26
    sawBladeHitZone.addChild(obstacleImage);
    
    var enemy = game.createGameItem('enemy',25);
    var redSquare = draw.rect(50,50,'red');
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400;
    enemy.y = groundY-50
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
    var redSquare = draw.rect(50,50,'red');
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y
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
 return enemy.onPlayerCollision;
 return enemy.onProjectileCollision;
}

function createReward(x,y){
    var reward = game.createGameItem('reward',25);
    var blueSquare = draw.rect(50,50,'blue');
    blueSquare.x = -25;
    blueSquare.y = -25;
    reward.addChild(blueSquare);
    reward.x = x;
    reward.y = y
    game.addGameItem(reward);
    reward.velocityX = -1;
    reward.rotationalVelocity = -5;


    reward.onPlayerCollision = function() {
    console.log('The reward has hit Halle');
    game.changeIntegrity(30);
    game.increaseScore(690);
    reward.fadeOut();
    
    }
  return reward.OnPlayerCollision;
 

}


createSawBlade(450,450);
createSawBlade(700, 350);
createSawBlade(800, 460);

createEnemy(500,400);
createEnemy(600,400);
createEnemy(800,400);

createReward(950,400);
createReward(1150,400);
createReward(1400,400);
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
