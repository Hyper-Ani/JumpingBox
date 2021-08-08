var canvas;
var music;
var rect1;
var s1;
var s2
var s3;
var s4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    s1=createSprite(100,590,150,15);
    s1.shapeColor="blue";
    //create 4 different surfaces
    s2=createSprite(300,590,150,15);
    s2.shapeColor="red";
    s3=createSprite(500,590,150,15);
    s3.shapeColor="orange";
    s4=createSprite(700,590,150,15);
    s4.shapeColor="yellow";


    //create box sprite and give velocity
    rect1=createSprite(random(20,750),200,20,20);
    rect1.shapeColor="black";
    rect1.velocityX=4;
    rect1.velocityY=4;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();

    rect1.bounceOff(edges);
    if(s1.isTouching(rect1) && rect1.bounceOff(s1)) {
        rect1.shapeColor="blue";

    }

    if(s2.isTouching(rect1) && rect1.bounceOff(s2)) {
        rect1.shapeColor="red";
    }

    if(s4.isTouching(rect1) && rect1.bounceOff(s4)) {
        rect1.shapeColor="yellow";
    }

    if(s3.isTouching(rect1) && rect1.bounceOff(s3)) {
        rect1.velocityX=0;
        rect1.velocityY=0;
    }
    
    //add condition to check if box touching surface and make it box


    drawSprites();
}
