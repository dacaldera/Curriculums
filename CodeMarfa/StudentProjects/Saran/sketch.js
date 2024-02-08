let arr = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB);
  frameRate(80);
  //createTileFloor();
}

function draw() {
  if (frameCount >= 10) {
    frameRate(30);
    loop(0.00001);
  }

  //image(hextile, -hextile.width/2, -hextile.height/2)

  if (random() > 0.999) {
    background(255);
    //  createTileFloor();

    frameRate(floor(random(5, 30)));
  }

  stroke(random(0, 55), random(10, 60), random(0, 70));
  strokeWeight(random(0.2, 1));
  noFill();
  for (let i = 0; i < 1; i++) {
    drawLine(
      createPube(
        createVector(
          (randomGaussian() * width) / 15 + width / 2,
          (randomGaussian() * height) / 15 + height / 2
        ),
        40,
        40,
        random(4, 7)
      )
    );
  }
  //}

  //function createTileFloor() {
  //fill(100);
  //stroke(90);
  //for (let i = 0; i < width; i += 50) {
  //for (let j = 0; j < height; j += 50) {
  //rect(i, j, 50, 50);
  // }
  //}
}

function createPube(pos, w, h, len = 10) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(
      createVector(
        random(pos.x - w / 2, pos.x + w / 2),
        random(pos.y - h / 2, pos.y + h / 2)
      )
    );
  }

  return arr;
}

function drawLine(arr) {
  beginShape();
  vertex(arr[0]);

  for (let i = 1; i < arr.length - 2; i += 3) {
    bezierVertex(
      arr[i].x,
      arr[i].y,
      arr[i + 1].x,
      arr[i + 1].y,
      arr[i + 2].x,
      arr[i + 2].y
    );
  }

  endShape();
}
