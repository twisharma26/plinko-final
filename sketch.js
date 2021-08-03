const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, division1, plinko1, particle1;

var particles = []
var plinkos = []
var divisions = []

var divisionheight = 300

function setup() {
  createCanvas(480,800);
  engine = Engine.create(); 
  world = engine.world;

  //testing to figure out the measurements
  ground = new Ground(240, 790, 500, 20)
  //division1 = new Division(7, 630, 15, 300)
  //plinko1 = new Plinko(20, 200, 15)  
  //particle1 = new Particle(30, 50, 20)

  for (var i = 0; i <= width; i = i + 80) { 
    divisions.push(new Division(i, height-divisionheight/2, 10, divisionheight))
  }
  
  for (var i = 40; i<=width; i = i+50) {
    plinkos.push(new Plinko(i, 100, 10))
  }

  for (var i = 20; i<=width; i = i + 50) {
    plinkos.push(new Plinko(i, 150, 10))
  }

  for (var i = 40; i<=width; i = i+50) {
    plinkos.push(new Plinko(i, 200, 10))
  }

  for (var i = 20; i<=width; i=i+50) {
    plinkos.push(new Plinko(i, 250, 10))
  }

  for (var i = 40; i<=width; i=i+50){
    plinkos.push(new Plinko(i, 300, 10))
  }

  for (var i = 20; i<=width; i=i+50) {
    plinkos.push(new Plinko(i, 350, 10))
  }
}

function draw() {
  background(0)
  Engine.update(engine)

  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2 - 100, width/2 + 100), 10, 10))
  }

  for (var p = 0; p<particles.length; p++) { //displaying the bouncy particles
    particles[p].display()
  }

  for (var a = 0; a<divisions.length; a = a+1) { //to display the division, using for loop to get the new value every time
    divisions[a].display() //a is the array index value 
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display()
  }

  ground.display()

  //plinko1.display()
  //particle1.display()
}