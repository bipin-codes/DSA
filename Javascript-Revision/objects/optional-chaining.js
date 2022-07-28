const user = {};

//console.log(user.address.something); //throws an error (can't read property of undefined)

// console.log(user.address ? user.address.something : undefined);//solves the problem but is too verbose

console.log(user.address?.something);
//stops the expression if value before is undefined
//the value before  ? must be defined

//also works with function
let userAdmin = {
  admin() {},
};
let userGuest = {};
userAdmin.admin?.();
userAdmin.adminGuest?.();

//also works with objects

let value = null;
let val = { check: "some" };
console.log(value?.["check"]);
console.log(val?.["check"]);
