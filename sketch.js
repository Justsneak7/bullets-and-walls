var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(800,400);
speed = random(223,321);
weight = random(30,52);
thickness = random(22,103);

  wall = createSprite(600,200,thickness,height/2);
  wall.debug = true;
  wall.shapeColor = "white";


  bullet = createSprite(50, 200, 20, 10);
  bullet.shapeColor = "orange";
  
  
  
  
}

function draw() {
  background(1);  
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage  = 0.5 * weight * speed / (thickness * thickness * thickness);

    if(damage>50){
        wall.shapeColor = "red"

    }

    if(damage<50){
        wall.shapeColor = "green";

    }

}


  

  createEdgeSprites();
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
      return true

  }
  else{
    return false;
  }
  
}