let houseSize = 0.8//relative to the size of the canvas
let maxStarCount = 500
let starSpeed = 0.005
let starSize = 10
let trailLength = 90;//a value between 0 and 100

let star;
let stars = [];
let house;
let starOrigin;

function preload() {
  house = loadImage("Shotgun.png");
  
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  house.resize(min(width, height)*houseSize,min(width, height)*houseSize)
  background(0)
}

function draw() {
  // background(0);
  // fill(0, 100);
  // rect(0,0,width, height)
    starOrigin = createVector(width/2, height-house.height/4)

// console.log(starOrigin)
  if (stars.length < maxStarCount && random() < 0.4) {
    // stars.push(new Star(createVector(200,200)));
    stars.push(new Star(starOrigin));
  }
  
  for(let i=stars.length-1;i>=0;i--){
    if(stars[i].kill()===true){
      stars.splice(i, 1)
    }
    
  }
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }
  fill(0,100-trailLength)
  rect(0,0,width, height)

  fill(64, 52, 37, 255);
  noStroke()
    // rectMode(CORNER)
  rect(0, height-house.height/4, width, height)

    // rectMode(CENTER)

    image(house, width/2-house.width/2,height-house.height, house.width, house.height)

}

class Star {
  constructor(pos = createVector(width / 2, height / 2)) {
    // console.log(pos.x, pos.y)
    this.origin = pos;
    this.pt = this.origin;
    this.angle = random(90, 270);

    this.sz = 1;
    this.szRate = min(width, height)*0.0001;
    this.speed = starSpeed;
    this.col = [random(255), random(255), random(255)];
  }

  update() {
    this.sz = this.sz + this.szRate;
    this.pt.set(
      this.pt.x + sin(radians(this.angle))*this.speed,
      this.pt.y + cos(radians(this.angle))*this.speed
    );
    this.speed+=starSpeed
  }

  
  kill(){
    if (
      this.pt.x > width ||
      this.pt.x < 0 ||
      this.pt.y > height ||
      this.pt.y < 0
    ) {
     return true 
      
    } else {
      return false
    }
  }
  
  display() {
    noStroke();
    fill(this.col);
    // fill(255);
    circle(this.pt.x, this.pt.y, this.sz);
  }
}
