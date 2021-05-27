const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ball_options={
  restitution:0.9
  }


  var ground_options={
    isStatic:true
  }

  ball = Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);

  ground=Bodies.rectangle(200,390,300,10,ground_options);  
  World.add(world,ground)

  //console.log(ground_options)
  
}

function draw() {
  background("darkblue");  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  Engine.update(engine)
  rect(ground.position.x,ground.position.y,390,10)
  ellipse(ball.position.x,ball.position.y,30);

}