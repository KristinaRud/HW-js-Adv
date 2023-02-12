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
    this.lang = lang;
  }

  get salary() {
    return this._salary * 3;
  }
}

const em = new Employee("john", 26, 2500);
const pr = new Programmer("max", 30, 3000, "JS");
console.log(pr, pr.salary);
console.log(em, em.salary);
