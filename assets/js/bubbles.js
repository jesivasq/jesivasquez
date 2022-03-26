class Bubble {
    constructor(x, y){
        this.offsetX = x;
        this.offsetY = y;
        this.theta = 0;
        this.scalar = 10;
        this.speed = Math.random()/10;
        this.d = 20;
        this.opacity = 255 * Math.random();
    }

    update(){
        this.theta += this.speed;
        this.x = this.scalar * sin(this.theta) + this.offsetX;
        this.y = this.scalar * cos(this.theta) + this.offsetY;
        fill(255, 255, 255, this.opacity);
        ellipse(this.x, this.y, this.d, this.d);
    }
}

let bubbles = [];

function setup(){
    createCanvas(400, 400);
    noStroke();
}

function draw(){
    background(200, 230, 255);
    bubbles.forEach(bubble => bubble.update());
}

function mousePressed(){
    let bubble = new Bubble(mouseX, mouseY);
    bubbles.push(bubble);
}