//symbols can be used as object keys along with strings
//it represents a unique identifier

let id = Symbol();

//a symbol can have description with them(symbol name) , mainly for description purpose

let id2 = Symbol("id");
let id3 = Symbol("id");
console.log(id, id2);

console.log(id2 === id3); //false
//symbols don't get converted to strings

const user = { fName: "something", lName: "gosain" };
const id4 = Symbol();
user["id4"] = 123;
user[id4] = 345;
console.log(user["id4"]);
console.log(user[id4]);

//symbols are ignored by for-in | Object.keys()
for (const val in user) {
  console.log(val);
}
console.log(Object.keys(user));

//Object.assign copies symbols
const toCopyInto = {};
Object.assign(toCopyInto, user);
console.log(toCopyInto);

//Symbol.for('name_of_symbol')
//creates same symbol by searching global registery

let s1 = Symbol.for("s");
let s2 = Symbol.for("s");
console.log(s2 === s1);

//Symbol.keyFor()
// search by symbol not symbol name

let s2Name = Symbol.keyFor(s2);
console.log(s2Name);
