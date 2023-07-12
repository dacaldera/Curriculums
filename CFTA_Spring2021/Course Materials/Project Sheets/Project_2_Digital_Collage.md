# Project 2
## Digital Collage
## Create a digital collage using Processing and code that we have learned in class. The collage can take any shape or form as long as it is done using code. You may use images created by you or images that you find on the internet. The collage should take into consideration concepts such as scale, rotation, movement, mouse-clicks or key-presses, and the project as a whole should employ code concepts such as counters, toggles, for loops, if/else statements, and others. 

## The idea with this project is to put our coding skills to creative use. Ask yourself: How can I use creative coding to make something that unique and expressive, and individually *me*? 

## Guide: 
#Plan
* Sketch out an idea with pencil and paper. Label out the parts of the sketch, such as colors, rotations, repetitions, movement, etc. The more planning the better

# Drawing Order
* Looking at your sketch, determine the order in which things will be drawn to the screen. Fore xample, the background would be drawn first so maybe the background goes at the top of the list, etc. So yur drawing list might look somethign like this:
>1. Background
>2. grid of texture images
>3. yarn ball that bounces around the screen
>4. rotating white cat in the center
>5. the word "meow" flashing in the center of the screen
* **Rough it in** - Begin with your setup and draw code strucure. Then use comments to place the items from your drawing order list above into your sketch. This will help with visualizing how the code will flow from beginning to en, and within the draw loop. Example:
```
void setup(){
  size(600,600) //what size will my collage be?
} 

void draw(){
  // draw the background first

  //Draw the grid of texture next

  //Yarn ball goes here

  //rotating cat goes here

  //Meow text here

}
```
# Add Code
* Looking at your list, think about what code to add to make the first element work as planned. Use comments to flesh-it-out in more detail if needed. What type of code could make this element work? type in the code and hit the play button to check if it works, tweak the code and hit play again, and keep doing this until it looks the way you want it to look. Lets do the first one:
```
void setup(){
  size(600,600);
} 

void draw(){
  // draw the background first
  background(255,200,200);  //ok, this one was easy
  
  ...
```
# Add Code ...texture
* Once the previous element is working as planned, move onto the next item on the list. Think about what code to add to make the  element work as planned. For the enxt item `//Draw the grid of texture next` we will need a variable to hold the cat image, and we will need a nested for loop to create the image grid:
```
//Draw the grid of texture next
  // need a PImage varaible for the cat picture
  
  //Use a for loop to draw the image grid

```
# Add Code ...texture
* Lets look at this one in more detail. We need a PImage, so lets go ahead and declare it at the top of the sketch `PImage texture;`. then we will need to load the image within the setup function like this ``texture = loadImage("texture.png");` So far our sketch looks like this: 
```
PImage texture;

void setup(){
  size(600,600);
  texture = loadImage("texture.png");
} 

void draw(){
  // draw the background first
  background(255,200,200);  //ok, this one was easy
  
  //Draw the grid of texture next
    // need a PImage varaible for the cat picture - done!
  
    //Use a for loop to draw the image grid

...
```
# Add Code ...texture
* Now lets figure out the for loop part. To make a grid of images, we will need a nested for loop. The variables within the for loops will detrmine the number of rows and columns of the grid, therefore those numbers will need to be tweaked to get it to look any particular way. Press play and tweak the code until it looks the way needed
```
PImage texture;

void setup(){
  size(600,600);
  texture = loadImage("texture.png");
} 

void draw(){
  // draw the background first
  background(255,200,200);  //ok, this one was easy
  
  //Draw the grid of texture next
    // need a PImage varaible for the cat picture - done!
  
    //Use a for loop to draw the image grid
    //the outer for loop repeats each row of cat pictures down the length of the canvas
    for(int j=0; j<height; j+=50){
      //the inner for loop repeats each cat picture across the width of the canvas
      for(int i=0; i<width; i+=50){
        // draw the picture here at position i, and j, with picture size 10 wide and 10 high
        image(texture, i, j, 50, 50);
      
      }
    
    }
...
```

* Try not to jump around between the different elements in the list, but rather get the previous element working before moving onto the next one. Work your way through the list of elements until the sketch is complete. If you run into problems, search the Processing reference page for more information. Also search youtube for tutorials on any particular topic if needed. 


