# Special Topics

## Shortcuts

    let x = x + 1 can be shortened to x++;

    let x = x + 5 can be shortened to x+=5;

    The same applies to addition subtraction multiplication and division

## Logical operators

    && returns true of both conditions are true

    || returns true if only one of the conditions are true

## sine and cosine

    Sine waves can be created using the sin() functionand plugging in an incrementing value into it. 
    
    sin(  *insert incrementing value here*  )

    The sin() function returns a value between -1 and 1. 

    The sin function requires a value in radians, rather than degrees. To convert a number into radians, use the radains() function

    sin( radians(  *insert incrementing value here*  ) )

    The range of the sine wave can be increase by multiplying the final value by an amount

    sin( radians(  *insert incrementing value here*  ) ) * someValue

    the frequency of a wave function can be increased by multiplying the radians value by some value. 

    sin( radians(  *insert incrementing value here*  ) * frequencyMultiplier ) * someValue

## Modulo

    Modulo refers to the remainder of a number operation. Mudulo is used to loop a value within a given range. 

    10 % 9 is 1, because 9 goes into 10 1 times with a remainder of 1

## Color Mode

    colorMode(RGB);

    r = range[0, 255]

    g = range[0, 255]

    b = range[0, 255]

    a = range[0, 255]
    

    colorMode(HSB);
    
    h = range[0, 360]

    s = range[0, 100]

    b = range[0, 100]

    a = range[0, 1]


## Object Literals

    An object is a variable that can contain extra data within it. 

    Extra data can be assigned when the object is created, or it can be assigned later after the object is created

    an empty object is created with the {} brackets like this: let myObj = {}

    to assign values when declaring an object: myObj = {x:100, y:100}

    to recall the data in the object, use dot notation: myObj.x, myObj.y

    to reassign the data in an object, use the assignment operator: myObj.x = 55;
    myObj.y = 55;

    To create a new property within the object, use the dot notation and give it a value

    myObj.newPropertyName = someValue

## object follows mouse

    To make an object that travels towards the mouse:

    subtract the current mouse position from the previous position, and divide that number by a value greater than one. Example: 

    x = x + (mouseX - x)/10
    y = y + (mouseY - y)/10



