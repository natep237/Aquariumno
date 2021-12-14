
let fishes = [];


function setup() {
  createCanvas(windowWidth, 600)

}

function draw() {
  background(66, 135, 245);
  
  for(let f of fishes){
    f.show();
    f.update();
  }
}

function mousePressed(){
  fishes.push(new Fish(mouseX, mouseY));
}


class Fish {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xVel = random(-2, 2);
    this.yVel = random(-2, 2);
    this.color = random(255);
  }
  show() {

    push();
    translate(this.x, this.y);
    let angle = atan2(this.yVel, this.xVel);
    rotate(angle + radians(180));
    fill(this.color, this.color, this.color);
    beginShape();
    vertex(-40, -10);
    vertex(-60, 0);
    vertex(-40, 10);
    vertex(0, 0);
    vertex(6, 10);
    vertex(6, -10);
    vertex(0, 0);
    endShape(CLOSE);
    pop();
  }

  update() {

    this.xVel = this.xVel;
    this.yVel = this.yVel;
    this.x += this.xVel;
    this.y += this.yVel;

    if (this.x < 0 || this.x > width) {
      this.xVel = -this.xVel;
    }
    if (this.y < 0 || this.y > height) {
      this.yVel = -this.yVel;
    }
    
    this.xVel = this.xVel + random(-0.01,0.01);
    this.yVel = this.yVel + random(-0.01,0.01);
    
  }

}