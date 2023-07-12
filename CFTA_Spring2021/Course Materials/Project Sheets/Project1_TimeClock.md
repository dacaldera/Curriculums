# Project 1 - Due Monday March 8th
## Theme: Time Clock


*Design a ‘visual clock’ that displays a novel or unconventional representation of the time. It is not essential that the time of day be literally readable from it, but your clock should appear different at all times of the day, and it should repeat its appearance every 24 hours (or other relevant cycle, if desired). You are encouraged to question basic assumptions about how time is mediated and represented. Ponder things like biological time (chronobiology), ultradian and infradian rhythms, solar and lunar cycles, celestial time and sidereal time, decimal time, metric time, geological time, historical time, psychological time, and subjective time.*

## Create a sketch that functions like a clock that visualizes the passing of time. 
* The clock need not be round like a real clock, but can be abstract.  
* The sketch should use the time functions that are available in Java and Processing.

## Time Functions: 
* second() [reference](https://processing.org/reference/second_.html) 
* minute() [reference](https://processing.org/reference/minute_.html)
* hour() [reference](https://processing.org/reference/hour_.html)
* day() [reference](https://processing.org/reference/day_.html)
* month() [reference](https://processing.org/reference/month_.html)
* year() [reference](https://processing.org/reference/year_.html)

## The Clock should: 
* inlcude movement, color, and or line that changes with each passing second
* use conditional if() statements to do something interesting at a particular time
* and a for() loop
* use any topic that we have covered already in class, such as lines, shapes, curves, fill color, etc.

-----------------

## code ideas for inspiration
* Check out this text based approach to a clock. How might you build off of this idea?
```
void setup() {
  size(500, 100);
}

void draw() {
  background(0);
  textSize(48);

  if (hour() < 5) {
    //between midnight and 5AM
    text("Go to sleep!", 20, height-20);
  } 
  else if (hour() < 12) {
    //between 5AM and noon
    text("Good morning!", 20, height-20);
  } 
  else if (hour() < 16) {
    //between noon and 4PM
    text("Good afternoon!", 20, height-20);
  } 
  else if (hour() < 21) {
    //between 4PM and 9PM
    text("Good evening!", 20, height-20);
  } 
  else {
    //between 9PM and midnight
    text("Good night!", 20, height-20);
  }
}
```
