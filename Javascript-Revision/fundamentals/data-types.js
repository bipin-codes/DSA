// JAVASCRIPT IS dynamically typed language

// NUMBER
let n = 123;
n = 12.345;

// ***INFINITIY, -INFINITY, NaN****
console.log(1 / 0); //results in infinity
console.log(Infinity); //Infinity is greater than any number

NaN; //represents computational error, it is a result of an incorrect
//or undefined mathematical operation
//NaN is sticky means, any operation on NaN yields NaN

// ****BigInt***
const val = 123n; //'n' at the end means number will be created as BigInt, not supported in IE

// *** STRING ***
let str = "Hello";
let str2 = "Using Single Quote";
let phrase = `Can embed values ${10 / 2}`;

// **BOOL**
console.log(true, false);

// *** NULL ***
// special value doesn't belong to any of the types
// null -> represents nothin | value unknown | empty
let age = null;

// ** undefined **
//undefined -> value is undefined

// ****Objects n Symbols ***
// object type is special, as it can store multiple or complex values
// symbol are used to create unique indentifiers for objects.

// *** typeof ***
