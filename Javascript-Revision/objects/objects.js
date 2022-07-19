//There are eight data types in js, out of which eight are primitive because they contain only a single thing.

let user = new Object(); //Object constructor Syntax
let userLit = {}; //Object literal syntax

let usr = {
  name: "bipin",
  age: 30,
};

delete usr.name; //to delete

usr["something weird of a key"] = 100; //multi-word key

let dynamicKey = "set at runtime";
usr[dynamicKey] = -100;

console.log(usr);

let computedProp = {
  [dynamicKey]: "computed prop val",
};

console.log(computedProp);

// PROPERTY VALUE SHORTHAND
function makeUser(name, age) {
  return { name, age }; //return {name: name, age: age}
}

let us = makeUser("John", 30);
console.log(us);

// there are no limitation of property names

us.__proto__ = 5;
console.log(us.__proto__); //setting __proto__ to a non object value is ignored

//'in' keyword
console.log("name" in us); //true
console.log("__proto__" in us); //true
console.log("_proto__" in us); //false

//to loop over all the keys
for (let key in us) {
  console.log(key);
}

//properties in the objects are ordered in special fashion, integers properties are sorted other appear in creation order.

let testObj = {
  c: "e",
  x: "z",
  10: 100,
  1: 20,
  40: 0,
  1000: 100,
  a: "c",
  d: "e",
};
console.log(testObj); //1, 10, 40, 1000, c, x, a, d
//to overcome this we can just add a character in front of number to make it treatable as string.
