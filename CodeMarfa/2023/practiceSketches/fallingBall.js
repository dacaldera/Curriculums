let xPos = 200;
let yPos = 200;

let speed = 2;

function setup() {
  createCanvas(400, 400);
  background(200)
}

function draw() {
  yPos = yPos + speed

  circle(xPos, yPos, 20);


  if (yPos > height) {
    yPos = 0;
    speed = random(1, 3)
    
    xPos = random(width)
  }

}
