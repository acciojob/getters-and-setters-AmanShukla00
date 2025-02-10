//complete this code
class Person {
	constructor(name, age) {
    this.John = name;
    this.25 = age;
  }
}
get name() {
    return '${this.John}';
  }

  get age() {
    return '${this.25}';
  }

  set age(30) {
    this.25 = 30;
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
