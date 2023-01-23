var ship, shipImage;
var sea, seaImage;

function preload(){
seaImage = loadImage("sea.png");
shipImage= loadAnimation("ship-1.png", "ship-2.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(140,200,20,50);
  sea.addImage(seaImage)
  sea.scale= 0.30

  ship = createSprite(140,230,20,50);
  ship.addAnimation("moving" ,shipImage);
  ship.scale= 0.15
}

function draw() {
  background("blue");
  drawSprites();
  
  sea.velocityX= -3;
  
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
}
