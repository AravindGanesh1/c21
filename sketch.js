
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

	ground = new Ground(0,650,2500,30);
	leftSide = new Ground(1100,575,20,120);
	rightSide = new Ground(1230,575,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  ellipseMode(RADIUS)
  fill('blue');
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.show();
  leftSide.show();
  rightSide.show();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85});
	}
}



