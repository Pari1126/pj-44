var bg
var bottomGround
var topGround
var smileyface
var coin

function preload(){
smileyfaceImage = loadImage("SNice.svg.png")
coin = loadImage("coin.png")
}


function setup(){

//background image
bg = createCanvas(700,700)

smileyface = createSprite(300,30,10,10);
smileyface.addImage("smileyface",smileyfaceImage);
smileyface.scale = 0.03;




      
 //walls
 wall1 = createSprite(400,50,10,300); //top right wall
 wall2= createSprite(200,10,10,400); // top of big wall
 wall3 = createSprite(200,390,10,200);
 wall4 = createSprite(400,390,10,200); //bottom right wall
 wall5 = createSprite(400,200,150,10);
 wall6 = createSprite(470,400,150,10);
 wall7 = createSprite(200,290,140,10);
 wall8 = createSprite(260,120,120,10);
 wall9 = createSprite(480,340,10,290);
 wall10 = createSprite(260,400,120,10);
 wall11 = createSprite(200,200,10,170);
 wall12 = createSprite(200,550,10,170);
 wall13 = createSprite(260,500,130,10);
 wall14 = createSprite(425,550,120,10);
 wall15 = createSprite(480,490,10,120);
 wall16 = createSprite(310,630,210,10);
 wall17 = createSprite(330,60,140,10);
 wall18 = createSprite(330,350,140,10);
 wall19 = createSprite(260,180,10,130);
 wall20 = createSprite(270,550,10,100);
 wall21 = createSprite(530,550,100,10);
 wall22 = createSprite(580,595,10,100);
 wall23 = createSprite(530,600,100,10);
 

 

 



}
function draw() {
  
  background("purple");

  if (keyDown(RIGHT_ARROW)){
    smileyface.x = smileyface.x + 0.5;

  }

        
          
          
   
        drawSprites();
        
}