//complete this code
class Person {
	constructor(name, age) {
    this.John = name;
    this.25 = age;
  }
}
console.log(Person);
get name() {
    return '${this.John}';
  }
console.log(name);
  get age() {
    return '${this.25}';
  }
console.log(age);
  set age(30) {
    this.25 = 30;
  }
console.log(age(30));
class Student extends Person {
	study() {
    console.log(`${this.John} is studying`);
  }
}
console.log(Study);

class Teacher extends Person {
	teach() {
    console.log(`${this.John} is teaching`);
  }
}
console.log(teach);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
