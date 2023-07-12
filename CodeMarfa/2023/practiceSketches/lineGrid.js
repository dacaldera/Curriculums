function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  //make the lines thicker
  strokeWeight(10);

  //vertical lines
  line(0, 0, 0, 400);
  line(100, 0, 100, 400);
  line(200, 0, 200, 400);
  line(300, 0, 300, 400);
  line(400, 0, 400, 400);

  //horizontal lines
  line(0, 0, 400, 0);
  line(0, 100, 400, 100);
  line(0, 200, 400, 200);
  line(0, 300, 400, 300);
  line(0, 400, 400, 400);
}
