//object are copied by reference whereas primitve are copied by value

let msg = "hello";
let phrase = msg;
phrase = [1, 2, 3];
console.log(msg);
console.log(phrase);

let user = { name: "bipin" };
let admin = user;

admin.name = "super admin";
console.log(user, admin);

let a = {};
let b = a;

console.log(a == b);
console.log(a === b);

let us = {
  name: "John",
  age: 30,
};

let clone = {};
for (let key in user) {
  clone[key] = user[key];
}
console.log("===Using for in===");
clone.name = "pete";
console.log(clone, user); //doesn't change original as we've copied individual values

console.log("===Using Object.assign===");
var clone2 = {};
var test = { age: 20 };
//We can also use Object.assign
Object.assign(clone2, ...[user, test]);
Object.assign(clone2, user, test);
clone2.age = 1000;
console.log(clone2, test);

// for nested object copy use _ lodash library.
