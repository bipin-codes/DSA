// IN JS Hashtables are objects
// Keys in hashtables are used as indexes using a Hash Functions

// HASH FUNCTION ->

// a function that generates a fixed length string out of any input ex algo MD5, SHA1
// hash function are one way solveable only
// Doesn't hash slow down the process of adding values to dictionary->

// HASH COLLISION
// when two values product same hash then values are stored on same hash value using Linked Link (called separate chaining)
// there is lot of ways to solve hash collision

// insert O(1)
// lookup O(1) or O(n) in case of hash collision
// delete O(1)
// search O(1)

let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("aaaah!");
  },
};

// Map
// Map vs Object -> Map can save any datatype as a Key. Also it maintains insertion order.
const map = new Map();

// Set
// Only store keys
const set = new Set();
