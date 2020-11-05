const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var division1,division2,division3,division4;
var ground;
var particles = [];
var plinko1 = [];
var plinko2 = [];
var plinko3 = [];
var plinko4 = [];
var plinko5 = [];
var c = 0;





function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  division1 = new Division(375,550,5,300);
  division2 = new Division(275,550,5,300);
  division3 = new Division(175,550,5,300);
  division4 = new Division(75,550,5,300);
  ground = new Ground(240,700,480,50);
  for (var i = 20;i<750;i = i + 100){
    plinko1.push(new Plinko(i,100,20));
  }
  for (var i = 50;i<750;i = i + 100){
    plinko2.push(new Plinko(i,150,20));
    
  }
  for (var i = 20;i<750;i = i + 100){
    plinko3.push(new Plinko(i,200,20));
  }
  for (var i = 50;i<750;i = i + 100){
    plinko4.push(new Plinko(i,250,20));
  }
  for (var i = 20;i<750;i = i + 100){
    plinko5.push(new Plinko(i,300,20));
  }
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  ground.display();
  for (var i = 0;i<plinko1.length;i++){
    plinko1[i].display();
  }
  for (var i = 0;i<plinko2.length;i++){
    plinko2[i].display();
  }
  for (var i = 0;i<plinko3.length;i++){
    plinko3[i].display();
  }
  for (var i = 0;i<plinko4.length;i++){
    plinko4[i].display();
  }
  for (var i = 0;i<plinko5.length;i++){
    plinko5[i].display();
  }
  //Particles();
  if(frameCount%10 === 0){
    particles.push(new Particle(random(50,430),50));
  }
  for (var i = 0;i< particles.length;i++){
    particles[i].display();
  }
}
function Particles(){
  var particle = [];
  if(frameCount%30 === 0){
    //particles.push(new Particle(random(50,430),50));
    particle[c] = new Particle(random(50,430),0);
    particle[c].display();
    c++
  }


};