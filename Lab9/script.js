// Student class declaration
// ==============================

class Student{

    constructor(sid){
        this.studentId = sid;
        this.answers = new Array();
    }

    addAnswer(question){
        this.answers.push(new Question(question.qid, question.answer))
    }
}


//Question Class Declaration
//=============================

class Question{

    constructor(qid, a){
        this.qid = qid;
        this.answer = a;
    }

    checkAnswer(answer){
        return (this.answer == answer);
    }
}


// Quiz Class Declaration
// ===========================

class Quiz{

    constructor(questions, students){
        this.questions = new Map();
        questions.forEach(
            q => this.questions.set(q.qid, q.answer)
        )

        this.students = students;
    }

    scoreStudentBySid(sid){
        let score = 0;
        students.forEach(s => {
            if(s.studentId == sid){
                s.answers.forEach(a => {
                    if(a.checkAnswer(this.questions.get(a.qid))){
                        score++;
                    }
                })
            }
        })
        return score;
    }


    getAverageScore(){
        let sumOfScores = 0;
        students.forEach(s => {
            sumOfScores += this.scoreStudentBySid(s.studentId);
        })
        
        return sumOfScores/students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5

