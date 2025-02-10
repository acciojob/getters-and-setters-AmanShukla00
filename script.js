//complete this code
class Person {
	constructor(name, age) {
    this.n = name;
    this.a = age;
  }
}
get name() {
    return this.n;
  }

  get age() {
    return this.a;
  }

  set age(age) {
    this.a = age;
  }

class Student extends Person {
	study() {
    console.log(`${this.n} studying`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this.n} teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
