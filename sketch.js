
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var part1,part2,part3;
var ground1;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	part1 = new Ground(620, 665,200,20);
	
	part2=new Ground(530, 665,20,200);
	
	part3=new Ground(720, 665,20,200, {isStatic:true});
	
	ground1 = new Ground(400,680,800,40);

	//ground=createSprite(50,685,10000,20,{isStatic:true});
	
	ball = new Paper(200,200,20,20);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground1.display();
  part1.display();
  part2.display();
  part3.display();
  drawSprites();
 
}
function keyPressed() {
    if(keyCode === 39){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-50});
	}
	
  }
  


