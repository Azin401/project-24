
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground=createSprite(750,700,1500,40);
  paper=createSprite(40,450,30,40);
  drawSprites();
 
}

function keyPressed(){ 
  if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body,papewrObject.body.position,{x:85,y:-85});
  }
}



