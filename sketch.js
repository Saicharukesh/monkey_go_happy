var monkey, monkey_running;
var scene, sceneImage;
var banana, bananaImage;
var obstacleImage;
var score;
var ground;
var BananaGroup;
var ObstacleGroup;


function preload(){
  monkey_running= loadAnimation ("Monkey1.png","Monkey2.png","Monkey3.png","Monkey4.png","Monkey5.png","Monkey6.png","Monkey7.png","Monkey8.png","Monkey9.png","Monkey10.png");
  
  sceneImage=loadImage("jungle.jpg");
  
  bananaImage=loadImage("banana.png");
  
  obstacleImage=loadImage("stone.png");
  
  invisibleGround = createSprite(200,190,800,10);
  invisibleGround.visible = false;
        
}
function setup() {
  createCanvas(600, 200);
    
  scene=createSprite(400,39);
  scene.addImage("scene",sceneImage);
  scene.x = scene.width /2;
  scene.velocityX = -2;
    
  monkey=createSprite(50,180);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
   
  score = 0;
  
  
  
  
  
  
  BananaGroup=createGroup();
  ObstacleGroup=createGroup();
  
}

function draw() {
  background(180);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,400,50);
    
  
  
  if(keyDown("space")){
    monkey.velocityY = -12 ;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (scene.x < 100){
    scene.x = scene.width/2;
  }
   
  if(BananaGroup.isTouching(monkey)) {
    BananaGroup.destroyEach();
    score = score + 2;
  }
  
  if(ObstacleGroup.isTouching(monkey)) {
    monkey.scale=0.1;
  }
  
  
  switch(score){
    case 10: monkey.scale=0.21;
            break;
    case 20:monkey.scale=0.14;
           break;
    case 30: monkey.scale=0.16;
            break;
  case 40: monkey.scale=0.18;
            break;
   default: break;
 }

  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,400,50);
    
  
  
  monkey.collide(invisibleGround);
  spawnObstacles();
  spawnBananas();
  drawSprites();
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,400,50);
    
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    obstacle = createSprite(650,190,10,40);
   obstacle.velocityX = -2;
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.15;
   ObstacleGroup.add(obstacle);
  }
}

function spawnBananas() {
  if(World.frameCount % 60 === 0) {
    rand = Math.round(random(120,200));
    banana = createSprite(700,rand,10,40);
    banana.velocityX = -2; 
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    BananaGroup.add(banana);
  }
}




