class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}`);
  }
}

class Wizard extends Player {
  constructor() {
    super(name, type);
  }
  play() {}
}
