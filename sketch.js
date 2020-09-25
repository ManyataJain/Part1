var dog,dogRunning;
var obstacle;
var backgroundimg,backgroundimg2;
var bg1,bg2;
var portalimg;
var portal;
var obstaclesGroup;
var portalGroup;
var gameState="play";


function preLoad(){
  dogRunning=loadAnimation("dog1.png","dog2.png","dog3.png","dog4.png");
  portalimg=loadImage("portal4.png");
  backgroundimg=loadImage("bg1.jpg");
  backgroundimg2=loadImage("bg2.jpg");

obstacle1 = loadImage("barrel.png");
 
obstacle2 = loadAnimation("fire1.png","fire2.png","fire3.png","fire4.png","fire5.png","fire6.png","fire7.png","fire8.png","fire9.png","fire10.png","fire11.png");
obstacle3 = loadImage("snail.png");

}



function setup() {
  createCanvas(displayWidth,displayHeight);
  
 bg1=createSprite(displayWidth/2,displayHeight/2);
 bg1.addImage("background",backgroundimg);
 bg1.addImage("background2",backgroundimg2);

 dog=createSprite(600, 600, 50, 50);
 dog.addAnimation("running",dogRunning)
 dog.scale=3;

 obstaclesGroup = new Group();

  
}

function draw() {
  background(255); 
  
  
  drawSprites();
}