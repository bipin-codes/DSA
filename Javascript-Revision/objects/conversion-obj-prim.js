//1-> There is no conversion to boolean-> All objects are true.

if ({}) console.log("Yep");

//2-> The numeric conversion happens when we subtract objects or apply mathematical functions. Ex -> Date can be subtracted

console.log(new Date() - new Date(1993, 08, 30));

//3 -> String conversion happens when we output an object with alery(obj)
