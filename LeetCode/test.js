class Figure {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

class Circle {
  constructor() {}
}

class Square {
  constructor() {}
}

class Red {
  constructor() {}
}

const a = new Figure('A');
a.getName();
