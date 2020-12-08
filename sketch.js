
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,100);

	ls = new Dustbin(600,635,10,100)
    rs = new Dustbin(795,635,10,100)
	md = new Dustbin(697,680,205,10)
	Engine.run(engine);
  
  ground=new Ground(400,690,800,15)
}


function draw() {
  rectMode(CENTER);
  background(0);

  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
  
  }
  
  paper.display();
  
  drawSprites();
  ls.display();
  rs.display();
  md.display();
  ground.display();
}



