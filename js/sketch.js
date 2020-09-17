const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var ground;
var groundImg;

function preload(){
    bg = loadImage("image/jungle.jpg");
    groungImg = loadImage("imageground.jpg");
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background("bg");
    Engine.update(engine);

    drawSprites();
}