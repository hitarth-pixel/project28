
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy , boy1 ;
var radius = this.radius;
var r = radius;
function preload()
{
	boy1=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	Ground=new ground(400,400,1200,20);
	boy=createSprite(100,340,100,100);
	boy.addImage(boy1);
	boy.scale=0.1

	
	
	//Create the Bodies Here.
	//tree1=new tree(700,200,400,400)
	
	stone=new Stone(100,280,20,20);

	mango1=new Mango(700,30,5,5,'mango1')
	mango2=new Mango(600,50,5,5,'mango2')
	mango3=new Mango(680,155,5,5,'mango3')
	mango4=new Mango(600,150,5,5,'mango4')
	mango5=new Mango(680,100,5,5,'mango5')
	mango6=new Mango(600,100,5,5,'mango6')
	mango7=new Mango(650,90,5,5,'mango7')
	mango8=new Mango(700,200,5,5,'mango8')
	mango9=new Mango(760,150,5,5,'mango9')
	mango10=new Mango(800,180,5,5,'mango10')

	chain = new Chain(stone.body,{x:50,y:280})

	//Engine.run(engine);
	
  
}


function draw() {

  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  strokeWeight(4);

  
  Ground.display();
//  stone.setCollider("rectangle", 0, 0, 20, 80, -45);
  

  
  

  
 
 // tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  drawSprites();

  stone.display();
  chain.display();
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    chain.fly()
}

function detectCollision(Lstone,Lmango){
mangobodyposition=Lmango.body.position 
stonebodyposition=Lstone.body.position 

		var distance=dist(mangobodyposition.x,mangobodyposition.y,stonebodyposition.x,stonebodyposition.y); 
		if(distance=Lmango.radius+Lstone.radius){

			Matter.Body.setStatic(Lmango.body,false);
			
		}else{

			console.log(mangobodyposition);
			console.log(stonebodyposition);
			//console.log(Lmango.radius+Lstone.radius);
			//console.log(Lmango.body.position.x )
		}

}

function keyPressed(){

		if(keyCode===32){

			Matter.Body.setPosition(stone.body,{x:235,y:420});
			chain.attach(stone.body);

		}

}
