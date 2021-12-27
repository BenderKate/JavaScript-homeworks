function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student("Ivan", "male", 18);
const student2 = new Student("Anna", "female", 21);
const student3 = new Student("Petr", "male", 17);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
if (this.marks === undefined){ 
   this.marks = [];
   this.marks.push(mark);
   } else {
   this.marks.push(mark);
   }
}

Student.prototype.addMarks = function (...addSomeMarks) {
if (this.marks === undefined){
   this.marks = [];
   }

addSomeMarks.forEach(someMarks => this.marks.push(someMarks));
}

Student.prototype.getAverage = function () {
  let sum = 0;
  let length = this.marks.length;
  for (let i = 0; i < length; i++) {
      sum += this.marks[i];
  }
  return sum / length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}






