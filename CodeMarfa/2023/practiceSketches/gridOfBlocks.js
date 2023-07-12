let col = 0;
let row = 0;
let squareSize = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(220);
  fill(random(255), random(255), random(255));
  noStroke();
  
  if (row >= height) {
    row = 0;
  }

  if (col >= width) {
    col = 0;
    row = row + squareSize;
  }

  square(col, row, squareSize);
  col = col + squareSize;
}
