let tendrils = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Create 100 tendrils at random positions
  for (let i = 0; i < 60; i++) {
    const x = random(width);
    const y = random(height);
    tendrils.push(new Tendril(x, y));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < tendrils.length; i++) {
    tendrils[i].update();
    tendrils[i].display();
  }
}


class Tendril {
  constructor(x, y) {
    this.segments = [];
    this.numSegments = 15;
    this.segmentLength = height / (this.numSegments - 1) * 3; // Adjust segmentLength based on the canvas height
    this.speed = random(0.005, 0.1); // Slower speed
    this.amplitude = random(10, 80);
    this.windStrength = 0;
    this.offsets = [];

    const startY = y - (this.segmentLength * (this.numSegments - 1)) / 2; // Adjust startY to place the middle segment at mouseY

    for (let i = 0; i < this.numSegments; i++) {
      this.segments.push(createVector(x, startY + i * this.segmentLength));
      this.offsets.push(random(-1, 2));
    }
  }

  update() {
    const time = millis() * this.speed;
    const angle = HALF_PI; // Set the angle to vertical direction (90 degrees)

    for (let i = 0; i < this.numSegments - 1; i+=1) {
      const prevSegment = this.segments[i];
      const segment = this.segments[i + 1];
      const dx = cos(angle) * this.segmentLength;
      const dy = sin(angle) * this.segmentLength;

      // Add some randomness to segment positions
      const noiseX = noise(i * 0.1 + time * 0.001); // Adjust noise frequency for slower movement
      const noiseY = noise(i * 0.1 + time * 0.001); // Adjust noise frequency for slower movement
      const offsetX = map(noiseX, 0, 1, -this.amplitude, this.amplitude);
      const offsetY = map(noiseY, 0, 1, -this.amplitude, this.amplitude);
      segment.x = prevSegment.x + dx + offsetX * this.offsets[i];
      segment.y = prevSegment.y + dy + offsetY * this.offsets[i];
    }
  }

  applyWind(targetX, targetY) {
    for (let i = 0; i < this.numSegments - 1; i++) {
      const segment = this.segments[i + 1];

      const windDistance = dist(segment.x, segment.y, targetX, targetY);
      const windStrength = map(windDistance, 0, 200, 0, 0.02); // Decreased wind strength for slower effect

      if (windDistance < 100) {
        const angleToMouse = atan2(targetY - segment.y, targetX - segment.x);
        segment.x -= cos(angleToMouse) * windStrength;
        segment.y -= sin(angleToMouse) * windStrength;
      }
    }
  }

  resetWind() {
    for (let i = 0; i < this.numSegments; i++) {
      const originalX = this.segments[i].x;
      const originalY = this.segments[i].y;
      this.segments[i].x += (originalX - this.segments[i].x) * 0.01;
      this.segments[i].y += (originalY - this.segments[i].y) * 0.01;
    }
  }

  display() {
    noFill();
    stroke(255);
    strokeWeight(2);

    beginShape();
    curveVertex(this.segments[0].x, this.segments[0].y);

    for (let i = 0; i < this.numSegments - 1; i++) {
      const { x, y } = this.segments[i];
      curveVertex(x, y);
    }

    curveVertex(this.segments[this.numSegments - 1].x, this.segments[this.numSegments - 1].y);
    endShape();
  }
}