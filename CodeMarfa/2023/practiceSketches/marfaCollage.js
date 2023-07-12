//declare the flower frame variables
let f0, f1, f2, f3, f4;
//declare some other image variables
let tower, sky, land, cactus, daisy, cloud;

//declare and assign some starting values for dynamic elements
let flowerCounter = 0;
let cloudPosX = -200;
let cloudPosY = 100;
let towerToggle = false;
let towerCounter = 0;
let daisyPosX = 0;
let daisyPosY = 0;

function preload() {
  //preload all the flower frames
  f0 = loadImage("images/flower0.png");
  f1 = loadImage("images/flower1.png");
  f2 = loadImage("images/flower2.png");
  f3 = loadImage("images/flower3.png");
  f4 = loadImage("images/flower4.png");

  //preload other images
  tower = loadImage("images/water_tower.png");
  sky = loadImage("images/sky.jpg");
  cactus = loadImage("images/prickly_pear.png");
  land = loadImage("images/land.png");
  daisy = loadImage("images/daisy.png");
  cloud = loadImage("images/cloud.png");
}

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(220);
  
  //draw images to the canvas
  image(sky, 0, 0);
  image(cloud, cloudPosX, cloudPosY);
  image(land, 0, 400);
  image(cactus, 400, 500);
  
  //makes the water tower wiggle
  if (towerToggle == true) {
    push();
    translate(200, 600);
    rotate(radians(-1));
    image(tower, -tower.width / 2, -tower.height);
    pop();
  } else {
    push();
    translate(200, 600);
    rotate(radians(1));
    image(tower, -tower.width / 2, -tower.height);
    pop();
  }
  
  //draw some flowers to the cactus
  drawFlower(448, 570, 30);
  drawFlower(621, 508, 40);
  drawFlower(517, 517, 50);

  //draw the daisy with rotation
  push();
  translate(daisyPosX, daisyPosY);
  rotate(frameCount * 0.05);
  image(daisy, -daisy.width / 2, -daisy.height / 2);
  pop();

  //animate the cloud position
  cloudPosX = cloudPosX + 0.5;
  if (cloudPosX > width + 400) {
    cloudPosX = -400;
    cloudPosY = random(0, height/2)
  }

  //toggle the tower counter
  towerCounter = towerCounter + 0.5;
  if (towerCounter == 10) {
    towerCounter = 0;
    towerToggle = !towerToggle;
  }

  //animate the daisy position
  daisyPosY = daisyPosY+3
  if(daisyPosY>height){
    daisyPosY = -20;
    daisyPosX = random(0, width)
  }
  // console.log(mouseX, mouseY);
}


//custom function for our flower bloom
function drawFlower(x, y, sz) {
  //use if statement to check the frame and draw appropriate image
  if (flowerCounter < 1) {
    image(f0, x, y, sz, sz);
  } else if (flowerCounter < 2) {
    image(f1, x, y, sz, sz);
  } else if (flowerCounter < 3) {
    image(f2, x, y, sz, sz);
  } else if (flowerCounter < 4) {
    image(f3, x, y, sz, sz);
  } else if (flowerCounter < 5) {
    image(f4, x, y, sz, sz);
  } else {
    image(f4, x, y, sz, sz);
  }

  //increment the flower counter and reset when it reaches value
  flowerCounter = flowerCounter + 0.05;
  if (flowerCounter > 10) {
    flowerCounter = 0;
  }
}
