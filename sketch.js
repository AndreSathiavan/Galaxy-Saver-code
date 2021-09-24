var canvas;
var player, playerBase, playerArcher;
var baseimage;
var alien_group;

function preload() {
  backgroundImg = loadImage("Background.png");
  baseimage = loadImage("base.png");
  playerimage = loadImage("GoodGuysSpaceship.png");
  computerimage = loadImage("BadGuysSpaceShip.png");
  alienImg = loadImage("BadGuys.png")
}

function setup() {
  createCanvas(600, 600);

  alien_group = new Group();

  player = createSprite(300,300);
  player.addImage("player",playerimage)

  computer = createSprite(200,200);
  computer.addImage("computer",computerimage)
}

function draw() {
  background(backgroundImg);

  
  
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("Galaxy Savers", width / 2 - 50, height / 2);

  createAlien();
}

function createAlien(){
  if(frameCount% 60 ===0){
    alien = createSprite(200,10);
    alien.addImage(alienImg);
    alien.lifetime = 200;
    alien_group.add(alien);
  }

}

