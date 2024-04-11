// QUESTION 1
// Using Object Literal
//==============================================================

const student = {
    firstName: String,
    lastName: String,
    grades: new Array(), 

    insertGrade: function(newGrade){
        this.grades.push(newGrade);
    },

    computeAverageGrade: function(){
        if(this.grades.length < 2){
            return this.grades;
        }

        let sum = 0;
        this.grades.forEach(n => sum+= n);

        return (sum / this.grades.length);
    }
}

let student1 = Object.create(student);

student1.firstName = "James";
student1.lastName = "Brown";

student1.insertGrade(95);
student1.insertGrade(80);
student1.insertGrade(89);
student1.insertGrade(87);

console.log(student1.firstName, student1.lastName, "Average Grade: " + student1.computeAverageGrade());


// QUESTION 2
// USING CONSTRUCTOR FUNCTION
//=================================================================

// function Student(fName, lName){
//     this.firstName = fName;
//     this.lastName = lName;
//     this.grades = [];

// }

// Student.prototype.insertGrade = function (newGrade) {
//     this.grades.push(newGrade);
// }

// Student.prototype.computeAverage = function(){

//     if(this.grades.length < 2){
//         return this.grades;
//     }
//     let sum = 0;

//     this.grades.forEach(n => sum+= n);

//     return (sum / this.grades.length);
// }

// let student1 = new Student("Chima", "Okoli");
// student1.insertGrade(95);
// student1.insertGrade(89);
// student1.insertGrade(90);
// student1.insertGrade(92);
// student1.insertGrade(70);

// console.log(student1.firstName, student1.lastName, "Average Grade: " + student1.computeAverage());



// // QUESTION 3
//==========================================================================

// Array.prototype.mySort = function(){
//     return this.sort();
// }

// var array = [5, 4, 9, 2, 5, 1];

// console.log(array.mySort());


//QUESTION 4
//===================================================================

// function Animal(n, s){
//     this.name = n;
//     this.s = s;
// }

// Animal.prototype.run = function(speed){
//     return ++speed;
// }

// Animal.prototype.compareBySpeed = function(a1, a2){
//     if(a1 > a2) return 1;
//     else if (a1 < a2) return -1;
//     else return 0;
// }


// function Rabbit(n, s){
//     Animal.call(this, n, s);

// }


// Rabbit.prototype.hide = function(){
//     console.log(this.name, "hides");
// }


// Object.setPrototypeOf(Animal, Rabbit);
// Object.setPrototypeOf(Animal.prototype, Rabbit.prototype);


// let rabbit1 = new Rabbit("Bugs Bunny", 35);
// let rabbit2 = new Rabbit("Clyde Rabbit", 60)

// rabbit1.hide()