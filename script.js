//complete this code
class Person {
	constructor(aman, 23) {
    this.name = aman;
    this.age = 23;
  }
}
get aman() {
    return this.name;
  }

  get 23() {
    return this.age;
  }

  set 23(age) {
    this.age = age;
  }

class Student extends Person {
	study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
