# Loading External Media

    Image and sound files can be loaded into p5 sketches and used in dynamic and animated ways.

    we will be using images from here: 
    
<a href="https://drive.google.com/drive/folders/1QZxUbG3Nc3ztUeQ3jtn3CB0dYcEEyfp0?usp=sharing">CLICK HERE for Google Drive file with images</a>
    
    Please download all images.

## Preload

    To load external media, the files will need to be preloaded into the sketch prior to starting the setup and draw loops. This prevents the loading images from being used before they have actually finished loading. 

    The preloading occurs within its own function called preload. To use it, the following needs to be written.

    function preload(){


    }

## Media accessibility

    Media can be made accessible to the program by placing the media files in a directory alongside the sketch file. 

    In the p5js online editor, the small arrow to the left of the code area can expand to reveal the directory structure. Within this structure, an images folder can be created and the media can be uploaded to that folder. Now the media can be accessed by the code running in the sketch file. 

## Structure of a p5.js sketch

    P5.js sketches are commonly structured in a similar way.

    An HTML file contains the data needed to render the content to the web browser as a web page.

    Within the HTML file, a javascript file and a css file are imported into the project.

    The css file is used to structure the visual layout of the web page as a whole

    The javascript file is used to draw the various elements to the canvas within the web page

    The javascript file in our default p5js editor is called sketch.js, and this is the file that contains the p5.js code that draws the artwork to the screen

## draw an image to screen

    Use the image() function to draw the image to the screen

## rotation and translation

    to rotate an image, the rotate() function is used

    the rotate function needs a single value passed in as a parameter. The value is a rotation amount in radians

    to convert radians to degrees, use the radians() function

    the translate() funciton accepts two parameters, the x and y amounts. This moves the origin of the canvas

## isolating movement

    use the push() and pop() funciton to isolate the movement of one or more elements on the screen.

    The push() function followed by pop() function isolates or encapsulates the content within them.

    These two functions are commonly used when translating anrotating images so as not to affect everything else on the canvas

# Custom Functions

    code can be moved into a custom function for reusability. This topic will be covered on Day 5



# Marfa Collage code:

[Marfa Collage](practiceSketches/marfaCollage.js)