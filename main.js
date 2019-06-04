
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
    calculateGPA(){ //GPA - grade point average
        let sum=0;

        for(let i=0; i<=this.studentList.length; i++){
            sum+=i;
        }
        return sum / this.studentList.length;

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
        let gpa = university1.calculateGPA();
        university1.studentList.forEach((student)=>{
            if(student.level>gpa){
                this.suitableStudent.push(student.studentName);

            }
        });

        return this.suitableStudent;
    }
}

let university1 = new University('CHSBC');

university1.addStudent(new Student('Sasha Onoshko', '5'));
university1.addStudent(new Student("Andrew Kostenko", '4'));
university1.addStudent(new Student("Julia Veselkina",'3'));
university1.addStudent(new Student("Maria Perechrest", '2'));


let internship = new Internship('Interlink');


console.log('List of internship\'s students:');
console.log(internship.getStudent());
