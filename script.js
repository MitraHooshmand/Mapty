"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

///////////////////////

const Person = function (name, year) {
  this.name = name;
  this.year = year;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.year);
};

const ali = new Person("ali", 22);
const dara = new Person("dara", 12);
const hasan = "hasan";
// console.log(ali,dara);
console.log(ali.__proto__);
console.log(Person.prototype);
console.log(ali instanceof Person);
console.log(Person.prototype.isPrototypeOf(ali));
console.log(Person.prototype.constructor);
console.log(ali.__proto__.__proto__);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going with the speeed of ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going with the speeed of ${this.speed}`);
};

const BMW = new Car("BMW", 120);
const BNZ = new Car("BNZ", 95);

BMW.accelerate();
BMW.accelerate();
BMW.brake();
BNZ.accelerate();
BNZ.brake();
BNZ.brake();
BNZ.accelerate();

//////////////////////////////////////////////

class ExamCl {
  constructor(course, unit) {
    this.course = course;
    this.unit = unit;
  }
  showInfo() {
    console.log(`${this.course} has ${this.unit} units`);
  }

  get greet() {
    console.log("hi");
  }

  set greet(st) {
    console.log(`hi dear ${st}`);
  }
}

const myMath = new ExamCl("math", 3);
myMath.showInfo();
myMath.greet = "ali";
myMath.greet;
/////////////////////////////////////////////

const PersonObj = {
  calcAge() {
    console.log(2037 - this.age);
  },
};

const david = Object.create(PersonObj);
david.name = "david";
david.age = 20;
console.log(david);
david.calcAge();
////////////////////////////////// #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going with the speeed of ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going with the speeed of ${this.speed}`);
  }
  get speedUS() {
    console.log(this.speed / 1.6);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(this.speed);
  }
}

const ford = new CarCl("ford", 120);
ford.accelerate();
ford.brake();
ford.brake();
ford.speedUS;
ford.accelerate();
ford.speedUS = 5;
ford.accelerate();
////////////////////////////////////////////

const Student = function (name, year, course) {
  Person.call(this, name, year);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
const alex = new Student("alex", 7, "sience");
console.log(alex);
alex.calcAge();
console.log(alex.__proto__);
console.log(alex.__proto__.__proto__);
console.dir(Student.prototype.constructor);
console.log(alex instanceof Person);
console.log(alex instanceof Student);
console.log(alex instanceof Object);
///////////////////////////////////////////////
