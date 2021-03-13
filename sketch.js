const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particle  = null;
var plinkos = [];
var divisions = [];

var divisionHeight= 300;
var score = 0;
var turn = 0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  border1 = new Border(0, 400, 10, 800);
  border2 = new Border(800, 400, 10, 800);
  border3 = new Border(400, 0, 800, 10);
  border4 = new Border(400, 800, 800, 10);

  for (var k = 0; k <= width; k += 80) 
  {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  createPlinko();
}
 


function draw() {
  background("black");

  bucketScore();

  if(gameState !== "end")
  {
    textSize(20);
    text("Score: " + score, 20, 30);
  }

  textSize(20);
  text("Turns: " + (5 - turn), 700, 30);

  Engine.update(engine);
 
  for (var i = 0; i < plinkos.length; i++) 
  {
    plinkos[i].display();
  }
  
  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }

  ground.display();

  border1.display();
  border2.display();
  border3.display();
  border4.display();

  if (particle != null)
  {
    particle.display();

    if (particle.body.position.y > 750 && particle.body.position.x > 10 && particle.body.position.x < 75)
    {
      score += 100;
      particle = null;
    }

    else if (particle.body.position.y > 750 && particle.body.position.x > 85 && particle.body.position.x < 155)
    {
      score += 200;
      particle = null;
    }

    else if (particle.body.position.y > 750 && particle.body.position.x > 165 && particle.body.position.x < 235)
    {
      score += 500;
      particle = null;
    }

    else if (particle.body.position.y > 750 && particle.body.position.x > 245 && particle.body.position.x < 315)
    {
      score += 200;
      particle = null;
    }

    else if (particle.body.position.y > 750 && particle.body.position.x > 325 && particle.body.position.x < 395)
    {
      score += 100;
      particle = null;
    }

    else if (particle.body.position.y > 750 && particle.body.position.x > 405 && particle.body.position.x < 475)
    {
      score += 100;
      particle = null;
    }

    else if (particle.body.position.y > 750 && particle.body.position.x > 485 && particle.body.position.x < 555)
    {
      score += 200;
      particle = null;
    }

    else if (particle.body.position.y > 750 && particle.body.position.x > 565 && particle.body.position.x < 635)
    {
      score += 500;
      particle = null;
    }

    else if (particle.body.position.y > 750 && particle.body.position.x > 645 && particle.body.position.x < 715)
    {
      score += 200;
      particle = null;
    }

    else if (particle.body.position.y > 750 && particle.body.position.x > 725 && particle.body.position.x < 795)
    {
      score += 100;
      particle = null;
    }
  }

  if(turn === 5 && particle === null)
  {
    gameState = "end";
    textSize(130);
    fill("red");
    text("GAME OVER", 7, 400);
    textSize(20)
    text("Score: " + score, 360, 440);
  }
}

function createPlinko()
{
  for (var j = 55; j <= width; j += 50) 
  {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 40; j <=width-10; j += 50) 
  {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 55; j <=width; j += 50) 
  {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 40; j <=width-10; j += 50) 
  {    
    plinkos.push(new Plinko(j, 375));
  }  
}

function bucketScore()
{
  textSize(25);
  fill("white");
  
  text("100", 20, 550);
  text("200", 100, 550);
  text("500", 180, 550);
  text("200", 260, 550);
  text("100", 340, 550);
  text("100", 420, 550);
  text("200", 500, 550);
  text("500", 580, 550);
  text("200", 660, 550);
  text("100", 740, 550);
}

function mousePressed()
{
  if(gameState !== "end" && particle === null && mouseX > 10 && mouseX < 790)
  {
    turn++;
    particle = new Particle(mouseX, 10, 10);
  }
} 