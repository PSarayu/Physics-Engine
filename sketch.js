const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var world, engine,ball,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ball_options={
    restitution:1.0
  }
  
  ball=Bodies.circle(200,150,30,ball_options);
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,350,800,20,ground_options);
  World.add(world,ball);
  World.add(world,ground);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30,30)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
}