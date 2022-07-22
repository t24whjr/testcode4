var trex,trex_running;


function preload()
{
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
}






function setup()
{
createCanvas(600,400,200,200);
trex= createSprite(50,180,50,50);
trex.addAnimation("trexAnimation",trex_running);
trex.scale=0.5;

edges=createEdgeSprites();}

function draw()
{
 background("yellow");


 if(keyDown("space"))
 {
   trex.velocityY= -10;
 }
 trex.velocityY=trex.velocityY+0.5;

 trex.collide(edges[3]);

 drawSprites();
}
