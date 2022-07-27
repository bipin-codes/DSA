let user = {
  name: "john",
  age: 30,
  sayHi: () => {
    console.log(this);
  },
};

user.sayHi(); //this-> prints the whole object

function something() {
  console.log(this); //this-> prints global object
}
something();

const testArrow = () => {
  console.log(this); //prints empty object
};

testArrow();
