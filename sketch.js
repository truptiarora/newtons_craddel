
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;

var circle;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Chat(300,200,250,30);


	bob1 = new Bob(200,450,40);
	bob2 = new Bob(240,450,40);
	bob3 = new Bob(280,450,40);
	bob4 = new Bob(320,450,40);
	bob5 = new Bob(360,450,40);

	//rope1 = new Rope(bob1.Body,roof.Body,0);
	//rope1 = new Rope(bob1.body,{x:200, y:50});
	rope2=new Rope(bob1.body,roof.body,-100, 10)

}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope2.display();
}



