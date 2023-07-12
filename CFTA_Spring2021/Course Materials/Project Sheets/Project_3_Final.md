In a time when art galleries are doing digital, interactive media displays such as projections and video monitors are becoming commonplace. For this project, design and write a proposal for a work of art that is to be displayed using a projector on the gallery wall. The theme of the project is open ended as long as it incorporates the tools and techniques that we have learned in class so far. The visuals can be anything you desire, from geometric and abstract shapes, lines, and colors, to figurative and representational elements such as pictures or video. Your project may incorporate, if desired, a device such as a camera or microphone that captures video or sound to create some sort of interaction. For the project, you are just writing the project idea down as a proposal, not coding the actual thing.

Criteria:
* The orientation of the projection should be vertical, rather than horizontal (like in the picture below).
* Provide a sketch of the project idea using pecil and paper or digital stylus, the sketch should be of what the viewer eventaully sees on the wall
* Write out a paragraph description of the project explaining the idea along with any movement and interaction that it would contain
* Include the pseudo code for the project in the proposal. Be as detailed as possible.
* Submit the project as an HTML webpage that contains all three elements.

The project will be submitted on the last day of class

![Art Gallery](https://integrate-expo.com/wp-content/uploads/2014/06/Sony-installation-1024x5751.jpg)


## HTML Starter Code
```
<!DOCTYPE html>
<html lang="en">

<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/addons/p5.sound.min.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css">
  <meta charset="utf-8" />

</head>

<body>

  <h1>Title of Project</h1>

  <p>description of my project goes here...</p>

  <h2>Pseudo-code</h2>
  <ul>
    <li>pseudo-code item</li>
    <li>pseudo-code item</li>
    <li>pseudo-code item</li>
    <li>pseudo-code item</li>
    <li>pseudo-code item</li>
    <li>pseudo-code item</li>
    <li>pseudo-code item</li>

  </ul>


  <img width="600" src="Shoe.png" />
  <img width="600" src="BallAndPins.png" />
  <img width="600" src="Soap Packaging Ideas.jpg" />





<!--       <script src="sketch.js"></script> -->
</body>

</html>
```

## Starter CSS for the above HTML
```
@import url('https://fonts.googleapis.com/css2?family=Cousine&display=swap');

html, body {
  background-color: #ffffff;
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/000/274/507/small/White_Background_1_RF_RMPL-01.jpg");
  margin: 0;
  padding: 0;
  font-family: 'Cousine', monospace;
}

h1, p, h2, ul {
 text-align: center; 
}

ul {
 list-style-type: none; 
  padding: 0px;
}



img {
  background-color: #fff;
 display: block;
  margin: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
/*   border: 1px solid #000; */
  box-shadow: 10px 5px 5px #ccc;
}

canvas {
  display: block;
}
```
