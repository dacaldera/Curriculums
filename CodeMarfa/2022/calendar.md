# Road Map

## Getting set up

-   Create an account with the p5 editor: <https://editor.p5js.org>
-   Open an additional browser tab with the p5 reference <https://p5js.org/reference/>

## A - Draw shapes to the canvas

-   Understand the canvas size and coordinate system
-   Explore a variety of shapes (and lines, time permitting)
-   Add color, stroke, lineWeight
-   Lab: Explore the line function (if not yet). Recreate a Mondrian painting. Give it color with fill and stroke. Save your file.


<table>

<tr>
<td>Code snippet </td>
<td>Description </td>
<td>Reference</td>
</tr>


<tr>
<td>Coordinate System</td>
<td>The top left corner of the canvas represents the position ( 0 , 0 ). X increases to the right, and Y increases downwards.</td>
<td>

 [link](https://p5js.org/learn/coordinate-system-and-shapes.html)

</td>

</tr>



<tr>
<td>

```javascript
function setup(){
  ...
  //code goes here
  ...
}
```

</td>
<td>This is a p5.js function that runs only once at the very start of the sketch after pressing "play". This is a great place to set up variables and do other preparatory stuff before the draw loop happens.</td>
<td>

[link](https://p5js.org/reference/#/p5/setup)

</td>
</tr>

<tr>
<td>

``` javascript
function draw() {
  ...
  //code goes here
  ...
}
```

</td>
<td>This is a p5.js function that runs continuously (forever) in a loop after the setup function has finished running. The draw loop is a good place to put code that needs repeated execution, like animation elements, etc.</td>
<td>

[link](https://p5js.org/reference/#/p5/draw)

</td>
</tr>

<tr>
<td>

```javascript
createCanvas(width, height);
```

</td>
<td>This function is required and creates the canvas onto which your sketch will draw graphics to. The createCanvas function should reside at the start of the setup(){ ... } function, and should only be called once.</td>
<td>

[link](https://p5js.org/reference/#/p5/createCanvas)

</td>
</tr>

<tr>
<td>

```javascript
fill( r, g, b );
```

</td>
<td>Fills a shape with color. Takes 3 values each between 0 and 255, one for each color (red, green, blue). Any shapes coming after this function in the code will be filled with the specified color. Adding a fourth value will set transparency</td>
<td>

[link](https://p5js.org/reference/#/p5/fill)

</td>
</tr>

<tr>
<td>

```javascript
stroke(r, g, b );
```

</td>
<td>Draws shape edges or lines with color. Takes 3 values each between 0 and 255, one for each color (red, green, blue). Any shape edges or lines coming after this function in the code will be drawn with the specified color. Adding a fourth value will set transparency</td>
<td>

[link](https://p5js.org/reference/#/p5/stroke)

</td>
</tr>
</table>



<table>

<tr><td>Shape helper function</td><td>Description</td><td>Reference</td></tr>


<tr>
<td>

```javascript
circle(x-position, y-position, size)
```

</td>
<td>Draws a circle centered around the coordinates specified.</td>
<td>

[link](https://p5js.org/reference/#/p5/circle)

</td>
</tr>

<tr>
<td>

```javascript
square(x-position, y-position, size)
```

</td>
<td>Draws a square with the top left corner at the coordinates specified, size extending outward from there.</td>
<td>

[link](https://p5js.org/reference/#/p5/square)

</td>
</tr>

<tr>
<td>

```javascript
rect(x-position, y-position, width, height)
```

</td>
<td>Draws a rectangle with top left corder at the coordinate specified, width and height extending outward there.</td>
<td>

[link](https://p5js.org/reference/#/p5/rect)

</td>
</tr>

<tr>
<td>

```javascript
ellipse(x-position, y-position, width, height)
```

</td>
<td>Draws an oval centered around the coordinates specified, size and shape of the oval determines the shape.</td>
<td>

[link](https://p5js.org/reference/#/p5/ellipse)

</td>
</tr>

<tr>
<td>

```javascript
triangle(x1, y1, x2, y2, x3, y3)
```

</td>
<td>Requires three point coordinates (each point is an x and y pair). Draws a triangle with the given points</td>
<td>

[link](https://p5js.org/reference/#/p5/triangle)

</td>
</tr>

<tr>
<td>

```javascript
line(x1, y1, x2, y2)
```

</td>
<td>Draws a line between two point coordinate pairs</td>
<td>

[link](https://p5js.org/reference/#/p5/line)

</td>
</tr>

<tr>
<td>

```javascript
strokeWeight(value)
```

</td>
<td>Changes the thickness of the outline around shapes. The default value is 1.</td>
<td>

[link](https://p5js.org/reference/#/p5/strokeWeight)

</td>
</tr>

</table>





## B - Create a custom function with parameters

-   Declare/define a function
-   Add parameters to the custom function
-   Use relative values rather than constant values
-   Call the function in the sketch (for example: use mouse position to create a stamp of some shapes)
-   Lab: Add parameters to a custome function that draws a robot face. The parameters should determine the x and y position of the robot. Add an additional parameter that determies the szie fo the robot (tip: use multiplication for scaling).


<table>

<tr>
<td>Code snippet </td>
<td>Description </td>
<td>Reference</td>
</tr>


<tr>
<td>

```javascript
function myFunctionName () {
  ...
  //code goes here
  ...
}
```

</td>
<td>This is the standard format for declaring a function. The "function" keyword is required before writing the name of the function which is then followed by open and closed parenthesis and then open and closed squiggly brackets ( {} ). This function does not use any parameters.</td>
  <td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</td>
</tr>


<tr>
<td>

```javascript
function myFunctionName ( parameter1, parameter2, etc ) {
  ...
  //code goes here
  ...
}
```

</td>
<td>This function uses a few parameters, and they are required in order for the function to perform its duties. The parameters pass external data into the function and are used within the body of the function in a variety of ways. Parameters can be integers, or strings, or anything really.</td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

</td>
</tr>

<tr>
<td>

```javascript
mouseX
```

and

```javascript
mouseY
```

</td>
<td>These are variables that hold the current x-position and y-position of the mouse cursor when it is over the canvas. They are built-in variables, meaning that they exist as part of the p5.js library whether you use them or not, they are always available.</td>
<td>

[link](https://p5js.org/reference/#/p5/mouseX)

</td>
</tr>
</table


#
## C Declaring and using variables (and Constants)

-   Add variables to the sketch by declaring at the top using the `let` keyword
-   change the variable using math operators + - \* /
-   Explore strings vs numbers (floats and ints)
-   Console.log to see the value of the variable
-   text() to write it to screen at a given position
-   mouseClicked event
-   Lab: Create a sketch that writes words and shapes to random positions on the canvas. Take it further by using your own colors. Explore the the sketch by changing variables. 

<table>

<tr>
<td>Code snippet </td>
<td>Description </td>
<td>Reference</td>
</tr>

<tr>
<td>

`const`

</td>
<td>The value of a constant can't be changed. A value needs to be assigned to it at the moment it is declared. If you try to change the value of it after declaring, the sketch with throw an error.
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

</td>
</tr>

<tr>
<td>

`let`

</td>
<td>"let" is a keyword used to declare a variable. The declared variable exists only within the block that it exists in, not outside of it. </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

</td>
</tr>

<tr>
<td>

`string`

</td>
<td>A string is generally a string of text. Strings require quotation marks (like this: "my string"). Two strings can be added together into a larger string.</td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

</td>
</tr>

<tr>
<td>

`number`

</td>
<td>Numbers can be of two different types. Whole numbers (known as an "integer"), and numbers with a floating point aka decimal point (known as a "float").</td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

</td>
</tr>

<tr>
<td>

```javascript
console.log( put_variable_here );
```

</td>
<td>Logging things to the console is a way to see the value of variables, generally for debugging purposes etc.</td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/API/console/log)

</td>
</tr>

<tr>
<td>

```javascript
text( value, x-position, y-position)
```


</td>
<td>Draws the value as text onto the canvas at the given x and y coordinates.</td>
<td>

[link](https://p5js.org/reference/#/p5/text)

</td>
</tr>

<tr>
<td>

```javascript
random(min_value, max_value)
```

</td>
<td>Generates a random number between the min and the max. returns the random number as a floating point value (a number with a decimal place)</td>
<td>

[link](https://p5js.org/reference/#/p5/random) </td>
</tr>

</table>


## D - Booleans and conditional statements

-   true/false (1's and 0's)
-   If/else if/else statements, aka conditionals
-   keyPressed events
-   Use the if/else to call a custom function based on mouse position
-   Lab: Use shapes to create an animated landscape that uses conditional statements and booleans to bring it to life. Consider adding a cloud that travels across the sky, and or a sun that lights the sky blue when above the horizon and black when below the horizon... etc. Can you add a tree that grows? 


<tr>
<td></td>
<td></td>
</tr>


<table>

<tr>
<td>Code snippet </td>
<td>Description </td>
<td>Reference</td>
</tr>

<tr>
<td> boolean, example:

```javascript
let myBool = false;
```

</td>
<td>
A boolean is a type of variable that can only be either true or false. The status of the boolean is assigned like this: <code>myBoolean = true;</code> or <code>myBoolean = false;</code>. It is also possible to assign the number <code>1</code> or the number <code>0</code> to the boolean variable. <code>1</code> is the same as <code>true</code> and <code>0</code> is the same as <code>false</code>
</td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) </td>
</tr>

<tr>
<td>

```javascript
function keyPressed() {
  ...
}
```

</td>
<td>This is a special function that listens for when your keyboard keys are pressed. When so, the code inside this function will run exactly once. The specific key that was pressed will be automatically stored in the key (p5.js built-in) variable.</td>
<td>

[link](https://p5js.org/reference/#/p5/keyPressed) </td>
</tr>

<tr>
<td>

```javascript
function mouseClicked() {
  ...
}
```

</td>
<td>This is a special function that listens for when your mouse is clicked. When so, the code inside this function will run exactly once.</td>
<td>

[link](https://p5js.org/reference/#/p5/mouseClicked) </td>
</tr>



<tr>
<td>

```javascript
if( condition ){
  ...
}
```

</td>
<td>If the condition is true, the code inside the brackets is executed and the if statement is exited. Otherwise, the sketch moves on to the next thing.</td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals) </td>
</tr>

<tr>
<td>

```javascript
if( condition ) {
    ...
  } else {
    ...
  }
```

</td>
<td>If the condition is true, the code inside the brackets is executed and the if statement is exited. Otherwise the code inside of the else brackets gets executed and then exited.</td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

</td>
</tr>

<tr>
<td>

```javascript
if( condition1 ){
    ...
  } else if( condition2 ) {
    ...
  } else {
    ...
  }
```

</td>
<td>If the condition is true, the code inside the brackets is executed and the if statement is exited. Otherwise it moves to then ext else if statement and checks it. If the second if statement is true, then the code inside its brackets is executed and the if statement exited. Finally, if neither of the preceding if statements are true, then the code inside the else brackets gets executed and then exited. </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals) </td>
</tr>


<tr>
<td>

```javascript
== (is equal to)
```

</td>
<td>The double equals sign is the same as saying "is equal to" and equates two values. In other words, it returns a true value if the values are the same and returns a false if the values are different. It is easy to confuse this operator with the standard = sign which is an assignment operator instead. </td>
<td></td>

</tr>



<tr>
<td>

```javascript
&& (and)
```

</td>
<td>The two ampersands (&&) can be read as the word "and". This is a logical operator that is used in boolean conditional checks. It is used between two boolean values like this: a && b. If and only if both a and b are true then the operator evaluates to true. </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) </td>
</tr>

<tr>
<td>

```javascript
|| (or)
```

</td>
<td>The two vertical pipe characters (||) can be read as the word "or". This is a logical operator that is used in boolean conditional checks. It is used between two boolean values like this: a || b. If one, or the other, or both a and b are true then the operator evaluates to true. </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) </td>
</tr>

</table>


## E - External media (images)

-   preLoad an image into the sketch
-   Displaying the image, altering size and position
-   Lab: build an animated collage using your own images. Add interactivity to the collage using the keyPressed and mouseClicked functions. 

<table>



<tr>
<td>

```javascript
function preload() {

...

}
```
  </td>
<td>This is a special p5.js built in function the runs once before the setup function and only lets the sketch move forward once it has completed the processes within it. </td>
<td>

[link](https://p5js.org/reference/#/p5/preload)

</td>
</tr>


<tr>
<td>

```javascript
let myImage = loadImage( "imageName.png" )
```

</td>
<td>Loads an image into the variable. This needs to occur only once in your sketch and it should occur within the preload() function. </td>
<td>

[link](https://p5js.org/reference/#/p5/loadImage)

</td>
</tr>

<tr>
<td>

```javascript
myImage.resize(x, y)
```

</td>
<td>resizes the image to the specified dimensions. </td>
<td>

[link](https://p5js.org/reference/#/p5.Image/resize)

</td>
</tr>


<tr>
<td>

```javascript
image(myImage, x, y)
```

</td>
<td>draws the image to the canvas with the top left corner starting at the x and y positions specified.</td>
<td>

[link](https://p5js.org/reference/#/p5/image)

</td>
</tr>


</table>



## F - Arrays

-   Declaring and using Arrays
-   Accessing the elements of the array using square-bracket notation
-   Selecting the last item and a random item from the array
-   Lab: Practice adding and removing values from an array. Create a line that follows the mouse using 10 array elements (do be done manually without loops).

<table>

<tr>
<td>Code snippet </td>
<td>Description </td>
<td>Reference</td>
</tr>

<tr>
<td>

```javascript
let myArray = [];
```

</td>
<td>Basic syntax for declaring an empty array </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</td>
</tr>

<tr>
<td>

```javascript
let myArray = [item, item, item];
```

</td>
<td>Basic syntax for declaring an array with items in it </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

</td>
</tr>


<tr>
<td>

```javascript
myArray.length;
```

</td>
<td>gets the length of the arrray (how many items are in the array)</td>
<td>

[link](n-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

</td>
</tr>



<tr>
<td>

```javascript
myArray.push( value );
```

</td>
<td>Adds the item (value) to the end of the array </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

</td>
</tr>


<tr>
<td>

```javascript
myArray.pop();
```

</td>
<td>removes the last item from the end of the array </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

</td>
</tr>

<tr>
<td>

```javascript
myArray.shift();
```

</td>
<td>removes the first item from the start of the array </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

</td>
</tr>


<tr>
<td>

```javascript
myArray.puunShift( value );
```

</td>
<td>Adds the item (value) to the start of the array </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

</td>
</tr>

<tr>
<td>

```javascript
myArray[0];
myArray[5];
myArray[20];
```

</td>
<td>retrieve the item at the specified index from the array </td>
<td></td>
</tr>

<tr>
<td>

```javascript
myArray[myArray.length - 1];
```

</td>
<td>retrieve the last item from an array of any length. This one adapts to the length of the array </td>
<td></td>
</tr>
</table>


## G - Loops (for loop / while loop)

-   Use a for loop to add a bunch of number values into an array
-   Use a for loop to display each element in an array
-   Use the increment variable to access each array item
    in-class Demo: Use code to recreate Sol Lewitt's wall drawing (Place fify points at random and connect each of the with a straight line.)

<table>

<tr>
<td>

```javascript
for(let i=0;i<10;i++){

  console.log(i)

}
```

</td>
<td>Basic structure for a for loop </td>
<td>

[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

</td>
</tr>


<tr>
<td>

```javascript
for(let i=0;i<10;i++){
  for(let j=0;j<10;j++){
    console.log(i)
    console.log(j)
  }
}
```

</td>
<td>Basic structure for a for a nested loop - One use is for drawing a grid of shapes </td>
<td>

[link](https://happycoding.io/tutorials/p5js/for-loops)

</td>
</tr>
</table>

## H - Work Day

-   Loop and array practice day
-   Using arrays (one for the horizontals and another for the verticals) create a grid of lines like graph paper on your canvas. 
-   Make a grid of shapes
- - Try it without using a for loop (using the draw loop to increment a row variable, for example)
- - Try it using a nested for loop. 

## I - P5 transformation tools
-   Map() function
-   Transformations using p5
-   Push() Pop()
-   Translate() and rotate()
-   Lab: create a graphical composition that incorporates rotating elements

## J - TBA

-   Map() recap
-   Arc()
-   Modulo %
-   Sin and Cos functions

## Algorithms to try - Extra

-   draw random circles within a specific rectangular region on the canvas
-   create a ball that bounces off of the edges of the screen
-   Create stars (or pixels) that fall from the top of the screen. They should reappear at the top when they go off the bottom.
-   Explore recursion - a function that calls itself 
-   Create a random walker that moves around the screen autonomously
-   Create a grid of shapes without using a for loop
-   Create a grid of shapes using a nested For loop

