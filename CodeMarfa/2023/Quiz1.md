Which variable declarations will produce an error: 

    let _myName;

    let 2ndXValue;

    let BallObject;

    let zip-code;

    let toggle3;

    let rAdIuSoFcIrClE;

Which variable declaration keyword is incorrect: 

    var

    let

    int

Above, which variable declaration is valid but outdated?

How many parameters are needed to draw a line on the canvas using the line() function? What do the first two parameters do, and what do the last two parameters do?

Which of the following circle function calls will produce an error?: 

    circle( 200, 200, 150, );

    circle(( 200, 200, 150 );

    cirlce( 200, 200, 150 );

Describe the circle that the following code will draw to the canvas:

    fill(0);
    noStroke();
    fill(255);
    stroke(255);
    noStroke()
    circle(200, 200, 100)

What resulting color is the following square?:

    function draw(){
        background(255);

        noStroke();
        fill("blue");

        square(200, 200, 100);

        fill("green");

    }

What is the x position value of the circle?

    let x = 0;
    let y = 0;


    y = y + 250;
    x = x + 20;
    x = x * 2;
    y = 250 - 100;
    x = y;

    circle(x, y, 100);

Describe the action caused by the following mouse click: 


    function mouseClicked(){

        if(mouseX > width/2){

            fill("red");
            noStroke()
            circle(width/2, height/2, 150);

        } else {

            noFill();
            stroke(0);
            strokeWeight(10);
            rectMode(CENTER);
            square(width/2, height/2, 150)

        }

    }

What is the percentage chance that the value of direction will be "left"?

    let direction;

    if( random( 0, 1 ) >= 0.5 ) {
        direction = "left"
    } else {
        direction = "right"
    }

Find the problem with the following code?

    let puppyPic;

    function preload(){

    }

    function setup(){
        createCanvas(800, 800);
    }

    function draw(){
        background(220);
        puppyPic = loadImage("images/cute_puppy.png");

        image(puppyPic, 0, 0); 
    }



