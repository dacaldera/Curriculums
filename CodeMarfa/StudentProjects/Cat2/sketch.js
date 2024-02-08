let numParticles = 400;
let particles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB);
  noStroke();

  for (let i = 0; i < numParticles; i++) {
    let x = random(width);
    let y = random(height);
    let c = color(random(0, 20), 80, 100);
    let radius = random(5, 20);
    particles.push(new Particle(x, y, c, radius));
  }
}

function draw() {
  background(0);
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

class Particle {
  constructor(x, y, color, radius) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.xOff = random(1000);
    this.yOff = random(1000);
    this.timeOff = random(1000);
    this.timeIncrement = 0.005;
  }

  update() {
    this.xOff += this.timeIncrement;
    this.yOff += this.timeIncrement;
    this.timeOff += this.timeIncrement;
    let nX = map(noise(this.xOff), 0, 1, -1, 1);
    let nY = map(noise(this.yOff), 0, 1, -1, 1);
    this.x = map(noise(nX + this.timeOff), 0, 1, 0, width);
    this.y = map(noise(nY + this.timeOff), 0, 1, 0, height);
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}
