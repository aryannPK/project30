var box,hexagon;
function preload(){
imageMode(CENTER);
image(polygon_image,polygon.position.x,position.position.y,40,40);
} 
function setup() {
  createCanvas(800,400);
  polygon=bodies.circle(50,200,20);
 Wordl.add(world.polygon);
 slingshot=new Slingshot(this.polygon,{x:100,y:200});
 block8=new Block(330,235,30,40);
 block9=new Block(360,235,30,40);
 block10=new Block(390,235,30,40);
 block11=new Block(420,235,30,40);
 block12=new Block(450,235,30,40);
 block13=new Block(360,235,30,40);
 block14=new Block(390,235,30,40);
 block15=new Block(420,235,30,40);
 block16=new Block(390,235,30,40);
   
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}