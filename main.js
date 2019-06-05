class Knowledge {
    constructor(level){
        this.level = level;
    }
}

class Student extends Knowledge{
    constructor(studentName, level) {
        super(level);
        this.studentName = studentName;

    }
    setKnowledge(level){

    }
}

class University extends Student{
    constructor(name){
        super(name);
        this.studentList=[];

    }
    setStudent(){

    }
    addStudent(studentName){
        this.studentList.push(studentName);
    }
}

class Internship extends Student{
    constructor(name){
        super();
        this.name=name;
        this.suitableStudent=[];
    }
    setStudent(){

    }
    getStudent(){
        let gpa = calculateGPA();
        commonStudentsList.forEach((student)=>{
            if(student.level>gpa){
                this.suitableStudent.push(student.studentName);
            }
        });
        return this.suitableStudent;
    }
}

let commonStudentsArrs = [];
let commonStudentsList = [];

let university1 = new University('CHSBC');
university1.addStudent(new Student('Sasha Onoshko', '5'));
university1.addStudent(new Student("Julia Veselkina",'2'));

let university2 = new University('CHNU');
university2.addStudent(new Student("Andrew Kostenko", '4'));
university2.addStudent(new Student("Maria Perechrest", '2'));

let university3 = new University('CHDTU');
university3.addStudent(new Student("Maria Petrenko", '3'));
university3.addStudent(new Student("Nazar Ivanov", '4'));

commonStudentsArrs.push(university1.studentList, university2.studentList, university3.studentList);
commonStudentsArrs.forEach((element)=>{
    element.forEach((elem)=>{
        commonStudentsList.push(elem);
    });
});

function calculateGPA(){ //GPA - grade point average
    let sum=0;
    commonStudentsList.forEach((element)=>{
        sum += parseInt(element.level);
    });
    return sum / commonStudentsList.length;
}

let internship = new Internship('Interlink');

console.log(`List of ${internship.name} students: ${internship.getStudent()}.`);
