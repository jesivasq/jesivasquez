let theta;
let x;
let y;
let scalar;
let offsetX;
let offsetY;
let speed;

function setup(){
    createCanvas(400, 400);
    theta = 0;
    scalar = 10;
    offsetX = width/2;
    offsetY = height/2;
    speed = 0.05;
}

function draw(){
    background(255);
    x = scalar * sin(theta) + offsetX;
    y = scalar * -cos(theta) + offsetY;
    ellipse(x, y, 20, 20);
    theta += speed;
}

