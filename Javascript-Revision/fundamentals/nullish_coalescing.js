// written as ??

let a = null;
let b = 100;

console.log(a ? a : b);
console.log(a ?? b);

a = 1;
console.log(a ? a : b);
console.log(a ?? b);

// THE COMMON USE IS TO PROVIDE A DEFAULT VALUE
let msg;
console.log(msg ?? "Yep Default Value");
msg = "some val";
console.log(msg ?? "Yep Default Value");

//  ||     and       ??
// The difference between them is that || -> returns first truthy value, while ?? -> returns defined value
