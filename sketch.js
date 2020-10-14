//namespacing
const Engine = Matter.Engine;  
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world ,ground, ball ;
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world= engine.world;
  var obj_options = {
    isStatic : true

  }

  ground = Bodies.rectangle(0,390,400,20, obj_options);
  World.add(world,ground);
  console.log(ground);
  
  var ball_options = {
    restitution :1.0
  }
  ball = Bodies.circle(200, 200, 20, ball_options)
   World.add(world, ball);
}

function draw() {
  var pos =ground.position ;
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  strokeWeight(2);
  stroke("green");
  fill ("brown");
 rect(pos.x,pos.y,400,20);
 fill(300)
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y, 20, 20 );


 

}