 var rocket,rocketImage;
var fireball,fireballImage;
var missile,missileImage;

function preload(){
rocketImage=loadImage("rocket.png");
fireballImage=loadImage("fireball.jpg");
 missileImage=loadImage("missile.jpg");
}

 function setup() {
  createCanvas(1200, 600);
  
  rocket=createSprite(150,350,100,100);
  rocket.addImage(rocketImage);
  rocket.scale=0.3;
  
  fireballGroup = createGroup();
  missileGroup = createGroup();
  
 score = 0 ; 
}

function draw() {
  background(0);
rocket.y = World.mouseY;

if (World.frameCount % 100 === 0) {
  Fireball();
}
if (keyDown("space")) {
    createMissile();
  }
  if (missileGroup.isTouching(fireball)) {
  
  fireballGroup.destroyEach();
    score=score+1;
}
drawSprites();
text("Score: "+ score, 500,50);
}

  function Fireball() {
  if (frameCount % 10 === 0) {
     fireball = createSprite(1150,350,100,100);
     fireball.y = Math.round(random(20,380))
     fireball.addImage(fireballImage);
     fireball.scale = 0.14;
     fireball.velocityX = -20;
     
     fireballGroup.add(fireball);
  }
 }


 function createMissile() {
  var missile= createSprite(370, 100, 60, 10);
  missile.addImage(missileImage);
  missile.y=rocket.y;
  missile.velocityX = 30;
  missile.lifetime = 500;
  missile.scale = 0.3;
  missileGroup.add(missile);
 }

