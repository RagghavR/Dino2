var trex,walk,ground,floor,ground2;
function preload(){
  walk = loadAnimation("trex1.png","trex3.png","trex4.png")
  floor = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,180,50,50);
  trex.addAnimation("VOLK",walk)
  trex.scale = 0.5;
  ground =createSprite(300,180,600,20)
  ground.addImage(floor)
  ground2 = createSprite(300,190,600,20)
  ground2.visible=false
}
function draw(){
  background ("lightgrey")
  console.log(trex.y)
  trex.velocityY = trex.velocityY + 0.8
  trex.collide(ground2)
  if (keyDown("space") && trex.y>=156){
    trex.velocityY = -8
  }
  drawSprites();
  ground.velocityX = -10
  if (ground.x < -500){
    ground.x = 300
  }

}


