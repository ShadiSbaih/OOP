function Student(name, age, grade) {
    this.name = name;
    this.age = age;


    this.setGrade(grade);
}

// Define methods on the prototype
Student.prototype.getGrade = function () {
    return this.studentGrade;
};

Student.prototype.setGrade = function (newGrade) {
    if (newGrade === 'A' || newGrade === 'F') {
        this.studentGrade = newGrade;
        return;
    } else {
        throw new Error("Invalid Grade");
    }
};

Student.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm in grade ${this.studentGrade}.`);
};

const student1 = new Student("Ali", 20, "A");
student1.introduce();

const student2 = new Student("Sara", 24, "F");
student2.introduce();

try {
    const student3 = new Student("John", 21, "C");
} catch (error) {
    console.error(error.message); // Output: Invalid Grade
}