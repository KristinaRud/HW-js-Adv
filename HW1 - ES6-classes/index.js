"use strict";
class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (value != "") {
      this._name = value;
    } else {
      console.log("value name is not correct");
    }
  }

  get age() {
    return this._age;
  }
  set age(value) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log("value age is not correct");
    }
  }

  get salary() {
    return this._salary;
  }
  set salary(value) {
    if (value >= 0) {
      this._salary = value;
    } else {
      console.log("value salary is not correct");
    }
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
  }

  get salary() {
    return this._salary * 3;
  }

  get lang() {
    return this._lang;
  }
  set lang(lang) {
    this._lang=lang;
  }
}

const programmer1 = new Programmer('John', 30, 5000, ['JavaScript', 'Python']);
const programmer2 = new Programmer('Kate', 25, 4000, ['Java', 'C++']);
const programmer3 = new Programmer('Mike', 35, 6000, ['Ruby', 'PHP']);

console.log(programmer1, programmer1.salary);
console.log(programmer2, programmer2.salary);
console.log(programmer3, programmer3.salary);
