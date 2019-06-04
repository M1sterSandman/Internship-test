
class Knowledge {
    constructor(){

    }
}

class Student extends Knowledge{
    constructor() {
        super();

    }
    setKnowledge(){

    }
}

class University extends Student{
    constructor(){
        super();

    }
    setStudent(){

    }
    addStudent(){

    }
}

class Internship extends Student{
    constructor(){
        super();
    }
    setStudent(){

    }
    getStudent(){

    }
}

let university1 = new University('CHSBC');

university1.addStudent(new Student("Andrew Kostenko"));
university1.addStudent(new Student("Julia Veselkina"));
university1.addStudent(new Student("Maria Perechrest"));

let internship = new Internship('Interlink');

console.log('List of internship\'s students:');
console.log(internship.getStudent());
