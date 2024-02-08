# Variables

    Variables are a core elment of a programming language. They are used to store and modify values within a program. At its core, a variable is simply a word, name, that labels the location of data that is stored in memory.

- variables are not part of the p5 library, rather they are part of the larger programming language javascript. The javascript reference sheet contains all of the info about variables and how to use them, including highly advanced concepts.

  - [Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

## Declaring a variable

A varible can be declared by using a declarative keyword followed by the name of the variable. Examples of declarative keywords are CONST, let, and var (var is no longer used). We will use let for all variable declarations

The location of where the variable is declared matters because a variable has scope. Scope refers to the availability of a variable outside of the codeblock in which it was declared. A variable declared inside of a small function is only available within that small function, while a variable declared in the global space is available to all functions.

varialbe names must begin with an underscore or a letter (not a number or any other symbol). Use lowercase for the first word in the variable name and capitalize any other word in the variable name, known as camelCase. itLooksLikeThis

It is a good idea to give variables descriptive names to make things easier to read.

## types of variables

There are many different types of data that a variable can contain. Examples of what type of data the variable can be are an integer, a decimal number (aka floating point number), a string (simply alphanumeric letters), and a boolean (a true or false value). Variables can also store more complex things like arrays and objects (a more advanced topic).

## assigning a variable

A varialbe can be assigned a value when it is declared, or later in the program. To assign a value to a variable, an equal sign is used.

Example of a variable assignment during declaration: let x = 0;

Example of variable assignemnt after declaration: (first declare the variable empty) let x; (then later in the program assign the value) x = 0;

## modifying variables

The content contained in a vairable is changeable and modifying the value of variables is one of the most common tasks in programming

To modify a variable, use the equals sign (=) to assign or reassign the value. Examples:

    let x = 0; //declare a variable named x with the value of zero

    x = 5 //reassign the value of the variable to five

    x = x + 1 // reassign the value of x to a new value using math, in this case the new value is 6 (because 5 + 1)

Math operations are used to change the value of variables. +, -, *, and / are used to alter the value of numbers.

There are a few shorthands for math operations. x++ (varaibleName++) adds 1 to the variable value. x-- subtracts 1.

Math operations (nome of them) may only work on variables that contain numbers, as opposed to variable sthat contain letters.

## Location of variable declaration

Where the variable is declared matters, sue to variable scope.

If the variable is declared at the top of the page before the setup function, then the variable is available to the entire program.

If the variable is declared inside the setup function, then the variable is only available inside the setup function and not inside the draw funtion or anywhere else outside of the setup funciton for that matter.

If a variable is declared inside the draw function, it will be rewritten on every frame (because the draw function runs in a looping fashion)

## numbers vs words

A word or string contains alphanumeric data within quotation marks. "hello" is a string. "hello my name is" is a string.

strings can be stored in variables using quotation marks when making the assignment. myName = "David Bowie"; (the variable myName contains the string of data "David Bowie")

strings can be added to with the + operator. myName = myName + " Smith"; (adding the word Smith to the end of the string results in "David Bowie Smith")

## Outputting data

The value of a variabel can be known by using the console.log() function. The variable in question is passed into the function and the result is visible in the console area of the program. console.log(myName) (this will print the value "David Bowie Smith" to the console)

console.log helps to know the value of a variable at any given moment in a running program. It helps debug the script.

print() can also be used in p5 instead of console.log

try outputting the value of a random() function using console.log( random(0, 100) )

# Practice

- decalre a variable that contains your first name

- add your last name to the variable using the + operator

- add "is my name" to the variable using the + operator.

- log the value of the variable to the console

- display the value of the variable to the canvas using the text() function (view how it works in the p5 reference)

---

- declare an empty variable to hold a number

- assign the number 0 to the variable later in the program.

- add 1 to the number thereby reassigning the value to whatever the number is plus 1

- display the number to the console

- output the number to the canvas using the text() function

# Mouse interaction

## mouse position

The mouseX and the mouseY variables contain the position of the mouse over the canvas

## Mouse click interaction

function mouseClicked() is used to perform an action wehn the mouse is clicked.

function mousePressed() is used to perform an action when the mouse is pressed

function mouseReleased() is used to perform an action when the mouse is released

- falling stars

- growing bubbles

