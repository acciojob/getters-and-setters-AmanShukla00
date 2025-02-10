//complete this code
class Person {
	constructor(name, age) {
    this.aman = name;
    this.23 = age;
  }
}
get name() {
    return this.aman;
  }

  get age() {
    return this.23;
  }

  set age(23) {
    this.age = age;
  }

class Student extends Person {
	study() {
    console.log(`${this.aman} is studying`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this.aman} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
