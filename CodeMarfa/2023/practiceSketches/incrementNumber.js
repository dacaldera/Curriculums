//declare the variable in the global space
let myNumber = 0;

function setup() {
  createCanvas(400, 400);
  //output the variable to the console to preview it
  console.log(myNumber);
}

function draw() {
  background(220);

  //add 1 to the variable
  myNumber = myNumber + 1;

  textSize(32);
  // center the alignemnt
  textAlign(CENTER, CENTER);
  //draw variable ot the canvas
  text(myNumber, 200, 200);
}
