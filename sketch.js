const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3,block1, block2, block3, block4, block5, block6, block7, block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1100,600);
    engine = Engine.create();
    world = engine.world;

    //creating ground
    ground1 = new Ground(400,460,280,15);
    ground2 = new Ground(410,595,1400,20);
    ground3 = new Ground(805,318,260,15);

    //creating block lvl three
    block1 = new Block(340,395,30,40);
    block2 = new Block(370,395,30,40);
    block3 = new Block(400,395,30,40);
    block4 = new Block(430,395,30,40);
    block5 = new Block(460,395,30,40);
    
    //creating block lvl two
    block6 = new Block(370,355,30,40);
    block7 = new Block(400,355,30,40);
    block8 = new Block(430,355,30,40);

    //creating block lvl four
    block9 = new Block(340,432,30,40);
    block10 = new Block(370,432,30,40);
    block11 = new Block(400,432,30,40);
    block12 = new Block(430,432,30,40);
    block13 = new Block(460,432,30,40);
    block14 = new Block(490,432,30,40);
    block15 = new Block(310,432,30,40);
    block16 = new Block(400,315,30,40);

    


     //creating block lvl three
     block17 = new Block(740,290,30,40);
     block18 = new Block(770,290,30,40);
     block19 = new Block(800,290,30,40);
     block20 = new Block(830,290,30,40);
     block21 = new Block(860,290,30,40);
     
     //creating block lvl two
     block22 = new Block(770,250,30,40);
     block23 = new Block(800,250,30,40);
     block24 = new Block(830,250,30,40);
     block25 = new Block(800,210,30,40);

}

function draw(){

    background("brown");
    Engine.update(engine);

    //displaying bodies
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    ground1.display();
    ground2.display();
    ground3.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    textSize(20);
    text("Drag the hexagonal stone and release it, to hit the blocks",200,250)

}

