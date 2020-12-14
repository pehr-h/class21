var bullet, wall, speed, weight, thickness

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  speed = random(220,321)
  weight = random(30,52)
  bullet.velocityX = speed;
  bullet.shapeColor = "white"
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "grey"
  thickness = random(22,83)
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor = "blue"
    }
    else{
      wall.shapeColor = "purple"
    }
  }

  drawSprites();
}

function hasCollided(b,w){
  bulletRightEdge = b.x + b.width
  wallLeftEdge = w.x
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
return false
}