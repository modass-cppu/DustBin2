var ground;
var Dustbin1;
var paper1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800, 670, 1600, 20)

	Dustbin1 = new Dustbin(1200, 650)

	paper1 = new Paper(200, 450, 140)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(130);
  ground.display();
  Dustbin1.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:130, y:-45})
	}
}



