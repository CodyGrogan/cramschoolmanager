import Teacher from "./Teacher";
import Student from "./Student";
import SchoolClass from "./SchoolClass";
class School {
    constructor(name: string) {
        this.name = name;
        this.address ='';
        this.teacherList = [];        
        this.studentList = [];
        this.classList = [];
    }
    name;
    address: string;
    teacherList: Teacher[];
    studentList: Student[];
    classList: SchoolClass[];

    createClass(name:string ){
        let newclass = new SchoolClass(name, this.name);
        this.classList.push(newclass);
    }

    addStudent(name:string, age:number, parent1: string, parent2: string, phone: string, email:string ){
        let newid:string = name + this.studentList.length
        let newstudent = new Student(name, age, parent1, parent2, phone, email, newid);
        this.studentList.push(newstudent);
    }

}

export default School;