const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var boy1,tree;
function preLoad(){
   
}

function setup(){
    var canvas = createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;
    tree = new Tree ();
    mango1 = new Mango(1100,100,30);
    mango2 = new Mango(900,230,20);
    ground = new Ground(700,690,1300,20);
     stone = new Stone(230,420,30);
     launcher = new SlingShot(stone.body,{x:235,y:420})
}

function draw(){
    background(0);
    Engine.update(engine);
    imageMode (CENTER);
   // image(boy1,200,340,200,300);
   // image(tree,1050,580,450,680);
     tree.display();
    ground.display();
    mango1.display();
    mango2.display();
    stone.display();
    launcher.display();
    isHitting(stone,mango1);
    isHitting(stone,mango2);
   
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   slingshot.fly() 
}
function isHitting(lstone,lmango){
    var mangoposition = lmango.body.position;
    var stoneposition = lstone.body.position;
    var distance = dist(stoneposition.x,stoneposition.y,mangoposition.x,mangoposition.y);
    if(distance<=lmango.radius+lstone.radius){
        Matter.Body.setStatic(lmango.body,false);

    }
    
}