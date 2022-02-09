var circuit,car,cash,enemy,cash2;
var circuitImg,carImg,cashImg,enemyImg,cash2Img;
var MoneyCollection = 0;
var carG,cashG,enemyG,cash2Group;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  circuitImg = loadImage(".png");
  carImg = loadAnimation(".png");
  cashImg = loadImage(".png");
  enemyIMG= loadImage(".png");
  endImg =loadAnimation(".png");
  cash2Img=loadAnimation(".png")
}

function setup(){
  
 createCanvas(windowWidth,windowHeight);

circuit=createSprite(height/200,2);
circuit.addImage(circuitImg);
circuit.velocityY = 4;



car = createSprite(width/2,height-20,20,20);
car.addAnimation("car",carImg);
car.scale=0.3;
  
  
cashG=new Group();
enemy=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  car.y = World.mousey;
  if(keyisDown(UP_ARROW))
  edges= createEdgeSprites();
  car.collide(edges);
  
  

   if(path.x > height ){
     path.x = height;
   }

  
    createCash();
    createEnemy();
    createcash2();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection + 75;
    }
    else if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection + 100;

      
    }else{
      if(enemyGroup.isTouching(car)) {
        gameState=END;
        
        car.addAnimation("",endImg);
        car.x=width/2;
        car.y=height/2;
        car.scale=0.6;
        
        cashG.destroyEach();
        cash2G.destroyEach();
        enemyG.destroyEach();
       
        
        cashG.setVelocityYEach(0);
        cash2G.setVelocityYEach(0);
        enemyGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Money: "+ MoneyCollection,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createcash2() {
  if (World.frameCount % 320 == 0) {
  var cash2 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash2.addImage(diamondsImg);
  cash2.scale=0.03;
  cash2.velocityY = 5;
  cash2.lifetime = 200;
  cash2G.add(diamonds);
}
}


function createenemy(){
  if (World.frameCount % 530 == 0) {
  var enemy = createSprite(Math.round(random(50, width-50),40, 10, 10));
  enemy.addImage(swordImg);
  enemy.scale=0.1;
  enemy.velocityY = 4;
  enemy.lifetime = 200;
  enemyGroup.add(enemy);
  }
}