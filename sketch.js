
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var smallrect;
var angle=1;
var angle2=90;
var rect2

function setup() {
  createCanvas(400,400);

  button1 = createImg("button.png");
  button1.position(350, 350);
  button1.size(30, 30);


  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var rock_options = {
    restitution: 0.85,

  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall);

  ball = Bodies.circle(200,20,10,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(210,20,10,rock_options);
  World.add(world,rock);

  smallrect = Bodies.rectangle(200, 200, 170, 10, ground_options);
  World.add(world,smallrect);

  rect2 = Bodies.rectangle(200, 200, 170, 10, ground_options);
  World.add(world,rect2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,10);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(rock.position.x,rock.position.y,10);
  rect(wall.position.x,wall.position.y,200,20);

  Matter.Body.rotate(smallrect, angle);
  push()
  translate(smallrect.position.x, smallrect.position.y)
  rotate(angle)
  rect(0, 0, 170, 10);
  pop()
  angle = angle+1

  Matter.Body.rotate(rect2, angle2);
  push()
  translate(rect2.position.x, rect2.position.y)
  rotate(angle2)
  rect(0, 0, 170, 10);
  pop()
  angle2 +=1

 
 
}

