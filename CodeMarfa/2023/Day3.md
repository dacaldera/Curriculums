# Conditional Statments

    Conditional statements are used to make blocks of code run when certain conditions are met.

## structure of a conditional statement

    if( *condition goes here*  ){

        *block of code goes here*

    } else if( *condition goes here* ){

        *block of code goes here*

    } else {

        *block of code goes here*

    }

- the spacing is not as important but makes it easier to read

- remember to close all open brackets and be mindful of which ones belong where

## boolean values

conditional statements use boolean values to test the condition.

There can only be two outcomes, true or false

Some functions return boolean values

the values 0 and 1 resolve to false and true respectively

## comparisons

Math concepts can result in boolean values

Comparison operators are used to force boolean values in math equations

comparison operators are <, >, <=, >=, ==, !=

## equals vs equal to

These are two different concepts with different uses.

equals is used for assignement

equals to is used for comparison

# practice

Predict the outcome of the following (true or false)

- 23 <= 50
- 75 > 71
- 68 == 48
- 138 != 191
- x < 50 when x = 29
- x >= 99 when x = 87
- x >= 99 when x = 99
- x < y when x = 30 and y = 20
- x = 40
- 35 + 5 < 50
- x \* 2 == 24 when x = 2

# putting it into practice

    if(mouseX > 200){
    circle(200,200,100)
    } else {
    square(200,200,100)
    }

    if(mouseIsPressed){
    circle(mouseX, mouseY, 30)
    } else {
    // leave blank, do nothing
    }

    if(xPos > width){
        xPos = width
    }

    if(xPos < 0) {
        xPos = 0
    }

    if(myName == "Daniel"){
        text("Hello "+myName, 200, 200)
    } else if(myName == "sensei") {
        text("Hello "+myName, 200, 200)
    } else {
        text("your name is not Daniel or sensei", 200, 200)
    }
    
    



