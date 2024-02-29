'use strict';
/*
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // never do this
  //this.calcAge = function () {
  //console.log(2024 - this.birthYear);
  //};
};
// 1. object {} is created
// 2. function is called, this= {}
// 3. link {} to prototype
// 4. function automatically return {}

const Maryam = new Person('Maryam Arshad', 1996);
console.log(Maryam);

const Noman = new Person('Noman Ejaz', 1996);
console.log(Noman);

console.log(Noman instanceof Person);
console.log(Maryam instanceof Person);

/// static method

Person.hey = function () {
  console.log('Hey there!!!!!!!!!');
};

Person.hey();
/////////////////////////////////////////////////////////////

// prototype
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
Maryam.calcAge();
Noman.calcAge();

console.log(Maryam.__proto__);
console.log(Noman.__proto__);

console.log(Maryam.__proto__ === Person.prototype);
console.log(Noman.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Maryam));
console.log(Person.prototype.isPrototypeOf(Noman));
console.log(Person.prototype.isPrototypeOf(Person));

////// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(Maryam, Noman);

console.log(Maryam.hasOwnProperty('birthYear'));
console.log(Noman.hasOwnProperty('firstName'));
console.log(Maryam.hasOwnProperty('species'));
console.log(Noman.hasOwnProperty('species'));
console.log(Maryam.__proto__.__proto__);
console.log(Noman.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);



////////////////////////////////////////////////////////
//// prototypal inheritance on built in objects

const arr = [2, 3, 2, 4, 3, 5, 6, 7, 6, 9, 8, 9, 1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());


/////////////////////////////////////////////////////////////////////

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelrate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelrate();
bmw.brake();
mercedes.accelrate();
mercedes.brake();

////////////////////////////////////////////////////////////

/////   ES6 Classess

//   class expression
const PersonCl = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge = function () {
    console.log(2024 - this.birthYear);
  };

  greet = function () {
    console.log(`hey ${this.firstName}`);
  };
};

const steward = new PersonCl('steward', 1990);
console.log(steward);
steward.calcAge();
steward.greet();

console.log(steward.__proto__ === PersonCl.prototype);


// ES6 classes class declaration

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  ////////////instance method
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.fullName}`);
  }
  get age() {
    return 2024 - this.birthYear;
  }
  get fullName() {
    return this._fullName;
  }
  ///////  static method
  static hey() {
    console.log('Hey there !!!!!!!!');
  }
  /// set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
}

const Edward = new PersonCl2('Edward Cooper', 1995);
console.log(Edward);
Edward.calcAge();
Edward.greet();
console.log(Edward.age);
console.log(Edward._fullName);

console.log(Edward.__proto__ === PersonCl2.prototype);
PersonCl2.hey();
////////////////////////////////////////////////////////////////

//// getters and setters

const account = {
  owner: 'Jesssica Davis',
  movements: [200, 300, 400, 500, 600],

  //////////  getters

  get latest() {
    return this.movements.slice(-1).pop();
  },

  ////////// setters
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 800;
console.log(account.movements);
///////////////////////////////////////////////////////////////////

///// object.create method

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(birthYear) {
    this.birthYear = birthYear;
  },
};
const Steven = Object.create(PersonProto);
console.log(Steven);
Steven.init(1994);
Steven.calcAge();

/////// another method

const PersonProto2 = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
};
const Sara = Object.create(PersonProto2);
Sara.name = 'Sara';
Sara.birthYear = 2001;
Sara.calcAge();


/////////////////////////////////////////////////////

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelrate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('ford', 120);
console.log(ford.speedUS);
ford.accelrate();
ford.accelrate();
ford.brake();
ford.speedUS = 100;
console.log(ford);

///////////////////////////////////////////////////////////////

// inheritance between classes constructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
////// linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My Name is ${this.firstName} and i am studying ${this.course}`);
};

const mike = new Student('Mike', 2001, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////////////////////////////

///// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelrate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// link the prototypes
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelrate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const Tesla = new EV('Tesla', 120, 23);

Tesla.chargeBattery(90);
console.log(Tesla);
Tesla.brake();
Tesla.accelrate();

////////////////////////////////////////////////////////////////////

// inheritance between ES6 classes
class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  ////////////instance method
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.fullName}`);
  }
  get age() {
    return 2024 - this.birthYear;
  }
  get fullName() {
    return this._fullName;
  }
  ///////  static method
  static hey() {
    console.log('Hey there !!!!!!!!');
  }
  /// set a property that already exist
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
}

class StudentCl extends PersonCl2 {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.fullName} and i  am studying ${this.course} `
    );
  }
  calcAge() {
    console.log(
      `My name is ${this.fullName} and i am ${2024 - this.birthYear} year old`
    );
  }
}

const martha = new StudentCl('martha jones', 1996, 'Computer Science');
martha.introduce();
martha.calcAge();
*/
//////////////////////////////////////////////////////////////////////////
//////
//////////// Inheritance between classes object.create

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i am studying ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 1997, 'Computer Science');
jay.introduce();
jay.calcAge();
