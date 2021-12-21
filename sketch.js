const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, objeto;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic: true
  }
  objeto = Bodies.rectangle(200,100,50,50,option);
  World.add(world,objeto);
  //console.log(objeto.position.x);
 // console.log(objeto.position.y);
 
}

function draw() {
  background("green");
  Engine.update(engine);
  rectMode(CENTER);
  rect(objeto.position.x, objeto.position.y, 50, 50);
}