class Dot {
    constructor(x, y){
        this.offsetX = x;
        this.offsetY = y;
        this.theta = 0;
        this.scalar = 10;
        this.speed = 0.05;
        this.d = 20;
    }

    update(){
        this.theta += this.speed;
        this.x = this.scalar * sin(this.theta) + this.offsetX;
        this.y = this.scalar * cos(this.theta) + this.offsetY;
        ellipse(this.x, this.y, this.d, this.d);
    }
}

let dots = [];

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(200);
    dots.forEach(dot => dot.update());
}

function mousePressed(){
    let dot = new Dot(mouseX, mouseY);
    dots.push(dot);
}