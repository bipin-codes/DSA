const strings = ["a", "b", "c", "d"];

console.log(strings[2]); //O(1)

// PUSH
strings.push("newVal"); // O(1)

// POP -> Because in arrays we knows the address
console.log(strings.pop()); // O(1)

// unshift -> Because js will need to shift all the values.
console.log(strings.unshift("S")); // O(n)

//splice -> go to index remove elements and insert new at their place
strings.splice(2, 0, "alien"); // O(n)

console.log(strings);
