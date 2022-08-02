//Numbers
//regular numbers in js are stored in 64 bit format known as double precision floating point numbers.
// bigint numbers represent integers of arbitrary length.

//declaring a number
let bil = 1000000000;
let bill = 1_000_000_000;

let eBil = 1e9;
console.log(bil, eBil);

let vSmall = 1e-6;
console.log(vSmall);

//Hex Binary Octal
let v1 = 255;
console.log(0xff, v1.toString(16));
console.log(0o377, v1.toString(8));
console.log(0b11111111, v1.toString(2));
//to call a method directly on a value
console.log((100).toString(2));

//Rounding

console.log(Math.floor(100.1));
console.log(Math.ceil(100.1));
console.log(Math.round(100.1));
console.log((100.0998).toFixed(2));

//fix the inreliable precision issue
console.log(0.2 + 0.1 === 0.3); //false

console.log(+(0.2 + 0.3).toFixed(2) === 0.5);

NaN; //represents an error
Infinity | -Infinity; // infinity

console.log(parseInt("123"));
console.log(parseFloat("123.23"));

console.log(Math.random()); //returns 0 to 1 not including 1
console.log(Math.floor(Math.random() * 100)); //returns 0 to 1 not including 1

console.log(Math.max(1, 2, 3));
console.log(Math.min(1, 2, 3));
