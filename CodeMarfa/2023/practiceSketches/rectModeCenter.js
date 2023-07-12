function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  rectMode(CORNER);
  square(100, 100, 200);

  rectMode(CENTER);
  square(100, 100, 100);
  square(100, 300, 100);
  square(300, 300, 100);
  square(300, 100, 100);
}
