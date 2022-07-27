//Constructor Functions technically are regular function. There are two conventions though:
//1. They are named with Capital letter first.
//2. They should be executed only with new Ooperator

function User(name) {
  this.name = name;
  this.sayHi = () => {
    console.log(this);
  };
}

new User().sayHi();

const test = () => {
  console.log(this);
};

test();
