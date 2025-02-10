//complete this code
class Person {
	constructor(name, age) {
    this.John = name;
    this.23 = age;
  }
}
get name() {
    return this.John;
  }

  get age() {
    return this.30;
  }

  set age(23) {
    this.age = age;
  }

class Student extends Person {
	study() {
    console.log(`${this.John} is studying`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this.John} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
