//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife;
var knifeImage ;


function preload(){
  
  knifeImage = loadImage("knife.png");
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
   fruitsGroup = new Group();
   EnemyGroup = new Group();
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    
  Fruits();
  Enemy();
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
    
     if (fruitsGroup.isTouching(knife)){
      fruitGroup.destroyEach();
      knifeSwooshSound.play();
    }
  
    // Increase score if knife touching fruit
    
    if (fruitsGroup.isTouching(knife)){
      fruitsGroup.destroyEach();
      score = score+2;
    }
    
   
    // Go to end state if knife touching enemy
    if (EnemyGroup.isTouching(knife)){
      EnemyGroup.destroyEach;
      gameState === END;
      sword.addImage(gameoverImage);
      sword.x = 200;
      sword.y = 200;
    }
      
  }
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
  


}

function Fruits(){
    if (World.frameCount%80 === 0 )
  {
    fruit = createSprite(400, 200, 20, 20);
    fruit.scale = 0.2;
    
    r = math.round(random(1,4));
        if (r === 1)
  { 
        fruit.addImage(fruit1);
  }
    
        else if (r === 2)
  {
        fruit.addImage(fruit2);
  }
    
        else if (r === 3)
  {
        fruit.addImage(fruit3);
  }
    
        else if (r === 4)
  {
        fruit.addImage(fruit4);
  }
    
    fruit.y = Math.round(random(50, 340));
    fruit.velocityX = -7;
    fruit.lifetime = 100;
    
    FruitsGroup.add(fruits)
  }
  
   position = Math.round(random(1,4));
  
   if (position === 1){
     fruits.x = 600;
   }
  
   else if(position === 2){
     fruits.x = 400;
   }
  
   else if (position === 3){
     fruits.x = 500;
   }
  
   else if (position === 4){
     fruits.x = 300;
   }
  
}

function Enemy(){
  Enemy = createSprite(400,200,20,20);
  Enemy.addAnimation(monsterImage);
  Enemy.y = Math.round(random(100, 300));
  Enemy.velocityX = -(8+(score/10);
  Enemy.setLifetime = 50;
  
  EnemyGroup.add(monster);
}

