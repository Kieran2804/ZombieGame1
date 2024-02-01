var bg,bgImg;
var player, shooterImg, shooter_shooting;
var Zombie1,Zombie1Img,Zombie2,Zombie2Img


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/AbandonedCity.jpg")

  Zombie1Img=loadImage("assets/Zombie1.png")
  Zombie2Img=loadImage("assets/Zombie2.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-60,20,20)
bg.addImage(bgImg)
bg.scale = 2.6

  

//creating the player sprite
player = createSprite(displayWidth-1600, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

Zombie1=createSprite(displayWidth-300,displayHeight-300,50,50)
Zombie1.addImage(Zombie1Img)
Zombie1.scale=0.4

Zombie2=createSprite(displayWidth-300,displayHeight-600,50,50)
Zombie2.addImage(Zombie2Img)
Zombie2.scale=0.4
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x=player.x+20
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x=player.x-20
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
