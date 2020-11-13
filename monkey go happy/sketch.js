// creating variables
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score,surivivalTime=0;
var ground;


function preload(){
  
  //loading animation
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",                      "sprite_3.png","sprite_4.png","sprite_5.png",     
                "sprite_6.png","sprite_7.png","sprite_8.png")
  
  // loading images
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 //creating Canvas
  createCanvas(400,400);
  
  // creating Groups
  bananaGroup = new Group();
  obstacleGroup = new Group();
 
  
  // creating Monkey
  monkey = createSprite(50, 250, 10, 10);
  //adding animation
  monkey.addAnimation("monkey",monkey_running);
  // scaling image
  monkey.scale = 0.1;
  
 // creating Ground
  ground = createSprite(70, 350, 800, 10);
  //adding velocity
  ground.velocityX = -4;

  
  //adding initial value of score
  score = 0;
  
}

function draw() {
  //giving monkey gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
   //adding colour to backGround
   background ("lightblue");

  //adding score to the game
  score = score + Math.round(getFrameRate()/60);
  
  //displaying score
  stroke("black");
  fill("black");
  textSize(20);
  text("Score:"+  score, 270, 100);
  
  // displaying survivalTime
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivalTime,100,50);
  
  // making the monkey jump
  if(keyDown("space")) {
    monkey.velocityY = -13; 
  }
  
    
  // making the ground never ending
    if (ground.x < 0){
        ground.x = ground.width/2;
    }
  
  // making the monkey collide with the ground so it doesn't falls     down
    monkey.collide(ground);
  
  // calling function food and obstacles in the game
  obstacles();
  food();
  
  

  // displaying sprites
    drawSprites();
}

// creating function food
function food() {
  if (frameCount % 80 === 0) {
    //creating banana
    banana = createSprite(400,350,40,10);
    //adding image
    banana.addImage(bananaImage);
    // adding random y position
    banana.y = Math.round(random(120,200));
    // scaling image
    banana.scale = 0.1;
    
    // adding velocity to banana
    banana.velocityX = -3;
    // adding lifetime
    banana.lifetime = 200;
    
    //adding banana to foodGroup
    bananaGroup.add(banana);
  }
}

// creating function Obstacles
function obstacles() {
  if (frameCount % 300 === 0){
    // creating obstacles
    obstacle = createSprite(250,325,10,10);
    // adding image
    obstacle.addImage(obstaceImage);
    // ading velocity
    obstacle.velocityX = -3;
    // adding lifetime
    obstacle.lifetime = 200;
    // scaling image
    obstacle.scale = 0.1 ;
    // adding obstacles to obstacles group
    obstacleGroup.add(obstacle);
  }

}
