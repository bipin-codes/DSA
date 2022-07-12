// IN JS a function is not a magical language structure but a special kind of value.
"use strict";
function sayHi() {
  alert("Hello World");
}

// There is another syntax for creating a function that is called a 'Function Express'

var sayHi = function () {
  alert("Hello");
};
//  A FUNCTION IS A VALUE IN JAVASCRIPT
// SEMICOLON is added because its part of let say = ... ; statement and not function declaration

// *** DECLARATOIN VS EXPRESSION ***

// FUNCTION DECLARATION
function sum(a, b) {
  return a + b;
}
// FUNCTION EXPRESSION
var sum = function (a, b) {
  return a + b;
};

// FE is created when the execution reachees it and is usable only from that moment.
// Function Declaration can be called earlier than it is defined.
// In strict mode when a function declaration is within a code block it's only visible inside it and not outside.

// ERROR EXAMPLE IN STRICT MODE
{
  function greet() {
    console.log("Something");
  }
}
// greet();//Uncomment this to see error on line 30 about strict mode

// WAY TO SOLVE ABOVE ERROR
let welcome;
{
  welcome = function () {
    console.log("Welcome!");
  };
}
welcome();
